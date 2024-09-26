  import React, { useState } from "react";
import styled from "styled-components";

// Import images from the assets folder
import image2 from "../assets/mgm_elements.jpg";
import image1 from "../assets/campus.jpg";


const images = [image1, image2];

const textContent = [
  "smart campus is the result of combining digital and physical infrastructures. ​Creating an advanced smart environment in line with today's needs using smart technology and minimal interference in the existing infrastructure. Smart campus is based on the process of gathering and processing information and decision making system based on adaptive artificial intelligence.",
  "Text for Image 2: Another message for the second image.",

];


const InfoCompanySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <InfoCompanySectionContainer>
      <LeftButton onClick={handlePrev}>&#8249;</LeftButton>
      <InfoCompanySectionWrapper index={currentImageIndex}>
        {images.map((image, index) => (
          <InfoCompanySectionImage
            key={index}
            src={image}
            alt={`company info ${index + 1}`}
          />
        ))}
      </InfoCompanySectionWrapper>
      <RightButton onClick={handleNext}>&#8250;</RightButton>
      <OverlayText>{textContent[currentImageIndex]}</OverlayText> {/* Display text based on current image */}
    </InfoCompanySectionContainer>
  );
};

export default InfoCompanySection;



const InfoCompanySectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 80vh; // Adjust height as needed
  overflow: hidden;
`;

const InfoCompanySectionImage = styled.img`
  width: 100%;
  height: 110%;
  object-fit: cover;
  margin-top: 200px;
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
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const LeftButton = styled(InfoCompanySectionButton)`
  left: 25px;
`;

const RightButton = styled(InfoCompanySectionButton)`
  right: 25px;
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 20px; // Adjust as needed
  left: 20px; // Adjust as needed
  color: white; // Text color
  font-size: 24px; // Adjust font size as needed
  background-color: rgba(0, 0, 0, 0.5); // Optional: add background for readability
  padding: 5px; // Optional: add some padding
  border-radius: 5px; // Optional: round the corners
`;

const InfoCompanySectionWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out; // Transition for sliding effect
  transform: translateX(-${(props) => props.index * 100}%); // Slide effect based on index
  width: ${(props) => props.imagesLength * 100}%; // Width for all images
`;