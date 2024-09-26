import React from 'react'
import "../Style.css"
import CardsRow from './card/CardsRow'
import InfoSection from './InfoSection'
import InfoCompanySection from './InfoCompanySection'

const MainBody = () => {
  return (  
    <>
       <InfoSection/>
       <br/>
       <InfoCompanySection/>
       <br/>
       <CardsRow/>
       <br/>
    </>
  )
}

export default MainBody
