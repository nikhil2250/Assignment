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

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// const CREDENTIALS = JSON.parse(JSON.stringify({
//     "type": "service_account",
//     "project_id": "dynamic-aurora-409106",
//     "private_key_id": "3c2296d235d07d87dea4edb6b10857ed50946489",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDLnknjcg5+ZCEV\nL+UYBWZM8BzeacZxSu9hfOxBDYAGEFmrkqzfUFCfZyts3+ifO0TQMKN8ONwImGPq\n78SUu+DsWguJLek2mx9Rdda39cPHBbDa9VnuRMV0XSwOlcGIK3oMz/plhndjD1uH\nNPx0GQ5BI+kjiMkH1+81mRInTEx+15OPYP/0RL6KWh9Fq+03P4zhjuFhlcMw1gcg\nc+P5riTx6S9feh1/6WO5dKiYbpgiW37t0zeTBa/qWLBgunEP5NYqEbs2UEsYoaNv\nTqDvcqPnS0pXTeWTUl7IdNWOYfpdqwmVeke5zj6SxJoSjssbCZq7kcyJAyVmuzN7\n2pfU+3BjAgMBAAECggEAHUf7hy5BQFLE4SeckdpA7mJ/PErIw0UL7KCK1wYKeZTD\nWGWE365MkcfD2mnOqYtb53Z/JB+HIONNRx1Izzy/aS2/x+/mwDgJhmzkPlsk1suO\nNcafsqCIJqY5bjWB+cOKzynfb9co9wFf368yeL2bq6lu3vHOOwcF+tay4hzaSUkU\nMNiBdi0GkY2Y7nakFZDM0uzSzdas9GVGeda1M5IYm9w9rkiGrugYf5kcAl5og6UN\ncHzpmBhgdh6WTRNfNNLNPUZcGzawaJX11cQMful8jsDQ9GkXNKKpz7KYdGm/5V4j\nfyMHFsliqQP2A74GeN2dPFOsDn0ENwKZjmYZj9dC5QKBgQD2JVV/+zR7GWt6b1ci\n4PaqBHs3y8NdPbfVKBIFwaHQjWyYZhLyA8b1IMra7iiF8m+oijTQoTzdTmLatM4S\n9hs9rQzFcFP/iI9i8U2qpiBq8OtPN7DRxq7LObqmuX1xauNg9BFCrtgO6ZGJ3aQV\n2pQa2kalrJ0Dn92k8etYu0EP/wKBgQDTxRq3b3D4toGf58uS7peYPXKv1BEmpNBL\nZFZuZNUPqDjpUaaY0ZwSVMQNweT3MvYyrNdf8yE8zdSoKzEmnU/LQR8ph+xOaE7Q\nhOgIXVdKDh54nIy4z1hj1eJJCz2mL7g/TCvbA0L262uP4cvUxxdc0Fwa1jsdCT5u\nxXxY1ttfnQKBgQC523TUvwxgitAh0aJc3rrBo8KaXcw1Ql3loG0DVbLmM3M1G5Xg\nkcOP4ePqLXwBsA5pl3nLsoOvovl3pKAZpyTojBshlfCG+Ukzb3qyiN/ff+xdk3J6\n42emYf+y1kqG8iugUIob7MONdwWCsQ2txq6gHALOJCkmzHZijpyjEjlNZwKBgQDQ\nz2BpkWQWiXbFInzz03j871Ifl36V2Rtdy4EB90Cy4I/FV/Jqavx2gsiSPCa1rLVg\nAFeZz5VtbBONApHDXogohXzhqZnTMjzMlNBqNwd0CPn4uXx0Wlbwkhw/I+tU62bE\nWyo/GTc1W6rCw8UFeI5LwVOgTq8ZEV1TQj07KBhFbQKBgB0uifzVmqJx9qNewfFJ\nuNuFKIXnud5p+GXtzKg0/Z4Wv+txX8f/00w6kljgLQJq/cnNWXb1iQk8b9SsWch3\nlKGR4mNsFn05Xy0mArO7lGVYJg3n/fRurZY9D0DSA8I9TEEXxFiPNT5VtbpayPHe\njE/AABch/U5wEWpfbo7Z5kyk\n-----END PRIVATE KEY-----\n",
//     "client_email": "project@dynamic-aurora-409106.iam.gserviceaccount.com",
//     "client_id": "111678503163921274571",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/project%40dynamic-aurora-409106.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }));

// const CONFIG = {
//     credentials: {
//         // private_key: CREDENTIALS.private_key,
//         // client_email: CREDENTIALS.client_email
//         private_key: process.env.private_key,
//         client_email: process.env.client_email
//     }
// };
// console.log(CONFIG);
// const client = new vision.ImageAnnotatorClient(CONFIG);
// // const client = new ImageAnnotatorClient();  

app.use(cors()); // Enable CORS for all routes

app.use(express.static('public'));

app.use('/api/v1/ocr', ocrRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/get', getRoutes);

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
