import React from 'react';
import styled from 'styled-components';
import '../Style.css';
import campus from '../assets/campus.jpg';

const InfoSection = () => {
  return (
    <MainContainer>
      <CustomImg src={campus} alt='Smart Campus screnery' />
      <TextArea>
        <h2>Smart Campus</h2>
        <p>
          is an innovative approach to a common place based on optimal use of
          resources while maximizing the comfort of living. At the base of the
          smart campus is a detection, information processing and
          decision-making system based on adaptive AI. The results of system
          activity are provided to users according to their roles on campus. In
          more advanced stages, the system will know how to make decisions and
          perform preventive actions while notifying the relevant officials.
        </p>
      </TextArea>
    </MainContainer>
  );
};

export default InfoSection;
const CustomImg = styled.img`
  width: 50%;
  height: auto;
  float: left;
  margin-right: 20px;
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

    /* Adjust margins */
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
