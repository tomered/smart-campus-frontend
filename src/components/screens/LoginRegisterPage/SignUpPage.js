import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [userName,setUserName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [id,setId]=useState('');
  const [phone,setPhone]=useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Perform actions with collected data (name, email, password, confirmPassword)
    // For example, send it to a server for registration or display a message
    console.log(
      `Name: ${name}, UserName: ${userName} ,Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}
        ,Id:${id},Phone:${phone}`
    );

    // Reset form or display success message (optional)
    setName('');
    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setId('');
    setPhone('');

  };

  const handleClear=()=>
  {
    setName('');
    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setId('');
    setPhone('');
  }
  return (
    <Container>
      <SignUpForm onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="userName">UserName:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8} // Enforce minimum password length
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <label htmlFor="id">Id:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">Create Account</button>
        <button type="clear" onClick={handleClear}>Clear</button>

        <SignInLink href="/login">Already have an account? Sign In</SignInLink>
      </SignUpForm>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      color: #1f2937;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    input,
    textarea {
      background: #f3f4f6;
      border: none;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 20px;

      &:focus {
        outline: none;
        border-color: #2f80ed;
        box-shadow: 0 0 2px 2px #9ae6b4;
      }
    }

    button {
      background: #2f80ed;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: #1e3a8a;
      }
    }
  }
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SignInLink = styled.a`
  color: #2f80ed; /* Match the button color for consistency */
  font-size: 0.9rem; /* Slightly smaller font for subtle distinction */
  text-decoration: none; /* Remove underline */

  &:hover {
    text-decoration: underline; /* Underline on hover for interactivity */
  }
`;

export default SignUpPage;
