import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Motivation from './Motivation.js';
import Education from './Education.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Credits from './Credits.js';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className = 'container-fluid mb-x'>
        <div key='nav_container' className="container">
          <div className= 'row justify-content-center'>
            <Navbar></Navbar>
          </div>
        </div>
        <div key='main_container' className='container mt-x'>
          {
          <Routes>
            <Route path={`/*`} element={<Home/>} />
            <Route path={`/motivation`} element={<Motivation/>} />
            <Route path={`/education`} element={<Education/>} />
            <Route path={`/projects`} element={<Projects/>} />
            <Route path={`/contact`} element={<Contact/>} />
            <Route path={`/credits`} element={<Credits/>} />
          </Routes>
          }
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
