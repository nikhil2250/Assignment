import * as dotenv from 'dotenv';
// const express = require('express');
import express from 'express';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import {db} from '../firebase-config.js';

dotenv.config();
const router = express.Router();

router.post('/store-data', express.json(), (req, res) => {
    const data = req.body; // Assuming the data is sent in the request body
  
    // Store the received data in Firestore
    // const docRef = db.collection('ocrData').doc();
    
    // docRef.set(data)
    //   .then(() => {
    //     res.status(200).json({ message: 'Data stored successfully!' });
    //   })
    //   .catch((error) => {
    //     res.status(500).json({ error: 'Error storing data: ' + error.message });
    //   });

    // const collectionReference = collection(db,"ocrData", data.identificationNumber)
    const postCreate = async () => {
        // await addDoc(collectionReference,{identificationNumber: data.identificationNumber,name: data.name,lastName: data.lastName,dateOfBirth: data.dateOfBirth,dateOfIssue:data.dateOfIssue,dateOfExpiry:data.dateOfExpiry,status:data.status});
        await setDoc(doc(db, "ocrData", data.identificationNumber), data);
    };

    postCreate();

});

export default router;