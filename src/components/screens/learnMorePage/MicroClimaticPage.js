import React, { useEffect } from "react";
import styled from "styled-components";
import DashboardHomeBtns from "../../dashboard/DashboardHomeBtns";

const LearnMorePage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Content>
        <h1
          style={{
            marginBottom: "32px", // Equivalent to mb: 4 in Material-UI
            padding: "25px 1px",
            fontWeight: "bold",
            fontSize: "48px",
            background: "linear-gradient(90deg, #3f51b5, #21CBF3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          MicroClimatic
        </h1>
        <Text>MicroClimatic MicroClimatic MicroClimaticMicroClimatic</Text>
        <DashboardHomeBtns source="microClimatic" />
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
