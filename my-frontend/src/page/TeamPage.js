import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeamContainer = styled.section`
  padding: 3em 2em;
  background-color: #FFF8ED;
  text-align: center;
`;

const TeamHeading = styled.h2`
  color: #39683B;
  font-size: 2rem;
  margin-bottom: 1em;
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
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 20px;
  max-width: 300px;
  text-align: left;
`;

function TeamPage() {
  return (
    <>
      <Header />
      <TeamContainer id="team">
        <TeamHeading>Meet the Team</TeamHeading>
        <TeamRow>
          {/* Repeat for each team member */}
          <TeamCard>
            <img src="assets/team-member/julia-picture.jpg" alt="Julia" style={{ width: "100%", borderRadius: "10px" }} />
            <div>
              <h3>About Julia</h3>
              <p>Julia studies chemistry and mathematics at McGill University and enjoys promoting sustainability. When not growing mushrooms, she hikes, knits, and spends time with family.</p>
            </div>
          </TeamCard>
          <TeamCard>
            <img src="assets/team-member/minh-picture.JPG" alt="Minh" style={{ width: "100%", borderRadius: "10px" }} />
            <div>
              <h3>About Minh</h3>
              <p>Minh is a final-year Pharmacology student at McGill University. She researches sustainability strategies and loves her cats and music.</p>
            </div>
          </TeamCard>
          <TeamCard>
            <img src="assets/team-member/nico-picture.jpg" alt="Nico" style={{ width: "100%", borderRadius: "10px" }} />
            <div>
              <h3>About Nico</h3>
              <p>Nico, a final-year Cognitive Science student at McGill, explores fungal sustainable solutions. He enjoys puzzles, drawing, and geeking out over TV shows.</p>
            </div>
          </TeamCard>
        </TeamRow>
      </TeamContainer>
      <Footer />
    </>
  );
}

export default TeamPage;