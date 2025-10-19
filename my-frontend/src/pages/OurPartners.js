import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const PartnersSection = styled.section`
  padding: 1em 2em;
  max-width: 68%;
  margin: 0 auto;
  background-color: #FFF8ED;
  border-radius: 12px;
  text-align: center;
`;

const PartnerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em 0;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

const PartnerLogo = styled.img`
  width: 300px;
  height: auto;
  margin: 1em;
`;

const PartnerTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0.2em;
  padding: 1em;
  text-align: left;
  background-color: #39683B;
  border-radius: 8px;
`;

const PartnerText = styled.p`
  flex: 1;
  margin: 0.5em;
  text-align: left;
  color: #FFE7C9;
`;

function OurPartners() {
  const { t } = useTranslation();

  return (
    <>
      <PartnersSection id="our-partners">
        <h2>{t('components.partners.title')}</h2>
        <p>{t('components.partners.text')}</p>

        {/* Row 1: SPF */}
        <PartnerRow>
          <PartnerLogo 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-1.jpg"} 
            alt="Sustainability Projects Fund Logo" 
          />
          <PartnerTextGroup>
            <PartnerText>
              {t('components.partners.spf.text1')} {t('components.partners.spf.text2')} {t('components.partners.spf.text3')}
            </PartnerText>
            <PartnerText>
              {t('components.partners.spf.text4')}
            </PartnerText>
          </PartnerTextGroup>
        </PartnerRow>

        {/* Row 2: Sprout Fellowship */}
        <PartnerRow className="reverse">
          <PartnerTextGroup>
            <PartnerText>
              {t('components.partners.sproutFellowship.text1')} {t('components.partners.sproutFellowship.text2')}
            </PartnerText>
            <PartnerText>
              {t('components.partners.sproutFellowship.text3')}
            </PartnerText>
          </PartnerTextGroup>
          <PartnerLogo 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-2.jpg"} 
            alt="Sprout Ideas Fellowship Logo" 
          />
        </PartnerRow>

        {/* Row 3: Global Challenges Award */}
        <PartnerRow>
          <PartnerLogo 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-3.jpg"} 
            alt="McGill University Faculty of Engineering Logo" 
          />
          <PartnerTextGroup>
            <PartnerText>
              {t('components.partners.globalChallengesAward.text1')}
            </PartnerText>
            <PartnerText>
              {t('components.partners.globalChallengesAward.text2')}
            </PartnerText>
          </PartnerTextGroup>
        </PartnerRow>

        {/* Row 4: Dobson Centre */}
        <PartnerRow className="reverse">
          <PartnerTextGroup>
            <PartnerText>
              {t('components.partners.dobsonCentre.text1')} {t('components.partners.dobsonCentre.text2')}
            </PartnerText>
            <PartnerText>
              {t('components.partners.dobsonCentre.text3')} {t('components.partners.dobsonCentre.text4')}
            </PartnerText>
          </PartnerTextGroup>
          <PartnerLogo 
            src={process.env.PUBLIC_URL + "/assets/founders/founder-4.jpg"} 
            alt="Dobson Centre for Entrepreneurship Logo" 
          />
        </PartnerRow>
      </PartnersSection>
    </>
  );
}

export default OurPartners;
