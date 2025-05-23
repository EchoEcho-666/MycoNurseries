import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

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
  return (
    <Section id="about">
      <Heading>About MycoNurseries</Heading>
      <Paragraph>
        MycoNurseries is a non-profit promoting sustainability fungiculture. We do this primarily through growing oyster mushrooms from discarded organic matter and fostering an inclusive and diverse community passionate about fungi.
      </Paragraph>
      <Paragraph>
        Based on the McGill University Campus, MycoNurseries collects used coffee grounds from local coffee shops and uses them as food for the oyster mushrooms. After harvest, these mushrooms are donated to projects addressing food insecurity on campus.
      </Paragraph>
      <ButtonContainer>
        <Link to="/about-myconurseries" className="button">Learn more about us</Link>
      </ButtonContainer>
    </Section>
  );
}

export default AboutSection;
