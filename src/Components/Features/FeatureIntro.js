import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
font-family: Futura, "Trebuchet MS", Arial, sans-serif; 
font-size: 18px;
letter-spacing: 0.6px;
line-height: 24px;
width: 309px;
height: 96px;
position: absolute;
top: 890px;
left: 555px;
`;

export default function FeatureIntro(props){
    return (
        <>
        <Text>{props.text}</Text>
        </>
    )
}