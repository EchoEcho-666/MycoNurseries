import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #3A693C;
  color: #FFE7C9;
  padding: 2em 1em 1em 1em;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2em;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
`;

const ColumnTitle = styled.h3`
  margin-bottom: 0.6em;
  font-size: 1.1em;
`;

const NoBulletList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled(Link)`
  color: #FFE7C9;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5em;

  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  color: #FFE7C9;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 0.5em;
  }
`;

const FooterText = styled.p`
  color: #FFE7C9;
  text-align: center;
  margin-top: 2em;
  font-size: 0.85em;
`;

const Message = styled.p`
  margin-top: 0.5em;
  font-size: 0.9em;
  color: #FFE7C9;
`;

function Footer() {
  const [contactMessage, setContactMessage] = useState('');
  const [newsletterMessage] = useState('');

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterColumn>
          <ColumnTitle>About</ColumnTitle>
          <NoBulletList>
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/our-partners">Our Partners</FooterLink></li>
            <li><FooterLink to="/team">Team</FooterLink></li>
            <li><FooterLink to="/growing-process">Growing Process</FooterLink></li>
          </NoBulletList>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Get Involved</ColumnTitle>
          <NoBulletList>
            <li><FooterLink to="/partner-with-us">Partner with Us</FooterLink></li>
            <li><FooterLink to="/become-a-volunteer">Become a Volunteer</FooterLink></li>
            <li><FooterLink to="/shop">Shop</FooterLink></li>
          </NoBulletList>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Contact</ColumnTitle>
          <NoBulletList>
            <li>
              <ExternalLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText("myconurseries@gmail.com");
                  setContactMessage("Email copied to clipboard!");
                  setTimeout(() => setContactMessage(''), 1500);
                }}
                title="Click to copy"
              >
                <FaEnvelope style={{ marginRight: '0.5em' }} />
                myconurseries@gmail.com
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.instagram.com/myconurseries" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.facebook.com/profile.php?id=61555856812571" target="_blank" rel="noreferrer"><FaFacebook /> Facebook</ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</ExternalLink>
            </li>
          </NoBulletList>
          {contactMessage && <Message>{contactMessage}</Message>}
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Newsletter</ColumnTitle>
          <iframe 
            src="https://zengyu.substack.com/embed" 
            width="100%" 
            height="150" 
            style={{ border: 'none', background: 'transparent' }} 
            title="Substack Subscribe Form"
          />
          {newsletterMessage && <Message>{newsletterMessage}</Message>}
        </FooterColumn>
      </FooterContainer>
      <FooterText>&copy; 2025 MycoNurseries</FooterText>
    </FooterWrapper>
  );
}

export default Footer;

