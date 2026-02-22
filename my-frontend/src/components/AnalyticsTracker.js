import { useAnalytics } from '../hooks/useAnalytics';

/**
 * This component sits inside the Router and activates
 * automatic page-view, click, and scroll tracking.
 * It renders nothing visible.
 */
function AnalyticsTracker() {
    useAnalytics();
    return null;
}

export default AnalyticsTracker;
