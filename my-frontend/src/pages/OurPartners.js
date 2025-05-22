import React from 'react';
import styled from 'styled-components';

const PartnersSection = styled.section`
  padding: 1em 2em;
  max-width: 68%;
  margin: 0 auto;
  background-color: #FFF8ED;
  border-radius: 12px;
  text-align: center;
`;

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

const PartnerTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0.2em;
  padding: 1em;
  text-align: left;
  background-color: #39683B; /* dark green background */
  border-radius: 8px;
`;


const PartnerText = styled.p`
  flex: 1;
  margin: 0.5em;
  text-align: left;
  color: #FFE7C9
`;

function OurPartners() {
  return (
    <>
      <PartnersSection id="our-partners">
        <h2>Our Partners</h2>
        <p>Meet the organizations and individuals supporting us!</p>
        {/* Row 1: Logo | Founder text */}
        <PartnerRow>
          <PartnerLogo 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-1.jpg"} 
            alt="Sustainability Projects Fund Logo" 
          />
          <PartnerTextGroup>
            <PartnerText>
              The Sustainability Projects Fund (SPF) mandate is to build a culture of sustainability on McGill campuses through the development and seed-funding of interdisciplinary projects. It creates opportunities for the McGill community to actively engage in sustainability initiatives on campus, empowering individuals to be change agents in their own studying and work environment. Valued at $1 million annually, the SPF is the largest fund of its kind in Canada. Since 2010, more than $10 million has been allocated toward over 260 projects.
            </PartnerText>
            <PartnerText>
              We’re grateful to the Sustainability Projects Fund for providing us with seed funding to kickstart our project. With their support, we secured a place in the McGill University Phytotron and produced our very first batch of oyster mushrooms.
            </PartnerText>
          </PartnerTextGroup>
        </PartnerRow>
        {/* Row 2: Founder text | Logo */}
        <PartnerRow className="reverse">
          <PartnerTextGroup>
            <PartnerText>
              The Sprout Ideas Fellowship provided MycoNurseries CEO and board member Julia Wright with access to a seed grant, skill building, and mentorship. The Sprout Ideas Fellowship is funded in part by Canada Service Corps, a national movement that empowers youth aged 15 to 30 to gain experience and build important skills while giving back to their community.
            </PartnerText>
            <PartnerText>
              Julia completed several learning modules to become a better social innovator and is currently expanding MycoNurseries mushrooms growing process through the seed grant.
            </PartnerText>
          </PartnerTextGroup>
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
          <PartnerTextGroup>
            <PartnerText>
              The McGill University’s Faculty of Engineering Global Challenges Award allows undergraduate students to participate in experiential learning opportunities providing them with experience in teamwork, leadership, and communication within the greater community, further complementing the education they receive.
            </PartnerText>
            <PartnerText>
              Through the Global Challenges Award, we hired Michael Li as an intern in the summer of 2024. He developed a sensor system to monitor conditions in the growing area and helped with operations.
            </PartnerText>
          </PartnerTextGroup>
        </PartnerRow>
        {/* Row 4: Founder text | Logo */}
        <PartnerRow className="reverse">
          <PartnerTextGroup>
            <PartnerText>
              The Dobson Centre for Entrepreneurship is the hub of entrepreneurship at McGill University with the mission to teach, coach, and support entrepreneurs stemming from across McGill as they seek to build innovative companies with a purpose.
            </PartnerText>
            <PartnerText>
              The Dobson Centre for Entrepreneurship has provided invaluable coaching and development to MycoNurseries members as they completed the 2024 Dobson Weston Innovation in Sustainability Lean Program. They are now semi-finalists in the McGill Dobson Bootcamp and Cup, where they are learning more about operating a non-profit and preparing for a pitch competition in April.
            </PartnerText>
          </PartnerTextGroup>
          <PartnerLogo 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-4.jpg"} 
            alt="Dobson Centre for Entrepreneurship Logo" 
          />
        </PartnerRow>
      </PartnersSection>
    </>
  );
}

export default OurPartners;

