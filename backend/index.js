// backend/index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './routes/contact.js';

dotenv.config();                      // loads MONGO_URL, DB_NAME, PORT, etc.

const app  = express();
const port = process.env.PORT || 5000;

// ── middleware ────────────────────────────────────────────────
app.use(cors());                      // allow Vite dev-server to hit the API
app.use(express.json());              // parses application/json

// ── routes ────────────────────────────────────────────────────
app.use('/api/contact', contactRoutes);

// ── connect & start server ────────────────────────────────────
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: process.env.DB_NAME || 'crecita',
    });
    console.log('🚀  MongoDB connected');

    app.listen(port, () => {
      console.log(`🌐  API listening on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('❌  Mongo connection failed:', err);
    process.exit(1);
  }
})();
