import React from 'react';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import About from '../components/About';
import Team from '../components/Team';
import MushroomProcess from '../components/MushroomProcess';
import News from '../components/News';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Slideshow />
      <About />
      <Team />
      <MushroomProcess />
      <News />
      <Footer />
    </>
  );
}

export default HomePage;
