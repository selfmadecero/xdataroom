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

  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 12, md: 16, lg: 20 },
        background: `linear-gradient(180deg, 
          ${alpha('#000', 0.98)} 0%,
          ${alpha('#000', 0.95)} 20%,
          ${alpha(theme.palette.primary.dark, 0.92)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Enhanced Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
          background: `
            radial-gradient(circle at 30% 20%, 
              ${alpha(theme.palette.primary.dark, 0.4)} 0%, 
              transparent 50%),
            radial-gradient(circle at 70% 80%, 
              ${alpha(theme.palette.primary.dark, 0.3)} 0%, 
              transparent 50%)
          `,
          filter: 'blur(50px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
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
            Trusted by Industry Leaders
          </Typography>
          <Typography
            sx={{
              color: '#9E9E9E',
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            See what top investment firms say about xDataRoom
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {testimonials.map((testimonial, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={testimonial.name}
              sx={{
                display: 'flex',
                perspective: '2000px',
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  background: `linear-gradient(135deg, 
                    ${alpha('#fff', 0.08)} 0%, 
                    ${alpha('#fff', 0.03)} 100%)`,
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  border: `1px solid ${alpha('#fff', 0.12)}`,
                  p: 4,
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-10px) translateZ(20px)',
                    background: `linear-gradient(135deg, 
                      ${alpha('#fff', 0.1)} 0%, 
                      ${alpha('#fff', 0.04)} 100%)`,
                    boxShadow: `
                      0 20px 40px -20px ${alpha(
                        theme.palette.primary.main,
                        0.3
                      )},
                      0 0 20px 0 ${alpha(theme.palette.primary.main, 0.2)}
                    `,
                    '& .quote-icon': {
                      transform: 'translateY(-5px) rotateY(180deg)',
                      background: theme.palette.primary.main,
                    },
                    '& .avatar-container': {
                      transform: 'scale(1.05)',
                      '& .avatar': {
                        borderColor: alpha(theme.palette.primary.main, 0.3),
                      },
                    },
                  },
                }}
              >
                <Box
                  className="quote-icon"
                  sx={{
                    position: 'absolute',
                    top: -24,
                    left: 32,
                    width: '48px',
                    height: '48px',
                    background: `linear-gradient(135deg, 
                      ${alpha(theme.palette.primary.main, 0.9)} 0%, 
                      ${alpha(theme.palette.primary.dark, 0.9)} 100%)`,
                    borderRadius: '16px',
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
                    transform: 'translateY(0) rotateY(0)',
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      color: 'white',
                      fontSize: '28px',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    color: '#E0E0E0',
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    mb: 'auto',
                    fontStyle: 'italic',
                    position: 'relative',
                    textShadow: `0 2px 4px ${alpha('#000', 0.2)}`,
                    transition: 'all 0.3s ease-in-out',
                    pb: 4,
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
                      width: 60,
                      height: 60,
                      mr: 2,
                      border: `2px solid ${alpha('#fff', 0.2)}`,
                      boxShadow: `
                        0 8px 16px ${alpha('#000', 0.2)},
                        0 0 0 2px ${alpha(theme.palette.primary.main, 0.1)}
                      `,
                      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        textShadow: `0 2px 4px ${alpha('#000', 0.2)}`,
                        mb: 0.5,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#E0E0E0',
                        fontSize: '0.9rem',
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
