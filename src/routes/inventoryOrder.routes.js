import express from 'express';
import {
    getAllInventoryOrders,
    getInventoryOrderById,
    createInventoryOrder,
    updateInventoryOrder,
    deleteInventoryOrder
} from '../controllers/inventoryOrder.controller.js';

const router = express.Router();

router.get('/', getAllInventoryOrders);
router.get('/:id', getInventoryOrderById);
router.post('/', createInventoryOrder);
router.put('/:id', updateInventoryOrder);
router.delete('/:id', deleteInventoryOrder);

export default router; 