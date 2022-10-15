import React from 'react';
import logoImg from '../img/logo.png';
import styled from 'styled-components';
import { useLoginContext } from '../store/LoginContextApi';
import { useNavigate } from 'react-router-dom';
const FlexDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  height: 45px;
  align-items: center;
  padding: 0 20px;
`;
const RightDiv = styled.div`
  flex: 1;
`;
const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;
const UlDiv = styled.ul`
  display: flex;
  justify-content: flex-end;
`;
const H1_STYLE = {
  marginLeft: '10px',
  color: '#ff8800',
};
const ATAG_STYLE = {
  color: 'hotpink',
};

const LIstyle = styled.li`
  padding: 0 10px;
  &:after {
    content: '';
    display: block;
    height: 3px;
    background-color: hotpink;
    transform: scaleX(0);
    transition: 300ms;
  }
  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;
const Nav = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useLoginContext();
  const logoutHandler = () => {
    setLoggedIn(false);
    navigate('/');
  };
  return (
    <FlexDiv>
      <LeftDiv>
        <img src={logoImg} alt='brighterMyanmar' width='30px' height='30px' />
        <strong style={H1_STYLE}>Brighter Myanmar</strong>
      </LeftDiv>
      <RightDiv>
        <UlDiv>
          <LIstyle>
            {' '}
            <a style={ATAG_STYLE} href='#download'>
              Download
            </a>
          </LIstyle>
          <LIstyle>
            {' '}
            <a style={ATAG_STYLE} href='#logout' onClick={logoutHandler}>
              {loggedIn ? 'Logout' : 'Login'}
            </a>
          </LIstyle>
        </UlDiv>
      </RightDiv>
    </FlexDiv>
  );
};

export default Nav;
