import React from 'react'

const DateTime = () => {
  let currentDateTime = new Date();

  const tick = () => {
    const newDateTime = new Date();
    if (newDateTime.getSeconds() !== currentDateTime.getSeconds()) {
      currentDateTime = newDateTime;
    }
  };

  setInterval(tick, 1000);
    
    return (
    <div>
       <h1>Current Date and Time</h1>
      <p>{currentDateTime.toLocaleString()}</p>
    </div>
  )
}

export default DateTime
