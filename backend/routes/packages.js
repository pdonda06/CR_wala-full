import express from 'express';
import { getAllPackages, createPackage } from '../controllers/packageController.js';

const router = express.Router();

// Get all packages
router.get('/', getAllPackages);

// Create a new package
router.post('/', createPackage);

export { router };