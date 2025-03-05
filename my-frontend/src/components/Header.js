import React from 'react';
import styled from 'styled-components';

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

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin: 0;
`;

const Catchphrase = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0 0;
`;

const Nav = styled.nav`
  margin-top: 1rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0;
`;

const NavLinkItem = styled.li``;

const NavLink = styled.a`
  color: #FFE7C9;
  text-decoration: none;
  &:hover {
    color: #FFF8ED;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo src="assets/logo.png" alt="MycoNurseries Logo" />
        <TitleSection>
          <Title>MycoNurseries</Title>
          <Catchphrase>Promoting sustainability through fungiculture</Catchphrase>
        </TitleSection>
      </HeaderContent>
      <Nav>
        <NavLinks>
          <NavLinkItem>
            <NavLink href="#about">About MycoNurseries</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink href="#team">Meet the Team</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink href="#cta">Get Involved</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink href="#news">News</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavLinkItem>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;

