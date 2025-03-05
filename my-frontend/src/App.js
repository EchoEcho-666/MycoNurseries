import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import OurPartners from './pages/OurPartners';  
import Team from './pages/Team';        
import Founders from './pages/Founders';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/our-partners" element={<OurPartners />} />
        <Route path="/team" element={<Team />} />
        <Route path="/founders" element={<Founders />} />
      </Route>
    </Router>
  );
}
console.log("App Loaded");
export default App;

