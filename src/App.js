import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import './App.css';

function App() {
  return (
    <>
      <div className="Calculator-container">
        <Calculator />
      </div>
      <div className="quote-container">
        <Quote />
      </div>
    </>
  );
}

export default App;
