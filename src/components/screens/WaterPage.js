import React, { useEffect } from 'react';
import styled from 'styled-components';
import DashboardHomeBtns from '../DashboardHomeBtns';

const LearnMorePage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Content>
        <Title>Water</Title>
        <Text>
          Water is a basic and necessary resource for human living conditions.
          Throughout the campus, at any given moment, water is being used, even
          if it is obviously above it. In everyday life, it is impossible to
          have an activity without water around the campus, especially in the
          hot summer months. It is extremely important to locate leaks, pipeline
          explosions and unwise use (close to real time). In the first phase we
          will alert the relevant officials and in a more advanced phase of a
          project - we will stop the waste.
        </Text>
        <DashboardHomeBtns></DashboardHomeBtns>
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
  margin: 22px 0px;
`;

const Text = styled.p`
  font-size: 24px;
  line-height: 1.5;
  text-align: justify;
`;

export default LearnMorePage;
