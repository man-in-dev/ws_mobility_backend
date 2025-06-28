import Commission from '../models/commission.model.js';

export const getAllCommissions = async (req, res) => {
    try {
        const commissions = await Commission.find();
        res.json(commissions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getCommissionById = async (req, res) => {
    try {
        const commission = await Commission.findById(req.params.id);
        if (!commission) return res.status(404).json({ error: 'Commission not found' });
        res.json(commission);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createCommission = async (req, res) => {
    try {
        const commission = new Commission(req.body);
        await commission.save();
        res.status(201).json(commission);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateCommission = async (req, res) => {
    try {
        const commission = await Commission.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!commission) return res.status(404).json({ error: 'Commission not found' });
        res.json(commission);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteCommission = async (req, res) => {
    try {
        const commission = await Commission.findByIdAndDelete(req.params.id);
        if (!commission) return res.status(404).json({ error: 'Commission not found' });
        res.json({ message: 'Commission deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 