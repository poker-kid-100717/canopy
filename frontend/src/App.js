import React, { useState } from 'react';
import InputForm from './components/InputForm';
import OutputDisplay from './components/OutputDisplay';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  const handleFormSubmit = async (data) => {
    const response = await fetch('http://127.0.0.1:5000/prorate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const resultData = await response.json();
    setResult(resultData);
  };

  return (
    <div className="App">
      <h1>Investment Allocation Proration</h1>
      <InputForm onSubmit={handleFormSubmit} />
      {result && <OutputDisplay result={result} />}
    </div>
  );
}

export default App;
