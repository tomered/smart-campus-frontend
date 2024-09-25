import React, { useState } from 'react';
import styled from "styled-components";
import { useLoginUserMutation } from '../../../redux/rtk/userData';
import { useDispatch } from 'react-redux';
import { setToken, setUserName } from '../../../redux/slices/userDataSlice';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser] = useLoginUserMutation()
  const dispatch = useDispatch();

  const handleSubmit = async(event) => {
    event.preventDefault(); // Prevent default form submission

    // Perform actions with collected data (username, password, userRole)
    // For example, send it to a server for validation or display a message
    console.log(
      `Username: ${username}, Password: ${password}`
    );

    try {
      // Getting user from database
      const result = await loginUser({userName:username, password});

      // Save user token and userName
      dispatch(setToken(result.data.token));
      dispatch(setUserName(username));
      //localStorage.setItem("isLogin", true)

    } catch (error) {
      console.error('error longing in: ' + error.message);
    }

    // Reset form after submission (optional)
    setUsername("");
    setPassword("");
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Submit</button>
        <SignUpLink href="/sign-up">Not registered yet? Sign Up</SignUpLink>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-top:40px;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
  h1{
    text-align:center;
    margin-bottom:20px;
  }
  form {
    display: flex;
    flex-direction: column;
    label {
      color: #1F2937;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
    input, textarea {
      background: #F3F4F6;
      border: none;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 20px;
      &:focus {
        outline: none;
        border-color: #2F80ED;
        box-shadow: 0 0 2px 2px #9AE6B4;
      }
    }
    button {
      background: #2F80ED;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.2s ease-in-out;
      &:hover {
        background: #1E3A8A;
      }
    }
`;

const SignUpLink = styled.a`
  color: #2f80ed; 
  font-size: 0.9rem; 
  text-decoration: none; 

  &:hover {
    text-decoration: underline; 
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


export default LoginPage;
