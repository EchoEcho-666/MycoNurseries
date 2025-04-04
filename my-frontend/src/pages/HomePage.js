import React from 'react';
import Slideshow from '../components/Slideshow';
import About from '../components/About';
import Team from '../components/TeamSection';
import GrowingProcessSection from '../components/GrowingProcessSection';

function HomePage() {
  return (
    <>
      <Slideshow />
      <About />
      <GrowingProcessSection />
      <Team />
    </>
  );
}

export default HomePage;
