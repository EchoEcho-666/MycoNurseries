import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

const Section = styled.section`
  padding: 3em 2em;
  margin: 0 auto;
  max-width: 1200px;
  background-color: #FFF8ED;
  border-radius: 12px;
  text-align: center;
`;

const Heading = styled.h2`
`;

const Paragraph = styled.p`
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
    </Section>
  );
}

export default AboutSection;
