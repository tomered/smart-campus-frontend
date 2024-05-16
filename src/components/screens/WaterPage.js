import React from 'react';
import styled from 'styled-components';


const LearnMorePage = () => {
  return (
    <Container>
      <Content>
        <Title>Learn More</Title>
        <Text>
          Add your text here...
        </Text>
      </Content>
    </Container>
  );
};

export default LearnMorePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 24px;
  line-height: 1.5;
  text-align: justify;
`;
