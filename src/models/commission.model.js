import mongoose from 'mongoose';

const commissionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    transaction_id: { type: String },
    transaction_type: { type: String },
    gross_amount: { type: Number },
    commission_rate: { type: Number },
    commission_amount: { type: Number },
    net_amount: { type: Number },
    commission_type: { type: String },
    status: { type: String },
    settlement_batch: { type: String },
    settlement_date: { type: Date },
    notes: { type: String },
    created_by_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created_by: { type: String },
    is_sample: { type: Boolean, default: false },
}, { timestamps: true });

const Commission = mongoose.model('Commission', commissionSchema);
export default Commission; 