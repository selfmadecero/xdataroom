import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  alpha,
  useTheme,
  useScrollTrigger,
  Menu,
  MenuItem,
  Drawer,
  Stack,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: isScrolled
          ? `linear-gradient(to bottom, ${alpha('#000', 0.95)}, ${alpha(
              '#000',
              0.9
            )})`
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            py: { xs: 1, md: 1.5 },
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h6"
            component="a"
            href="#hero"
            sx={{
              fontSize: { xs: '1.5rem', md: '1.8rem' },
              fontWeight: 800,
              background: 'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            xDataRoom
          </Typography>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{
                  color: 'grey.300',
                  fontSize: '1rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    color: 'white',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              href="#cta"
              sx={{
                ml: 2,
                px: 3,
                py: 1,
                borderRadius: '10px',
                background: `linear-gradient(135deg, 
                  ${theme.palette.primary.main} 0%, 
                  ${theme.palette.primary.dark} 100%)`,
                fontSize: '0.95rem',
                fontWeight: 600,
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
              Request Demo
            </Button>
          </Box>

          {/* Mobile Menu */}
          <IconButton
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: 'white',
            }}
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            PaperProps={{
              sx: {
                width: '100%',
                maxWidth: '360px',
                background: `linear-gradient(130deg, 
                  ${alpha('#000', 0.95)} 0%, 
                  ${alpha(theme.palette.primary.dark, 0.9)} 100%)`,
                backdropFilter: 'blur(20px)',
                px: 3,
                py: 4,
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
                opacity: 0.1,
                background: `
                  radial-gradient(circle at 70% 30%, 
                    ${alpha(theme.palette.primary.dark, 0.4)} 0%, 
                    transparent 70%),
                  radial-gradient(circle at 30% 70%, 
                    ${alpha(theme.palette.primary.dark, 0.4)} 0%, 
                    transparent 70%)
                `,
                filter: 'blur(60px)',
              }}
            />

            <Stack spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ textAlign: 'right' }}>
                <IconButton
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      background: alpha('#fff', 0.1),
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    py: 1.5,
                    px: 2,
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, 
                      ${alpha('#fff', 0.05)} 0%, 
                      ${alpha('#fff', 0.02)} 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha('#fff', 0.1)}`,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      background: `linear-gradient(135deg, 
                        ${alpha('#fff', 0.08)} 0%, 
                        ${alpha('#fff', 0.03)} 100%)`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 20px -6px ${alpha(
                        theme.palette.primary.main,
                        0.5
                      )}`,
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}

              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  py: 1.5,
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, 
                    ${theme.palette.primary.main} 0%, 
                    ${theme.palette.primary.dark} 100%)`,
                  fontSize: '1.1rem',
                  fontWeight: 600,
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
                Get Started
              </Button>
            </Stack>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
