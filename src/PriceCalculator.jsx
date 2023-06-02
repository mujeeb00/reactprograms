import React from 'react';

class PriceCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
      unitPrice: 0,
    };
  }

  handleQuantityChange = (event) => {
    this.setState({ quantity: parseInt(event.target.value) });
  };

  handleUnitPriceChange = (event) => {
    this.setState({ unitPrice: parseFloat(event.target.value) });
  };

  calculateTotalPrice = () => {
    const { quantity, unitPrice } = this.state;
    return quantity * unitPrice;
  };

  render() {
    const { quantity, unitPrice } = this.state;
    const totalPrice = this.calculateTotalPrice();

    return (
      <div>
        <h1>Price Calculator</h1>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={this.handleQuantityChange} />
        </label>
        <br />
        <label>
          Unit Price:
          <input type="number" value={unitPrice} onChange={this.handleUnitPriceChange} />
        </label>
        <br />
        <p>Total Price: {totalPrice}</p>
      </div>
    );
  }
}

export default PriceCalculator;
