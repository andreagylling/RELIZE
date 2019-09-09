import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
font-family: 'Merriweather', serif;
font-size: 94px;
font-weight: black;
letter-spacing: 8px;
color: #E7E7F0;
position: absolute;
top: 740px;
z-index: 2;
left: 315px;
`;

export default function FeatureTitle(props){
    return (
        <>
        <Title>{props.title}</Title>
        </>
    )
}