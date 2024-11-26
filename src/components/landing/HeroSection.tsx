import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  alpha,
} from '@mui/material';

export const HeroSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `radial-gradient(circle at 50% 50%, 
          ${alpha(theme.palette.primary.dark, 0.97)} 0%,
          ${alpha('#000', 0.98)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Box
              sx={{
                display: 'inline-block',
                mb: 3,
                px: 2,
                py: 1,
                borderRadius: '100px',
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.primary.light,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                Launching Beta • Limited Time Offer
              </Typography>
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                fontWeight: 800,
                background:
                  'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 3,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              The Future of
              <br />
              Data Room is Here
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'grey.400',
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: '600px',
                mx: { xs: 'auto', md: 0 },
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              Experience the next generation of secure document management and
              portfolio analytics with xDataRoom.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/dashboard')}
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: '14px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  boxShadow: `0 0 20px ${alpha(
                    theme.palette.primary.main,
                    0.4
                  )}`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 0 30px ${alpha(
                      theme.palette.primary.main,
                      0.6
                    )}`,
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: alpha('#fff', 0.3),
                  color: 'grey.100',
                  px: 4,
                  py: 2,
                  borderRadius: '14px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  backgroundColor: alpha('#fff', 0.05),
                  '&:hover': {
                    backgroundColor: alpha('#fff', 0.1),
                    borderColor: alpha('#fff', 0.5),
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Schedule Demo
              </Button>
            </Stack>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'block' },
              position: 'relative',
            }}
          >
            {/* Dashboard Preview */}
            <Box
              sx={{
                width: '100%',
                height: '600px',
                background: alpha('#fff', 0.05),
                backdropFilter: 'blur(20px)',
                borderRadius: '30px',
                overflow: 'hidden',
                position: 'relative',
                transform: 'rotateY(-10deg) rotateX(5deg)',
                boxShadow: `
                  0 50px 100px -20px ${alpha('#000', 0.5)},
                  0 30px 60px -30px ${alpha(theme.palette.primary.main, 0.3)}
                `,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
