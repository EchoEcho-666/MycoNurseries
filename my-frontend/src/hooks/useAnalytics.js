import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const SESSION_KEY = 'myco_session_id';
const EVENTS_KEY = 'myco_analytics_events';
const BATCH_SIZE = 10;
const FLUSH_INTERVAL = 15000; // 15 seconds

function generateSessionId() {
  return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function getSession() {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

function getDeviceInfo() {
  const ua = navigator.userAgent;
  let device = 'desktop';
  if (/Mobi|Android/i.test(ua)) device = 'mobile';
  else if (/Tablet|iPad/i.test(ua)) device = 'tablet';

  return {
    device,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    language: navigator.language,
    referrer: document.referrer || 'direct',
    userAgent: ua.substring(0, 200),
  };
}

class AnalyticsEngine {
  constructor() {
    this.queue = [];
    this.sessionId = getSession();
    this.deviceInfo = getDeviceInfo();
    this.flushTimer = null;
    this.startFlushTimer();
  }

  track(eventType, data = {}) {
    const event = {
      sessionId: this.sessionId,
      eventType,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      path: window.location.hash.replace('#', '') || '/',
      ...this.deviceInfo,
      ...data,
    };

    this.queue.push(event);
    this.saveToLocal();

    if (this.queue.length >= BATCH_SIZE) {
      this.flush();
    }
  }

  saveToLocal() {
    try {
      const existing = JSON.parse(localStorage.getItem(EVENTS_KEY) || '[]');
      localStorage.setItem(EVENTS_KEY, JSON.stringify([...existing, ...this.queue]));
    } catch (e) {
      // Storage full, flush
      this.flush();
    }
  }

  startFlushTimer() {
    this.flushTimer = setInterval(() => this.flush(), FLUSH_INTERVAL);
  }

  async flush() {
    const events = JSON.parse(localStorage.getItem(EVENTS_KEY) || '[]');
    if (events.length === 0 && this.queue.length === 0) return;

    const allEvents = [...events, ...this.queue];
    this.queue = [];

    try {
      const apiBase = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiBase}/api/analytics/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ events: allEvents }),
      });

      if (response.ok) {
        localStorage.removeItem(EVENTS_KEY);
      }
    } catch (err) {
      // Keep events in localStorage for retry; trim if too many
      const trimmed = allEvents.slice(-200);
      localStorage.setItem(EVENTS_KEY, JSON.stringify(trimmed));
    }
  }

  destroy() {
    if (this.flushTimer) clearInterval(this.flushTimer);
    this.flush();
  }
}

// Singleton
let analyticsInstance = null;
function getAnalytics() {
  if (!analyticsInstance) {
    analyticsInstance = new AnalyticsEngine();
  }
  return analyticsInstance;
}

export function useAnalytics() {
  const location = useLocation();
  const scrollMaxRef = useRef(0);
  const pageStartRef = useRef(Date.now());
  const prevPathRef = useRef(null);
  const analytics = getAnalytics();

  // Track page views
  useEffect(() => {
    const currentPath = location.pathname;

    // Record time-on-page for previous page
    if (prevPathRef.current && prevPathRef.current !== currentPath) {
      const duration = Math.round((Date.now() - pageStartRef.current) / 1000);
      analytics.track('page_exit', {
        exitPath: prevPathRef.current,
        duration,
        maxScrollDepth: scrollMaxRef.current,
      });
    }

    // New page view
    analytics.track('page_view', { page: currentPath });
    prevPathRef.current = currentPath;
    pageStartRef.current = Date.now();
    scrollMaxRef.current = 0;
  }, [location.pathname, analytics]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      if (scrollPercent > scrollMaxRef.current) {
        scrollMaxRef.current = scrollPercent;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track clicks
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a, button, [role="button"], [data-track]');
      if (!target) return;

      const trackData = {
        elementTag: target.tagName,
        elementText: (target.textContent || '').substring(0, 100).trim(),
        elementId: target.id || undefined,
        elementHref: target.href || undefined,
        className: (target.className || '').toString().substring(0, 100),
      };

      if (target.dataset.track) {
        trackData.trackLabel = target.dataset.track;
      }

      analytics.track('click', trackData);
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [analytics]);

  // Cleanup on unmount
  useEffect(() => {
    const handleBeforeUnload = () => {
      const duration = Math.round((Date.now() - pageStartRef.current) / 1000);
      analytics.track('session_end', {
        duration,
        maxScrollDepth: scrollMaxRef.current,
      });
      analytics.flush();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [analytics]);

  const trackCustomEvent = useCallback((eventName, data = {}) => {
    analytics.track(eventName, data);
  }, [analytics]);

  return { trackCustomEvent };
}

export default useAnalytics;
