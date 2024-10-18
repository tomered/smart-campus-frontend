import React from "react";
import styled, { keyframes } from "styled-components";
import "../Style.css";
import campus from "../assets/campus.jpg";

/*
is an innovative approach to a common place based on optimal use of resources while maximizing the comfort of living. At the base of the smart campus is a detection, information processing, and decision-making system based on adaptive AI. The results of system activity are provided to users according to their roles on campus. In more advanced stages, the system will know how to make decisions and perform preventive actions while notifying the relevant officials.
*/
const InfoSection = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <CustomImg src={campus} alt="Smart Campus scenery" />
        <Caption>
          <h2>Smart Campus</h2>
          <p>
            It's an innovative approach that optimizes resources while enhancing living comfort.
            The smart campus uses an adaptive AI system for detection, information processing, and decision-making,
            delivering results to users based on their roles. In advanced stages, it will make decisions and take preventive actions, notifying relevant officials.
          </p>
        </Caption>
      </ImageContainer>
    </MainContainer>
  );
};

export default InfoSection;

// Animation for sliding the caption from the right (starting from outside the image)
const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
    bottom: 230px;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
    bottom: 230px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90vh; /* Adjust this to control the image height */

  @media (max-width: 700px) {
    height: 50vh; /* Reduce the image height on mobile */
  }
`;

const CustomImg = styled.img`
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  filter: brightness(50%); /* Adjust brightness to darken the image */
  
  @media (max-width: 700px) {
    height: auto;
    object-fit: contain;
  }
`;


const Caption = styled.div`
  position: absolute;
  bottom: 230px; /* Position the caption near the bottom */
  left: 20px; /* Position the caption near the left */
  font-family: "Gill Sans", sans-serif;
  padding: 20px;
  color: white;
  width: 50%; /* Adjust width as needed */
  animation: ${slideInFromRight} 1s ease-out;

  h2 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 16px;
    background: linear-gradient(90deg, #55a09e, #55a09e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    width: 80%; /* Caption width adjustment for mobile */
    bottom: 50px; /* Adjust caption position for smaller screens */
    left: 10px; /* Adjust padding for small screens */
    h2 {
      font-size: 28px; /* Smaller heading on mobile */
    }
    p {
      font-size: 14px; /* Smaller paragraph text on mobile */
    }
  }
`;

const MainContainer = styled.div`
  padding: 0; /* Remove padding from the container */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0; /* Ensure no margin */
  width: 100%;
`;
