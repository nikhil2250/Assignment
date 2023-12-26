import * as dotenv from 'dotenv';
// const express = require('express');
import express from 'express';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import {db} from '../firebase-config.js';

dotenv.config();
const router = express.Router();

router.post('/store-data', express.json(), (req, res) => {
    const data = req.body; 
  
    const postCreate = async () => {
        await setDoc(doc(db, "ocrData", data.identificationNumber), data);
    };

    postCreate();

});

export default router;