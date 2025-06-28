import mongoose from 'mongoose';

const serviceRequestSchema = new mongoose.Schema({
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    vehicle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    service_provider_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    service_type: { type: String },
    description: { type: String },
    priority: { type: String },
    status: { type: String, default: 'pending' },
    scheduled_date: { type: Date },
    location: { type: String },
    estimated_cost: { type: Number },
    actual_cost: { type: Number },
    commission_amount: { type: Number },
    payment_status: { type: String },
    rating: { type: Number },
    feedback: { type: String },
    completed_date: { type: Date },
    created_by_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created_by: { type: String },
    is_sample: { type: Boolean, default: false },
}, { timestamps: true });

const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);
export default ServiceRequest; 