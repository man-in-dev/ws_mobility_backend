import InsuranceLead from '../models/insuranceLead.model.js';

export const getAllInsuranceLeads = async (req, res) => {
    try {
        const leads = await InsuranceLead.find();
        res.json(leads);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getInsuranceLeadById = async (req, res) => {
    try {
        const lead = await InsuranceLead.findById(req.params.id);
        if (!lead) return res.status(404).json({ error: 'InsuranceLead not found' });
        res.json(lead);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createInsuranceLead = async (req, res) => {
    try {
        const lead = new InsuranceLead({ ...req.body, customer_id: "685fa5c907cede536311ad81" });
        await lead.save();
        res.status(201).json(lead);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateInsuranceLead = async (req, res) => {
    try {
        const lead = await InsuranceLead.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!lead) return res.status(404).json({ error: 'InsuranceLead not found' });
        res.json(lead);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteInsuranceLead = async (req, res) => {
    try {
        const lead = await InsuranceLead.findByIdAndDelete(req.params.id);
        if (!lead) return res.status(404).json({ error: 'InsuranceLead not found' });
        res.json({ message: 'InsuranceLead deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 