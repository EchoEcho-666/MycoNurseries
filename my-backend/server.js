const express = require('express');
const app = express();
const subscribeRouter = require('./routes/subscribe');

app.use(express.json());

// Mount your subscription endpoint under '/subscribe'
app.use('/subscribe', subscribeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
