import ServiceRequest from '../models/serviceRequest.model.js';

export const getAllServiceRequests = async (req, res) => {
    try {
        const requests = await ServiceRequest.find();
        res.json(requests);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getServiceRequestById = async (req, res) => {
    try {
        const request = await ServiceRequest.findById(req.params.id);
        if (!request) return res.status(404).json({ error: 'ServiceRequest not found' });
        res.json(request);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createServiceRequest = async (req, res) => {
    try {
        const request = new ServiceRequest(req.body);
        await request.save();
        res.status(201).json(request);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateServiceRequest = async (req, res) => {
    try {
        const request = await ServiceRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!request) return res.status(404).json({ error: 'ServiceRequest not found' });
        res.json(request);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteServiceRequest = async (req, res) => {
    try {
        const request = await ServiceRequest.findByIdAndDelete(req.params.id);
        if (!request) return res.status(404).json({ error: 'ServiceRequest not found' });
        res.json({ message: 'ServiceRequest deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 