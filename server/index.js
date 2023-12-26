import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import ocrRoutes from './routes/ocrRoutes.js';
import postRoutes from './routes/postRoutes.js';
import getRoutes from './routes/getRoutes.js';
import deleteRoutes from './routes/deleteRoutes.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors()); // Enable CORS for all routes

app.use(express.static('public'));

app.use('/api/v1/ocr', ocrRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/get', getRoutes);
app.use('/api/v1/delete', deleteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
