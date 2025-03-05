// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import HomePage from './pages/HomePage';       // Contains your homepage layout
import OurPartners from './pages/OurPartners';   // Separate page component
import TeamPage from './pages/TeamPage';         // Separate page component

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/our-partners" component={OurPartners} />
        <Route path="/team" component={TeamPage} />
      </Switch>
    </Router>
  );
}

export default App;

