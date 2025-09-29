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
  margin-bottom: 1em;
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

const IframeContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 80%; /* Adjust aspect ratio as needed */
  margin-top: 1rem;
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
  font-size: 1.628rem;
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
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 2em;
  margin-bottom: 0.5em;
  text-align: center;
`;

const PolicyText = styled.p`
  font-size: 1.1rem;
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
      <Title>{t('components.footer.shop')}</Title>
      <IframeContainer>
        <ZeffyIframe
          title="Zeffy Shop"
          src="https://www.zeffy.com/embed/ticketing/myconurseriess-shop"
          allow="paymentrequest"
          allowTransparency="true"
        />
      </IframeContainer>
      <PoliciesWrapper>
        <SectionTitle>{t('components.shop.storePolicies')}</SectionTitle>
        
        <Subtitle>{t('components.shop.returnPolicyTitle')}</Subtitle>
        <PolicyText>{t('components.shop.returnPolicyUpdate')}</PolicyText>
        <PolicyText>
          <strong>{t('components.shop.refunds')}</strong> {t('components.shop.refundsDetails')}
        </PolicyText>
        <PolicyText>
          {t('components.shop.returnPolicyContact')}
          <ContactLink href="mailto:myconurseries@gmail.com"> myconurseries@gmail.com</ContactLink>.
        </PolicyText>
        
        <Subtitle>{t('components.shop.cancellationPolicyTitle')}</Subtitle>
        <PolicyText>{t('components.shop.cancellationPolicyUpdate')}</PolicyText>
        <PolicyText>
          <strong>{t('components.shop.cancellationPolicyDetailsTitle')}</strong> {t('components.shop.cancellationPolicyDetails')}
        </PolicyText>
        <PolicyText>
          {t('components.shop.cancellationPolicyContact')}
          <ContactLink href="mailto:myconurseries@gmail.com"> myconurseries@gmail.com</ContactLink>.
        </PolicyText>
        
        <ContactInfo>
          <Subtitle>{t('components.shop.customerServiceContactTitle')}</Subtitle>
          <PolicyText>
            {t('components.shop.email')}: <ContactLink href="mailto:myconurseries@gmail.com">myconurseries@gmail.com</ContactLink>
          </PolicyText>
          <PolicyText>
            {t('components.shop.instagram')}: <ContactLink href="https://instagram.com/myconurseries" target="_blank" rel="noopener noreferrer">@myconurseries</ContactLink>
          </PolicyText>
        </ContactInfo>
      </PoliciesWrapper>
    </ShopWrapper>
  );
}
