import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Home from './componentes/Home';
import Sobre from './componentes/About';
import Habilidades from './componentes/Habilidades';
import Projetos from './componentes/Projetos';
import Certificados from './componentes/Certificados';
import Contato from './componentes/Contato';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Sobre" element={<Sobre />} />
        <Route exact path="Habilidades" element={<Habilidades />} />
        <Route exact path="Projetos" element={<Projetos />} />
        <Route exact path="Certificados" element={<Certificados />} />
        <Route exact path="Contato" element={<Contato />} />
      </Routes>
    </div>
  );
}

export default App;
