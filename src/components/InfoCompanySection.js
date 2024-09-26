import React from "react";
import styled, { keyframes } from "styled-components";
import "../Style.css";
import campus from "../assets/campus.jpg";

const InfoCompanySection = () => {
  return (
    <MainContainer>
      <CustomImg src={campus} alt="Smart Campus scenery" />
      <TextArea>
      {/* Adding the new MGM Group section */}
        <h2
          style={{
            marginBottom: "32px",
            padding: "25px 1px",
            fontWeight: "bold",
            fontSize: "48px",
            background: "linear-gradient(90deg, #3f51b5, #FF8E53)", // A different gradient for MGM Group
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          MGM Group
        </h2>
        <p style={{ fontSize: "26px", alignItems: "left"}}>
          MGM Group produces, deploys, and maintains innovative physical assets
          management systems that consume minimal energy to make sure we not
          only improve the processes in your business but also reduce emission.
          We are developing and integrating smart city projects with sensors
          that measure physical parameters such as humidity levels or
          electricity fluctuations and provide top-notch software that ensures
          you have an easy and intuitive interface to simplify the
          decision-making process.
        </p>
      </TextArea>
    </MainContainer>
  );
};

export default InfoCompanySection;

// Animation for sliding the image from the left
const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const CustomImg = styled.img`
  width: 50%;
  height: auto;
  float: left;
  margin-right: 20px;
  animation: ${slideInFromLeft} 1s ease-out; /* Applying the animation */

  @media (max-width: 1200px) {
    width: 90%;
    margin-top: 20px;
    margin-right: 0px;
  }
`;

const TextArea = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  animation: ${slideInFromRight} 1s ease-out;

  p {
    margin: 0;
    font-size: 1.5em;
    line-height: 1.5;
    text-align: left;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  /* Media queries */
  @media print {
    p {
      font-size: 16px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    body {
      margin: 0;
    }

    main {
      margin: 50px;
    }
  }
`;

const MainContainer = styled.div`
  padding: 0px 50px 50px 50px;
  display: flex;
  align-items: center;

  /* Media queries */
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;
