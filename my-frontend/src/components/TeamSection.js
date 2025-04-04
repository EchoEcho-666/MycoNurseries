import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TeamContainer = styled.section`
  padding: 2em 1em;
  background-color: #FFF8ED;
  text-align: center;
  max-width: 68%;
  margin:  auto;
  margin-bottom: 2em;
`;

const TeamIntro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  flex-wrap: wrap;
`;

const TeamPhotoContainer = styled.div`
  flex: 0 0 50%;
  position: relative;
  margin: 0;
`;

const TeamPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TeamText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  box-sizing: border-box;
`;

const Heading = styled.h2`
`;

const Description = styled.p`
`;

const ButtonContainer = styled.div`
  margin-top: 1em;
`;

function TeamSection() {
  return (
    <TeamContainer id="team">
      <TeamIntro>
        <TeamPhotoContainer>
          <TeamPhoto src={process.env.PUBLIC_URL + '/assets/team-photo.jpg'} alt="Team Photo" />
        </TeamPhotoContainer>
        <TeamText>
          <Heading>Meet the Team</Heading>
          <Description>
            Our team is a group of passionate individuals working together to promote sustainability
            through innovative fungiculture solutions. We’re dedicated to fostering community, learning,
            and sustainability at every step.
          </Description>
          <ButtonContainer>
            <Link to="/team" className="button">Learn more about the team</Link>
          </ButtonContainer>
        </TeamText>
      </TeamIntro>
    </TeamContainer>
  );
}

export default TeamSection;

