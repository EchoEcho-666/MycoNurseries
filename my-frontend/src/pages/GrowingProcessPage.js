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

function GrowingProcess() {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Heading>{t('components.growingProcess.title')}</Heading>
        <Paragraph>{t('components.growingProcess.text')}</Paragraph>
        
        <Image src={process.env.PUBLIC_URL + "/assets/growing-process/flowchart.jpg"} alt="Mushroom Growing Flowchart" />
        <Paragraph>{t('components.growingProcess.flowchartDesc')}</Paragraph>

        <Image src={process.env.PUBLIC_URL + "/assets/growing-process/infographic.jpg"} alt="Mushroom Growing Infographic" />
        <Paragraph>{t('components.growingProcess.infographicDesc')}</Paragraph>
      </Container>
    </>
  );
}

export default GrowingProcess;
