import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    item_name: { type: String, required: true },
    item_code: { type: String },
    category: { type: String },
    subcategory: { type: String },
    compatible_vehicles: { type: [String] },
    brand: { type: String },
    description: { type: String },
    specifications: { type: Object },
    unit_price: { type: Number },
    mrp: { type: Number },
    stock_quantity: { type: Number },
    minimum_stock: { type: Number },
    unit_of_measure: { type: String },
    supplier_info: { type: Object },
    warranty_period: { type: Number },
    is_active: { type: Boolean, default: true },
    images: { type: [String] },
    created_by_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created_by: { type: String },
    is_sample: { type: Boolean, default: false },
}, { timestamps: true });

const Inventory = mongoose.model('Inventory', inventorySchema);
export default Inventory; 