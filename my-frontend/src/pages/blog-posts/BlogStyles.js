import styled from 'styled-components';

export const BlogWrapper = styled.section`
  padding: 1em 2em;
  max-width: 70%;
  margin: 0 auto;
  background-color: #FFF8ED;
  border-radius: 12px;
  text-align: center;
`;

export const TitleHeading = styled.h1``;
export const SubHeading = styled.h2``;
export const AuthorHeading = styled.h3``;


export const TitleRow = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const BodyRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  margin: 2em 0;
`;

export const Image = styled.img`
  width: ${({ width }) => width || '500px'};
  height: ${({ height }) => height || 'auto'};
  border-radius: 8px;
  margin: 0.5em 0;
`;

export const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;

  img {
    width: ${({ width }) => width || '220px'};
    height:  ${({ height }) => height || 'auto'};
    border-radius: 8px;
  }
`;

export const ParagraphGroup = styled.div`
  max-width: 70%;
`;

export const Paragraph = styled.p`
  text-align: left;
  margin-bottom: 1em;
`;
