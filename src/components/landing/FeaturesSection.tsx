import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  alpha,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import AutomationIcon from '@mui/icons-material/AutoFixHigh';
import SecurityIcon from '@mui/icons-material/Shield';
import AnalyticsIcon from '@mui/icons-material/QueryStats';
import CloudIcon from '@mui/icons-material/CloudSync';
import SpeedIcon from '@mui/icons-material/Speed';
import IntegrationIcon from '@mui/icons-material/Hub';

const features = [
  {
    icon: <AutomationIcon />,
    title: 'Smart Automation',
    description:
      'Automate repetitive tasks with intelligent document request templates and scheduling.',
  },
  {
    icon: <SecurityIcon />,
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption and granular access controls protect your sensitive data.',
  },
  {
    icon: <AnalyticsIcon />,
    title: 'Advanced Analytics',
    description:
      'Gain actionable insights with real-time portfolio performance tracking.',
  },
  {
    icon: <CloudIcon />,
    title: 'Seamless Collaboration',
    description:
      'Work together effortlessly with real-time updates and version control.',
  },
  {
    icon: <SpeedIcon />,
    title: 'Lightning Fast',
    description:
      'Experience instant document processing and rapid search capabilities.',
  },
  {
    icon: <IntegrationIcon />,
    title: 'Easy Integration',
    description:
      'Connect with your existing tools through our powerful API and integrations.',
  },
];

export const FeaturesSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 8, sm: 10, md: 16, lg: 20 },
        px: { xs: 2, sm: 3, md: 4 },
        background: `linear-gradient(180deg, 
          ${alpha('#000', 0.99)} 0%,
          ${alpha('#0C0C0C', 0.98)} 50%,
          ${alpha('#000', 0.99)} 100%)`,
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
          opacity: 0.15,
          background: `
            radial-gradient(ellipse at top, 
              ${alpha(theme.palette.primary.dark, 0.15)} 0%, 
              transparent 70%),
            radial-gradient(ellipse at bottom, 
              ${alpha(theme.palette.primary.dark, 0.1)} 0%, 
              transparent 70%)
          `,
          filter: 'blur(120px)',
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 5, sm: 6, md: 8, lg: 10 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: '1.75rem',
                sm: '2.25rem',
                md: '3rem',
                lg: '3.5rem',
              },
              fontWeight: 800,
              lineHeight: { xs: 1.3, md: 1.2 },
              maxWidth: { xs: '100%', sm: '80%', md: '100%' },
              mx: 'auto',
              px: { xs: 2, sm: 0 },
              background: 'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2,
            }}
          >
            Powerful Features
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'grey.400',
              maxWidth: { xs: '100%', sm: '80%', md: '600px' },
              mx: 'auto',
              mt: { xs: 2, md: 3 },
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.2rem' },
              lineHeight: { xs: 1.5, md: 1.6 },
              px: { xs: 2, sm: 4, md: 0 },
            }}
          >
            Everything you need to manage your portfolio data efficiently and
            securely
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 2.5, sm: 3, md: 4 }}
          sx={{
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          {features.map((feature) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={feature.title}
              sx={{
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  background: `linear-gradient(135deg, 
                    ${alpha('#fff', 0.05)} 0%, 
                    ${alpha('#fff', 0.02)} 100%)`,
                  backdropFilter: 'blur(10px)',
                  borderRadius: { xs: '20px', md: '24px' },
                  border: `1px solid ${alpha('#fff', 0.1)}`,
                  p: { xs: 3, sm: 3.5, md: 4 },
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: {
                      xs: 'translateY(-5px)',
                      md: 'translateY(-8px)',
                    },
                    background: `linear-gradient(135deg, 
                      ${alpha('#fff', 0.08)} 0%, 
                      ${alpha('#fff', 0.03)} 100%)`,
                    boxShadow: `0 20px 40px -20px ${alpha(
                      theme.palette.primary.main,
                      0.3
                    )}`,
                    '& .feature-icon': {
                      transform: 'scale(1.1)',
                      background: `linear-gradient(135deg, 
                        ${alpha(theme.palette.primary.main, 0.3)} 0%, 
                        ${alpha(theme.palette.primary.dark, 0.3)} 100%)`,
                    },
                  },
                }}
              >
                <Box
                  className="feature-icon"
                  sx={{
                    display: 'inline-flex',
                    p: { xs: 1.5, sm: 2 },
                    borderRadius: { xs: '14px', md: '16px' },
                    background: `linear-gradient(135deg, 
                      ${alpha(theme.palette.primary.main, 0.2)} 0%, 
                      ${alpha(theme.palette.primary.dark, 0.2)} 100%)`,
                    color: theme.palette.primary.light,
                    mb: { xs: 2, sm: 2.5, md: 3 },
                    transition: 'all 0.3s ease-in-out',
                    '& svg': {
                      fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                    },
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    mb: { xs: 1, sm: 1.5, md: 2 },
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    color: 'grey.400',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
