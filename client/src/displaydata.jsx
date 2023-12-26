import React from 'react';
import { useEffect } from 'react';
import Loader from './components/Loader';

const DisplayData = ({ detections, generatingImg }) => {


  return (
    <div>
      <pre>
        {Object.entries(detections).map(([key, value]) => (
          <div key={key}>
            <span>{`${key}: `}</span>
            <span>{value}</span>
          </div>
        ))}
      </pre>
      {generatingImg && (
        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default DisplayData;
