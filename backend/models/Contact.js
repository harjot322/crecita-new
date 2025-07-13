// backend/models/Contact.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true, trim: true },
    email:    { type: String, required: true, lowercase: true, trim: true },
    company:  { type: String },
    message:  { type: String, required: true },
  },
  { timestamps: true }          // createdAt / updatedAt
);

// 👇 Forces the collection name to match what you already created in Atlas
export default mongoose.model('Contact', contactSchema, 'website-form');
