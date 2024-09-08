import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [emailUsername, setEmailUsername] = useState('');
  const [emailDomain, setEmailDomain] = useState('@gmail.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [id, setId] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('050');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailUsername + emailDomain;
    const phone = phonePrefix + phoneNumber;
    console.log(
      `Name: ${name}, UserName: ${userName}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}, Id: ${id}, Phone: ${phone}`
    );

    handleClear();
  };

  const handleClear = () => {
    setName('');
    setUserName('');
    setEmailUsername('');
    setEmailDomain('@gmail.com');
    setPassword('');
    setConfirmPassword('');
    setId('');
    setPhonePrefix('050');
    setPhoneNumber('');
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
        <EmailInputContainer>
          <EmailUsernameInput
            type="text"
            id="emailUsername"
            value={emailUsername}
            onChange={(e) => setEmailUsername(e.target.value)}
            required
            placeholder="mail"
          />
          <EmailDomainSelect
            id="emailDomain"
            value={emailDomain}
            onChange={(e) => setEmailDomain(e.target.value)}
          >
            <option value="@gmail.com">@gmail.com</option>
            <option value="@walla.co.il">@walla.co.il</option>
            <option value="@outlook.com">@outlook.com</option>
            <option value="@yahoo.com">@yahoo.com</option>
          </EmailDomainSelect>
        </EmailInputContainer>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
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
        <PhoneInputContainer>
          <PhonePrefixSelect
            id="phonePrefix"
            value={phonePrefix}
            onChange={(e) => setPhonePrefix(e.target.value)}
          >
            <option value="050">050</option>
            <option value="052">052</option>
            <option value="053">053</option>
            <option value="054">054</option>
            <option value="055">055</option>
            <option value="058">058</option>
          </PhonePrefixSelect>
          <PhoneNumberInput
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="phone number"
          />
        </PhoneInputContainer>
        <ButtonContainer>
          <SubmitButton type="submit">Create Account</SubmitButton>
          <ClearButton type="button" onClick={handleClear}>Clear</ClearButton>
        </ButtonContainer>
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
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #1f2937;
  }

  label {
    color: #1f2937;
    font-size: 1rem;
    margin-bottom: 5px;
  }

  input,
  select {
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    padding: 10px;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #2f80ed;
      box-shadow: 0 0 0 2px rgba(47, 128, 237, 0.2);
    }
  }
`;

const EmailInputContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const EmailUsernameInput = styled.input`
  flex: 1;
  border-radius: 4px 0 0 4px;
  border-right: none;
`;

const EmailDomainSelect = styled.select`
  width: 140px;
  border-radius: 0 4px 4px 0;
  border-left: none;
  background-color: #e5e7eb;
`;

const PhoneInputContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const PhonePrefixSelect = styled.select`
  width: 80px;
  border-radius: 4px 0 0 4px;
  border-right: none;
  background-color: #e5e7eb;
`;

const PhoneNumberInput = styled.input`
  flex: 1;
  border-radius: 0 4px 4px 0;
  border-left: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  flex: 1;
  background: #2f80ed;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #1e3a8a;
  }
`;

const SubmitButton = styled(Button)`
  background: #2f80ed;
`;

const ClearButton = styled(Button)`
  background: #9ca3af;

  &:hover {
    background: #6b7280;
  }
`;

const SignInLink = styled.a`
  color: #2f80ed;
  font-size: 0.9rem;
  text-decoration: none;
  text-align: center;
  margin-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

export default SignUpPage;