import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import React, { useState } from 'react';

function App() {
  const [receiptData, setReceiptData] = useState("");
  const [resultId, setResultId] = useState("");
  const [checkId, setCheckId] = useState("");
  const [points, setPoints] = useState(0);

  const handleChange = (e) => {
    setReceiptData(e.target.value);
  };

  const handleIdChange = (e) => {
    setCheckId(e.target.value);
  };

  const handleAPICall = async () => {
    try {
      // Make an HTTP POST request to your Flask API
      const response = await fetch('/receipts/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          // 'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        body: JSON.stringify(receiptData),
      });

      if (response.ok) {
        // Parse the JSON response data and await it
        const responseData = await response.json();
        
        // Handle the API response here, e.g., update UI
        console.log('Response from Flask API:', responseData.id);
        setResultId(responseData.id)
      } else {
        // Handle non-OK response status codes (e.g., error responses)
        console.error('Error calling Flask API:', response.status, response.statusText);
      }

    } catch (error) {
      console.error('Error calling Flask API:', error);
    }
  };

  const handleIdAPICall = async () => {
    try {
      // Make an HTTP POST request to your Flask API
      const response = await fetch(`/receipts/${checkId}/points`);
      

      if (response.ok) {
        console.log(response)
        // Parse the JSON response data and await it
        const responseData = await response.json();
        
        // Handle the API response here, e.g., update UI
        console.log('Response from Flask API:', responseData.points);
        setPoints(responseData.points)
      } else {
        // Handle non-OK response status codes (e.g., error responses)
        console.error('Error calling Flask API:', response.status, response.statusText);
      }

    } catch (error) {
      console.error('Error calling Flask API:', error);
    }
  };

  return (
    <div className="App">
      <Header/>
      <Main checkId={checkId} 
            setCheckId={setCheckId} 
            handleIdChange={handleIdChange} 
            handleIdAPICall={handleIdAPICall}
            points={points}

            resultId={resultId} 
            receiptData={receiptData} 
            handleChange={handleChange} 
            handleAPICall={handleAPICall}/>
    </div>
  );
}

export default App;
