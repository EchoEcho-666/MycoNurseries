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

const blogs = [
  {
    id: 1,
    title: "First Blog Post",
    content: "Blog post stuff"
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "More blog post stuff for post 2"
  }
];

function Blog() {
  const { t } = useTranslation();

  return (
    <>
      <BlogWrapper>
        <BlogTitle>{t('components.blog.title', 'Blog')}</BlogTitle>
        <p>{t('components.blog.description', 'Welcome to our blog. Here you are our latest updates and articles.')}</p>
      </BlogWrapper>
    </>
  );
}

export default Blog;
