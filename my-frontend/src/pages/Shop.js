import React from 'react';
import styled from 'styled-components';

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

export default function Shop() {
  return (
    <ShopWrapper>
      <Title>Our Shop</Title>
      <IframeContainer>
        <ZeffyIframe
          title="Zeffy Shop"
          src="https://www.zeffy.com/embed/ticketing/myconurseriess-shop"
          allow="paymentrequest"
          allowTransparency="true"
        />
      </IframeContainer>
    </ShopWrapper>
  );
}
