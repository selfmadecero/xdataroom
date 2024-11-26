import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const footerSections = [
  {
    title: '회사 정보',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    title: '법적 정보',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
  {
    title: '소셜 미디어',
    links: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Facebook', href: '#' },
    ],
  },
];

export const LandingFooter: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: 'grey.900',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {footerSections.map((section) => (
            <Grid item xs={12} sm={4} key={section.title}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <Box key={link.label} sx={{ mb: 1 }}>
                  <Link
                    href={link.href}
                    sx={{
                      color: 'grey.400',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'white',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="body2"
          color="grey.400"
          align="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} XVDR. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
