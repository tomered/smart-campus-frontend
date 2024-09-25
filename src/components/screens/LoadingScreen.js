import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const LoadingScreen = ({ message }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CircularProgress size={60} thickness={5} />
        <Typography sx={{ marginTop: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
          {message}...
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingScreen;