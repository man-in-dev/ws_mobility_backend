import express from 'express';
import {
    getAllInsuranceLeads,
    getInsuranceLeadById,
    createInsuranceLead,
    updateInsuranceLead,
    deleteInsuranceLead
} from '../controllers/insuranceLead.controller.js';

const router = express.Router();

router.get('/', getAllInsuranceLeads);
router.get('/:id', getInsuranceLeadById);
router.post('/', createInsuranceLead);
router.put('/:id', updateInsuranceLead);
router.delete('/:id', deleteInsuranceLead);

export default router; 