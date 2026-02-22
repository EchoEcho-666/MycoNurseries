const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const CONTENT_FILE = path.join(DATA_DIR, 'content.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'myco2026admin';

// Ensure data files exist
function ensureDataFiles() {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(CONTENT_FILE)) {
        fs.writeFileSync(CONTENT_FILE, JSON.stringify({
            pages: {},
            announcements: [],
            teamUpdates: {},
            lastModified: new Date().toISOString(),
        }, null, 2));
    }
}
ensureDataFiles();

function readContent() {
    try {
        return JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf8'));
    } catch {
        return { pages: {}, announcements: [], teamUpdates: {}, lastModified: new Date().toISOString() };
    }
}

function writeContent(content) {
    content.lastModified = new Date().toISOString();
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2));
}

// Simple auth middleware
function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token || token !== `Bearer ${ADMIN_PASSWORD}`) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}

// POST /api/content/auth - authenticate
router.post('/auth', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        return res.json({ success: true, token: ADMIN_PASSWORD });
    }
    return res.status(401).json({ error: 'Invalid password' });
});

// GET /api/content/pages - get all editable content
router.get('/pages', (req, res) => {
    try {
        const content = readContent();
        res.json(content);
    } catch (err) {
        res.status(500).json({ error: 'Failed to read content' });
    }
});

// PUT /api/content/pages/:pageId - update a page's content
router.put('/pages/:pageId', authMiddleware, (req, res) => {
    try {
        const { pageId } = req.params;
        const { sections } = req.body;

        const content = readContent();
        if (!content.pages) content.pages = {};

        content.pages[pageId] = {
            sections,
            updatedAt: new Date().toISOString(),
            updatedBy: req.body.updatedBy || 'admin',
        };

        writeContent(content);
        res.json({ success: true, page: content.pages[pageId] });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update page' });
    }
});

// DELETE /api/content/pages/:pageId - reset a page to defaults
router.delete('/pages/:pageId', authMiddleware, (req, res) => {
    try {
        const content = readContent();
        if (content.pages && content.pages[req.params.pageId]) {
            delete content.pages[req.params.pageId];
            writeContent(content);
        }
        res.json({ success: true, message: 'Page reset to defaults' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to reset page' });
    }
});

// --- Announcements ---

// GET /api/content/announcements
router.get('/announcements', (req, res) => {
    try {
        const content = readContent();
        res.json({ announcements: content.announcements || [] });
    } catch (err) {
        res.status(500).json({ error: 'Failed to read announcements' });
    }
});

// POST /api/content/announcements
router.post('/announcements', authMiddleware, (req, res) => {
    try {
        const { title, body, type = 'info', active = true } = req.body;
        const content = readContent();
        if (!content.announcements) content.announcements = [];

        const announcement = {
            id: `ann_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
            title,
            body,
            type,
            active,
            createdAt: new Date().toISOString(),
        };

        content.announcements.unshift(announcement);
        writeContent(content);
        res.json({ success: true, announcement });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create announcement' });
    }
});

// PUT /api/content/announcements/:id
router.put('/announcements/:id', authMiddleware, (req, res) => {
    try {
        const content = readContent();
        const idx = (content.announcements || []).findIndex(a => a.id === req.params.id);
        if (idx === -1) return res.status(404).json({ error: 'Announcement not found' });

        content.announcements[idx] = { ...content.announcements[idx], ...req.body, updatedAt: new Date().toISOString() };
        writeContent(content);
        res.json({ success: true, announcement: content.announcements[idx] });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update announcement' });
    }
});

// DELETE /api/content/announcements/:id
router.delete('/announcements/:id', authMiddleware, (req, res) => {
    try {
        const content = readContent();
        content.announcements = (content.announcements || []).filter(a => a.id !== req.params.id);
        writeContent(content);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete announcement' });
    }
});

module.exports = router;
