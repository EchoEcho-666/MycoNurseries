import React from 'react';
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

const BlogPost = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  background-color: #FFFFFF;
`;

const PostTitle = styled.h3`
  color: #39683B;
  margin-bottom: 0.5rem;
`;

const PostContent = styled.p`
  line-height: 1.6;
`;

function Blog() {
  const { t } = useTranslation();
  const posts = ['post1', 'post2', 'post3']; // Array of post keys for dynamic rendering

  return (
    <>
      <BlogWrapper>
        <BlogTitle>{t('components.blog.title', 'Blog')}</BlogTitle>
        <p>{t('components.blog.description', 'Welcome to our blog. Here you can find the latest updates and articles.')}</p>
        {posts.map((postKey) => (
          <BlogPost key={postKey}>
            <PostTitle>{t(`components.blog.${postKey}.title`)}</PostTitle>
            <PostContent>{t(`components.blog.${postKey}.content`)}</PostContent>
          </BlogPost>
        ))}
      </BlogWrapper>
    </>
  );
}

export default Blog;
