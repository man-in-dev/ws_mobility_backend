import mongoose from 'mongoose';

const inventoryOrderSchema = new mongoose.Schema({
    order_number: { type: String },
    service_provider_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    service_request_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceRequest' },
    items: { type: [Object] },
    total_amount: { type: Number },
    commission_amount: { type: Number },
    net_amount: { type: Number },
    status: { type: String, default: 'pending' },
    priority: { type: String },
    delivery_address: { type: Object },
    approved_by: { type: String },
    approved_date: { type: Date },
    packed_by: { type: String },
    packed_date: { type: Date },
    dispatched_by: { type: String },
    dispatched_date: { type: Date },
    delivered_date: { type: Date },
    payment_status: { type: String },
    payment_method: { type: String },
    tracking_number: { type: String },
    proof_of_delivery: { type: String },
    notes: { type: String },
    created_by_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created_by: { type: String },
    is_sample: { type: Boolean, default: false },
}, { timestamps: true });

const InventoryOrder = mongoose.model('InventoryOrder', inventoryOrderSchema);
export default InventoryOrder; 