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
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MobileMenu from './MobileMenu';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
              fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
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

          {/* Desktop & Tablet Navigation */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { sm: 2, md: 4 },
              }}
            >
              {!isTablet &&
                navItems.map((item) => (
                  <Button
                    key={item.label}
                    href={item.href}
                    sx={{
                      color: 'grey.300',
                      fontSize: { sm: '0.9rem', md: '1rem' },
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
                  ml: { sm: 1, md: 2 },
                  px: { sm: 2, md: 3 },
                  py: 1,
                  borderRadius: '10px',
                  background: `linear-gradient(135deg, 
                    ${theme.palette.primary.main} 0%, 
                    ${theme.palette.primary.dark} 100%)`,
                  fontSize: { sm: '0.85rem', md: '0.95rem' },
                  fontWeight: 600,
                  transition: 'all 0.3s ease-in-out',
                  whiteSpace: 'nowrap',
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
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              sx={{
                color: 'white',
              }}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
