import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const Container = styled.div`
display: grid;
grid-template-columns: 0.2fr 1.8fr;
grid-template-rows: 1fr;
grid-template-areas: ". .";
margin-bottom: 150px;
`;

const HamburgerMenu = styled.button`
border: none;
background-color: transparent;
color: black;
font-size: 20px;
height: 40px;
margin-top: 50px;
`;

const Logo = styled.img`
margin-top: 75px;
justify-self: center;
align-self: center;
`;

export default function Navigation() {
  return (
    <>
      <Container>
        <HamburgerMenu>
          <i className="fas fa-bars"></i>
        </HamburgerMenu>
        <Logo src={logo}></Logo>
      </Container>
    </>
  )
}