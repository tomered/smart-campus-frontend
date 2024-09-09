import React, { useState } from 'react';
import { 
  Container, 
  SignUpForm, 
  EmailInputContainer, 
  EmailUsernameInput, 
  EmailDomainSelect,
  PhoneInputContainer,
  PhonePrefixSelect,
  PhoneNumberInput,
  ButtonContainer,
  SubmitButton,
  ClearButton,
  SignInLink
} from './SignUpPageStyles';

const SignUpPage = () => {
  const emailDomains = ['@gmail.com', '@walla.co.il', '@outlook.com', '@yahoo.com'];
  const phonePrefixes = ['050', '052', '053', '054', '055', '058'];
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
      `First Name: ${firstName}, Last Name: ${lastName}, UserName: ${userName}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}, Id: ${id}, Phone: ${phone}`
    );

    handleClear();
  };

  const handleClear = () => {
    setFirstName('');
    setLastName('');
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
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
          {emailDomains.map((domain) => (
          <option key={domain} value={domain}>{domain}</option>
          ))}
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
          {phonePrefixes.map((prefix) => (
          <option key={prefix} value={prefix}>{prefix}</option>
          ))}
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

export default SignUpPage;