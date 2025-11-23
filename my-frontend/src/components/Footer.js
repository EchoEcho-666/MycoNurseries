import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("myconurseries@gmail.com");
    setContactMessage(t("components.footer.emailCopied"));
    setTimeout(() => setContactMessage(""), 1500);
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterColumn>
          <ColumnTitle>About</ColumnTitle>
          <NoBulletList>
            <li><FooterLink to="/about-myconurseries">{t("components.footer.aboutMyconurseries")}</FooterLink></li>
            <li><FooterLink to="/our-partners">{t("components.footer.ourPartners")}</FooterLink></li>
            <li><FooterLink to="/team">{t("components.footer.team")}</FooterLink></li>
            <li><FooterLink to="/growing-process">{t("components.footer.growingProcess")}</FooterLink></li>
          </NoBulletList>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>{t("components.footer.getInvolved")}</ColumnTitle>
          <NoBulletList>
            <li><FooterLink to="/partner-with-us">{t("components.footer.partnerWithUs")}</FooterLink></li>
            <li><FooterLink to="/become-a-volunteer">{t("components.footer.becomeAVolunteer")}</FooterLink></li>
            <li><FooterLink to="/shop">{t("components.footer.shop")}</FooterLink></li>
          </NoBulletList>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>{t("components.footer.contact")}</ColumnTitle>
          <NoBulletList>
            <li>
              <ExternalLink
                href="#"
                onClick={handleCopyEmail}
                title={t("components.footer.clickToCopy")}
              >
                <FaEnvelope />
                {" "}myconurseries@gmail.com
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.instagram.com/myconurseries" target="_blank" rel="noreferrer">
                <FaInstagram />
                {" "}{t("components.footer.instagram")}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.linkedin.com/company/myconurseries" target="_blank" rel="noreferrer">
                <FaLinkedin />
                {" "}{t("components.footer.linkedin")}
              </ExternalLink>
            </li>
          </NoBulletList>
          {contactMessage && <Message>{contactMessage}</Message>}
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>{t("components.footer.newsletter")}</ColumnTitle>
          <iframe 
            src="https://myconurseries.substack.com/embed" 
            width="100%" 
            height="150" 
            style={{ border: 'none', background: 'transparent' }} 
            title={t("components.footer.newsletter")}
          />
          {newsletterMessage && <Message>{newsletterMessage}</Message>}
        </FooterColumn>
      </FooterContainer>
      <FooterText>© {t("components.footer.copyright")}</FooterText>
    </FooterWrapper>
  );
}

export default Footer;