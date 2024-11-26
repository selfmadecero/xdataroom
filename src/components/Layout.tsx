import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  InputBase,
  Avatar,
  Badge,
  useTheme,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Business as BusinessIcon,
  Description as DescriptionIcon,
  Settings as SettingsIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';

export const Layout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Home', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Portfolios', icon: <BusinessIcon />, path: '/portfolio' },
    { text: 'Documents', icon: <DescriptionIcon />, path: '/documents' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  // 현재 경로에 맞는 초기 인덱스 설정
  const initialIndex = menuItems.findIndex(
    (item) => item.path === location.pathname
  );
  const [selectedIndex, setSelectedIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );

  // 경로가 변경될 때만 selectedIndex 업데이트
  useEffect(() => {
    const currentIndex = menuItems.findIndex(
      (item) => item.path === location.pathname
    );
    if (currentIndex !== -1) {
      setSelectedIndex(currentIndex);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    // 여기에 로그아웃 로직 추가 (예: 토큰 제거 등)
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F8FAFC' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          bgcolor: 'white',
          borderRight: '1px solid',
          borderColor: 'grey.200',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid',
            borderColor: 'grey.200',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              letterSpacing: '-0.5px',
            }}
          >
            xDataRoom
          </Typography>
        </Box>

        {/* Menu */}
        <List sx={{ px: 2, py: 2, flex: 1 }}>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={item.text}
              selected={selectedIndex === index}
              onClick={() => {
                setSelectedIndex(index);
                navigate(item.path);
              }}
              sx={{
                mb: 0.5,
                borderRadius: 1,
                '&.Mui-selected': {
                  bgcolor: 'primary.50',
                  '&:hover': {
                    bgcolor: 'primary.100',
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'primary.main',
                  },
                  '& .MuiTypography-root': {
                    color: 'primary.main',
                    fontWeight: 600,
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: selectedIndex === index ? 'primary.main' : 'grey.600',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: selectedIndex === index ? 600 : 500,
                  color: selectedIndex === index ? 'primary.main' : 'grey.700',
                }}
              />
            </ListItemButton>
          ))}
        </List>

        {/* Logout Button */}
        <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'grey.200' }}>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'error.50',
                '& .MuiListItemIcon-root, & .MuiTypography-root': {
                  color: 'error.main',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: 'grey.600' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'grey.700',
              }}
            />
          </ListItemButton>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box
          sx={{
            height: 64,
            bgcolor: 'white',
            borderBottom: '1px solid',
            borderColor: 'grey.200',
            display: 'flex',
            alignItems: 'center',
            px: 3,
            justifyContent: 'space-between',
          }}
        >
          {/* Search Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'grey.100',
              borderRadius: 1,
              px: 2,
              flex: 1,
              maxWidth: 480,
              mx: 'auto',
            }}
          >
            <SearchIcon sx={{ color: 'grey.500', mr: 1 }} />
            <InputBase
              placeholder="Search documents, portfolios..."
              sx={{ flex: 1 }}
            />
          </Box>

          {/* Right Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton size="small">
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
              }}
            >
              <Avatar
                sx={{ width: 32, height: 32 }}
                alt="User Name"
                src="/user-avatar.jpg"
              />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                John Doe
              </Typography>
              <KeyboardArrowDownIcon sx={{ color: 'grey.500' }} />
            </Box>
          </Box>
        </Box>

        {/* Page Content */}
        <Box sx={{ flex: 1, overflow: 'auto', p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
