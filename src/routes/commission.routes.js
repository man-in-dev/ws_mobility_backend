import express from 'express';
import {
    getAllCommissions,
    getCommissionById,
    createCommission,
    updateCommission,
    deleteCommission
} from '../controllers/commission.controller.js';

const router = express.Router();

router.get('/', getAllCommissions);
router.get('/:id', getCommissionById);
router.post('/', createCommission);
router.put('/:id', updateCommission);
router.delete('/:id', deleteCommission);

export default router; 