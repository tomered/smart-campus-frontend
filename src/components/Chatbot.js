import React, { useState } from 'react';
import styled from 'styled-components';

const Chatbot = ({ src, title, width, height, loading, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const botSrc =
    'https://copilotstudio.microsoft.com/environments/Default-3c678821-7750-47a3-937f-2661439abb7a/bots/cr971_smartCampus/webchat?__version__=2';

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <ChatbotContainer>
      <HelpButton onClick={toggleVisibility}>
        {isVisible ? 'Close Chat' : 'Open Chat'}
      </HelpButton>
      {isVisible && (
        <ChatbotDiv>
          <iframe
            src={botSrc}
            title={title}
            width={width || '100%'}
            height={height || '500px'}
            loading={loading || 'lazy'}
            {...props}
          />
        </ChatbotDiv>
      )}
    </ChatbotContainer>
  );
};

export default Chatbot;

const ChatbotContainer = styled.div`
  position: relative;
  z-index: 1000; /* Ensure the container is on top */
`;

const HelpButton = styled.button`
  position: fixed;
  top: 4.5rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  background-color: rgb(11, 85, 106);
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(16 151 161);
}

;
  }
`;

const ChatbotDiv = styled.div`
  top: 6.7rem;
  left: 1rem;
  position: fixed;
  height: auto;
`;
