import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./components/homePage";
import UserPage from "./components/userPage";
import CreditPage from "./components/creditPage";
import DebitPage from "./components/debitPage";
import TransferPage from "./components/transferPage";
import './App.css'; // Import CSS for styling

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to change loading state after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clean up the timer when the component unmounts or updates
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">

          <div class="boxes">
            <div class="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="content">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/userPage' element={<UserPage />}/>
              <Route path='/creditPage' element={<CreditPage />}/>
              <Route path='/debitPage' element={<DebitPage />}/>
              <Route path='/transferPage' element={<TransferPage />}/>
              
            </Routes>
          </BrowserRouter>
        </div>

      )
      }
    </div >
  );
}

export default App;
