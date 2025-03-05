import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import OurPartners from './pages/OurPartners';  
import Team from './pages/Team';        
import Founders from './pages/Founders';

function App() {
  return (
    <Router>
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
console.log("App Loaded");
console.log("React is running")
export default App;

