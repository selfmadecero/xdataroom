import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useScrollTrigger,
  alpha,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const LandingHeader: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: trigger ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
          backdropFilter: trigger ? 'blur(20px)' : 'none',
          transition: 'all 0.3s ease-in-out',
          borderBottom: trigger
            ? `1px solid rgba(255, 255, 255, 0.1)`
            : '1px solid transparent',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              height: trigger ? '70px' : '80px',
              transition: 'height 0.3s ease',
            }}
          >
            <Typography
              variant="h5"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                background: trigger
                  ? 'none'
                  : 'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
                backgroundClip: trigger ? 'none' : 'text',
                WebkitBackgroundClip: trigger ? 'none' : 'text',
                color: trigger ? 'white' : 'transparent',
                transition: 'all 0.3s ease',
                mr: 3,
              }}
            >
              xDataRoom
            </Typography>

            {/* Desktop Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    mx: 1,
                    color: 'white',
                    opacity: 0.8,
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    '&:hover': {
                      opacity: 1,
                      backgroundColor: alpha('#fff', 0.1),
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                borderRadius: '12px',
                px: 3,
                py: 1,
                background: `linear-gradient(135deg, 
                  ${alpha('#fff', 0.2)} 0%, 
                  ${alpha('#fff', 0.1)} 100%)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha('#fff', 0.2)}`,
                color: 'white',
                fontWeight: 600,
                '&:hover': {
                  background: `linear-gradient(135deg, 
                    ${alpha('#fff', 0.3)} 0%, 
                    ${alpha('#fff', 0.2)} 100%)`,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Get Started
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: alpha('#000', 0.95),
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        <Box sx={{ pt: 8, px: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.label}
                component="a"
                href={item.href}
                onClick={handleDrawerToggle}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: alpha('#fff', 0.1),
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem sx={{ mt: 2 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: `linear-gradient(135deg, 
                    ${alpha('#fff', 0.2)} 0%, 
                    ${alpha('#fff', 0.1)} 100%)`,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha('#fff', 0.2)}`,
                  color: 'white',
                  fontWeight: 600,
                }}
              >
                Get Started
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
