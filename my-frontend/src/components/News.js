import React from 'react';
import styled from 'styled-components';

const NewsSection = styled.section`
  background-color: #FFF8ED;
  padding: 3em 2em;
  margin: 0 auto;
  max-width: 1200px;
  border-radius: 12px;
  text-align: center;
`;

const Heading = styled.h2`
  }
`;

const Paragraph = styled.p`
`;

function News() {
  return (
    <NewsSection id="news">
      <Heading>News</Heading>
      <Paragraph>Latest updates will appear here.</Paragraph>
    </NewsSection>
  );
}

export default News;