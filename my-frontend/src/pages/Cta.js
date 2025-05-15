import React, { useState } from 'react';
import styled from 'styled-components';

// Call-to-Action (Get Involved)
const CtaWrapper = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #FFF8ED;
  color: #382F2F;
`;

const CtaTitle = styled.h2`
  color: #39683B;
  margin-bottom: 1em;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 2px;
    background-color: #A52A2A;
    margin: 0.5em 0 0;
  }
`;

const CtaForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 1rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem;
  background-color: #39683B;
  color: #FFE7C9;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Sponsor Us with Video Teaser + PDF Kit
const SponsorWrapper = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #E8F5E9;
`;

const SponsorTitle = styled.h2`
  color: #39683B;
    margin-bottom: 1em;
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 2px;
      background-color: #A52A2A;
      margin: 0.5em 0 0;
`;

const VideoWrapper = styled.div`
  position: relative;
  left: 50%;
  right: 50%;
  width: 1000px;;
  margin: 1rem 0;
  transform: translateX(-50%);
  background-color: #FFF;
  padding: 1rem 0;

  video, iframe {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const PdfWrapper = styled.div`
  margin: 1.5rem auto;
  text-align: center;
`;

const PdfEmbed = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 8px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #2E7D32;
  color: #FFE7C9;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

const ContactButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #2E7D32;
  color: #FFE7C9;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

function Cta() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', mcgillId: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('CTA form data submitted:', formData);
    setStatus('Thank you! We’ll get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', mcgillId: '' });
  };

  return (
    <>
      <CtaWrapper>
        <CtaTitle>Get Involved</CtaTitle>
        <p>We’d love to hear from you. Please fill out the form below.</p>

        <CtaForm onSubmit={handleSubmit}>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Label htmlFor="mcgillId">McGill ID</Label>
          <Input
            id="mcgillId"
            name="mcgillId"
            type="text"
            value={formData.mcgillId}
            onChange={handleChange}
            required
          />

          <SubmitButton type="submit">Send</SubmitButton>
        </CtaForm>

        {status && <p style={{ marginTop: '1rem', color: '#39683B' }}>{status}</p>}
      </CtaWrapper>

      <SponsorWrapper>
        <SponsorTitle>Sponsor Us</SponsorTitle>
        <p>Watch our 30-second sponsorship teaser to learn how you can support us.</p>
        <VideoWrapper>
          {/* Replace src with your video file or YouTube embed URL */}
          <video controls src="/videos/sponsor-teaser.mp4" />
        </VideoWrapper>

        <PdfWrapper>
          {/* Replace src with your PDF path */}
          <PdfEmbed src={process.env.PUBLIC_URL + "/assets/cta/sponsor_kit_eng.pdf"} />
          <DownloadButton href={process.env.PUBLIC_URL + "/assets/cta/sponsor_kit_eng.pdf"} download>
            Download Sponsor Kit
          </DownloadButton>
        </PdfWrapper>

        <ContactButton href="mailto:sponsorship@example.com?subject=Interested%20in%20Sponsoring">
          Contact Our Team
        </ContactButton>
      </SponsorWrapper>
    </>
  );
}

export default Cta;

