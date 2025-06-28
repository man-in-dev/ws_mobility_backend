import express from 'express';
import {
    invokeLLM,
    sendEmail,
    uploadFile,
    handleFileUpload,
    generateImage,
    extractDataFromUploadedFile
} from '../controllers/integration.controller.js';

const router = express.Router();

router.post('/llm', invokeLLM);
router.post('/send-email', sendEmail);
router.post('/upload-file', uploadFile, handleFileUpload);
router.post('/generate-image', generateImage);
router.post('/extract-data', uploadFile, extractDataFromUploadedFile);

export default router; 