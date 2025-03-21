import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/HomePage';
import OurPartners from './pages/OurPartners';  
import Team from './pages/TeamPage';        
import Founders from './pages/Founders';
import GrowingProcess from './pages/GrowingProcessPage';
import AboutMycoNurseries from './pages/AboutPage';
import Contact from './pages/Contact';

function App() {
  return (
    <Router v7_startTransition v7_relativeSplatPath>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-partners" element={<OurPartners />} />
        <Route path="/team" element={<Team />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/growing-process" element={<GrowingProcess />} />
        <Route path="/about-myconurseries" element={<AboutMycoNurseries />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


