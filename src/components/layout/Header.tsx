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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const Header: React.FC = () => {
  const theme = useTheme();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(
    null
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    setIsScrolled(scrollTrigger);
  }, [scrollTrigger]);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (!href) return;

    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80, // 헤더 높이만큼 오프셋
        behavior: 'smooth',
      });
    }
    handleMobileMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: isScrolled
          ? `linear-gradient(to bottom, 
              ${alpha('#000', 0.95)} 0%, 
              ${alpha('#000', 0.9)} 100%)`
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          opacity: isScrolled ? 1 : 0,
          background: `linear-gradient(90deg, 
            transparent 0%,
            ${alpha(theme.palette.primary.main, 0.1)} 50%,
            transparent 100%
          )`,
        },
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
            onClick={handleScrollToSection}
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
                onClick={handleScrollToSection}
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
              onClick={handleScrollToSection}
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
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={handleMobileMenuClose}
            sx={{
              '& .MuiPaper-root': {
                background: `linear-gradient(135deg, 
                  ${alpha('#000', 0.95)} 0%, 
                  ${alpha(theme.palette.primary.dark, 0.95)} 100%)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha('#fff', 0.1)}`,
                borderRadius: '12px',
                mt: 1,
              },
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={(e) => {
                  const event = {
                    preventDefault: () => {},
                    currentTarget: {
                      getAttribute: () => item.href,
                    },
                  } as any;
                  handleScrollToSection(event);
                }}
                sx={{
                  color: 'grey.300',
                  '&:hover': {
                    background: alpha(theme.palette.primary.main, 0.1),
                    color: 'white',
                  },
                }}
              >
                <Typography>{item.label}</Typography>
              </MenuItem>
            ))}
            <MenuItem
              onClick={(e) => {
                const event = {
                  preventDefault: () => {},
                  currentTarget: {
                    getAttribute: () => '#cta',
                  },
                } as any;
                handleScrollToSection(event);
              }}
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.1),
                },
              }}
            >
              Request Demo
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
