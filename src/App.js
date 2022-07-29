import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Donations from './components/pages/Donations';

function App() {
  const [status, setStatus] = useState('');
  const [headerStatus, setHeaderStatus] = useState('');
  const desktopWidth = 1024;
  var lastX = window.innerWidth;

  function ToggleMenu() {
      if (status === "") {
          setStatus('active');
          return;
      }
      setStatus('');
  }

  function HandleScroll() {
    if(window.scrollY > 0) {
        setHeaderStatus('fixed');
        return;
    }
    setHeaderStatus('');
}

 function HandleResize() {
    var x = window.innerWidth;
    if (lastX <= desktopWidth & desktopWidth < x) {
        setStatus('');
    }
    lastX = x;
  }

  useEffect(() => {
    window.addEventListener('resize', HandleResize);

    return () => window.removeEventListener('resize', HandleResize);
  }, [HandleResize]);

  useEffect(() => {
    window.addEventListener('scroll', HandleScroll);

    return () => window.removeEventListener('scroll', HandleScroll);
}, [HandleScroll]);

  return (
    <Router>
      <div className={"app " + status}>
        <Header ToggleMenu={ToggleMenu} status={status} headerStatus={headerStatus}/>
        <div className='screen'>
          <div className='container__M'>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/gallery" element={<Gallery />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/donations" element={<Donations />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;