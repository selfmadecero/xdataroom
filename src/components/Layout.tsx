import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Avatar,
  InputBase,
  Badge,
  useTheme,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Business as BusinessIcon,
  Description as DescriptionIcon,
  ShowChart as ShowChartIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

const DRAWER_WIDTH = 256;

export const Layout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Portfolio', icon: <BusinessIcon />, path: '/portfolio' },
    { text: 'Documents', icon: <DescriptionIcon />, path: '/documents' },
    { text: 'Analytics', icon: <ShowChartIcon />, path: '/analytics' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <div className="flex h-screen">
      {/* 사이드바 */}
      <div className="w-64 bg-white border-r">
        <div className="h-16 flex items-center justify-center border-b">
          <img src="/logo.svg" alt="로고" className="h-8" />
        </div>
        {/* 나머지 사이드바 내용 */}
        <nav className="mt-6">
          <List sx={{ px: 2, py: 2 }}>
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
                  borderRadius: '8px',
                  '&.Mui-selected': {
                    bgcolor: theme.palette.primary.main,
                    '&:hover': {
                      bgcolor: theme.palette.primary.dark,
                    },
                    '& .MuiListItemIcon-root': {
                      color: '#FFFFFF',
                    },
                    '& .MuiTypography-root': {
                      color: '#FFFFFF',
                      fontWeight: 600,
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      selectedIndex === index ? '#FFFFFF' : 'text.secondary',
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    fontWeight: selectedIndex === index ? 600 : 500,
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </nav>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b flex items-center px-6">
          <h1 className="text-xl font-semibold">대시보드</h1>
        </header>
        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
