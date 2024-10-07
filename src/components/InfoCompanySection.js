import React, { useState } from "react";
import styled from "styled-components";

// Import images from the assets folder
import image1 from "../assets/campus.jpg";
import image2 from "../assets/mgm_elements.jpg";

// List of images and associated text content
const images = [image1, image2];
const textContent = [
  "Smart campus is the result of combining digital and physical infrastructures. Creating an advanced smart environment in line with today's needs using smart technology and minimal interference in the existing infrastructure. Smart campus is based on the process of gathering and processing information and decision-making system based on adaptive artificial intelligence.",
  "At MGM Group, we develop and integrate smart city projects with sensors that measure physical parameters such as humidity levels or electricity fluctuations and provide top-notch software that ensures an easy and intuitive interface to simplify the decision-making process. The Artificial Intelligence module of the software provides additional capabilities for security and optimization.",
];

const InfoCompanySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle "next" button click
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle "previous" button click
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <InfoCompanySectionContainer>
      <ImageContainer
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
      <LeftButton onClick={handlePrev}>&#8249;</LeftButton>
      <RightButton onClick={handleNext}>&#8250;</RightButton>
      <OverlayText currentImageIndex={currentImageIndex}>
        {textContent[currentImageIndex]}
      </OverlayText>
    </InfoCompanySectionContainer>
  );
};

export default InfoCompanySection;

// Styled Components

const InfoCompanySectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 60vh; /* Adjust height of the container */
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%; /* Set the width of the image container to 80% of the parent container */
  height: 100%; /* Set the height of the image container to 60% of the parent container */
  transform: translate(-50%, -50%); /* Center the image container */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(5px); /* Adjust blur intensity as needed */
  z-index: 1; /* Ensure the background stays behind other elements */
`;

const InfoCompanySectionButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 3; /* Ensure buttons stay above the blurred background */

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const LeftButton = styled(InfoCompanySectionButton)`
  left: 10px;
`;

const RightButton = styled(InfoCompanySectionButton)`
  right: 10px;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 10%; /* Position text at the top */
  left: 10%; /* Position text on the left */
  color: ${(props) =>
    props.currentImageIndex === 0
      ? "black"
      : "white"}; /* Black text for the first image, white text for the second image */
  font-size: 18px; /* Font size */
  font-weight: 500; /* Adjust font weight for clarity */
  font-family: "Arial", sans-serif;
  text-align: left;
  background-color: rgba(
    255,
    255,
    255,
    0.7
  ); /* Brighter background with white color and 70% opacity */
  padding: 10px; /* Smaller padding for a cleaner look */
  border-radius: 8px; /* Rounded corners for aesthetics */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Light text shadow for better readability */
  max-width: 40%; /* Limit the width of the text box */
  z-index: 2; /* Ensure the text appears above the blurred background */
`;
