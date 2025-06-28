import express from 'express';
import vehicleRoutes from './vehicle.routes.js';
import serviceRequestRoutes from './serviceRequest.routes.js';
import inventoryRoutes from './inventory.routes.js';
import inventoryOrderRoutes from './inventoryOrder.routes.js';
import insuranceLeadRoutes from './insuranceLead.routes.js';
import paymentRoutes from './payment.routes.js';
import commissionRoutes from './commission.routes.js';
import userRoutes from './user.routes.js';
import integrationRoutes from './integration.routes.js';

const router = express.Router();

// Import and use feature routes here
// Example:
// import vehicleRoutes from './vehicle.routes.js';
// router.use('/vehicles', vehicleRoutes);

router.use('/vehicles', vehicleRoutes);
router.use('/service-requests', serviceRequestRoutes);
router.use('/inventory', inventoryRoutes);
router.use('/inventory-orders', inventoryOrderRoutes);
router.use('/insurance-leads', insuranceLeadRoutes);
router.use('/payments', paymentRoutes);
router.use('/commissions', commissionRoutes);
router.use('/users', userRoutes);
router.use('/integrations', integrationRoutes);

export default router; 