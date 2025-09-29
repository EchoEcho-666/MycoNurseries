import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Container = styled.section`
  padding: 1em 2em;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #FFF8ED;
  border-radius: 12px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  margin: 2em 0;
`;

const Heading = styled.h2`
`;

const Paragraph = styled.p`
`;

const SectionTitle = styled.h2`
  color: #39683B;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.628rem;
  font-weight: bold;
  margin-bottom: 0.5em;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background-color: #A52A2A;
    margin: 0.28em auto 0;
  }
`;

function GrowingProcess() {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Heading>{t('components.growingProcess.title')}</Heading>
        <Paragraph>{t('components.growingProcess.text1')}</Paragraph>
        <Paragraph>{t('components.growingProcess.text2')}</Paragraph>
        <Image src={process.env.PUBLIC_URL + "/assets/growing-process/Myco Flow Chart.png"} alt="Mushroom Growing Flowchart" />
        <SectionTitle>{t('components.growingProcess.sectionTitle1')}</SectionTitle>
        <Paragraph>{t('components.growingProcess.text3')}</Paragraph>
        <Paragraph>{t('components.growingProcess.text4')}</Paragraph>
        <Image src={process.env.PUBLIC_URL + "/assets/growing-process/group.webp"} alt="Group Picture" />
        <Image src={process.env.PUBLIC_URL + "/assets/growing-process/growBag.webp"} alt="Grow Bag" />
        <Image src={process.env.PUBLIC_URL + "/assets/growing-process/mushroom.webp"} alt="Mushroom" />      
      </Container>
    </>
  );
}

export default GrowingProcess;
