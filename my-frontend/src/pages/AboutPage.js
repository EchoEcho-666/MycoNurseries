import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 1em 2em;
  max-width: 70%;
  margin: 0 auto;
  background-color: #FFF8ED;
  border-radius: 12px;
  text-align: center;
`;

const Heading = styled.h2``;

const AboutRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  margin: 2em 0;
`;

const Image = styled.img`
  width: ${({ width }) => width || '270px'};
  height: ${({ height }) => height || 'auto'};
  border-radius: 8px;
  margin: 0.5em 0;
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;

  img {
    width: ${({ width }) => width || '220px'};
    height:  ${({ height }) => height || 'auto'};
    border-radius: 8px;
  }
`;

const ParagraphGroup = styled.div`
  max-width: 70%;
`;

const Paragraph = styled.p`
  text-align: left;
  margin-bottom: 1em;
`;

function AboutMycoNurseries() {
  return (
    <>
      <Container>
        <AboutRow>
          <Image src={process.env.PUBLIC_URL + '/assets/about/section1.jpg'} alt="Team Photo" />
          <ParagraphGroup>
            <Heading>About MycoNurseries</Heading>
            <Paragraph>
              MycoNurseries was started by Julia Wright and Daniel Cha, who wanted to make a difference in their community through their passion for fungi. Over the past two years, MycoNurseries has become a Montreal-based non-profit dedicated to promoting sustainability through fungiculture and the only organization growing mushrooms on the McGill University downtown campus.
            </Paragraph>
          </ParagraphGroup>
        </AboutRow>

        <AboutRow reverse>
          <ImageColumn>
            <Image src={process.env.PUBLIC_URL + '/assets/about/section2.1.jpg'} alt="Mushrooms Growing 1" />
            <Image src={process.env.PUBLIC_URL + '/assets/about/section2.2.jpg'} alt="Mushrooms Growing 2" />
          </ImageColumn>
          <ParagraphGroup>
            <Heading>How We Create a More Sustainable Community</Heading>
            <Paragraph>
              We currently create a more sustainable community in three ways:
            </Paragraph>
            <Paragraph>
              <strong>🌱 Sustainable Substrate:</strong><br />
              We grow oyster mushrooms, and these mushrooms need ‘food’ or substrate to live off of. 40% of the food we give our mushrooms is coffee grounds that otherwise would’ve been thrown into the landfill, where studies have shown they generate greenhouse gases and have a variety of bad environmental effects. So far we’ve diverted over 40kg of used coffee grounds from landfills.
            </Paragraph>
            <Paragraph>
              <strong>👥 Community:</strong><br />
              We have over 30 volunteers who help us grow the mushrooms. These volunteers are all students or young people and through participating in growing sessions, they learn about sustainable urban agriculture.Through the community we create, we hope to inspire these volunteers with a love of nature that will make them more passionate about helping the environment.
            </Paragraph>
            <Paragraph>
              <strong>🍄 Promoting Food Security:</strong><br />
              We donate the oyster mushrooms we grow to SNAC, a group that provides free produce to members of the McGill University community facing food insecurity.We’re proud of this initiative because we believe that in addition to having access to foods which will satiate them, everyone deserves access to a variety of fresh produce to have a high quality diet.
            </Paragraph>
          </ParagraphGroup>
        </AboutRow>

        <AboutRow>
          <ImageColumn>
            <Image
              src={process.env.PUBLIC_URL + '/assets/founders/founder-1.jpg'}
              alt="Logo 1"
              width="100px"
            />
            <Image
              src={process.env.PUBLIC_URL + '/assets/founders/founder-2.jpg'}
              alt="Logo 2"
              width="200px"
            />
            <Image
              src={process.env.PUBLIC_URL + '/assets/founders/founder-3.jpg'}
              alt="Logo 3"
              width="200px"
            />
            <Image
              src={process.env.PUBLIC_URL + '/assets/founders/founder-4.jpg'}
              alt="Logo 4"
              width="120px"
            />
          </ImageColumn>
          <ParagraphGroup>
            <Heading>Our Support & Future Plans</Heading>
            <Paragraph>
              Over the past two years, we’ve received funding from the Sustainability Projects Fund, McGill University Faculty of Engineering Global Challenges Award Program, and Canada Service Corps’s Sprout Fellowship. Currently, we’re receiving support from the Dobson Centre for Entrepreneurship as we complete the McGill Dobson Bootcamp and Cup.
            </Paragraph>
            <Paragraph>
              As we look towards the future, we’re hoping to develop an educational module around circular economies and waste management,to reach more people in the McGill University and broader Montreal Community. Stay tuned!
            </Paragraph>
          </ParagraphGroup>
        </AboutRow>
      </Container>
    </>
  );
}

export default AboutMycoNurseries;
