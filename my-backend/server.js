const express = require('express');
const path = require('path');
const app = express();

// Parse JSON bodies
app.use(express.json());

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, '../my-frontend/build')));

// Mount your subscription endpoint under '/subscribe'
app.use('/subscribe', require('./routes/subscribe'));

// Catch-all: for any request that doesn't match above, send 404.html
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../my-frontend/build', '404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
