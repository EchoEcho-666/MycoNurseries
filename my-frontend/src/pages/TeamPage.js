import React from 'react';
import styled from 'styled-components';

const TeamContainer = styled.section`
  padding: 3em 2em;
  background-color: #FFF8ED;
  text-align: center;
  max-width: 2000px;
  margin: 0 auto;
`;

const TeamHeading = styled.h2`
  color: #39683B;
  font-size: 2.5rem;
  margin-bottom: 1em;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background-color: #A52A2A;
    margin: 0.5em auto 0;
  }
`;

const TeamRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const TeamCard = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TeamImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const TeamInfo = styled.div`
  padding: 15px;
  text-align: left;
  
  h3 {
    margin: 0.5em 0;
    color: #39683B;
    font-size: 1.2rem;
  }

  h4 {
    margin: 0;
    font-size: 1rem;
    color: #A52A2A;
    font-weight: bold;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #382F2F;
  }
`;

function TeamPage() {
  return (
    <>
      <TeamContainer id="team">

        {/* Founders Section */}
        <TeamHeading>Our Founders</TeamHeading>
        <TeamRow>
          <TeamCard>
            <TeamImage src={process.env.PUBLIC_URL + '/assets/team-member/julia-picture.jpg'} alt="Julia" />
            <TeamInfo>
              <h3>Julia Wright</h3>
              <h4>Co-Founder & CEO</h4>
              <p>
                Julia studies chemistry and mathematics at McGill University and enjoys promoting sustainability.
                When not growing mushrooms, she hikes, knits, and spends time with family.
              </p>
            </TeamInfo>
          </TeamCard>
        </TeamRow>

        {/* General Team Section */}
        <TeamHeading>Meet the Team</TeamHeading>
        <TeamRow>
          <TeamCard>
            <TeamImage src={process.env.PUBLIC_URL + '/assets/team-member/minh-picture2.jpg'} alt="Minh" />
            <TeamInfo>
              <h3>Minh Nguyen</h3>
              <h4>Research Lead</h4>
              <p>
                Minh is a final-year Pharmacology student at McGill University. She researches sustainability strategies
                and loves her cats and music.
              </p>
            </TeamInfo>
          </TeamCard>

          <TeamCard>
            <TeamImage src={process.env.PUBLIC_URL + '/assets/team-member/nico-picture.jpg'} alt="Nico" />
            <TeamInfo>
              <h3>Nico Alvarez</h3>
              <h4>Sustainability Strategist</h4>
              <p>
                Nico, a final-year Cognitive Science student at McGill, explores fungal sustainable solutions.
                He enjoys puzzles, drawing, and geeking out over TV shows.
              </p>
            </TeamInfo>
          </TeamCard>

          <TeamCard>
            <TeamImage src={process.env.PUBLIC_URL + '/assets/team-member/michael-picture.jpg'} alt="Michael" />
            <TeamInfo>
              <h3>Michael Li</h3>
              <h4>Technology & Data Lead</h4>
              <p>
                Michael developed a sensor system to monitor environmental conditions in our mushroom-growing area.
                He is passionate about tech solutions for sustainability.
              </p>
            </TeamInfo>
          </TeamCard>
        </TeamRow>

      </TeamContainer>
    </>
  );
}

export default TeamPage;


/*
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeamContainer = styled.section`
  padding: 3em 2em;
  background-color: #FFF8ED;
  text-align: center;
  max-width: 2000px;
  margin: 0 auto;
`;

const TeamHeading = styled.h2`
  color: #39683B;
  font-size: 2.5rem;
  margin-bottom: 1em;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background-color: #A52A2A;
    margin: 0.5em auto 0;
  }
`;

const TeamRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const TeamCard = styled.div`
  position: relative;
  max-width: 300px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:hover img {
    opacity: 0.2;
  }
  &:hover div {
    opacity: 1;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  display: block;
  transition: opacity 0.3s ease;
`;

const TeamInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px;
  background-color: rgba(255, 248, 237, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;

  h3 {
    margin: 0.5em 0;
    color: #39683B;
    font-size: 1.2rem;
  }

  h4 {
    margin: 0;
    font-size: 1rem;
    color: #A52A2A;
    font-weight: bold;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #382F2F;
  }
`;

function TeamPage() {
  return (
    <>
      <Header />
      <TeamContainer id="team">
        <TeamHeading>Our Founders</TeamHeading>
        <TeamRow>
          <TeamCard>
            <TeamImage src={process.env.PUBLIC_URL + '/assets/team-member/julia-picture.jpg'} alt="Julia" />
            <TeamInfo>
              <h3>Julia Wright</h3>
              <h4>Co-Founder & CEO</h4>
              <p>
                Julia studies chemistry and mathematics at McGill University and enjoys promoting sustainability.
                When not growing mushrooms, she hikes, knits, and spends time with family.
              </p>
            </TeamInfo>
          </TeamCard>

          <TeamCard>
            <TeamImage src={process.env.PUBLIC_URL + '/assets/team-member/daniel-picture.jpg'} alt="Daniel" />
            <TeamInfo>
              <h3>Daniel Cha</h3>
              <h4>Co-Founder & CTO</h4>
              <p>
                Daniel is passionate about using fungi to improve sustainability and waste management. 
                He has experience in biological research and tech innovation.
              </p>
            </TeamInfo>
          </TeamCard>
        </TeamRow>

        <TeamHeading>Meet the Team</TeamHeading>
        <TeamRow>
          <TeamCard>
            <TeamImage src={process.env.PUBLIC_URL + '/assets/team-member/minh-picture2.jpg'} alt="Minh" />
            <TeamInfo>
              <h3>Minh Nguyen</h3>
              <h4>Research Lead</h4>
              <p>
                Minh is a final-year Pharmacology student at McGill University. She researches sustainability strategies
                and loves her cats and music.
              </p>
            </TeamInfo>
          </TeamCard>

          <TeamCard>
            <TeamImage src={process.env.PUBLIC_URL + '/assets/team-member/nico-picture.jpg'} alt="Nico" />
            <TeamInfo>
              <h3>Nico Alvarez</h3>
              <h4>Sustainability Strategist</h4>
              <p>
                Nico, a final-year Cognitive Science student at McGill, explores fungal sustainable solutions.
                He enjoys puzzles, drawing, and geeking out over TV shows.
              </p>
            </TeamInfo>
          </TeamCard>

          <TeamCard>
            <TeamImage src={process.env.PUBLIC_URL + '/assets/team-member/michael-picture.jpg'} alt="Michael" />
            <TeamInfo>
              <h3>Michael Li</h3>
              <h4>Technology & Data Lead</h4>
              <p>
                Michael developed a sensor system to monitor environmental conditions in our mushroom-growing area.
                He is passionate about tech solutions for sustainability.
              </p>
            </TeamInfo>
          </TeamCard>
        </TeamRow>
      </TeamContainer>
      <Footer />
    </>
  );
}

export default TeamPage;
*/