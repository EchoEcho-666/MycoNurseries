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
  background-color: #39683B; /* dark green background */
  border-radius: 8px;
`;


const PartnerText = styled.p`
  flex: 1;
  margin: 0.5em;
  text-align: left;
  color: #FFE7C9
`;

function OurPartners() {
  const { t } = useTranslation();

  return (
    <>
      <PartnersSection id="our-partners">
        <h2>{t("partners.title")}</h2>
        <p>{t("partners.text")}</p>

        {/* Row 1 */}
        <PartnerRow>
          <PartnerLogo
            src={process.env.PUBLIC_URL + "/assets/founders/founder-1.jpg"}
            alt={t("partners.spf.title")}
          />
          <PartnerTextGroup>
            <PartnerText>{t("partners.spf.text1")}</PartnerText>
            <PartnerText>{t("partners.spf.text4")}</PartnerText>
          </PartnerTextGroup>
        </PartnerRow>

        {/* Row 2 */}
        <PartnerRow className="reverse">
          <PartnerTextGroup>
            <PartnerText>{t("partners.sproutFellowship.text1")}</PartnerText>
            <PartnerText>{t("partners.sproutFellowship.text3")}</PartnerText>
          </PartnerTextGroup>
          <PartnerLogo
            src={process.env.PUBLIC_URL + "/assets/founders/founder-2.jpg"}
            alt={t("partners.sproutFellowship.title")}
          />
        </PartnerRow>

        {/* Row 3 */}
        <PartnerRow>
          <PartnerLogo
            src={process.env.PUBLIC_URL + "/assets/founders/founder-3.jpg"}
            alt={t("partners.globalChallenges.title")}
          />
          <PartnerTextGroup>
            <PartnerText>{t("partners.globalChallenges.text1")}</PartnerText>
            <PartnerText>{t("partners.globalChallenges.text2")}</PartnerText>
          </PartnerTextGroup>
        </PartnerRow>

        {/* Row 4 */}
        <PartnerRow className="reverse">
          <PartnerTextGroup>
            <PartnerText>{t("partners.dobsonCentre.text1")}</PartnerText>
            <PartnerText>{t("partners.dobsonCentre.text4")}</PartnerText>
          </PartnerTextGroup>
          <PartnerLogo
            src={process.env.PUBLIC_URL + "/assets/founders/founder-4.jpg"}
            alt={t("partners.dobsonCentre.title")}
          />
        </PartnerRow>
      </PartnersSection>
    </>
  );
}

export default OurPartners;

