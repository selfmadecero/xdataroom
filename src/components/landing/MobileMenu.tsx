import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  Box,
  Stack,
  Typography,
  alpha,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MobileMenuProps } from '../../types';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Drawer
      anchor="top"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          height: '100%',
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(20px)',
          boxShadow: 'none',
        },
      }}
      transitionDuration={400}
    >
      <Box
        sx={{
          height: '100%',
          p: 3,
          pt: 8,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* 로고 및 닫기 버튼 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 6,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            xDataRoom
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: 'white',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* 네비게이션 메뉴 */}
        <List sx={{ mb: 'auto' }}>
          {navItems.map((item, index) => (
            <ListItem
              key={item.label}
              component="a"
              href={item.href}
              onClick={onClose}
              sx={{
                py: 2,
                opacity: 0.9,
                transition: 'all 0.3s ease',
                transform: `translateY(${isOpen ? 0 : '20px'})`,
                animation: `fadeIn 0.5s ease forwards ${index * 0.1}s`,
                '@keyframes fadeIn': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(20px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
                '&:hover': {
                  opacity: 1,
                  transform: 'translateY(-2px)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'white',
                    letterSpacing: '-0.02em',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        {/* 하단 버튼 그룹 */}
        <Stack
          spacing={2}
          sx={{
            mt: 4,
            animation: 'fadeIn 0.5s ease forwards 0.6s',
            opacity: 0,
          }}
        >
          <Button
            variant="contained"
            fullWidth
            endIcon={<ArrowForwardIcon />}
            sx={{
              py: 2,
              borderRadius: 3,
              fontSize: '1.1rem',
              fontWeight: 600,
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              boxShadow: (theme) =>
                `0 8px 25px -5px ${alpha(theme.palette.primary.main, 0.5)}`,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: (theme) =>
                  `0 12px 30px -5px ${alpha(theme.palette.primary.main, 0.6)}`,
              },
              transition: 'all 0.3s ease',
            }}
          >
            Request Demo
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              py: 2,
              borderRadius: 3,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                borderColor: 'white',
                background: 'rgba(255, 255, 255, 0.05)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Sign In
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
