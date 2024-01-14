// src/components/Login.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../components/header'; 

// Define keyframe animation
const animateBg = keyframes`
  100% {
    filter: hue-rotate(360deg);
  }
`;

// Styled components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  
  background-size: cover;
  background-position: center;
  animation: ${animateBg} 5s linear infinite;
`;

const LoginBox = styled.div`
  position: relative;
  width: 400px;
  height: 450px;
  background: transparent;
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px);
`;

const InputBox = styled.div`
  position: relative;
  width: 310px;
  margin: 30px 0;
  border-bottom: 1px solid #fff;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  color: #063A9E; /* Change color to #063A9E */
  padding: 0 35px 0 5px;

  &:focus ~ ${Label},
  &:valid ~ ${Label} {
    top: -5px;
  }
`;
const RememberForgot = styled.div`
  margin: -15px 0 15px;
  font-size: 0.9em;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

const RememberLabel = styled.label`
  margin-right: 3px;
`;

const ForgotLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #fff;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 1em;
  color: #000;
  font-weight: 500;
`;

const RegisterLink = styled.div`
  font-size: 0.9em;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;
`;

const RegisterLinkText = styled.p`
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// ... Continue defining other styled components

const Login = () => {
    return (
        <div>
            <Header />
      <Wrapper>
        <LoginBox>
          <form action="">
            <h2>Login</h2>
  
            <InputBox>
              <Input type="email" required />
              <Label >Email</Label>
            </InputBox>
  
            <InputBox>
              <Input type="password" required />
              <Label>Password</Label>
            </InputBox>
  
            <RememberForgot>
              <RememberLabel>
                <input type="checkbox" /> Remember me
              </RememberLabel>
              <ForgotLink href="#">Forgot Password?</ForgotLink>
            </RememberForgot>
  
            <SubmitButton type="submit">Login</SubmitButton>
  
            <RegisterLink>
              <RegisterLinkText>
                Don't have an account? <a href="/Signup">Register</a>
              </RegisterLinkText>
            </RegisterLink>
          </form>
        </LoginBox>
      </Wrapper>
      </div>
    );
  };
  
  export default Login;
