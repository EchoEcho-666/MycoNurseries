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

const Heading = styled.h2`
  color: #39683B;
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 1.5em;
`;

function AboutMycoNurseries() {
  return (
    <>
      <Header />
      <Container>
        <Heading>About MycoNurseries</Heading>
        <Paragraph>
          <strong>MycoNurseries was started by Julia Wright and Daniel Cha</strong>, who wanted to make a difference in their community through their passion for fungi. Over the past two years, MycoNurseries has become a Montreal-based non-profit dedicated to promoting sustainability through fungiculture and the only organization growing mushrooms on the McGill University downtown campus.
        </Paragraph>

        <Heading>How We Create a More Sustainable Community</Heading>
        
        <Paragraph>
          <strong>🌱 Sustainable Substrate:</strong><br />
          We grow oyster mushrooms, and these mushrooms need ‘food’ or substrate to live off of. <strong>40% of the food we give our mushrooms is coffee grounds</strong> that otherwise would’ve been thrown into the landfill. So far, we’ve diverted over **40kg** of used coffee grounds from landfills.
        </Paragraph>

        <Paragraph>
          <strong>👥 Community:</strong><br />
          We have over <strong>30 volunteers</strong> who help us grow the mushrooms. These volunteers are all students or young people, and through growing sessions, they learn about <strong>sustainable urban agriculture</strong>.
        </Paragraph>

        <Paragraph>
          <strong>🍄 Promoting Food Security:</strong><br />
          We donate the oyster mushrooms we grow to <strong>SNAC</strong>, which provides **free produce** to McGill students facing food insecurity.
        </Paragraph>

        <Heading>Our Support & Future Plans</Heading>
        
        <Paragraph>
          We’ve received funding from the <strong>Sustainability Projects Fund</strong>, McGill Engineering’s <strong>Global Challenges Award</strong>, and **Canada Service Corps’s Sprout Fellowship**. Currently, we’re completing the <strong>McGill Dobson Bootcamp and Cup</strong>.
        </Paragraph>

        <Paragraph>
          Looking forward, we aim to develop an <strong>educational module</strong> on <strong>circular economies and waste management</strong> to engage the McGill and Montreal communities. <strong>Stay tuned!</strong>
        </Paragraph>
      </Container>
      <Footer />
    </>
  );
}

export default AboutMycoNurseries;
