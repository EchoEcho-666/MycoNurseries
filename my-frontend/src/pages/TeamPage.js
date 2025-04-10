import React, { useState } from 'react';
import styled from 'styled-components';

const TeamContainer = styled.section`
  padding: 1em 2em;
  background-color: #FFF8ED;
  text-align: left;
  max-width: 66%;
  margin: 0 auto;
`;

const TeamTitle = styled.h2`
  text-align: center;
`;

const TeamHeading = styled.h3`
`;

const TeamRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
`;

const TeamCard = styled.div`
  border-radius: 10px;
  width: 300px;
  transition: transform 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: ${props => (props.open ? 10 : 1)};
`;

const TeamImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  filter: ${props => (props.open ? 'grayscale(0%)' : 'grayscale(100%)')};
  transition: filter 0.3s ease;
  &:hover {
    filter: grayscale(0%);
  }
`;

const TeamInfo = styled.div`
  padding: 15px;
  text-align: left;
  
  h3 {
    margin: -0.4em 0 0.2em 0; 
    color: #39683B;
    font-size: 1.1rem;
    display: flex;
}


  h4 {
    margin: 0;
    font-size: 1rem;
    color: #A52A2A;
    font-weight: bold;
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.5;
    color: #382F2F;
  }
`;

const Pronoun = styled.span`
  font-size: 0.8rem;
  color: #666;
  margin-left: 0.5em;
`;

function TeamCardComponent({ image, alt, name, pronoun, position, description }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setOpen(prev => !prev);
  };

  return (
    <TeamCard onClick={handleClick}>
      <TeamImage src={image} alt={alt} open={open} />
      <TeamInfo>
        <h3>
          {name}
          {pronoun && <Pronoun>{pronoun}</Pronoun>}
        </h3>
        <h4>{position}</h4>
        {open && <p>{description}</p>}
      </TeamInfo>
    </TeamCard>
  );
}

function TeamPage() {
  return (
    <>
      <TeamContainer id="team">
      <TeamTitle>Our Team</TeamTitle>
        {/* Founders Section */}
        <TeamHeading>Our Founders</TeamHeading>
        <TeamRow>
        <TeamCardComponent
          key="1.1"
          image={process.env.PUBLIC_URL + '/assets/team-member/julia-picture.jpg'} 
          alt="Julia"
          name="Julia Wright"
          pronoun="(they/them)"
          position="Co-Founder"
          description="Julia studies chemistry and mathematics at McGill University and enjoys promoting all forms of sustainability. When they’re not growing mushrooms you can find them hiking, knitting, and hanging out with friends and family"
        />
        </TeamRow>

        {/* Research Team Section */}
        <TeamHeading>Research</TeamHeading>
        <TeamRow>
          <TeamCardComponent
            image={process.env.PUBLIC_URL + '/assets/team-member/minh-picture2.jpg'} 
            alt="Minh"
            name="Minh"
            pronoun=''
            position="Research Lead"
            description="Minh is a final year Pharmacology student at McGill University, and enjoys researching the different ways a society can achieve and maintain sustainability. When not sniffing the greenhouse due to mold suspects, you can find her petting her cats, bopping to her latest music craze or reading. "
          />
          {/* Add additional Research Team members here */}
        </TeamRow>
        
        {/* Operation Section */}
        <TeamHeading>Operation</TeamHeading>
        <TeamRow>
          <TeamCardComponent
            key='3.1'
            image={process.env.PUBLIC_URL + '/assets/team-member/nico-picture.jpg'} 
            alt="Nico"
            name="Nico"
            pronoun='(they/them)'
            position="Operation Lead"
            description="Nico is a final year Cognitive Science student at McGill University, and enjoys exploring fungal sustainable solutions to environmental challenges. When they’re not mixing mushroom substrate, you can find them drawing, doing puzzles or geeking out over a TV show. "
          />
          {/* Add additional Operation members here */}
        </TeamRow>

        {/* Education Section */}
        <TeamHeading>Education</TeamHeading>

        {/* Events and Social Media Section */}
        <TeamHeading>Communication and Events</TeamHeading>

      </TeamContainer>
    </>
  );
}

export default TeamPage;