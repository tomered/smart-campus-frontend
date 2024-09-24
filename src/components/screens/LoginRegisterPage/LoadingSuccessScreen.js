import React, { useState, useEffect } from 'react';

const LoadingSuccessScreen = ({ isLoading, isSuccess, onComplete }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(true);
      }, 2000); // Show success message after 2 seconds of loading

      const redirectTimer = setTimeout(() => {
        onComplete();
      }, 4000); // Redirect after 4 seconds (2 seconds of loading + 2 seconds of success message)

      return () => {
        clearTimeout(timer);
        clearTimeout(redirectTimer);
      };
    }
  }, [isSuccess, onComplete]);

  if (!isLoading && !isSuccess) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        {isLoading && !showSuccess && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              border: '5px solid #f3f3f3',
              borderTop: '5px solid #3498db',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            <p style={{ marginTop: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>Registering...</p>
          </div>
        )}
        {showSuccess && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg style={{
              width: '4rem',
              height: '4rem',
              color: '#48bb78',
              marginBottom: '1rem'
            }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>Registration Successful!</p>
            <p style={{ marginTop: '0.5rem' }}>Redirecting to login page...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingSuccessScreen; 