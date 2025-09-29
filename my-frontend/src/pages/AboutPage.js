import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <AboutRow>
          <Image src={process.env.PUBLIC_URL + '/assets/about/section1.jpg'} alt={t('components.about.title')} />
          <ParagraphGroup>
            <Heading>{t('components.page.about.title')}</Heading>
            <Paragraph>{t('components.page.about.story')}</Paragraph>
          </ParagraphGroup>
        </AboutRow>

        <AboutRow reverse>
          <ImageColumn>
            <Image src={process.env.PUBLIC_URL + '/assets/about/section2.1.jpg'} alt="Mushrooms Growing 1" />
            <Image src={process.env.PUBLIC_URL + '/assets/about/section2.2.jpg'} alt="Mushrooms Growing 2" />
          </ImageColumn>
          <ParagraphGroup>
            <Heading>{t('components.page.about.howWeCreate')}</Heading>
            <Paragraph>{t('components.page.about.intro')}</Paragraph>
            <Paragraph>
              <strong>🌱 {t('components.page.about.sustainableSubstrate.title')}:</strong><br />
              {t('components.page.about.sustainableSubstrate.text1')} {t('components.page.about.sustainableSubstrate.text2')} {t('components.page.about.sustainableSubstrate.text3')}
            </Paragraph>
            <Paragraph>
              <strong>👥 {t('components.page.about.community.title')}:</strong><br />
              {t('components.page.about.community.text1')} {t('components.page.about.community.text2')}
            </Paragraph>
            <Paragraph>
              <strong>🍄 {t('components.page.about.foodSecurity.title')}:</strong><br />
              {t('components.page.about.foodSecurity.text')}
            </Paragraph>
          </ParagraphGroup>
        </AboutRow>

        <AboutRow>
          <ImageColumn>
            <Image src={process.env.PUBLIC_URL + '/assets/founders/founder-1.jpg'} alt="Logo 1" width="100px" />
            <Image src={process.env.PUBLIC_URL + '/assets/founders/founder-2.jpg'} alt="Logo 2" width="200px" />
            <Image src={process.env.PUBLIC_URL + '/assets/founders/founder-3.jpg'} alt="Logo 3" width="200px" />
            <Image src={process.env.PUBLIC_URL + '/assets/founders/founder-4.jpg'} alt="Logo 4" width="120px" />
          </ImageColumn>
          <ParagraphGroup>
            <Heading>{t('components.page.about.supportAndPlans.title')}</Heading>
            <Paragraph>{t('components.page.about.supportAndPlans.text1')}</Paragraph>
            <Paragraph>{t('components.page.about.supportAndPlans.text2')}</Paragraph>
            <Paragraph>{t('components.page.about.supportAndPlans.text3')} {t('components.page.about.supportAndPlans.stayTuned')}</Paragraph>
          </ParagraphGroup>
        </AboutRow>
      </Container>
    </>
  );
}

export default AboutMycoNurseries;