import React, { useState, useEffect } from 'react';
import LoadingScreen from '../LoadingScreen';
import SuccessScreen from '../SuccessScreen';

const LoadingSuccessScreen = ({ isLoading, isSuccess, onComplete ,message }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(true);
      }, 2000);

      const redirectTimer = setTimeout(() => {
        onComplete();
      }, 4000);

      return () => {
        clearTimeout(timer);
        clearTimeout(redirectTimer);
      };
    }
  }, [isSuccess, onComplete]);

  if (!isLoading && !isSuccess) return null;

  if (isLoading && !showSuccess) {
    return <LoadingScreen message = {message}/>;
  }

  if (showSuccess) {
    return <SuccessScreen />;
  }

  return null;
};

export default LoadingSuccessScreen;