import React from 'react';

const ProgressBar = ({ percentage }) => {
  const progressBarStyle = {
    width: `${40}%`,
    height: '30px',
    backgroundColor: 'blue',
  };

  return (
    <div>
      <h1>Progress Bar</h1>
      <div  style={{ border: '1px solid black', width: '200px' }}>
        <div style={progressBarStyle}></div>
      </div>
      <p>{`${40}%`}</p>
    </div>
  );
};

export default ProgressBar;
