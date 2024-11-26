import React from 'react';
import { Box } from '@mui/material';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#000',
        color: 'white',
      }}
    >
      {children}
    </Box>
  );
};
