import InventoryOrder from '../models/inventoryOrder.model.js';

export const getAllInventoryOrders = async (req, res) => {
    try {
        const orders = await InventoryOrder.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getInventoryOrderById = async (req, res) => {
    try {
        const order = await InventoryOrder.findById(req.params.id);
        if (!order) return res.status(404).json({ error: 'InventoryOrder not found' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createInventoryOrder = async (req, res) => {
    try {
        const order = new InventoryOrder(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateInventoryOrder = async (req, res) => {
    try {
        const order = await InventoryOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) return res.status(404).json({ error: 'InventoryOrder not found' });
        res.json(order);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteInventoryOrder = async (req, res) => {
    try {
        const order = await InventoryOrder.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ error: 'InventoryOrder not found' });
        res.json({ message: 'InventoryOrder deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 