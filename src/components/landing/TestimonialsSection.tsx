import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Avatar,
  alpha,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Sarah Chen',
    position: 'Partner at Sequoia Capital',
    comment:
      'xDataRoom has revolutionized how we manage portfolio data. The automation features alone have saved us countless hours.',
    avatar: '/avatars/sarah.jpg',
  },
  {
    name: 'Michael Ross',
    position: 'Managing Director at Accel',
    comment:
      'The real-time analytics and intuitive interface make portfolio management a breeze. Best investment we have made this year.',
    avatar: '/avatars/michael.jpg',
  },
  {
    name: 'Emily Zhang',
    position: 'Investment Director at A16Z',
    comment:
      'Security and efficiency in one platform. xDataRoom has transformed how we handle sensitive portfolio documents.',
    avatar: '/avatars/emily.jpg',
  },
];

export const TestimonialsSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 8, sm: 10, md: 16, lg: 20 },
        background: `linear-gradient(140deg, 
          ${alpha('#000', 0.99)} 0%,
          ${alpha('#0A0A0A', 0.98)} 50%,
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
          opacity: 0.1,
          background: `
            radial-gradient(ellipse at 30% 50%, 
              ${alpha(theme.palette.primary.dark, 0.2)} 0%, 
              transparent 70%),
            radial-gradient(circle at 70% 30%, 
              ${alpha(theme.palette.primary.dark, 0.15)} 0%, 
              transparent 70%)
          `,
          filter: 'blur(130px)',
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
              lineHeight: { xs: 1.3, md: 1.2 },
              maxWidth: { xs: '100%', sm: '80%', md: '100%' },
              mx: 'auto',
              background: 'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: { xs: 2, md: 3 },
              px: { xs: 2, sm: 0 },
            }}
          >
            Trusted by Industry Leaders
          </Typography>
          <Typography
            sx={{
              color: '#9E9E9E',
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.2rem' },
              maxWidth: { xs: '100%', sm: '80%', md: '600px' },
              mx: 'auto',
              lineHeight: { xs: 1.5, md: 1.6 },
              px: { xs: 2, sm: 4, md: 0 },
            }}
          >
            See what top investment firms say about xDataRoom
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 4 }}
          alignItems="stretch"
          sx={{
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={testimonial.name}
              sx={{
                display: 'flex',
                perspective: { xs: '1000px', md: '2000px' },
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  background: `linear-gradient(135deg, 
                    ${alpha('#fff', 0.08)} 0%, 
                    ${alpha('#fff', 0.03)} 100%)`,
                  backdropFilter: 'blur(20px)',
                  borderRadius: { xs: '20px', md: '24px' },
                  border: `1px solid ${alpha('#fff', 0.12)}`,
                  p: { xs: 3, sm: 3.5, md: 4 },
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: {
                      xs: 'translateY(-5px)',
                      md: 'translateY(-10px) translateZ(20px)',
                    },
                    background: `linear-gradient(135deg, 
                      ${alpha('#fff', 0.1)} 0%, 
                      ${alpha('#fff', 0.04)} 100%)`,
                    boxShadow: {
                      xs: `0 15px 30px -10px ${alpha(
                        theme.palette.primary.main,
                        0.3
                      )}`,
                      md: `
                        0 20px 40px -20px ${alpha(
                          theme.palette.primary.main,
                          0.3
                        )},
                        0 0 20px 0 ${alpha(theme.palette.primary.main, 0.2)}
                      `,
                    },
                    '& .quote-icon': {
                      transform: {
                        xs: 'translateY(-3px)',
                        md: 'translateY(-5px) rotateY(180deg)',
                      },
                      background: theme.palette.primary.main,
                    },
                    '& .avatar-container': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                <Box
                  className="quote-icon"
                  sx={{
                    position: 'absolute',
                    top: { xs: -20, md: -24 },
                    left: { xs: 24, md: 32 },
                    width: { xs: '40px', md: '48px' },
                    height: { xs: '40px', md: '48px' },
                    background: `linear-gradient(135deg, 
                      ${alpha(theme.palette.primary.main, 0.9)} 0%, 
                      ${alpha(theme.palette.primary.dark, 0.9)} 100%)`,
                    borderRadius: { xs: '14px', md: '16px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: `
                      0 12px 24px -8px ${alpha(
                        theme.palette.primary.main,
                        0.5
                      )},
                      0 0 0 1px ${alpha(theme.palette.primary.main, 0.2)}
                    `,
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      color: 'white',
                      fontSize: { xs: '24px', md: '28px' },
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    color: '#E0E0E0',
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                    lineHeight: { xs: 1.6, md: 1.7 },
                    mb: 'auto',
                    fontStyle: 'italic',
                    position: 'relative',
                    textShadow: `0 2px 4px ${alpha('#000', 0.2)}`,
                    transition: 'all 0.3s ease-in-out',
                    pb: { xs: 3, md: 4 },
                  }}
                >
                  "{testimonial.comment}"
                </Typography>

                <Box
                  className="avatar-container"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    mt: 'auto',
                  }}
                >
                  <Avatar
                    src={testimonial.avatar}
                    className="avatar"
                    sx={{
                      width: { xs: 50, md: 60 },
                      height: { xs: 50, md: 60 },
                      mr: 2,
                      border: `2px solid ${alpha('#fff', 0.2)}`,
                      boxShadow: `
                        0 8px 16px ${alpha('#000', 0.2)},
                        0 0 0 2px ${alpha(theme.palette.primary.main, 0.1)}
                      `,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        textShadow: `0 2px 4px ${alpha('#000', 0.2)}`,
                        mb: 0.5,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#E0E0E0',
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                        textShadow: `0 1px 2px ${alpha('#000', 0.2)}`,
                      }}
                    >
                      {testimonial.position}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
