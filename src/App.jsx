import './App.css';
import Navbar from './Navbar.jsx'
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Links from './Links.jsx';
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [animateTrigger, setAnimateTrigger] = useState(false)
  const animate = () => setAnimateTrigger(prevState => !prevState)

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

  return (
    <>
      <Navbar isMobile={isMobile}/>
      <Routes>
          <Route path="*" element={<Navigate to="/about" replace />}/>
          <Route path="/about" element={<AboutMe isMobile={isMobile}/>}/>
          <Route path="/links" element={<Links isMobile={isMobile}/>} />
          <Route path="/projects" element={<Projects isMobile={isMobile}/>} />
      </Routes>
    </>
  )
}

export default App
