// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT_84EntJxkVBxunqCNs_NNNAhtyUn20o",
  authDomain: "thai-id-ocr-app-1d002.firebaseapp.com",
  projectId: "thai-id-ocr-app-1d002",
  storageBucket: "thai-id-ocr-app-1d002.appspot.com",
  messagingSenderId: "428971539230",
  appId: "1:428971539230:web:93d882b415ef2b3748270f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);