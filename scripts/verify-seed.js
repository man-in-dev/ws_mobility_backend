import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../src/models/user.model.js';
import Vehicle from '../src/models/vehicle.model.js';
import ServiceRequest from '../src/models/serviceRequest.model.js';
import Inventory from '../src/models/inventory.model.js';
import InventoryOrder from '../src/models/inventoryOrder.model.js';
import InsuranceLead from '../src/models/insuranceLead.model.js';
import Payment from '../src/models/payment.model.js';
import Commission from '../src/models/commission.model.js';

dotenv.config();

async function verifySeed() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Count sample data in each collection
        const userCount = await User.countDocuments({ is_sample: true });
        const vehicleCount = await Vehicle.countDocuments({ is_sample: true });
        const serviceRequestCount = await ServiceRequest.countDocuments({ is_sample: true });
        const inventoryCount = await Inventory.countDocuments({ is_sample: true });
        const inventoryOrderCount = await InventoryOrder.countDocuments({ is_sample: true });
        const insuranceLeadCount = await InsuranceLead.countDocuments({ is_sample: true });
        const paymentCount = await Payment.countDocuments({ is_sample: true });
        const commissionCount = await Commission.countDocuments({ is_sample: true });

        console.log('\n=== SEED VERIFICATION ===');
        console.log(`Users: ${userCount} sample records`);
        console.log(`Vehicles: ${vehicleCount} sample records`);
        console.log(`Service Requests: ${serviceRequestCount} sample records`);
        console.log(`Inventory Items: ${inventoryCount} sample records`);
        console.log(`Inventory Orders: ${inventoryOrderCount} sample records`);
        console.log(`Insurance Leads: ${insuranceLeadCount} sample records`);
        console.log(`Payments: ${paymentCount} sample records`);
        console.log(`Commissions: ${commissionCount} sample records`);

        // Show user details
        const users = await User.find({ is_sample: true }).select('email full_name user_type');
        console.log('\n=== CREATED USERS ===');
        users.forEach(user => {
            console.log(`${user.full_name} (${user.user_type}): ${user.email}`);
        });

        await mongoose.disconnect();
        console.log('\nVerification complete!');
    } catch (error) {
        console.error('Verification error:', error);
        process.exit(1);
    }
}

verifySeed(); 