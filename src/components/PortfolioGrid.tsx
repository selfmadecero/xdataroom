import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  LinearProgress,
  Box,
  IconButton,
  Button,
} from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

const portfolios = [
  {
    id: 1,
    name: 'TechVision Labs',
    status: 'active',
    documentProgress: 80,
    pendingRequests: 3,
    lastActivity: '2 days ago',
  },
  {
    id: 2,
    name: 'Growth Dynamics',
    status: 'active',
    documentProgress: 95,
    pendingRequests: 1,
    lastActivity: '1 day ago',
  },
  {
    id: 3,
    name: 'InnovatePro Solutions',
    status: 'inactive',
    documentProgress: 45,
    pendingRequests: 5,
    lastActivity: '5 days ago',
  },
  {
    id: 4,
    name: 'NextGen Robotics',
    status: 'active',
    documentProgress: 75,
    pendingRequests: 2,
    lastActivity: '3 days ago',
  },
  {
    id: 5,
    name: 'DataFlow Systems',
    status: 'inactive',
    documentProgress: 60,
    pendingRequests: 4,
    lastActivity: '1 week ago',
  },
];

export const PortfolioGrid = () => {
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'active':
        return { label: 'On Track', color: 'success' as const };
      case 'inactive':
        return { label: 'Needs Attention', color: 'warning' as const };
      default:
        return { label: 'Unknown', color: 'default' as const };
    }
  };

  return (
    <Grid container spacing={3}>
      {portfolios.map((portfolio) => (
        <Grid item xs={12} sm={6} md={4} key={portfolio.id}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1rem', fontWeight: 600 }}
                >
                  {portfolio.name}
                </Typography>
                <IconButton size="small">
                  <MoreVertIcon />
                </IconButton>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Chip
                  label={getStatusInfo(portfolio.status).label}
                  color={getStatusInfo(portfolio.status).color}
                  size="small"
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Document Progress
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={portfolio.documentProgress}
                    sx={{ flex: 1, mr: 1, height: 6, borderRadius: 3 }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {portfolio.documentProgress}%
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  {portfolio.pendingRequests} pending requests
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Last activity: {portfolio.lastActivity}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ flex: 1, textTransform: 'none' }}
                >
                  View Details
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ flex: 1, textTransform: 'none' }}
                >
                  New Request
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
