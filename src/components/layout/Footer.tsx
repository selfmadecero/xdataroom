import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  alpha,
  useTheme,
} from '@mui/material';

const footerLinks = {
  product: {
    title: 'Product',
    items: [
      { label: 'Features', href: '#features' },
      { label: 'Security', href: '#security' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'How it Works', href: '#how-it-works' },
    ],
  },
  company: {
    title: 'Company',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  resources: {
    title: 'Resources',
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Support', href: '/support' },
      { label: 'Status', href: '/status' },
    ],
  },
  legal: {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
};

export const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        background: `linear-gradient(180deg, 
          ${alpha(theme.palette.primary.dark, 0.98)} 0%,
          ${alpha('#000', 0.98)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, 
            transparent 0%,
            ${alpha('#fff', 0.1)} 50%,
            transparent 100%
          )`,
        },
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
            radial-gradient(circle at 20% 20%, 
              ${alpha(theme.palette.primary.dark, 0.4)} 0%, 
              transparent 50%),
            radial-gradient(circle at 80% 80%, 
              ${alpha(theme.palette.primary.dark, 0.3)} 0%, 
              transparent 50%)
          `,
          filter: 'blur(60px)',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 800,
                background:
                  'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2,
              }}
            >
              xDataRoom
            </Typography>
            <Typography
              sx={{
                color: 'grey.400',
                maxWidth: '300px',
                mb: 3,
              }}
            >
              Transforming portfolio data management for modern investment
              firms.
            </Typography>
          </Grid>

          {Object.entries(footerLinks).map(([key, section]) => (
            <Grid item xs={6} sm={3} md={2} key={key}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    sx={{
                      color: 'grey.400',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        color: 'white',
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: `1px solid ${alpha('#fff', 0.1)}`,
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              color: 'grey.500',
              fontSize: '0.875rem',
            }}
          >
            © {currentYear} xDataRoom. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
