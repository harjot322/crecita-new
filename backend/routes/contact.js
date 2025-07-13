// backend/routes/contact.js
import { Router } from 'express';
import Contact from '../models/Contact.js';

const router = Router();

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    // Basic validation – feel free to beef this up
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Required fields missing' });
    }

    const doc = await Contact.create({ name, email, company, message });
    return res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    console.error('Failed to save contact form:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

export default router;
