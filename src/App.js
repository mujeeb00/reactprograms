import logo from './logo.svg';
import './App.css';
import DateTime from './DateTime';
import PriceCalculator from './PriceCalculator';
import Message from './Message';
import ProgressBar from './ProgressBar';
import AverageCalculator from './AverageCalculator';
import DiscountMessage from './DiscountMessage';

function App() {
  return (
    <div className="App">
      <DateTime/>
      <PriceCalculator/>
      <Message/>
      <ProgressBar/>
      <AverageCalculator/>
      <DiscountMessage/>
    </div>
  );
}

export default App;
