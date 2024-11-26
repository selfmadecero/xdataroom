import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  alpha,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SetupIcon from '@mui/icons-material/Settings';
import SendIcon from '@mui/icons-material/Send';
import TrackIcon from '@mui/icons-material/Timeline';
import ReportIcon from '@mui/icons-material/Assessment';

const steps = [
  {
    icon: <SetupIcon />,
    title: 'Setup Your Portfolio',
    description:
      'Import and organize your portfolio companies with our intuitive interface.',
    number: '01',
  },
  {
    icon: <SendIcon />,
    title: 'Automate Requests',
    description: 'Create and schedule document requests using smart templates.',
    number: '02',
  },
  {
    icon: <TrackIcon />,
    title: 'Track Progress',
    description: 'Monitor submission status and review documents in real-time.',
    number: '03',
  },
  {
    icon: <ReportIcon />,
    title: 'Generate Insights',
    description:
      'Transform data into actionable insights with automated reporting.',
    number: '04',
  },
];

export const HowItWorksSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="how-it-works"
      sx={{
        py: { xs: 8, sm: 10, md: 16, lg: 20 },
        background: `linear-gradient(160deg, 
          ${alpha('#000', 0.99)} 0%,
          ${alpha('#0A0A0A', 0.97)} 50%,
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
          opacity: 0.12,
          background: `
            radial-gradient(circle at 20% 20%, 
              ${alpha(theme.palette.primary.dark, 0.15)} 0%, 
              transparent 60%),
            radial-gradient(circle at 80% 80%, 
              ${alpha(theme.palette.primary.dark, 0.1)} 0%, 
              transparent 60%)
          `,
          filter: 'blur(140px)',
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 5, sm: 6, md: 8, lg: 10 } }}>
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
              background: 'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2,
              lineHeight: { xs: 1.3, md: 1.2 },
            }}
          >
            How It Works
          </Typography>
          <Typography
            sx={{
              color: 'grey.400',
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.2rem' },
              maxWidth: '600px',
              mx: 'auto',
              px: { xs: 2, sm: 0 },
              lineHeight: { xs: 1.5, md: 1.6 },
            }}
          >
            Get started with xDataRoom in four simple steps
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 4 }}
          sx={{
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          {steps.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              key={step.number}
              sx={{
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  p: { xs: 3, sm: 3.5, md: 4 },
                  background: `linear-gradient(135deg, 
                    ${alpha('#fff', 0.05)} 0%, 
                    ${alpha('#fff', 0.02)} 100%)`,
                  backdropFilter: 'blur(10px)',
                  borderRadius: { xs: '20px', md: '24px' },
                  border: `1px solid ${alpha('#fff', 0.1)}`,
                  position: 'relative',
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
                    '& .step-icon': {
                      transform: 'scale(1.1)',
                      background: `linear-gradient(135deg, 
                        ${alpha(theme.palette.primary.main, 0.3)} 0%, 
                        ${alpha(theme.palette.primary.dark, 0.3)} 100%)`,
                    },
                    '& .step-number': {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              >
                <Typography
                  className="step-number"
                  sx={{
                    position: 'absolute',
                    top: { xs: 16, md: 20 },
                    right: { xs: 16, md: 20 },
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 800,
                    color: alpha('#fff', 0.1),
                    transition: 'color 0.3s ease-in-out',
                  }}
                >
                  {step.number}
                </Typography>
                <Box
                  className="step-icon"
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
                  {step.icon}
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
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    color: 'grey.400',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
