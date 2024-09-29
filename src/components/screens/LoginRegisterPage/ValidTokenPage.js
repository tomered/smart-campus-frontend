import React, { useState } from 'react';
import { TextField, Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen'; 
import SuccessScreen from '../SuccessScreen'; 
import FailureScreen from '../FailureScreen';

const ValidTokenPage = () => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

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
        setIsFailure(false);
      } else {
        setIsSuccess(false);
        setIsFailure(true);
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

  if (isFailure) {
    return <FailureScreen bodyMessage="Invalid token! Please try again." mainMessage = "Registering failed!"  onClose={() => setIsFailure(false)} />;
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

export default ValidTokenPage;