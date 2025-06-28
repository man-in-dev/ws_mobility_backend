import express from 'express';
import { register, login, getProfile, updateProfile, getAllUsers } from '../controllers/user.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', auth, getAllUsers);
router.get('/me', auth, getProfile);
router.put('/me', auth, updateProfile);

export default router; 