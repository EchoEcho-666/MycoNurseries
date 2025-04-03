import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Styled Components (adjust colors and layout to match your design)
const CtaWrapper = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #FFF8ED;
  color: #382F2F;
`;

const CtaTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
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

const Textarea = styled.textarea`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #39683B;
  color: #FFE7C9;
  font-weight: bold;
  cursor: pointer;
`;

function Cta() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate your actual form submission logic / API call
    console.log('CTA form data submitted:', formData);
    setStatus('Thank you! We’ll get back to you soon.');
    // Optionally clear the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <CtaWrapper>
      <CtaTitle>Get Involved</CtaTitle>
      <p>We’d love to hear from you. Please fill out the form below.</p>
      
      <CtaForm onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
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

        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <SubmitButton type="submit">Send</SubmitButton>
      </CtaForm>

      {status && <p style={{ marginTop: '1rem', color: '#39683B' }}>{status}</p>}
    </CtaWrapper>
  );
}

export default Cta;

