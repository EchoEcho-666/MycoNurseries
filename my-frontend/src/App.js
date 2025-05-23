import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import Home from './pages/HomePage';
import OurPartners from './pages/OurPartners';  
import Team from './pages/TeamPage';        
import GrowingProcess from './pages/GrowingProcessPage';
import AboutMycoNurseries from './pages/AboutPage';
import Contact from './pages/Contact';
import Cta from './pages/Cta';
import Shop from './pages/Shop';
import Volunteer from './pages/Volunteer';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const HeaderWrapper = styled.div`
  position: relative;
  z-index: 10; /* Higher than animated content */
`;

const FooterWrapper = styled.div`
  position: relative;
  z-index: 10; /* Higher than animated content */
`;

const ContentWrapper = styled.main`
  flex: 1;
  position: relative;
  z-index: 1; /* Lower z-index so it sits behind header/footer */
`;

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={300} // duration in ms
      >
        <ContentWrapper>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/about-myconurseries" element={<AboutMycoNurseries />} /> 
            <Route path="/growing-process" element={<GrowingProcess />} />
            <Route path="/team" element={<Team />} />
            <Route path="/cta" element={<Cta />} />
            <Route path="/our-partners" element={<OurPartners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </ContentWrapper>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <PageWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <AnimatedRoutes />
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </PageWrapper>
    </Router>
  );
}

export default App;


