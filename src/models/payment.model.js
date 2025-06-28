import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    payment_id: { type: String },
    order_id: { type: mongoose.Schema.Types.ObjectId },
    order_type: { type: String },
    payer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    payee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number },
    commission_amount: { type: Number },
    net_amount: { type: Number },
    payment_method: { type: String },
    payment_status: { type: String, default: 'pending' },
    collected_by: { type: String },
    collected_date: { type: Date },
    transaction_reference: { type: String },
    receipt_url: { type: String },
    settlement_status: { type: String },
    settlement_date: { type: Date },
    notes: { type: String },
    created_by_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created_by: { type: String },
    is_sample: { type: Boolean, default: false },
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment; 