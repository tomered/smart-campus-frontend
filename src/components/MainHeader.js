import React, {useState} from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import "../Style.css"
import logoImage from '../hit_logo.svg';



const MainHeader = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenuClick = () => {
    setShowMenu(!showMenu)
  }
  return (
    <Container> 
      <CustomNavBar>
          {/*<img src={logoImage} alt="Smart Campus Logo" />*/}
          <Title><a href="/">Smart Campus</a></Title>
      <MenuIcon onClick={handleMenuClick}>
          <FaBars />
        </MenuIcon>
        <MenuLinks show={showMenu}>
        <ul>
          <li><a href="staff">staff</a></li>
          <li><a href="Students">Students</a></li> 
          <li><a href="Partners">Partners</a></li>
          <li><a href="Contact">Contact Us</a></li>
        </ul>
        </MenuLinks>
        
      </CustomNavBar>
      
    </Container>
  )
}

export default MainHeader


const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-bottom: 1px solid #dddddd;
  position: sticky;
  top: 0px;
  z-index: 1;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    color: #333333;
  }
`

const CustomNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  /* Media queries */
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #333333;
  margin-left: 10px;
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Media queries */
  @media screen and (max-width: 480px) {
    display: none;
  }
`

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  /* Media queries */
  @media screen and (max-width: 480px) {
    display: block;
    font-size: 24px;
  }
`

const MenuLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 20px;
  }

  a {
    color: #000000;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    transition: all 0.3s ease-in-out;
  }

  /* Media queries */
  @media screen and (max-width: 480px) {
    display: ${({ show }) => (show ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f5f5f5;
    padding: 20px
  }
`