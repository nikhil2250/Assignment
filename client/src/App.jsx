import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import axios from 'axios';


function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrLists,setOcrLists] = useState([]);
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
      const res = await axios.post('http://localhost:5000/api/v1/ocr/upload', formData, {
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

  async function onSubmit() {
    // const datatoSend = detections
    // const dataToSend = {
    //   // Your data object
    //   key1: 'value1',
    //   key2: 'value2',
    //   // Add more keys and values as needed
    // };

    try {
      const response = await fetch('http://localhost:5000/api/v1/post/store-data', {
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
    // const datatoSend = detections
    // const dataToSend = {
    //   // Your data object
    //   key1: 'value1',
    //   key2: 'value2',
    //   // Add more keys and values as needed
    // };

    try {
      const response = await fetch('http://localhost:5000/api/v1/get/data');
      const data = await response.json();
      console.log(data);
      setOcrLists(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // useEffect(() => {
  //   async function fetchData() {
      // try {
      //   const response = await fetch('http://localhost:5000/api/v1/get/data');
      //   const data = await response.json();
      //   setOcrLists(data);
      // } catch (error) {
      //   console.error('Error fetching data:', error);
      // }
  //   }

  //   fetchData();
  // });


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
      <Button onClick={onUpload}>Upload</Button>
      <div>
        <h2>Detections: {detections.name}</h2>
        <p>
          {detections.identificationNumber}{detections.name}{detections.lastName}{detections.dateOfBirth}{detections.dateOfIssue}{detections.dateOfExpiry}{detections.status}
        </p>
      </div>
      <Button onClick={onSubmit}>Submit</Button>
      <Button onClick={fetchData}>Fetch</Button>
      <div>
        {ocrLists.map((item, index) => (
          <div key={index}>
            <p>{JSON.stringify(item)}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
