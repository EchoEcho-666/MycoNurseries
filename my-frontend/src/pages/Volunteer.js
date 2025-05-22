import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #FFF8ED;
`;

const Title = styled.h2`
  color: #39683B;
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

const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem;
  background-color: #39683B;
  color: #FFE7C9;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Volunteer() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', notes: '' });

  const handleAuth = (e) => {
    e.preventDefault();
    if (password === 'letmein') setAuthenticated(true); // Simple client-side password
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer form submitted:', formData);
    setFormData({ name: '', email: '', role: '', notes: '' });
  };

  if (!authenticated) {
    return (
      <Wrapper>
        <Title>Enter Password to Access</Title>
        <Form onSubmit={handleAuth}>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Title>Volunteer Posting</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input name="name" value={formData.name} onChange={handleChange} />

        <Label>Email</Label>
        <Input name="email" value={formData.email} onChange={handleChange} />

        <Label>Role</Label>
        <Input name="role" value={formData.role} onChange={handleChange} />

        <Label>Notes or Form Link</Label>
        <TextArea name="notes" rows={4} value={formData.notes} onChange={handleChange} />

        <Button type="submit">Post</Button>
      </Form>
    </Wrapper>
  );
}

export default Volunteer;
