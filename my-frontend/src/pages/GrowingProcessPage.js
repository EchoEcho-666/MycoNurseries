import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.section`
  padding: 3em 2em;
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
  color: #39683B;
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
`;

function GrowingProcess() {
  return (
    <>
      <Header />
      <Container>
        <Heading>Our Mushroom Growing Process</Heading>
        <Paragraph>Discover how we sustainably grow oyster mushrooms from recycled organic waste.</Paragraph>
        
        <Image src={process.env.PUBLIC_URL + "/assets/growing-process/flowchart.jpg"} alt="Mushroom Growing Flowchart" />
        <Paragraph>Our structured process ensures optimal growth using sustainable practices.</Paragraph>

        <Image src={process.env.PUBLIC_URL + "/assets/growing-process/infographic.jpg"} alt="Mushroom Growing Infographic" />
        <Paragraph>Our impact: Reducing waste, fostering community, and promoting food security.</Paragraph>
      </Container>
      <Footer />
    </>
  );
}

export default GrowingProcess;
