const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Enable CORS for development
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  credentials: true,
}));

// Parse JSON bodies
app.use(express.json({ limit: '10mb' }));

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, '../my-frontend/build')));

// Mount API routes
app.use('/subscribe', require('./routes/subscribe'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/content', require('./routes/content'));

// Catch-all: for any request that doesn't match above, send index or 404
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../my-frontend/build', 'index.html');
  if (require('fs').existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🍄 MycoNurseries server running on port ${PORT}`));
