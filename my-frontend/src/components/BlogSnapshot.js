import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-wrap: wrap;
  gap: 1.5em;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  margin: 0.5em 0;
`;


const TitleRow = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-wrap: wrap;
  gap: 2em;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  margin: 0.5em 0;
`;

const DescriptionRow = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-wrap: wrap;
  gap: 2em;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  margin: 0.5em 0;
`;

const Heading = styled.h4``;

const Image = styled.img`
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || 'auto'};
  border-radius: 8px;
  margin: 0em 0;
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: right;

  img {
    width: ${({ width }) => width || '250'};
    height:  ${({ height }) => height || 'auto'};
    border-radius: 8px;
  }
`;

const ParagraphDate = styled.p`
  text-align: left;
  margin-bottom: 0.25em;
  width: 400px;
  margin-top: 1em;
`;

const ParagraphDescr = styled.p`
  text-align: left;
  margin-bottom: 0.25em;
  width: 600px;
  margin-top: 0em;
`;


export default function BlogSnapshot({ post }) {
    return (
        <Link to ={`/blog/${post.slug}`} className = "blogPostLink">
            <Container>
                <TitleRow>
                    <Heading className = "blogTitle">{post.title}</Heading> 
                    <ParagraphDate className = "blogDate">{post.date}</ParagraphDate>
                </TitleRow>
                <ImageColumn>
                    <Image src={process.env.PUBLIC_URL + '/assets/blogs/' + post.img} />
                </ImageColumn> 
                <DescriptionRow>
                    <ParagraphDescr className = "blogDescription">{post.description}</ParagraphDescr>   
                </DescriptionRow>
                
            </Container>
        </Link>
    )
}


