import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Section = styled.section`
  padding: 2em 1em;
  margin: 0 auto;
  max-width: 68%;
  background-color: #FFF8ED;
  border-radius: 12px;
  text-align: center;
`;

const Heading = styled.h2`
`;

const Paragraph = styled.p`
`;

const ButtonContainer = styled.div`
  margin-top: 1em;
`;


function AboutSection() {
  const { t } = useTranslation();
  
  return (
    <Section id="about">
      <Heading>{t('components.about.title')}</Heading>
      <Paragraph>{t('components.about.text1')}</Paragraph>
      <Paragraph>{t('components.about.text2')}</Paragraph>
      <Paragraph>{t('components.about.text3')}</Paragraph>
      <ButtonContainer>
        <Link to="/about-myconurseries" className="button">
          {t('components.about.link')}
        </Link>
      </ButtonContainer>
    </Section>
  );
}

export default AboutSection;
