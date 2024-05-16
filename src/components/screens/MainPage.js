import React from 'react';
import '../../Style.css';
import styled from 'styled-components';
import MainBody from '../MainBody';
import IFrameTemplate from '../IFrameTemplate';

const MainPage = () => {
  const MapSrc = 'https://shaishillo.github.io/Campus-Nav/';
  return (
    <MainContainer>
      <MainBody />
      <h2>GIS Mapping of Hit College</h2>
      <IFrameTemplate
        title='Mapping of Hit College'
        src={MapSrc}
        width='90%'
        height='550vh'
        loading='lazy'
      />
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: center;
`;

const Separator = styled.div`
  margin-top: 50px;
  text-align: center;
`;
