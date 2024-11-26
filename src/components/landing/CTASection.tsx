import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  alpha,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const CTASection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="cta"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        background: alpha('#000', 0.98),
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.2,
          background: `
            radial-gradient(80% 80% at 50% 50%, 
              ${alpha(theme.palette.primary.dark, 0.25)} 0%, 
              transparent 100%),
            radial-gradient(50% 50% at 50% 0%, 
              ${alpha(theme.palette.primary.dark, 0.2)} 0%, 
              transparent 100%)
          `,
          filter: 'blur(100px)',
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '3.5rem', lg: '4rem' },
            fontWeight: 800,
            background: 'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 3,
            lineHeight: 1.2,
          }}
        >
          Ready to Transform Your Workflow?
        </Typography>
        <Typography
          sx={{
            color: 'grey.400',
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            maxWidth: '600px',
            mx: 'auto',
            mb: 6,
          }}
        >
          Request your free demo today and see how xDataRoom can save you time
          and hassle.
        </Typography>

        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{
            py: 2,
            px: 6,
            fontSize: '1.2rem',
            borderRadius: '12px',
            background: `linear-gradient(135deg, 
              ${theme.palette.primary.main} 0%, 
              ${theme.palette.primary.dark} 100%)`,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 8px 25px -5px ${alpha(
                theme.palette.primary.main,
                0.5
              )}`,
            },
          }}
        >
          Request a Demo
        </Button>
      </Container>
    </Box>
  );
};
