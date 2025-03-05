import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background-color: #3A693C;
  color: #FFE7C9;
  padding: 2em 0;
  text-align: center;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 10px;
  text-align: left;
`;

function Footer() {
    return (
      <FooterWrapper>
        <FooterContainer>
          <FooterColumn>
            <h2>About Us</h2>
            <ul>
              <li>
                <h3>Contact Us</h3>
                <ul>
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
                </ul>
              </li>
              <li>
                <h3>
                  <Link to="/our-partners">Our Partners</Link>
                </h3>
                <p>Funding and support details go here.</p>
              </li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h2>Get Involved</h2>
            <ul>
              <li>
                <Link to="/partner-with-us">Partner with Us</Link>
              </li>
              <li>
                <Link to="/become-a-volunteer">Become a Volunteer</Link>
              </li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h2>Join the Newsletter</h2>
            <form action="#" method="post">
              <input type="email" name="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </FooterColumn>
        </FooterContainer>
        <p>&copy; 2024 MycoNurseries</p>
      </FooterWrapper>
    );
  }
  
  export default Footer;