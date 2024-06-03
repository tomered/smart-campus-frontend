import React from 'react';
import styled from 'styled-components';

const LearnMorePage = () => {
  return (
    <Container>
      <Content>
        <Title>Water</Title>
        <Text>
          Electricity is a resource that is widely used throughout the campus.
          Naturally, most of the activities related to the study and research
          process actually consume electricity. Our goal is to reduce the use of
          this resource by detecting unjustified electricity use. Therefore, if
          we locate a space that is not in use and/or the operation of air
          conditioners is ineffective - in the first stage we will alert the
          relevant officials and in a more advanced stage of a project - we will
          stop the waste.
        </Text>
        <BtnContainer>
          <StyledButton onClick={() => (window.location.href = '/')}>
            Show Dashboard
          </StyledButton>
          <StyledButton onClick={() => (window.location.href = '/')}>
            Back to Main Page
          </StyledButton>
        </BtnContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 24px;
  line-height: 1.5;
  text-align: justify;
`;

const StyledButton = styled.button`
  appearance: button;
  background-color: rgb(24, 153, 214);
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  border-radius: 16px;
  border-width: 0px 0px 4px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-block;
  font-family: din-round, sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0px;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0px);
  transition: filter 0.2s ease 0s;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 13rem;
  text-decoration: none;
  margin-top: 35px;
  align-self: baseline;

  &:after {
    background-clip: padding-box;
    background-color: #1cb0f6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
  }

  &:disabled {
    cursor: auto;
  }

  &:active {
    border-width: 4px 0 0;
    background: none;
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default LearnMorePage;
