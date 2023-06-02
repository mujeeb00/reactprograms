import React, { useState } from 'react';

function DiscountMessage() {
  const threshold = 50;
  const [price, setPrice] = useState('');

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const discountMessage = price < threshold ? 'Discount applied!' : '';

  return (
    <div>
      <label>
        Price: $
        <input type="number" value={price} onChange={handleChange} />
      </label>
      {discountMessage && <p>{discountMessage}</p>}
    </div>
  );
}

export default DiscountMessage;
