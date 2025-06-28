import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
    owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    vehicle_type: { type: String },
    fuel_type: { type: String },
    make: { type: String },
    model: { type: String },
    year: { type: Number },
    registration_number: { type: String },
    engine_number: { type: String },
    chassis_number: { type: String },
    vin: { type: String, sparse: true },
    color: { type: String },
    mileage: { type: Number },
    created_by_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created_by: { type: String },
    is_sample: { type: Boolean, default: false },
}, { timestamps: true });

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle; 