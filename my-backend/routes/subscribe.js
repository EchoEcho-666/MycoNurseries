const express = require('express');
const router = express.Router();

// --- DEMO MODE ---
// We removed the real Mailchimp code so it won't crash.
router.post('/', async (req, res) => {
  const { email } = req.body;

  // 1. Basic Validation
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // 2. Simulate a successful save (Log to terminal instead of sending to Mailchimp)
  console.log(`[DEMO MODE] New Subscriber: ${email}`);

  // 3. Send success message back to the frontend
  return res.status(200).json({ message: 'Successfully subscribed (Demo)!' });
});

module.exports = router;