import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background-color: #3A693C;
  color: #FFE7C9;
  padding: 1em 0;
  text-align: center;
`;

const FooterContainer = styled.div`
  max-width: 68%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 250px;
  text-align: left;
`;

const NoBulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0em;
  font-weight: 500;
`;

const FooterText = styled.p`
  font-size: 0.9em;
  color: #FFE7C9;
  text-align: center;
  margin-bottom: 1em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 4px;
  border: none;
  font-size: 0.8em;
`;

const Button = styled.button`
  border: none;
  background-color: #FFE7C9;
  color: #3A693C;
  font-weight: bold;
  cursor: pointer;
  font-size:0.9em;
`;

const Message = styled.p`
  margin-top: 0.5em;
  font-size: 1em;
  color: #FFE7C9;
`;



function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate your API call for newsletter subscription.
    console.log('Subscribing email:', email);
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterColumn>
          <NoBulletList>
            <li>
              <h3>
                <Link to="/our-partners">Our Partners</Link>
              </h3>
            </li>
            <li>
              <h3><Link to="/contact">Contact Us</Link></h3>
              <NoBulletList>
                {/*
                <li>
                  <a href="mailto:myconurseries@gmail.com">myconurseries@gmail.com</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/myconurseries" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61555856812571"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                */}
              </NoBulletList>
            </li>
          </NoBulletList>
        </FooterColumn>
        <FooterColumn>
          <h3>Get Involved</h3>
          <NoBulletList>
            <li>
              <Link to="/partner-with-us">Partner with Us</Link>
            </li>
            <li>
              <Link to="/become-a-volunteer">Become a Volunteer</Link>
            </li>
          </NoBulletList>
        </FooterColumn>
        <FooterColumn>
          <h3>Join the Newsletter</h3>
          <Form onSubmit={handleSubmit}>
            <Input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <Button type="submit">Subscribe</Button>
          </Form>
          {message && <Message>{message}</Message>}
        </FooterColumn>
      </FooterContainer>
      <FooterText>&copy; 2025 MycoNurseries</FooterText>
    </FooterWrapper>
  );
}

export default Footer;
