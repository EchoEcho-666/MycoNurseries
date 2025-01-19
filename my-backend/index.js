const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());


app.get('/', (req, res) => {
  res.send('CORS-enabled server');
});

app.get('/about', (req, res) => {
  res.send('About MycoNurseries');
});

app.listen(PORT, () => console.log('Server running on http://localhost:', PORT));