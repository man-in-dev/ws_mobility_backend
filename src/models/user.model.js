import mongoose from "mongoose";

const bankAccountSchema = new mongoose.Schema({
    account_number: { type: String },
    ifsc_code: { type: String },
    bank_name: { type: String },
    account_holder_name: { type: String }
}, { _id: false }); // Prevent creation of sub-document _id

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['admin', 'user']
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    full_name: {
        type: String,
    },
    phone: {
        type: String,
    },
    user_type: {
        type: String,
        enum: ['admin', 'service_provider', 'vehicle_owner', 'payment_collector', 'warehouse_staff', 'dispatcher', 'insurance_agent']
    },
    business_name: {
        type: String,
        required: function () {
            return this.user_type === 'service_provider';
        }
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    pincode: {
        type: String,
    },
    gstin: {
        type: String,
    },
    bank_account: {
        type: bankAccountSchema,
    },
    commission_rate: {
        type: Number,
    },
    is_verified: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'suspended'],
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("User", userSchema);
