import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';

import HomePage from './pages/HomePage';
import Footer from './componentes/layout/Footer';
import { EjemploProps01 } from './componentes/props/ejemplo1';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/' element={<EjemploProps01/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
