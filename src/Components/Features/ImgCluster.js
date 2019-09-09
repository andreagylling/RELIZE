import React from 'react';
import styled from 'styled-components';
import bluehue1 from '../../Assets/Images/blue_coat.jpeg';
import bluehue2 from '../../Assets/Images/checked_trousers.jpeg';
import bluehue3 from '../../Assets/Images/lightblue_sweater.png';
import FeatureTitle from './FeatureTitle';
import FeatureIntro from './FeatureIntro';
import FeatureButton from './FeatureButton';

const Div = styled.div`
position: relative;
`;

const TopImage = styled.img`
width: 332px;
opacity: 0.8;
position: absolute;
top: 100px; 
left: 195px; 
z-index: 1;
`;

const MiddleImage = styled.img`
width: 454px;
opacity: 0.8;
position: absolute;
left: 425px;
top: 165px; 
`;

const BottomImage = styled.img`
width: 403px;
opacity: 0.9;
position: absolute;
top: 625px;
left: 115px;
z-index: -1;
`;

export default function ImgCluster() {
    return (
        <Div>
            <TopImage src={bluehue1}></TopImage>
            <MiddleImage src={bluehue2}></MiddleImage>
            <BottomImage src={bluehue3}></BottomImage>
            <FeatureTitle title="Blue hue" />
            <FeatureIntro text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <FeatureButton text="view feature" line="-----"/>
        </Div>
    )
}