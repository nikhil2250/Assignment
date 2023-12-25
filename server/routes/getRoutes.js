import * as dotenv from 'dotenv';
// const express = require('express');
import express from 'express';
import { addDoc, collection, doc, setDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase-config.js';
import cors from 'cors';

dotenv.config();
const router = express.Router();

router.get('/data', async (req, res) => {
    // try {
    //   const snapshot = await db.collection('ocrData').get();
    //   const data = [];   
    //   snapshot.forEach((doc) => {
    //     data.push(doc.data());
    //   });
    //   res.json(data);
    // } catch (error) {
    //   res.status(500).json({ error: error.message });
    // }
    const collectionReference = collection(db,"ocrData");
    const getPosts = async () =>{
        const snapshot = await getDocs(collectionReference);
        const data = [];
        snapshot.forEach((doc) => {
            data.push(doc.data());
        });
        res.json(data);
    };

    getPosts();
});

export default router;