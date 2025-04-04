import React from 'react';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import About from '../components/About';
import Team from '../components/TeamSection';
import GrowingProcessSection from '../components/GrowingProcessSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Slideshow />
      <About />
      <GrowingProcessSection />
      <Team />
      <Footer />
    </>
  );
}

export default HomePage;
