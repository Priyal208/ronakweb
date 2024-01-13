import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NinthStd from './pages/NinthStd';
import TenthStd from './pages/TenthStd';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/ninthstd' element={<NinthStd/>}/>
          <Route path='/tenthstd' element={<TenthStd/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;