import React from 'react';

const DisplayData = ({ detections }) => {
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
    </div>
  );
};

export default DisplayData;
