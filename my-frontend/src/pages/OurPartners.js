import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PartnersSection = styled.section`
  padding: 3em 2em;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #FFF8ED;
  border-radius: 12px;
  text-align: center;
`;

/*
const PartnerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em 0;
  flex-wrap: wrap;

  &.reverse {
    flex-direction: row-reverse;
  }
`;
*/

const PartnerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em 0;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

const PartnerLogo = styled.img`
  width: 300px;
  height: auto;
  margin: 1em;
`;

const PartnerText = styled.p`
  flex: 1;
  margin: 1em;
  text-align: left;
`;

function OurPartners() {
  return (
    <>
      <Header />
      <PartnersSection id="our-partners">
        <h1>Our Partners</h1>
        <p>Meet the organizations and individuals supporting us</p>
        {/* Row 1: Logo | Founder text */}
        <PartnerRow>
          <PartnerLogo 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-1.jpg"} 
            alt="Sustainability Projects Fund Logo" 
          />
          <PartnerText>
            <strong>Sustainability Projects Fund:</strong> The SPF mandate is to build a culture of sustainability on McGill campuses through interdisciplinary projects. Valued at $1 million annually, it has allocated over $10 million since 2010 to more than 260 projects.
          </PartnerText>
        </PartnerRow>
        {/* Row 2: Founder text | Logo */}
        <PartnerRow className="reverse">
          <PartnerText>
            <strong>Sprout Ideas Fellowship:</strong> This fellowship provided our CEO and board member Julia Wright with a seed grant, skill building, and mentorship, enabling her to expand our oyster mushroom growing process.
          </PartnerText>
          <PartnerLogo 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-2.jpg"} 
            alt="Sprout Ideas Fellowship Logo" 
          />
        </PartnerRow>
        {/* Row 3: Logo | Founder text */}
        <PartnerRow>
          <PartnerLogo 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-3.jpg"} 
            alt="McGill University Faculty of Engineering Logo" 
          />
          <PartnerText>
            <strong>McGill University Faculty of Engineering:</strong> Their Global Challenges Award allowed us to hire Michael Li as an intern in summer 2024, who developed a sensor system to monitor conditions in our growing area.
          </PartnerText>
        </PartnerRow>
        {/* Row 4: Founder text | Logo */}
        <PartnerRow className="reverse">
          <PartnerText>
            <strong>Dobson Centre for Entrepreneurship:</strong> As the hub for entrepreneurship at McGill, they provided coaching and development through the 2024 Dobson Weston Innovation in Sustainability Lean Program, advancing our efforts in pitch competitions.
          </PartnerText>
          <PartnerLogo 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-4.jpg"} 
            alt="Dobson Centre for Entrepreneurship Logo" 
          />
        </PartnerRow>
      </PartnersSection>
      <Footer />
    </>
  );
}

export default OurPartners;

