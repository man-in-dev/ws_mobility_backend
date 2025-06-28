import mongoose from 'mongoose';

const insuranceLeadSchema = new mongoose.Schema({
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    vehicle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    insurance_agent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    lead_type: { type: String },
    current_policy: { type: Object },
    coverage_required: { type: [String] },
    budget_range: {
        min: { type: Number },
        max: { type: Number }
    },
    status: { type: String, default: 'new' },
    priority: { type: String },
    contact_preference: { type: String },
    best_time_to_call: { type: String },
    notes: { type: String },
    quotes_provided: { type: [Object] },
    commission_rate: { type: Number },
    converted_policy: { type: Object },
    created_by_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created_by: { type: String },
    is_sample: { type: Boolean, default: false },
}, { timestamps: true });

const InsuranceLead = mongoose.model('InsuranceLead', insuranceLeadSchema);
export default InsuranceLead; 