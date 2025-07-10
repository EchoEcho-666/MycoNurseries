import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background-color: #39683B;
  color: #FFE7C9;
  padding: 1rem 0.2rem 0.2rem;
  text-align: center;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 65px;
  height: auto;
`;

const TitleSection = styled.div`
  text-align: left;
  margin-left: 1rem;
`;

const TitleLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &&:hover { color: inherit; }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Catchphrase = styled.p`
  font-family: 'Caveat', cursive;
  font-size: 1.3rem;
  font-weight: 650;
  margin: -0.5rem 0 0;
  color: #FFE7C9;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1.2px solid #FFE7C9;
  width: 68%;
  margin: 15px auto 0;
`;

const Nav = styled.nav`
  margin-top: 0.5rem;
  margin-right: 5em
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  font-weight: 500;
`;

const NavItem = styled.li`
  position: relative;
`;

const StyledLink = styled(NavLink)`
  color: #FFE7C9;
  text-decoration: none;
  font-size: 1.1rem;
  &.active { font-weight: 900; }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 120%;
  left: -7%;
  background-color: #39683B;
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  border-radius: 4px;
  min-width: 200px;
  z-index: 100;
  ${NavItem}:hover & {
    display: block;
  }
`;

const DropdownItem = styled(NavLink)`
  display: block;
  padding: 0.5rem 1rem;
  color: #FFE7C9;
  text-decoration: none;
  font-size: 1rem;
  &:hover { background-color: #2E7D32; }
`;

const CornerLink = styled(NavLink)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #FFE7C9;
  font-size: 1rem;
  text-decoration: none;
  background-color: #2E7D32;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  &:hover {
    background-color: #1B5E20;
  }
`;


function Header() {
  return (
    <HeaderWrapper>
      <CornerLink to="/Volunteer">Sign In</CornerLink>
      <HeaderContent>
        <Logo src={process.env.PUBLIC_URL + '/assets/logo-cut-out.png'} alt="MycoNurseries Logo" />
        <TitleSection>
          <TitleLink to="/">
            <Title>MycoNurseries</Title>
          </TitleLink>
          <Catchphrase>Promoting Sustainability Through Fungiculture</Catchphrase>
        </TitleSection>
      </HeaderContent>

      <Divider />

      <Nav>
        <NavLinks>
          <NavItem>
            <StyledLink to="/about-myconurseries">About MycoNurseries</StyledLink>
            <DropdownMenu>
              <li><DropdownItem to="/about-myconurseries">Our Story</DropdownItem></li>
              <li><DropdownItem to="/team">Our Team</DropdownItem></li>
              <li><DropdownItem to="/growing-process">Our Growing Process</DropdownItem></li>
              <li><DropdownItem to="/our-partners">Our Partners</DropdownItem></li>
            </DropdownMenu>
          </NavItem>
          <NavItem><StyledLink to="/Cta">Get Involved</StyledLink></NavItem>
          <NavItem><StyledLink to="/Shop">Shop</StyledLink></NavItem>
          <NavItem><StyledLink to="/contact">Contact</StyledLink></NavItem>
          {/* add other top-level links here */}
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;

