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
          <img 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-1.jpg"} 
            alt="Sustainability Projects Fund Logo" 
            className="partner-logo" 
          />
          <p className="partner-text">
            <strong>Sustainability Projects Fund:</strong> The SPF mandate is to build a culture of sustainability on McGill campuses through interdisciplinary projects. Valued at $1 million annually, it has allocated over $10 million since 2010 to more than 260 projects.
          </p>
        </div>
        <div className="partner-row alternate">
          <img 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-2.jpg"} 
            alt="Sprout Ideas Fellowship Logo" 
            className="partner-logo" 
          />
          <p className="partner-text">
            <strong>Sprout Ideas Fellowship:</strong> This fellowship provided our CEO and board member Julia Wright with a seed grant, skill building, and mentorship, enabling her to expand our oyster mushroom growing process.
          </p>
        </div>
        <div className="partner-row">
          <img 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-3.jpg"} 
            alt="McGill University Faculty of Engineering Logo" 
            className="partner-logo" 
          />
          <p className="partner-text">
            <strong>McGill University Faculty of Engineering:</strong> Their Global Challenges Award allowed us to hire Michael Li as an intern in summer 2024, who developed a sensor system to monitor conditions in our growing area.
          </p>
        </div>
        <div className="partner-row">
          <img 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-4.jpg"} 
            alt="Dobson Centre for Entrepreneurship Logo" 
            className="partner-logo" 
          />
          <p className="partner-text">
            <strong>Dobson Centre for Entrepreneurship:</strong> As the hub for entrepreneurship at McGill, they provided coaching and development through the 2024 Dobson Weston Innovation in Sustainability Lean Program, advancing our efforts in pitch competitions.
          </p>
        </div>
      </PartnersSection>
      <Footer />
    </>
  );
}

export default OurPartners;