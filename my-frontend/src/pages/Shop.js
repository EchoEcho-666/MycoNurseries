import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ShopWrapper = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #FFF8ED;
`;

const Title = styled.h2`
  color: #39683B;
  margin-bottom: 0em;
  text-align: center;
  font-size: 1.75rem;

  position: relative; /* This is a new addition */

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background-color: #A52A2A;
    margin: 0.28em auto 0;
  }
`;

const ShopContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: -1 rem;
`;

const IframeContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 650px;
`;

const ZeffyIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const PoliciesWrapper = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #A52A2A;
`;

const SectionTitle = styled.h2`
  color: #39683B;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5em;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background-color: #A52A2A;
    margin: 0.28em auto 0;
  }
`;

const Subtitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: #39683B;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 2em;
  margin-bottom: 0.5em;
  text-align: center;
`;

const PolicyText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1em;
  color: #382F2F;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const ContactLink = styled.a`
  font-weight: bold;
  color: #39683B;
  text-decoration: underline;

  &:hover {
    color: #FF8C00;
  }
`;

export default function Shop() {
  const { t } = useTranslation();
  return (
    <ShopWrapper>
      <Title>{t('components.shop.title')}</Title>
      <ShopContainer>
        <div style={{ flex: 1 }}>
          <Subtitle>{t('components.shop.handbook')}</Subtitle>
          <IframeContainer>
            <ZeffyIframe
              title="Zeffy Handbook Shop"
              src="https://www.zeffy.com/embed/ticketing/myconurseriess-handbook-shop"
              allow="paymentrequest"
              allowTransparency="true"
            />
          </IframeContainer>
        </div>
        <div style={{ flex: 1 }}>
          <Subtitle>{t('components.shop.mushrooms')}</Subtitle>
          <IframeContainer>
            <ZeffyIframe
              title="Zeffy Mushroom Shop"
              src="https://www.zeffy.com/embed/ticketing/myconurseriess-shop-2"
              allow="paymentrequest"
              allowTransparency="true"
            />
          </IframeContainer>
        </div>
      </ShopContainer>
      <PoliciesWrapper>
        <SectionTitle>{t('components.shop.policies')}</SectionTitle>
        
        <Subtitle>{t('components.shop.returnPolicy')}</Subtitle>
        <PolicyText>
          {t('components.shop.lastUpdated')}
        </PolicyText>
        <PolicyText>
          <strong>{t('components.shop.refunds')}</strong>
        </PolicyText>
        <PolicyText>
          {t('components.shop.returnContact')}
        </PolicyText>
        
        <Subtitle>{t('components.shop.cancellationPolicy')}</Subtitle>
        <PolicyText>
          {t('components.shop.lastUpdated')}
        </PolicyText>
        <PolicyText>
          <strong>{t('components.shop.cancellations')}</strong>
        </PolicyText>
        <PolicyText>
          {t('components.shop.cancellationContact')}
        </PolicyText>
        
        <ContactInfo>
          <Subtitle>{t('components.shop.contactDetails')}</Subtitle>
          <PolicyText>
            {t('components.shop.email')}
          </PolicyText>
          <PolicyText>
            {t('components.shop.instagram')}
          </PolicyText>
        </ContactInfo>
      </PoliciesWrapper>
    </ShopWrapper>
  );
}
