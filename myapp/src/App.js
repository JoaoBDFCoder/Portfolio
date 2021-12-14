import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Home from './componentes/Home';
import About from './componentes/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
