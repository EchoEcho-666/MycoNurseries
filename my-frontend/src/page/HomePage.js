// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import CTASection from '../components/CTASection';
import MushroomProcessSection from '../components/MushroomProcessSection';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Slideshow />
      <AboutSection />
      <TeamSection />
      <CTASection />
      <MushroomProcessSection />
      <NewsSection />
      <Footer />
    </>
  );
}

export default HomePage;
