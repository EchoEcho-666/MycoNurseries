import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Reuse global styles from Cta.js for consistency
const BlogWrapper = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #FFF8ED;
  color: #382F2F;
`;

const BlogTitle = styled.h2`
  color: #39683B;
  margin-bottom: 1em;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 2px;
    background-color: #A52A2A;
    margin: 0.5em 0 0;
  }
`;

const EmbedContainer = styled.div`
  text-align: left;
  margin-left: -15px;
`;

function Blog() {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.supascribe.com/v1/loader/4Vsl6EmY8tWHirwBpYzYu4Qbo2X2.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <BlogWrapper>
        <BlogTitle>{t('components.blog.title', 'Blog')}</BlogTitle>
        <p>{t('components.blog.description', 'Welcome to our blog. Here you are our latest updates and articles.')}</p>
        <EmbedContainer>
          <div data-supascribe-embed-id="761613072423" data-supascribe-feed></div>
        </EmbedContainer>
      </BlogWrapper>
    </>
  );
}

export default Blog;
