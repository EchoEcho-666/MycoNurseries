import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled(Link)`
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  background: #deeac5;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 220px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #39683B;
`;

const Date = styled.p`
  margin: 0.2rem 0 0.6rem;
  font-size: 0.85rem;
  color: #777;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.4;
`;

export default function BlogSnapshot({ post }) {
  return (
    <Card to={`/blog/${post.slug}`}>
      <Image
        src={process.env.PUBLIC_URL + '/assets/blogs/' + post.img}
        alt={post.title}
      />

      <Content>
        <Title>{post.title}</Title>
        <Date>{post.date}</Date>
        <Description>{post.description}</Description>
      </Content>
    </Card>
  );
}