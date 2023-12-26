import * as dotenv from 'dotenv';
// const express = require('express');
import express from 'express';
import { addDoc, collection, doc, setDoc, getDocs, updateDoc } from "firebase/firestore";
import {db} from '../firebase-config.js';
import cors from 'cors';

dotenv.config();
const router = express.Router();

router.post('/softDeleteData', async (req, res) => {
    // try {
    const identificationNumber = req.body;
  
    
    const deletePost = async () => {
        console.log("delteroute");
        await updateDoc(doc(db, "ocrData", identificationNumber), {
            deleted:true
        });
        console.log("afterdelete");
    };

    deletePost();
});

export default router;