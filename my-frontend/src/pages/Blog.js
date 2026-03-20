import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { posts } from "./blog-posts/PostHandler";
import BlogSnapshot from "../components/BlogSnapshot";

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

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Blog() {
  const { t } = useTranslation();
  return (


    <>
      <BlogWrapper>
        <BlogTitle>{t('components.blog.title', 'Blog')}</BlogTitle>
        <p>{t('components.blog.description', 'Welcome to our blog. Here you are our latest updates and articles.')}</p>
        <br></br>
        <CardContainer>
          {posts.map((post) => (
            <BlogSnapshot key={post.slug} post={post} />
          ))}
        </CardContainer>
      </BlogWrapper>
    </>
  );
}

export default Blog;
