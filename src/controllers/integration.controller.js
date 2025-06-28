// import { Configuration, OpenAIApi } from 'openai';
import nodemailer from 'nodemailer';
import multer from 'multer';
import { parse } from 'csv-parse';
import xlsx from 'xlsx';
import fs from 'fs';

// LLM Invocation (OpenAI)
export const invokeLLM = async (req, res) => {
    try {
        const { prompt } = req.body;
        const openai = ""
        // new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));
        const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });
        res.json({ result: completion.data.choices[0].message.content });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Send Email (Nodemailer)
export const sendEmail = async (req, res) => {
    try {
        const { to, subject, text } = req.body;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, text });
        res.json({ message: 'Email sent' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// File Upload (Multer)
const upload = multer({ dest: 'uploads/' });
export const uploadFile = upload.single('file');
export const handleFileUpload = (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    res.json({ filename: req.file.filename, originalname: req.file.originalname });
};

// Image Generation (OpenAI DALL·E)
export const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body;
        const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));
        const response = await openai.createImage({ prompt, n: 1, size: '512x512' });
        res.json({ url: response.data.data[0].url });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Data Extraction from Uploaded File (CSV/XLSX)
export const extractDataFromUploadedFile = (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const filePath = req.file.path;
    const ext = req.file.originalname.split('.').pop();
    if (ext === 'csv') {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(parse({ columns: true }))
            .on('data', (data) => results.push(data))
            .on('end', () => {
                fs.unlinkSync(filePath);
                res.json({ data: results });
            });
    } else if (ext === 'xlsx') {
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
        fs.unlinkSync(filePath);
        res.json({ data });
    } else {
        fs.unlinkSync(filePath);
        res.status(400).json({ error: 'Unsupported file type' });
    }
}; 