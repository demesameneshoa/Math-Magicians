import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './logic/calculate';
import styles from './App.module.css';

function App() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const handleClick = (buttonName) => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Let&apos;s Do Some Math</h2>
      </div>
      <div className="App">
        <Display result={next || total || '0'} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>

  );
}

export default App;
