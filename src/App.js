import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import Home from './components/Home';
import './App.css';

const App = () => (
  <>
    <nav style={{ display: 'grid', gridTemplateColumns: 'auto auto', width: '90vw' }}>
      <div>
        <h1> Math-Magicians</h1>
      </div>
      <div style={{ justifySelf: 'flex-end' }}>
        <ul>
          <li>
            <Link to="/Math-Magicians/">Home</Link>
          </li>
          <li>
            <Link to="/Math-Magicians/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/Math-Magicians/quote">Quote</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/Math-Magicians/" element={<Home />} />
      <Route path="/Math-Magicians/calculator" element={<Calculator />} />
      <Route path="/Math-Magicians/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
