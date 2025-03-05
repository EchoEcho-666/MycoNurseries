import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/HomePage';
import OurPartners from './pages/OurPartners';  
import Team from './pages/TeamPage';        
import Founders from './pages/Founders';

function App() {
  return (
    <Router v7_startTransition v7_relativeSplatPath>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-partners" element={<OurPartners />} />
        <Route path="/team" element={<Team />} />
        <Route path="/founders" element={<Founders />} />
      </Routes>
    </Router>
  );
}

export default App;


