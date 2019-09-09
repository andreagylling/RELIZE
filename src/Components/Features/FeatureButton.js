import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
color: #F7E714;
font-family: Futura, "Trebuchet MS", Arial, sans-serif; 
font-variant: small-caps;
font-size: 18px;
letter-spacing: 4px;
position: absolute;
top: 1075px;
left: 700px;
display: inline-block;
background-color: transparent;
border: none;
`;

const Line = styled.p`
color: #F7E714;
font-size: 18px;
letter-spacing: 0.6px;
display: inline-block;
margin-left: 2px;
`;

export default function FeatureButton(props) {
  return (
    <>
      <Button>{props.text}<Line>{props.line}</Line></Button>
      
    </>
  )
}