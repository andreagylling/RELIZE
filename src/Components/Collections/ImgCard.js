import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
position: relative;
margin: 0px;
`;

const Rectangle = styled.div`
width: 513px;
height: 303px;
background-color: #BCB4AF;
position: absolute;
z-index: -1;
top: 250px;
`;

const Img = styled.img`
width: 394px;
height: 498px;
position: absolute;
left: 60px;
`;

export default function ImgCard (props){
    return (
        <>
        <Container>
            <Img src={props.img}></Img>
            <Rectangle></Rectangle>
        </Container>
        </>
    )
}