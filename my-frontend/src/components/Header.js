import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Styled components for the header
const HeaderWrapper = styled.header`
  background-color: #39683B;
  color: #FFE7C9;
  padding: 1rem;
  text-align: center;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
`;

const TitleSection = styled.div`
  text-align: left;
  margin-left: 1rem;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Inherit color from parent */
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin: 0;
`;

const Catchphrase = styled.p`
  font-size: 1.1rem;
  margin: 0.5rem 0 0;
  color: #FFE7C9
`;

const Nav = styled.nav`
  margin-top:1rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0;
`;

const StyledLink = styled(Link)`
  color: #FFE7C9;
  text-decoration: none;
  font-size: 1.3rem;
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo src={process.env.PUBLIC_URL + '/assets/logo-cut-out.png'} alt="MycoNurseries Logo" />
        <TitleSection>
          <TitleLink to="/">
            <Title>MycoNurseries</Title>
          </TitleLink>
          <Catchphrase>Promoting sustainability through fungiculture</Catchphrase>
        </TitleSection>
      </HeaderContent>
      <Nav>
        <NavLinks>
          <li>
            <StyledLink to="/about-myconurseries">About MycoNurseries</StyledLink>
          </li>
          <li>
            <StyledLink to="/team">Meet the Team</StyledLink>
          </li>
          <li>
            <StyledLink to="/cta">Get Involved</StyledLink>
          </li>
          <li>
            <StyledLink to="/news">News</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact</StyledLink>
          </li>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;