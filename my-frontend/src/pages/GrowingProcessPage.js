import React from 'react';
import styled from 'styled-components';

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
  return (
    <>
      <Container>
        <Heading>Our Mushroom Growing Process</Heading>
        <Paragraph>Discover how we sustainably grow oyster mushrooms from recycled organic waste.</Paragraph>
        
        <Image src={process.env.PUBLIC_URL + "/assets/growing-process/flowchart.jpg"} alt="Mushroom Growing Flowchart" />
        <Paragraph>Our structured process ensures optimal growth using sustainable practices.</Paragraph>

        <Image src={process.env.PUBLIC_URL + "/assets/growing-process/infographic.jpg"} alt="Mushroom Growing Infographic" />
        <Paragraph>Our impact: Reducing waste, fostering community, and promoting food security.</Paragraph>
      </Container>
    </>
  );
}

export default GrowingProcess;
