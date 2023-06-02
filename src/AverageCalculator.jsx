import React, { useState } from 'react';

function AverageCalculator() {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(0);

  const handleChange = (event) => {
    setNumbers(event.target.value);
  };

  const calculateAverage = () => {
    const numberArray = numbers.split(',').map(Number);
    const sum = numberArray.reduce((total, num) => total + num, 0);
    const avg = sum / numberArray.length || 0;
    setAverage(avg.toFixed(2));
  };

  return (
    <div>
      <input type="text" value={numbers} onChange={handleChange} />
      <button onClick={calculateAverage}>Calculate Average</button>
      {average ? <p>Average: {average}</p> : null}
    </div>
  );
}

export default AverageCalculator;
