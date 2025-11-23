const express = require('express');
const router = express.Router();
const fetch = require('node-fetch'); // if needed

const API_KEY = 'YOUR_MAILCHIMP_API_KEY';
const LIST_ID = 'YOUR_LIST_ID';
const DC = API_KEY.split('-')[1];

router.post('/', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const response = await fetch(`https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed'
      })
    });

    if (response.ok) {
      res.json({ message: 'Successfully subscribed!' });
    } else {
      const data = await response.json();
      res.status(response.status).json(data);
    }
  } catch (error) {
    res.status(500).json({ error: 'Subscription failed.' });
  }
});

module.exports = router;