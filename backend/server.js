import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import { router as authRoutes } from './routes/auth.js'; //done both user and admin
import { router as serviceRoutes } from './routes/services.js'; //done
import { router as caseStudyRoutes } from './routes/caseStudies.js'; //done
import { router as testimonialRoutes } from './routes/testimonials.js'; //done
import { router as contactRoutes } from './routes/contact.js'; //done
import { router as paymentRoutes } from './routes/payments.js';
import { router as consultationRoutes } from "./routes/consultations.js"; // Add this
import { router as packageRoutes } from './routes/packages.js';




dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // Adjust based on frontend port
  credentials: true
}));


// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/case-studies', caseStudyRoutes); // in frontend there is no fuctions for post casestudy so we will not using this
app.use('/api/testimonials', testimonialRoutes); // in frontend there is no fuctions for post testimonials so we will not using this
app.use('/api/contact', contactRoutes);
app.use('/api/payments', paymentRoutes);
app.use("/api/consultations", consultationRoutes);
app.use('/api/packages', packageRoutes); 



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});