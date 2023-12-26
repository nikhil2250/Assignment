import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios';
import OCRTable from './ocrTable.jsx';
import FileUpload from './fileupload.jsx';
import DisplayData from './displaydata.jsx';
import DeleteData from './deletebutton.jsx';
import Loader from './components/Loader.jsx';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrLists,setOcrLists] = useState([]);
  const [deleteID, setDeleteID] = useState('');
  const [detections, setDetections] = useState({
    'identificationNumber': '',
    'name': '',
    'lastName':'',
    'dateOfBirth':'',
    'dateOfIssue':'',
    'dateOfExpiry':'',
    'status':''
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);


  const onUpload = async () => {
    console.log("22");
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);
    console.log("1111");
    try {
      setGeneratingImg(true);
      const res = await axios.post('https://thai-id-ocr-app.onrender.com/api/v1/ocr/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      setDetections(res.data.detections);
      console.log(res);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setGeneratingImg(false);
    }
  };

  const handleSoftDelete = async () => {
    try {
      // Make an API request to your backend to soft delete data
      await axios.post('https://thai-id-ocr-app.onrender.com/api/v1/delete/softDeleteData', {
        deleteID,
      });

      console.log('Data soft deleted successfully');
    } catch (error) {
      console.error('Error soft deleting data:', error);
    }
  };

  async function onSubmit() {

    try {
      const response = await fetch('https://thai-id-ocr-app.onrender.com/api/v1/post/store-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(detections),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData); // Handle the response data
      } else {
        throw new Error('Failed to store data');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error here
    }
  }

  async function fetchData() {

    try {
      setGeneratingImg(true);
      const response = await fetch('https://thai-id-ocr-app.onrender.com/api/v1/get/data');
      const data = await response.json();
      console.log(data);
      setOcrLists(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setGeneratingImg(false);
    }
  }



  return (
    <>
      <h1 className="font-extrabold text-[#222328] text-[50px]">
        Thai-ID-OCR-App
      </h1>
      <div className="components-container" style={{ display: 'flex' }}>
        <div className="grid w-full max-w-sm items-center gap-1.5" style={{ flex: 1 }}>
          <h2 className="mt-10 font-bold text-[#222328] text-xl">Upload ID Card</h2>
          <Label htmlFor="picture" className="mt-5 text-left mb-2">Use only png,jpeg,jpg, maxsize 2mb</Label>
          <FileUpload setSelectedFile={setSelectedFile} />
          <Button onClick={onUpload}>Upload</Button>
          <Button onClick={onSubmit}>Submit</Button>
        </div>
        <div className='text-right' style={{ flex: 1 }}>
          <h2 className="mt-10 font-bold text-[#222328] text-xl">Detected Data</h2>
          <DisplayData detections={detections} generatingImg={generatingImg} />
        </div>
      </div>
      <div className="components-container" style={{ display: 'flex' }}>
        <div className="grid w-full max-w-sm items-center gap-1.5" style={{ flex: 1 }}>
          <DeleteData deleteID={deleteID} setDeleteID={setDeleteID} />
          <Button onClick={handleSoftDelete}>Soft Delete Data</Button>
        </div>
      </div>
      <Button onClick={fetchData}>Fetch</Button>
      <div className="App">
        <h1>OCR Operations</h1>
        <OCRTable data={ocrLists} generatingImg={generatingImg} />
      </div>
    </>
  )
}

export default App
