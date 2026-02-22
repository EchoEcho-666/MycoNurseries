const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const EVENTS_FILE = path.join(DATA_DIR, 'analytics_events.json');
const CONTENT_FILE = path.join(DATA_DIR, 'content.json');

// Ensure data directory and files exist
function ensureDataFiles() {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(EVENTS_FILE)) {
        fs.writeFileSync(EVENTS_FILE, JSON.stringify([], null, 2));
    }
    if (!fs.existsSync(CONTENT_FILE)) {
        fs.writeFileSync(CONTENT_FILE, JSON.stringify({}, null, 2));
    }
}

ensureDataFiles();

function readEvents() {
    try {
        const raw = fs.readFileSync(EVENTS_FILE, 'utf8');
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function writeEvents(events) {
    // Keep events from last 90 days max, trim to 50k events 
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 90);
    const filtered = events
        .filter(e => new Date(e.timestamp) > cutoff)
        .slice(-50000);
    fs.writeFileSync(EVENTS_FILE, JSON.stringify(filtered, null, 2));
}

// POST /api/analytics/events - receive event batches
router.post('/events', (req, res) => {
    try {
        const { events } = req.body;
        if (!events || !Array.isArray(events)) {
            return res.status(400).json({ error: 'Events array required' });
        }

        const existing = readEvents();
        const withId = events.map((e, i) => ({
            ...e,
            id: `ev_${Date.now()}_${i}_${Math.random().toString(36).substr(2, 6)}`,
            receivedAt: new Date().toISOString(),
        }));

        writeEvents([...existing, ...withId]);
        res.json({ received: withId.length, total: existing.length + withId.length });
    } catch (err) {
        console.error('Analytics ingest error:', err);
        res.status(500).json({ error: 'Failed to store events' });
    }
});

// GET /api/analytics/dashboard - aggregated data for dashboard
router.get('/dashboard', (req, res) => {
    try {
        const events = readEvents();
        const { period = '7d' } = req.query;

        // Parse period
        let days = 7;
        if (period === '24h') days = 1;
        else if (period === '7d') days = 7;
        else if (period === '30d') days = 30;
        else if (period === '90d') days = 90;

        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - days);
        const filtered = events.filter(e => new Date(e.timestamp) > cutoff);

        // Page views
        const pageViews = filtered.filter(e => e.eventType === 'page_view');
        const uniqueSessions = new Set(filtered.map(e => e.sessionId));

        // Page view counts by page
        const pageViewCounts = {};
        pageViews.forEach(e => {
            const p = e.page || e.path || 'unknown';
            pageViewCounts[p] = (pageViewCounts[p] || 0) + 1;
        });

        // Click counts by element
        const clicks = filtered.filter(e => e.eventType === 'click');
        const clickCounts = {};
        clicks.forEach(e => {
            const label = e.trackLabel || e.elementText || e.elementId || 'unknown';
            clickCounts[label] = (clickCounts[label] || 0) + 1;
        });

        // Device breakdown
        const deviceCounts = {};
        filtered.forEach(e => {
            if (e.device) {
                deviceCounts[e.device] = (deviceCounts[e.device] || 0) + 1;
            }
        });

        // Time series — group by day (use localDate from client to respect user's timezone)
        const dailyData = {};
        pageViews.forEach(e => {
            const day = e.localDate || e.timestamp.split('T')[0];
            if (!dailyData[day]) {
                dailyData[day] = { views: 0, sessions: new Set() };
            }
            dailyData[day].views++;
            if (e.sessionId) dailyData[day].sessions.add(e.sessionId);
        });

        const timeSeries = Object.keys(dailyData)
            .sort()
            .map(day => ({
                date: day,
                views: dailyData[day].views,
                uniqueVisitors: dailyData[day].sessions.size,
            }));

        // Session durations from page_exit events
        const exitEvents = filtered.filter(e => e.eventType === 'page_exit' || e.eventType === 'session_end');
        const avgDuration = exitEvents.length > 0
            ? Math.round(exitEvents.reduce((sum, e) => sum + (e.duration || 0), 0) / exitEvents.length)
            : 0;

        // Average scroll depth
        const scrollEvents = exitEvents.filter(e => e.maxScrollDepth !== undefined);
        const avgScrollDepth = scrollEvents.length > 0
            ? Math.round(scrollEvents.reduce((sum, e) => sum + (e.maxScrollDepth || 0), 0) / scrollEvents.length)
            : 0;

        // Referrer breakdown
        const referrerCounts = {};
        filtered.forEach(e => {
            if (e.referrer) {
                try {
                    const ref = e.referrer === 'direct' ? 'Direct' : new URL(e.referrer).hostname;
                    referrerCounts[ref] = (referrerCounts[ref] || 0) + 1;
                } catch {
                    referrerCounts[e.referrer] = (referrerCounts[e.referrer] || 0) + 1;
                }
            }
        });

        // Top 10 most clicked elements
        const topClicks = Object.entries(clickCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([label, count]) => ({ label, count }));

        // Top pages
        const topPages = Object.entries(pageViewCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([page, count]) => ({ page, count }));

        // Bounce rate (sessions with only 1 page view)
        const sessionPages = {};
        pageViews.forEach(e => {
            if (!sessionPages[e.sessionId]) sessionPages[e.sessionId] = 0;
            sessionPages[e.sessionId]++;
        });
        const totalSessions = Object.keys(sessionPages).length;
        const bouncedSessions = Object.values(sessionPages).filter(c => c <= 1).length;
        const bounceRate = totalSessions > 0 ? Math.round((bouncedSessions / totalSessions) * 100) : 0;

        res.json({
            period,
            summary: {
                totalPageViews: pageViews.length,
                uniqueVisitors: uniqueSessions.size,
                totalClicks: clicks.length,
                avgSessionDuration: avgDuration,
                avgScrollDepth,
                bounceRate,
                totalEvents: filtered.length,
            },
            topPages,
            topClicks,
            deviceBreakdown: Object.entries(deviceCounts).map(([device, count]) => ({ device, count })),
            referrers: Object.entries(referrerCounts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 10)
                .map(([source, count]) => ({ source, count })),
            timeSeries,
        });
    } catch (err) {
        console.error('Dashboard error:', err);
        res.status(500).json({ error: 'Failed to generate dashboard data' });
    }
});

// GET /api/analytics/events - raw events (paginated)
router.get('/events', (req, res) => {
    try {
        const events = readEvents();
        const { page = 1, limit = 50, type } = req.query;
        const pageNum = parseInt(page);
        const limitNum = parseInt(limit);

        let filtered = events;
        if (type) {
            filtered = filtered.filter(e => e.eventType === type);
        }

        // Sort newest first
        filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        const total = filtered.length;
        const start = (pageNum - 1) * limitNum;
        const paged = filtered.slice(start, start + limitNum);

        res.json({
            events: paged,
            pagination: {
                page: pageNum,
                limit: limitNum,
                total,
                pages: Math.ceil(total / limitNum),
            },
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve events' });
    }
});

// DELETE /api/analytics/events - clear all events
router.delete('/events', (req, res) => {
    try {
        writeEvents([]);
        res.json({ message: 'All events cleared' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to clear events' });
    }
});

module.exports = router;
