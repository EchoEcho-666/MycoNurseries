import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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
  margin-top: 1.5em;
  color: #39683B;
  padding-bottom: 0.3em;
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
  const handleClick = e => {
    e.stopPropagation();
    setOpen(prev => !prev);
  };
  return (
    <TeamCard onClick={handleClick} open={open}>
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
  const { t } = useTranslation();

  return (
    <TeamContainer id="team">
      <TeamTitle>{t('component.team.title')}</TeamTitle>

      {/* Co-Founders */}
      <TeamHeading>{t('component.team.coFounders')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/julia-picture.jpg'}
          alt={t('component.team.juliaWright.name')}
          name={t('component.team.juliaWright.name')}
          pronoun={t('component.team.juliaWright.pronoun')}
          position={t('component.team.juliaWright.position')}
          description={t('component.team.juliaWright.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/minh-picture2.jpg'}
          alt={t('component.team.minhLe.name')}
          name={t('component.team.minhLe.name')}
          pronoun={t('component.team.minhLe.pronoun')}
          position={t('component.team.minhLe.position')}
          description={t('component.team.minhLe.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/nico-picture.jpg'}
          alt={t('component.team.nicoVilkoff.name')}
          name={t('component.team.nicoVilkoff.name')}
          pronoun={t('component.team.nicoVilkoff.pronoun')}
          position={t('component.team.nicoVilkoff.position')}
          description={t('component.team.nicoVilkoff.description')}
        />
      </TeamRow>

      {/* Research Team */}
      <TeamHeading>{t('component.team.research')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/dean-picture.png'}
          alt={t('component.team.deanBaghdadi.name')}
          name={t('component.team.deanBaghdadi.name')}
          pronoun={t('component.team.deanBaghdadi.pronoun')}
          position={t('component.team.deanBaghdadi.position')}
          description={t('component.team.deanBaghdadi.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/siqi-picture.png'}
          alt={t('component.team.siqiLiu.name')}
          name={t('component.team.siqiLiu.name')}
          pronoun={t('component.team.siqiLiu.pronoun')}
          position={t('component.team.siqiLiu.position')}
          description={t('component.team.siqiLiu.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/kalyna-picture.jpeg'}
          alt={t('component.team.kalynaLevytsky.name')}
          name={t('component.team.kalynaLevytsky.name')}
          pronoun={t('component.team.kalynaLevytsky.pronoun')}
          position={t('component.team.kalynaLevytsky.position')}
          description={t('component.team.kalynaLevytsky.description')}
        />
      </TeamRow>

      {/* Operations Team */}
      <TeamHeading>{t('component.team.operations')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/maria-picture.png'}
          alt={t('component.team.mariaAreizagaGarcia.name')}
          name={t('component.team.mariaAreizagaGarcia.name')}
          pronoun={t('component.team.mariaAreizagaGarcia.pronoun')}
          position={t('component.team.mariaAreizagaGarcia.position')}
          description={t('component.team.mariaAreizagaGarcia.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/margarita-picture.jpeg'}
          alt={t('component.team.margaritaGauto.name')}
          name={t('component.team.margaritaGauto.name')}
          pronoun={t('component.team.margaritaGauto.pronoun')}
          position={t('component.team.margaritaGauto.position')}
          description={t('component.team.margaritaGauto.description')}
        />
      </TeamRow>

      {/* Education Team */}
      <TeamHeading>{t('component.team.education')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/maya-picture.jpeg'}
          alt={t('component.team.mayaFarres.name')}
          name={t('component.team.mayaFarres.name')}
          pronoun={t('component.team.mayaFarres.pronoun')}
          position={t('component.team.mayaFarres.position')}
          description={t('component.team.mayaFarres.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/bianka-picture.jpeg'}
          alt={t('component.team.biankaDusseault.name')}
          name={t('component.team.biankaDusseault.name')}
          pronoun={t('component.team.biankaDusseault.pronoun')}
          position={t('component.team.biankaDusseault.position')}
          description={t('component.team.biankaDusseault.description')}
        />
      </TeamRow>

      {/* Communications & Events Team */}
      <TeamHeading>{t('component.team.communicationsAndEvents')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/shimona-picture.png'}
          alt={t('component.team.shimonaSingh.name')}
          name={t('component.team.shimonaSingh.name')}
          pronoun={t('component.team.shimonaSingh.pronoun')}
          position={t('component.team.shimonaSingh.position')}
          description={t('component.team.shimonaSingh.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/maxine-picture.png'}
          alt={t('component.team.maxineBisera.name')}
          name={t('component.team.maxineBisera.name')}
          pronoun={t('component.team.maxineBisera.pronoun')}
          position={t('component.team.maxineBisera.position')}
          description={t('component.team.maxineBisera.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/naya-picture.png'}
          alt={t('component.team.nayaTawil.name')}
          name={t('component.team.nayaTawil.name')}
          pronoun={t('component.team.nayaTawil.pronoun')}
          position={t('component.team.nayaTawil.position')}
          description={t('component.team.nayaTawil.description')}
        />
      </TeamRow>
    </TeamContainer>
  );
}

export default TeamPage;