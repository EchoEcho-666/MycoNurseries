import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <TeamContainer id="team">
      <TeamIntro>
        <TeamPhotoContainer>
          <TeamPhoto src={process.env.PUBLIC_URL + '/assets/team-photo.jpg'} alt="Team Photo" />
        </TeamPhotoContainer>
        <TeamText>
          <Heading>{t('components.team.title')}</Heading>
          <Description>{t('components.team.text1')}</Description>
          <Description>{t('components.team.text2')}</Description>
          <ButtonContainer>
            <Link to="/team" className="button">
              {t('components.team.link')}
            </Link>
          </ButtonContainer>
        </TeamText>
      </TeamIntro>
    </TeamContainer>
  );
}

export default TeamSection;

