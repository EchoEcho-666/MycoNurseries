import React, { useState } from 'react';
import styled from 'styled-components';

const ShopWrapper = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #FFF8ED;
`;

const Banner = styled.div`
  background-color: #39683B;
  color: #FFE7C9;
  padding: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 8px;
`;

const Title = styled.h2`
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

const Form = styled.form`
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

function Shop() {
  const [formData, setFormData] = useState({ name: '', email: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Seller form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', interest: '' });
  };

  return (
    <ShopWrapper>
      <Banner>Sell With Us!</Banner>

      <Title>Seller Information Form</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input name="name" value={formData.name} onChange={handleChange} required />

        <Label>Email</Label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <Label>Your Interest</Label>
        <Input name="interest" value={formData.interest} onChange={handleChange} required />

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>

      {submitted && <p style={{ color: '#39683B', marginTop: '1rem' }}>Thanks! We’ll contact you soon.</p>}
    </ShopWrapper>
  );
}

export default Shop;
