import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Divider = styled.hr`
  border: none;
  border-top: 1.2px solid #FFE7C9;
  width: 68%;
  margin-top: 15px;
`;

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
  &&:hover {
    color: inherit;
  }
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

const Nav = styled.nav`
  margin-bottom: -1rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  font-weight: 500;
`;

const StyledLink = styled(NavLink)`
  color: #FFE7C9;
  text-decoration: none;
  font-size: 1.1rem;

  &.active {
    font-weight: 900; /* extra bold if you want it heavier */
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo
          src={process.env.PUBLIC_URL + '/assets/logo-cut-out.png'}
          alt="MycoNurseries Logo"
        />
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
          {/*<li><StyledLink to="/shop">Shop</StyledLink></li>*/}
          <li><StyledLink to="/about-myconurseries">About MycoNurseries</StyledLink></li>
          <li><StyledLink to="/growing-process">Growing Process</StyledLink></li>
          <li><StyledLink to="/team">Meet the Team</StyledLink></li>
          <li><StyledLink to="/cta">Get Involved</StyledLink></li>
          <li><StyledLink to="/our-partners">Our Partner</StyledLink></li>
          <li><StyledLink to="/contact">Contact</StyledLink></li>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
