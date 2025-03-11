import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
  padding: 3em 2em;
  background-color: #E3F1DD;
  text-align: center;
  max-width: 2000px;
  margin: 3em auto;
  border-radius: 12px;
`;

const Heading = styled.h2`
  color: #39683B;
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5em;
`;

const ButtonContainer = styled.div`
  margin-top: 1em;
`;

function GrowingProcessSection() {
  return (
    <Section id="growing-process">
      <Heading>Our Mushroom Growing Process</Heading>
      <Paragraph>
        Learn how we turn recycled organic waste into nutritious oyster mushrooms.
      </Paragraph>
      <ButtonContainer>
        <Link to="/growing-process" className="button">More about our mushrooms</Link>
      </ButtonContainer>
    </Section>
  );
}

export default GrowingProcessSection;
