import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* 
const Section = styled.section`
  padding: 2em 1em;
  background-color: #E3F1DD;
  text-align: center;
  max-width: 68%;
  margin: 3em auto;
  border-radius: 12px;
`;

const Heading = styled.h2`
`;

const Paragraph = styled.p`
`;

const ButtonContainer = styled.div`
  margin-top: 1em;
`;
*/


const Section = styled.section`
  padding: 2em 1em;
  background-color: #39683B; // base dark green
  text-align: center;
  max-width: 68%;
  margin: 3em auto;
  border-radius: 12px;
`;

const Heading = styled.h2`
  color: #FFE7C9; // soft ivory white

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background-color:rgb(182, 137, 86); // muted warm gold
    margin: 0.28em auto 0;
  }
`;

const Paragraph = styled.p`
  color: #FFE7C9;
`;

const ButtonContainer = styled.div`
  margin-top: 1em;

  .button {
    background-color:rgb(182, 137, 86); 
    color: #FFF8ED; 
    padding: 0.5em 1em;
    font-size: 1.1em;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .button:hover {
    background-color: #644F34;
    transform: scale(1.05);
  }
`;


/*
const Section = styled.section`
  padding: 2em 1em;
  background-color: #FBEEDB; // warm oatmeal
  text-align: center;
  max-width: 68%;
  margin: 3em auto;
  border-radius: 12px;
`;

const Heading = styled.h2`
  color: #382F2F; // deep brown

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background-color: #E07A5F; // clay red
    margin: 0.28em auto 0;
  }
`;

const Paragraph = styled.p`
  color: #382F2F;
`;

const ButtonContainer = styled.div`
  margin-top: 1em;

  .button {
    background-color: #E07A5F; // clay red
    color: #FFF8ED;            // light beige
    padding: 0.5em 1em;
    font-size: 1.1em;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .button:hover {
    background-color: #644F34; // stronger orange tone
    transform: scale(1.05);
  }
`;
*/
/*
const Section = styled.section`
  padding: 2em 1em;
  background-color: #FAF3E0; // warm ivory
  text-align: center;
  max-width: 68%;
  margin: 3em auto;
  border-radius: 12px;
`;

const Heading = styled.h2`
  color: #5C3A21; // espresso

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background-color: #C97F23; // amber gold
    margin: 0.28em auto 0;
  }
`;

const Paragraph = styled.p`
  color: #5C3A21;
`;

const ButtonContainer = styled.div`
  margin-top: 1em;

  .button {
    background-color: #C97F23; // honey gold
    color: #FFF8ED;
    padding: 0.5em 1em;
    font-size: 1.1em;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .button:hover {
    background-color: #A56319; // toasted gold
    transform: scale(1.05);
  }
`;
*/


function GrowingProcessSection() {
  const { t } = useTranslation();

  return (
    <Section id="growing-process">
      <Heading>{t('components.growingProcess.title')}</Heading>
      <Paragraph>{t('components.growingProcess.text')}</Paragraph>
      <ButtonContainer>
        <Link to="/growing-process" className="button">
          {t('components.growingProcess.link')}
        </Link>
      </ButtonContainer>
    </Section>
  );
}


export default GrowingProcessSection;
