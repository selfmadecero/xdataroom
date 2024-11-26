import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  LinearProgress,
  Box,
  Typography,
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

export const PortfolioList = () => {
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
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Portfolio Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Document Progress</TableCell>
            <TableCell>Pending Requests</TableCell>
            <TableCell>Last Activity</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {portfolios.map((portfolio) => (
            <TableRow key={portfolio.id} hover>
              <TableCell>{portfolio.name}</TableCell>
              <TableCell>
                <Chip
                  label={getStatusInfo(portfolio.status).label}
                  color={getStatusInfo(portfolio.status).color}
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Box sx={{ width: '100%', maxWidth: 200 }}>
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
              </TableCell>
              <TableCell>{portfolio.pendingRequests} requests</TableCell>
              <TableCell>{portfolio.lastActivity}</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ mr: 1, textTransform: 'none' }}
                >
                  View Details
                </Button>
                <IconButton size="small">
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
