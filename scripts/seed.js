import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from '../src/models/user.model.js';
import Vehicle from '../src/models/vehicle.model.js';
import ServiceRequest from '../src/models/serviceRequest.model.js';
import Inventory from '../src/models/inventory.model.js';
import InventoryOrder from '../src/models/inventoryOrder.model.js';
import InsuranceLead from '../src/models/insuranceLead.model.js';
import Payment from '../src/models/payment.model.js';
import Commission from '../src/models/commission.model.js';

dotenv.config();

async function seed() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clear all existing data
        await User.deleteMany({});
        await Vehicle.deleteMany({});
        await ServiceRequest.deleteMany({});
        await Inventory.deleteMany({});
        await InventoryOrder.deleteMany({});
        await InsuranceLead.deleteMany({});
        await Payment.deleteMany({});
        await Commission.deleteMany({});
        console.log('All existing data cleared');

        // Create admin user
        const adminPassword = await bcrypt.hash('admin123', 10);
        const adminUser = await User.create({
            role: 'admin',
            email: 'admin@mobility.com',
            password: adminPassword,
            full_name: 'Admin User',
            phone: '9876543210',
            user_type: 'admin',
            address: '123 Admin Street',
            city: 'Darbhanga',
            state: 'Bihar',
            pincode: '846001',
            gstin: '22AAAAA0000A1Z5',
            bank_account: {
                account_number: '1234567890',
                ifsc_code: 'SBIN0001234',
                bank_name: 'State Bank of India',
                account_holder_name: 'Admin User'
            },
            commission_rate: 0,
            is_verified: true,
            status: 'active'
        });

        // Create service provider
        const serviceProviderPassword = await bcrypt.hash('service123', 10);
        const serviceProvider = await User.create({
            role: 'user',
            email: 'service@mobility.com',
            password: serviceProviderPassword,
            full_name: 'AutoCare Service Center',
            phone: '9876543211',
            user_type: 'service_provider',
            business_name: 'AutoCare Service Center',
            address: '456 Service Road',
            city: 'Darbhanga',
            state: 'Bihar',
            pincode: '846002',
            gstin: '22BBBBB0000B1Z5',
            bank_account: {
                account_number: '0987654321',
                ifsc_code: 'HDFC0001234',
                bank_name: 'HDFC Bank',
                account_holder_name: 'AutoCare Service Center'
            },
            commission_rate: 10,
            is_verified: true,
            status: 'active'
        });

        // Create vehicle owner
        const vehicleOwnerPassword = await bcrypt.hash('owner123', 10);
        const vehicleOwner = await User.create({
            role: 'user',
            email: 'owner@mobility.com',
            password: vehicleOwnerPassword,
            full_name: 'Rahul Kumar',
            phone: '9876543212',
            user_type: 'vehicle_owner',
            address: '789 Owner Lane',
            city: 'Darbhanga',
            state: 'Bihar',
            pincode: '846003',
            gstin: '22CCCCC0000C1Z5',
            bank_account: {
                account_number: '1122334455',
                ifsc_code: 'ICIC0001234',
                bank_name: 'ICICI Bank',
                account_holder_name: 'Rahul Kumar'
            },
            commission_rate: 0,
            is_verified: true,
            status: 'active'
        });

        // Create insurance agent
        const insuranceAgentPassword = await bcrypt.hash('agent123', 10);
        const insuranceAgent = await User.create({
            role: 'user',
            email: 'agent@mobility.com',
            password: insuranceAgentPassword,
            full_name: 'Insurance Pro Agency',
            phone: '9876543213',
            user_type: 'insurance_agent',
            address: '321 Agent Street',
            city: 'Darbhanga',
            state: 'Bihar',
            pincode: '846004',
            gstin: '22DDDDD0000D1Z5',
            bank_account: {
                account_number: '5544332211',
                ifsc_code: 'AXIS0001234',
                bank_name: 'Axis Bank',
                account_holder_name: 'Insurance Pro Agency'
            },
            commission_rate: 15,
            is_verified: true,
            status: 'active'
        });

        console.log('Users created successfully');

        // Create vehicles
        const vehicles = await Vehicle.create([
            {
                owner_id: vehicleOwner._id,
                vehicle_type: 'car',
                fuel_type: 'petrol',
                make: 'Toyota',
                model: 'Corolla',
                year: 2020,
                registration_number: 'BR06AB1234',
                engine_number: 'ENG123456789',
                chassis_number: 'CHS123456789012345',
                vin: '1HGBH41JXMN109186',
                color: 'Red',
                mileage: 15000,
                created_by_id: adminUser._id,
                created_by: adminUser.full_name
            },
            {
                owner_id: vehicleOwner._id,
                vehicle_type: 'bike',
                fuel_type: 'petrol',
                make: 'Honda',
                model: 'Activa',
                year: 2021,
                registration_number: 'BR06CD5678',
                engine_number: 'ENG987654321',
                chassis_number: 'CHS987654321098765',
                vin: '2T1BURHE0JC123456',
                color: 'Black',
                mileage: 8000,
                created_by_id: adminUser._id,
                created_by: adminUser.full_name
            }
        ]);

        console.log('Vehicles created successfully');

        // Create inventory items
        const inventoryItems = await Inventory.create([
            {
                item_name: 'Brake Pad Set',
                item_code: 'BP001',
                category: 'Brakes',
                subcategory: 'Pads',
                compatible_vehicles: ['Toyota Corolla', 'Honda City'],
                brand: 'Brembo',
                description: 'High quality ceramic brake pad set',
                specifications: { material: 'Ceramic', thickness: '12mm' },
                unit_price: 1200,
                mrp: 1500,
                stock_quantity: 50,
                minimum_stock: 10,
                unit_of_measure: 'set',
                supplier_info: { name: 'AutoParts Inc.', contact: '9876543210' },
                warranty_period: 12,
                is_active: true,
                images: [],
                created_by_id: adminUser._id,
                created_by: adminUser.full_name
            },
            {
                item_name: 'Engine Oil',
                item_code: 'EO001',
                category: 'Lubricants',
                subcategory: 'Engine Oil',
                compatible_vehicles: ['All Petrol Vehicles'],
                brand: 'Shell',
                description: 'Synthetic engine oil 5W-30',
                specifications: { grade: '5W-30', capacity: '4L' },
                unit_price: 800,
                mrp: 1000,
                stock_quantity: 100,
                minimum_stock: 20,
                unit_of_measure: 'bottle',
                supplier_info: { name: 'Shell Distributor', contact: '9876543211' },
                warranty_period: 0,
                is_active: true,
                images: [],
                created_by_id: adminUser._id,
                created_by: adminUser.full_name
            },
            {
                item_name: 'Air Filter',
                item_code: 'AF001',
                category: 'Filters',
                subcategory: 'Air Filter',
                compatible_vehicles: ['Toyota Corolla'],
                brand: 'Bosch',
                description: 'High performance air filter',
                specifications: { type: 'Paper', efficiency: '99%' },
                unit_price: 300,
                mrp: 400,
                stock_quantity: 75,
                minimum_stock: 15,
                unit_of_measure: 'piece',
                supplier_info: { name: 'Bosch India', contact: '9876543212' },
                warranty_period: 6,
                is_active: true,
                images: [],
                created_by_id: adminUser._id,
                created_by: adminUser.full_name
            }
        ]);

        console.log('Inventory items created successfully');

        // Create service requests
        const serviceRequests = await ServiceRequest.create([
            {
                customer_id: vehicleOwner._id,
                vehicle_id: vehicles[0]._id,
                service_provider_id: serviceProvider._id,
                service_type: 'Oil Change',
                description: 'Routine oil change and filter replacement',
                priority: 'medium',
                status: 'pending',
                scheduled_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                location: 'AutoCare Service Center',
                estimated_cost: 1500,
                actual_cost: 0,
                commission_amount: 150,
                payment_status: 'unpaid',
                rating: null,
                feedback: '',
                completed_date: null,
                created_by_id: vehicleOwner._id,
                created_by: vehicleOwner.full_name
            },
            {
                customer_id: vehicleOwner._id,
                vehicle_id: vehicles[1]._id,
                service_provider_id: serviceProvider._id,
                service_type: 'Brake Service',
                description: 'Brake pad replacement and brake fluid check',
                priority: 'high',
                status: 'completed',
                scheduled_date: new Date(),
                location: 'AutoCare Service Center',
                estimated_cost: 2500,
                actual_cost: 2400,
                commission_amount: 240,
                payment_status: 'paid',
                rating: 5,
                feedback: 'Excellent service, very professional',
                completed_date: new Date(),
                created_by_id: vehicleOwner._id,
                created_by: vehicleOwner.full_name
            }
        ]);

        console.log('Service requests created successfully');

        // Create inventory orders
        const inventoryOrders = await InventoryOrder.create([
            {
                order_number: 'ORD001',
                service_provider_id: serviceProvider._id,
                service_request_id: serviceRequests[0]._id,
                items: [
                    { inventory_id: inventoryItems[1]._id, quantity: 1, unit_price: 800 },
                    { inventory_id: inventoryItems[2]._id, quantity: 1, unit_price: 300 }
                ],
                total_amount: 1100,
                commission_amount: 110,
                net_amount: 990,
                status: 'pending',
                priority: 'medium',
                delivery_address: { address: 'AutoCare Service Center', city: 'Darbhanga' },
                approved_by: adminUser.full_name,
                approved_date: new Date(),
                packed_by: '',
                packed_date: null,
                dispatched_by: '',
                dispatched_date: null,
                delivered_date: null,
                payment_status: 'unpaid',
                payment_method: 'cash',
                tracking_number: '',
                proof_of_delivery: '',
                notes: 'Standard order for oil change service',
                created_by_id: serviceProvider._id,
                created_by: serviceProvider.full_name
            }
        ]);

        console.log('Inventory orders created successfully');

        // Create insurance leads
        const insuranceLeads = await InsuranceLead.create([
            {
                customer_id: vehicleOwner._id,
                vehicle_id: vehicles[0]._id,
                insurance_agent_id: insuranceAgent._id,
                lead_type: 'new_policy',
                current_policy: { policy_number: 'POL123456', expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) },
                coverage_required: ['Comprehensive', 'Third Party'],
                budget_range: { min: 5000, max: 10000 },
                status: 'new',
                priority: 'medium',
                contact_preference: 'phone',
                best_time_to_call: '10:00 AM',
                notes: 'Customer interested in comprehensive coverage',
                quotes_provided: [],
                commission_rate: 15,
                converted_policy: {},
                created_by_id: insuranceAgent._id,
                created_by: insuranceAgent.full_name
            },
            {
                customer_id: vehicleOwner._id,
                vehicle_id: vehicles[1]._id,
                insurance_agent_id: insuranceAgent._id,
                lead_type: 'renewal',
                current_policy: { policy_number: 'POL789012', expiry_date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) },
                coverage_required: ['Third Party'],
                budget_range: { min: 2000, max: 4000 },
                status: 'quoted',
                priority: 'high',
                contact_preference: 'whatsapp',
                best_time_to_call: '6:00 PM',
                notes: 'Policy expiring soon, urgent renewal needed',
                quotes_provided: [
                    { provider: 'Bajaj Allianz', premium: 3500, coverage: 'Third Party' },
                    { provider: 'ICICI Lombard', premium: 3200, coverage: 'Third Party' }
                ],
                commission_rate: 12,
                converted_policy: {},
                created_by_id: insuranceAgent._id,
                created_by: insuranceAgent.full_name
            }
        ]);

        console.log('Insurance leads created successfully');

        // Create payments
        const payments = await Payment.create([
            {
                payment_id: 'PAY001',
                order_id: serviceRequests[1]._id,
                order_type: 'service',
                payer_id: vehicleOwner._id,
                payee_id: serviceProvider._id,
                amount: 2400,
                commission_amount: 240,
                net_amount: 2160,
                payment_method: 'cash',
                payment_status: 'paid',
                collected_by: serviceProvider.full_name,
                collected_date: new Date(),
                transaction_reference: 'TXN789012',
                receipt_url: 'receipt_002.pdf',
                settlement_status: 'settled',
                settlement_date: new Date(),
                notes: 'Payment for brake service',
                created_by_id: serviceProvider._id,
                created_by: serviceProvider.full_name
            }
        ]);

        console.log('Payments created successfully');

        // Create commissions
        const commissions = await Commission.create([
            {
                user_id: serviceProvider._id,
                transaction_id: payments[0]._id.toString(),
                transaction_type: 'payment',
                gross_amount: 2400,
                commission_rate: 10,
                commission_amount: 240,
                net_amount: 2160,
                commission_type: 'standard',
                status: 'active',
                settlement_batch: 'BATCH001',
                settlement_date: new Date(),
                notes: 'Commission for service payment',
                created_by_id: adminUser._id,
                created_by: adminUser.full_name
            }
        ]);

        console.log('Commissions created successfully');

        console.log('\n=== SEEDING COMPLETE ===');
        console.log('Created users:');
        console.log('- Admin: admin@mobility.com / admin123');
        console.log('- Service Provider: service@mobility.com / service123');
        console.log('- Vehicle Owner: owner@mobility.com / owner123');
        console.log('- Insurance Agent: agent@mobility.com / agent123');
        console.log('\nSample data created for all collections!');
        console.log('You can now login as admin@mobility.com / admin123 to see all data in the dashboard.');

        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Seeding error:', error);
        process.exit(1);
    }
}

seed(); 