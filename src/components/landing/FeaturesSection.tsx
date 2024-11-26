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

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 12, md: 16, lg: 20 },
        background: `linear-gradient(180deg, 
          ${alpha('#000', 0.98)} 0%,
          ${alpha('#000', 0.95)} 30%,
          ${alpha(theme.palette.primary.dark, 0.9)} 100%)`,
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
          opacity: 0.3,
          background: `
            radial-gradient(circle at 70% 20%, 
              ${alpha(theme.palette.primary.dark, 0.3)} 0%, 
              transparent 50%),
            radial-gradient(circle at 30% 80%, 
              ${alpha(theme.palette.primary.dark, 0.2)} 0%, 
              transparent 50%)
          `,
          filter: 'blur(60px)',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Powerful Features
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'grey.400',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.2rem' },
              px: 2,
            }}
          >
            Everything you need to manage your portfolio data efficiently and
            securely
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <Box
                sx={{
                  height: '100%',
                  background: `linear-gradient(135deg, 
                    ${alpha('#fff', 0.05)} 0%, 
                    ${alpha('#fff', 0.02)} 100%)`,
                  backdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  border: `1px solid ${alpha('#fff', 0.1)}`,
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.4s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    background: `linear-gradient(135deg, 
                      ${alpha('#fff', 0.08)} 0%, 
                      ${alpha('#fff', 0.03)} 100%)`,
                    boxShadow: `
                      0 20px 40px -20px ${alpha(
                        theme.palette.primary.main,
                        0.3
                      )},
                      0 0 20px 0 ${alpha(theme.palette.primary.main, 0.1)}
                    `,
                  },
                }}
              >
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Box
                    className="feature-icon"
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '20px',
                      background: `linear-gradient(135deg, 
                        ${alpha(theme.palette.primary.main, 0.2)} 0%, 
                        ${alpha(theme.palette.primary.dark, 0.2)} 100%)`,
                      color: theme.palette.primary.light,
                      mb: 3,
                      transition: 'all 0.3s ease-in-out',
                      '& svg': {
                        fontSize: '2.5rem',
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
                      mb: 2,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'grey.400',
                      lineHeight: 1.7,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
