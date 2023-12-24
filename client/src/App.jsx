import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import axios from 'axios';


function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [detections, setDetections] = useState({
    'identificationNumber': '',
    'name': '',
    'lastName':'',
    'dateOfBirth':'',
    'dateOfIssue':'',
    'dateOfExpiry':'',
    'status':''
  });

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      // setDetections(res.data.detections);
      setDetections(res.data.detections);
      console.log(res);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h1 className="font-extrabold text-[#222328] text-[50px]">
        Thai-ID-OCR-App
      </h1>
      <h2 className="text-left mt-10 font-bold text-[#222328] text-xl">Upload ID Card (png,jpeg,jpg)</h2>
      <div className='text-left mt-3'>
      <Button>Upload</Button>
      </div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onUpload}>Upload</button>
      <div>
        <h2>Detections: {detections.name}</h2>
        <p>
          {detections.identificationNumber}{detections.name}{detections.lastName}{detections.dateOfBirth}{detections.dateOfIssue}{detections.dateOfExpiry}{detections.status}
        </p>
      </div>
    </>
  )
}

export default App
