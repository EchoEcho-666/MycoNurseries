import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import GlobalStyle from './GlobalStyle';

import Home from './pages/HomePage';
import OurPartners from './pages/OurPartners';  
import Team from './pages/TeamPage';        
import Founders from './pages/Founders';
import GrowingProcess from './pages/GrowingProcessPage';
import AboutMycoNurseries from './pages/AboutPage';
import Contact from './pages/Contact';
import Cta from './pages/Cta';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={300} // duration in ms
      >
      <Routes location={location}>
      <Route path="/" element={<Home />} />
          <Route path="/our-partners" element={<OurPartners />} />
          <Route path="/team" element={<Team />} />
          <Route path="/cta" element={<Cta />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/growing-process" element={<GrowingProcess />} />
          <Route path="/about-myconurseries" element={<AboutMycoNurseries />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  return (
    <Router v7_startTransition v7_relativeSplatPath>
      <GlobalStyle />
      <AnimatedRoutes />
    </Router>
  );
}
export default App;


