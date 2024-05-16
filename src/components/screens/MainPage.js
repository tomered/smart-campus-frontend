import React from 'react'
import "../../Style.css"
import styled from 'styled-components'
import MainBody from '../MainBody'
import IFrameTemplate from '../IFrameTemplate'

const MainPage = () => {

  const aaa = "https://app.hittest.smarty.camp/dashboard/8ad04d20-b533-11ed-aa55-4bc57f85b6ff?publicId=25d84fd0-5912-11ed-804e-411dde1247cf"
  return (
    <MainContainer>
      <MainBody/> 
        <h2>GIS Mapping of Hit College</h2>
        <IFrameTemplate title="Mapping of Hit College" src="http://16.170.213.98:80" width="600" height="450" loading="lazy"/>
        <IFrameTemplate title="Mapping of Hit College" src={aaa} width="600" height="450" loading="lazy"/>
    </MainContainer>
  )
  
}

export default MainPage

const MainContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: center;
`

const Separator = styled.div`
  margin-top: 50px;
  text-align: center;
`
