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
  SignInLink,
  ErrorMessage
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
  const [errors, setErrors] = useState({});


  const validateForm = () => {
    const newErrors = {};

    // Validate first name and last name (letters only)
    if (!/^[a-zA-Z\s]*$/.test(firstName)) {
      newErrors.firstName = 'First name must include letters only';
    }
    if (!/^[a-zA-Z\s]*$/.test(lastName)) {
      newErrors.lastName = 'Last name must include letters only';
    }

    // Validate password (at least 8 characters)
    if (password.length < 8) {
      newErrors.password = 'Password should be at least 8 characters';
    }

    // Validate ID
    if (!/^\d{9}$/.test(id)) {
      newErrors.id = 'Invalid id';
    }

    // Validate phone number (exactly 7 digits)
    if (!/^\d{7}$/.test(phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number';
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords should be equals';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const email = emailUsername + emailDomain;
      const phone = phonePrefix + phoneNumber;
      console.log(
        `First Name: ${firstName}, Last Name: ${lastName}, UserName: ${userName}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}, Id: ${id}, Phone: ${phone}`
      );

      handleClear();
    }
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
    setErrors({});
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
        {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
        
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        
        <label htmlFor="userName">Username:</label>
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
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
        
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
        
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
        {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber}</ErrorMessage>}
        
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