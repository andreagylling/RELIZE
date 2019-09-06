import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: block;
position: relative;
`;

const Title = styled.p`
transform: rotate(-90deg);
font-size: 49px;
width: 0px;
margin-top: 350px;
margin-left: 75px;
letter-spacing: 4px;
font-family: 'Merriweather', serif;
`;

const Subtitle = styled.p`
transform: rotate(-90deg);
font-family: Futura, "Trebuchet MS", Arial, sans-serif; 
font-variant: small-caps;
font-size: 24px;
letter-spacing: 7px;
position: absolute;
left: 25px;
bottom: 205px;
`;

const Text = styled.p`
font-family: Futura, "Trebuchet MS", Arial, sans-serif; 
font-size: 18px;
letter-spacing: 0.6px;
line-height: 24px;
margin: 20px 60px;

`;

const Button = styled.button`
color: #F7E714;
font-family: Futura, "Trebuchet MS", Arial, sans-serif; 
font-variant: small-caps;
font-size: 18px;
letter-spacing: 0.6px;
transform: rotate(90deg);
position: absolute;
bottom: 420px;
right: 10px;

`;


export default function ImgCaption (props){
    return (
        <>
        <Container>
            <Button>shop now -----</Button>
            <Title>{props.title}</Title>
            <Subtitle>lorem ipsum</Subtitle>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </Container>
        </>
    )
}