import express from 'express';
import {
    getAllServiceRequests,
    getServiceRequestById,
    createServiceRequest,
    updateServiceRequest,
    deleteServiceRequest
} from '../controllers/serviceRequest.controller.js';

const router = express.Router();

router.get('/', getAllServiceRequests);
router.get('/:id', getServiceRequestById);
router.post('/', createServiceRequest);
router.put('/:id', updateServiceRequest);
router.delete('/:id', deleteServiceRequest);

export default router; 