// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import HomePage from './pages/HomePage';
import OurPartners from './pages/OurPartners';  
import TeamPage from './pages/TeamPage';        
import FounderPage from './page/FounderPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/our-partners" component={OurPartners} />
        <Route path="/team" component={TeamPage} />
        <Route path="/founders" component={FounderPage} />
      </Switch>
    </Router>
  );
}

export default App;

