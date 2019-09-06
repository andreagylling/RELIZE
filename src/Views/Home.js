import React from 'react';
import styled from 'styled-components';
import ImgCard from '../Components/Collections/ImgCard';
import collectionImg1 from '../Assets/Images/orange_trousers.png';
import collectionImg2 from '../Assets/Images/polo_jacket.jpeg';
import ImgCaption from '../Components/Collections/ImgCaption';

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
grid-template-areas: ". ." ". .";
`;

const Cell = styled.div`
width: 513px;
height: 600px;
`;

export default function Home() {
  return (
    <>
      <Container>
        <Cell>
          <ImgCard img={collectionImg1} />
        </Cell>
        <Cell>
          <ImgCaption title="Leisure"/>
        </Cell>
        <Cell>
          <ImgCaption title="Work"/>
        </Cell>
        <Cell>
          <ImgCard img={collectionImg2} />
        </Cell>
      </Container>
    </>
  )
}