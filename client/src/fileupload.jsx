import React from 'react';
import { Input } from "@/components/ui/input"

const FileUpload = ({setSelectedFile}) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(event.target.files[0]);

    if (file) {
      const fileName = file.name;
      const fileType = fileName.slice(fileName.lastIndexOf('.') + 1).toLowerCase();
      const fileSize = file.size; // size in bytes

      const maxSize = 2 * 1024 * 1024; // 2MB in bytes

      if (fileType === 'png' || fileType === 'jpg' || fileType === 'jpeg') {
        if (fileSize <= maxSize) {
          // Valid file type and size - proceed with uploading or handling the file
          console.log('File type and size are allowed:', fileType, fileSize);
          // You can include your logic for file upload or handling here
        } else {
          // File size exceeds limit - show an error message
          alert('File size exceeds the limit of 2MB. Please upload a smaller file.');
          // Reset the file input
          event.target.value = '';
        }
      } else {
        // Invalid file type - show an error message or prevent upload
        alert('Invalid file type. Please upload only PNG or JPG files.');
        // Reset the file input
        event.target.value = '';
      }
    }
  };

  return (
    <Input
      type="file"
      id="fileInput"
      accept=".png, .jpg, .jpeg"
      onChange={handleFileChange}
    />
  );
};

export default FileUpload;
