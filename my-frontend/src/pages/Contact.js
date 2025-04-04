import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 2em 0em;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #FFF8ED;
  border-radius: 12px;
  text-align: center;
`;

const ContactWrapper = styled.div`
  max-width: 600px;
  margin: 0rem auto;
  padding: 1rem;
  background-color: #FFF8ED; /* Adjust or remove as needed */
  color: #382F2F;
  text-align: center;        /* Center the content */
`;

const ContactTitle = styled.h2`
  color: #39683B;
  font-size: 2.5rem;
`;

const ContactList = styled.ul`
  list-style: none; /* Remove bullets if desired */
  padding: 0;
  margin: 0 auto;
  max-width: 300px; /* Limit the width of the links */
  text-align: left; /* Align links to the left */
`;

const ContactItem = styled.li`
  margin-bottom: 0.5rem;
`;

function Contact() {
  return (
    <>
      <Container>
            <ContactWrapper>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactList>
                <ContactItem>
                <a href="mailto:myconurseries@gmail.com">myconurseries@gmail.com</a>
                </ContactItem>
                <ContactItem>
                <a
                    href="https://www.instagram.com/myconurseries"
                    target="_blank"
                    rel="noreferrer"
                >
                    Instagram
                </a>
                </ContactItem>
                <ContactItem>
                <a
                    href="https://www.facebook.com/profile.php?id=61555856812571"
                    target="_blank"
                    rel="noreferrer"
                >
                    Facebook
                </a>
                </ContactItem>
                <ContactItem>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
                </ContactItem>
            </ContactList>
            </ContactWrapper>
      </Container>
    </>
  );
}

export default Contact;
