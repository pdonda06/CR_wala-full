import express from 'express';
import { getAllCaseStudies, createCaseStudy, updateCaseStudy, deleteCaseStudy } from '../controllers/caseStudyController.js';
import { authenticateToken, authorizeAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllCaseStudies);
router.post('/', createCaseStudy);
router.put('/:id', authenticateToken, authorizeAdmin, updateCaseStudy);
router.delete('/:id', authenticateToken, authorizeAdmin, deleteCaseStudy);

export { router };