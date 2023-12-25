import * as dotenv from 'dotenv';
// const express = require('express');
import express from 'express';
// const multer = require('multer');
// import multer from 'multer';
// const vision = require('@google-cloud/vision');
// import vision from '@google-cloud/vision';
// const cors = require('cors'); // Import cors
import cors from 'cors';
import ocrRoutes from './routes/ocrRoutes.js';
import postRoutes from './routes/postRoutes.js';
import getRoutes from './routes/getRoutes.js';
import deleteRoutes from './routes/deleteRoutes.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// console.log(CONFIG);
// const client = new vision.ImageAnnotatorClient(CONFIG);
// // const client = new ImageAnnotatorClient();  

app.use(cors()); // Enable CORS for all routes

app.use(express.static('public'));

app.use('/api/v1/ocr', ocrRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/get', getRoutes);
app.use('/api/v1/delete', deleteRoutes);

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.post('/upload', upload.single('image'), async (req, res) => {
//   try {
//     const image = req.file.buffer;

//     const [result] = await client.textDetection(image);
//     console.log(result);
//     // const detections = result.fullTextAnnotation.text;
//     // const detections = result.fullTextAnnotation.map(annotation => annotation.description);

//     const extractedText = result.fullTextAnnotation.text;

//     // Creating a JavaScript object to store the extracted text
//     const textData = {
//         extractedText,
//         // You can add more properties here based on the structure of your result
//       };

//     // Convert the JavaScript object to a JSON string
//     const relevantData = JSON.stringify(textData);

//     // console.log(relevantData);

//     // Regex patterns
//     const idNumberPattern = /(\d \d{4} \d{5} \d{2} \d)/;
//     const namePattern = /Name([A-Za-z\s.]{1,})/;
//     const lastNamePattern = /Last name (.+?)\\/;
//     const dobPattern = /Date of Birth (\d{1,2} .+? \d{4})/;
//     const issueDatePattern = /(\d{1,}\s[A-Za-z.]{1,}\s\d{1,4})\\nDate of Issue/;
//     const expiryDatePattern = /(\d{1,}\s[A-Za-z.]{1,}\s\d{1,4})\s.*\\nDate of Expiry/;

//     // Function to extract information using regex
//     function extractInfo(relevantData, pattern) {
//     const match = relevantData.match(pattern);
//     // console.log(match);
//     return match ? match[1] : null;
//     }

//     // Extracting information
//     const identificationNumber = extractInfo(relevantData, idNumberPattern);
//     const name = extractInfo(relevantData, namePattern);
//     const lastName = extractInfo(relevantData, lastNamePattern);
//     const dateOfBirth = extractInfo(relevantData, dobPattern);
//     const dateOfIssue = extractInfo(relevantData, issueDatePattern);
//     const dateOfExpiry = extractInfo(relevantData, expiryDatePattern);
//     const status = 'success';
//     if ( identificationNumber == null || name == null || lastName == null || dateOfBirth == null || dateOfIssue == null || dateOfExpiry == null ){
//         status = 'failure';
//     }

//     const detections = {
//         'identificationNumber':identificationNumber,
//         'name':name,
//         'lastName':lastName,
//         'dateOfBirth':dateOfBirth,
//         'dateOfIssue':dateOfIssue,
//         'dateOfExpiry':dateOfExpiry,
//         'status': status
//     };
//     console.log(detections);
//     res.send({ detections });
//   } catch (err) {
//     console.error('Error:', err);
//     res.status(500).json({ error: 'Something went wrong!' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
