import React, { useEffect } from 'react';
import Header from './components/header/Header';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Donations from './components/pages/Donations';
import useSidebar from './hooks/useSidebar';
import useHeader from './hooks/useHeader';

function App() {

  const {toggleSidebar, sidebarState} = useSidebar();
  const {setCurrentHeaderIndex, currentHeaderIndex} = useHeader();

  return (
    <Router>
      <div className={"app " + sidebarState}>
        <Header toggleSidebar={toggleSidebar} sidebarState={sidebarState} currentHeaderIndex={currentHeaderIndex}/>
        <div className='screen'>
          <Routes>
            <Route path="/" element={<Home setCurrentHeaderIndex={setCurrentHeaderIndex}/>}/>
            <Route path="/about" element={<About setCurrentHeaderIndex={setCurrentHeaderIndex}/>}/>
            <Route path="/gallery" element={<Gallery setCurrentHeaderIndex={setCurrentHeaderIndex}/>}/>
            <Route path="/contact" element={<Contact setCurrentHeaderIndex={setCurrentHeaderIndex}/>}/>
            <Route path="/donations" element={<Donations setCurrentHeaderIndex={setCurrentHeaderIndex}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;