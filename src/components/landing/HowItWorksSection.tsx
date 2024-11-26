import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  alpha,
  useTheme,
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

  return (
    <Box
      id="how-it-works"
      sx={{
        py: { xs: 12, md: 16, lg: 20 },
        background: `linear-gradient(180deg, 
          ${alpha(theme.palette.primary.dark, 0.9)} 0%,
          ${alpha(theme.palette.primary.dark, 0.95)} 40%,
          ${alpha('#000', 0.98)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, ${alpha(
            theme.palette.primary.main,
            0.1
          )} 0%, transparent 50%)`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
            }}
          >
            How It Works
          </Typography>
          <Typography
            sx={{
              color: 'grey.400',
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Get started with xDataRoom in four simple steps
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={6} lg={3} key={step.number}>
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  p: 4,
                  background: `linear-gradient(135deg, ${alpha(
                    '#fff',
                    0.05
                  )} 0%, ${alpha('#fff', 0.02)} 100%)`,
                  backdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  border: `1px solid ${alpha('#fff', 0.1)}`,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    background: `linear-gradient(135deg, ${alpha(
                      '#fff',
                      0.08
                    )} 0%, ${alpha('#fff', 0.03)} 100%)`,
                    boxShadow: `0 20px 40px -20px ${alpha(
                      theme.palette.primary.main,
                      0.3
                    )}`,
                    '& .step-number': {
                      color: theme.palette.primary.main,
                    },
                    '& .step-icon': {
                      transform: 'scale(1.1)',
                      background: `linear-gradient(135deg, ${alpha(
                        theme.palette.primary.main,
                        0.3
                      )} 0%, ${alpha(theme.palette.primary.dark, 0.3)} 100%)`,
                    },
                  },
                }}
              >
                <Typography
                  className="step-number"
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    fontSize: '2rem',
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
                    p: 2,
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${alpha(
                      theme.palette.primary.main,
                      0.2
                    )} 0%, ${alpha(theme.palette.primary.dark, 0.2)} 100%)`,
                    color: theme.palette.primary.light,
                    mb: 3,
                    transition: 'all 0.3s ease-in-out',
                    '& svg': {
                      fontSize: '2rem',
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
                    mb: 2,
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    color: 'grey.400',
                    lineHeight: 1.7,
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
