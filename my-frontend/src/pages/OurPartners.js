import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PartnersSection = styled.section`
  padding: 3em 2em;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #FFF8ED;
  border-radius: 12px;
  text-align: center;
`;

function OurPartners() {
  return (
    <>
      <Header />
      <PartnersSection id="our-partners">
        <h1>Our Partners</h1>
        <p>Meet the organizations and individuals supporting us</p>
        <div className="partner-row">
          <img src="assets/founders/founder-1.jpg" alt="Partner Logo" className="partner-logo" />
          <p className="partner-text">Founder text about the partner.</p>
        </div>
        <div className="partner-row alternate">
          <p className="partner-text">Founder text about the partner.</p>
          <img src="assets/founders/founder-2.jpg" alt="Partner Logo" className="partner-logo" />
        </div>
        <div className="partner-row">
          <img src="assets/founders/founder-3.jpg" alt="Partner Logo" className="partner-logo" />
          <p className="partner-text">Founder text about the partner.</p>
        </div>
        <div className="partner-row">
          <img src="assets/founders/founder-4.jpg" alt="Partner Logo" className="partner-logo" />
          <p className="partner-text">Founder text about the partner.</p>
        </div>
      </PartnersSection>
      <Footer />
    </>
  );
}

export default OurPartners;