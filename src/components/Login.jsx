import React, { useRef } from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import { Button } from '../styles/Shares';
import { useLoginContext } from '../store/LoginContextApi';
import { useNavigate } from 'react-router-dom';

const SectionDiv = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
`;
const H1_STYLED = styled.h1`
  margin: 20px 0;
  color: #ff8800;
`;
const InputStyle = styled.input`
  display: block;
  width: 250px;
  padding: 10px 10px;
  margin-bottom: 20px;
  border: none;
  &:focus {
    outline: 1px solid #c4b3b3;
  }
`;
const Login = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useLoginContext();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const loginHandler = (e) => {
    e.preventDefault();
    let user = {
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
    };
    phoneRef.current.value = '';
    passwordRef.current.value = '';
    if (user.phone.length && user.password.length !== 0) {
      setLoggedIn(true);
      navigate('/home');
    }
  };
  return (
    <>
      <Nav />
      <SectionDiv>
        <H1_STYLED>Login To View Home Page</H1_STYLED>
        <form onSubmit={loginHandler}>
          <InputStyle type='tel' placeholder='phone' ref={phoneRef} />
          <InputStyle type='password' placeholder='password' ref={passwordRef} />
          <Button type='submit'>Login</Button>
        </form>
      </SectionDiv>
    </>
  );
};

export default Login;
