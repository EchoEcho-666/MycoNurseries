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
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 300px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const TeamImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const TeamInfo = styled.div`
  margin-top: 1em;
  
  h3 {
    margin: 0.5em 0;
    color: #39683B;
    font-size: 1.2rem;
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
        <TeamHeading>Meet the Team</TeamHeading>
        <TeamRow>
          <TeamCard>
            <TeamImage src={process.env.PUBLIC_URL + '/assets/team-member/julia-picture.jpg'} alt="Julia" />
            <TeamInfo>
              <h3>About Julia</h3>
              <p>
                Julia studies chemistry and mathematics at McGill University and enjoys promoting sustainability. When not growing mushrooms, she hikes, knits, and spends time with family.
              </p>
            </TeamInfo>
          </TeamCard>
          <TeamCard>
            <TeamImage src={process.env.PUBLIC_URL + '/assets/team-member/minh-picture.JPG'} alt="Minh" />
            <TeamInfo>
              <h3>About Minh</h3>
              <p>
                Minh is a final-year Pharmacology student at McGill University. She researches sustainability strategies and loves her cats and music.
              </p>
            </TeamInfo>
          </TeamCard>
          <TeamCard>
            <TeamImage src={process.env.PUBLIC_URL + '/assets/team-member/nico-picture.jpg'} alt="Nico" />
            <TeamInfo>
              <h3>About Nico</h3>
              <p>
                Nico, a final-year Cognitive Science student at McGill, explores fungal sustainable solutions. He enjoys puzzles, drawing, and geeking out over TV shows.
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
