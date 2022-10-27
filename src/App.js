import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Motivation from './Motivation.js';
import CV from './CV.js';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className = 'container-fluid mb-5'>
        <div className="container">
          <div className= 'row justify-content-center'>
            <Navbar></Navbar>
          </div>
        </div>
        <div className='container mt-x'>
          {
          <Routes>
            <Route path={`/*`} element={<Home/>} />
            <Route path={`/motivation`} element={<Motivation/>} />
            <Route path={`/cv`} element={<CV/>} />
          </Routes>
          }
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
