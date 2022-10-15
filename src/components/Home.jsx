import React from 'react';
import Nav from './Nav';
import ReactImg from '../img/raaa.png';
import PHPImg from '../img/php.jpg';
import WebdesignImg from '../img/webdesign.jpg';
import styled from 'styled-components';
import { Button } from '../styles/Shares';

const FlexDiv = styled.div`
  display: flex;

  background-color: ${(props) => props.theme.colors.primary};

  align-items: center;
  padding: 0 20px;
`;
const Flex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justfiy-content: center;
  align-items: center;
  padding: 20px;
`;

const Home = () => {
  return (
    <>
      <Nav />
      <FlexDiv>
        <Flex>
          <h1>Brighter Myanmar</h1>
          <h4>Professional Computer Programming Class</h4>
          <Button>Download Apk</Button>
        </Flex>
        <Flex>
          <img src={ReactImg} alt='ads' width='80%' />
        </Flex>
      </FlexDiv>
      <FlexDiv>
        <Flex>
          <img src={PHPImg} alt='ads' width='80%' />
        </Flex>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam fugiat quam cumque accusamus libero,
            veritatis culpa qui ex dignissimos possimus recusandae repudiandae ad inventore at? Officia consectetur
            illum suscipit harum?
          </p>
        </Flex>
      </FlexDiv>
      <FlexDiv>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam fugiat quam cumque accusamus libero,
            veritatis culpa qui ex dignissimos possimus recusandae repudiandae ad inventore at? Officia consectetur
            illum suscipit harum?
          </p>
        </Flex>
        <Flex>
          <img src={WebdesignImg} alt='ads' width='80%' />
        </Flex>
      </FlexDiv>
    </>
  );
};

export default Home;
