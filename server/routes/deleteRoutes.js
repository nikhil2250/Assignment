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
  
    //   // Update the document with a flag for soft delete
    //   await db.collection('ocrData').doc(identificationNumber).update({
    //     deleted: true, // You may have a 'deleted' flag in your document
    //   });
  
    //   res.status(200).json({ message: 'Data soft deleted successfully' });
    // } catch (error) {
    //   console.error('Error soft deleting data:', error);
    //   res.status(500).json({ error: 'Error soft deleting data' });
    // }
    
    const deletePost = async () => {
        // await addDoc(collectionReference,{identificationNumber: data.identificationNumber,name: data.name,lastName: data.lastName,dateOfBirth: data.dateOfBirth,dateOfIssue:data.dateOfIssue,dateOfExpiry:data.dateOfExpiry,status:data.status});
        console.log("delteroute");
        await updateDoc(doc(db, "ocrData", identificationNumber), {
            deleted:true
        });
        console.log("afterdelete");
    };

    deletePost();
});

export default router;