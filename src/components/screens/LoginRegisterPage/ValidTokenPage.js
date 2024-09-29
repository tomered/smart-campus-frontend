import React, { useState } from 'react';
import { TextField, Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen'; 
import SuccessScreen from '../SuccessScreen'; 

const TokenComponent = () => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setToken(e.target.value);
  };

  const handleReset = () => {
    setToken('');
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    setTimeout(() => {
      if (token) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
      setIsLoading(false);
    }, 2000); 
  };

  if (isSuccess) {
    setTimeout(() => {
      navigate('/login'); 
    }, 2000); 

    return <SuccessScreen message="Redirecting to Login page..." />;
  }

  return (
    <Container>
      {isLoading && <LoadingScreen message="Loading..." />} {}
      {!isLoading && (
        <>
          <Typography variant="h6" gutterBottom>
            Paste Your Token Below
          </Typography>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={token}
            onChange={handleChange}
            placeholder="Paste your token here..."
          />
          <Box display="flex" justifyContent="flex-end" marginTop={2}>
            <Button variant="outlined" onClick={handleReset} style={{ marginRight: '8px' }}>
              Reset
            </Button>
            <Button variant="contained" onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Submit'}
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default TokenComponent;