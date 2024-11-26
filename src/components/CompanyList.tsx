import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Chip,
  Divider,
  Box,
  Avatar,
  Typography,
  LinearProgress,
} from '@mui/material';

interface CompanyListProps {
  limit?: number;
}

export const CompanyList: React.FC<CompanyListProps> = ({ limit }) => {
  const companies = [
    {
      id: 1,
      name: 'TechVision Labs',
      status: 'active',
      documentProgress: 80,
      pendingRequests: 3,
    },
    {
      id: 2,
      name: 'Growth Dynamics',
      status: 'active',
      documentProgress: 95,
      pendingRequests: 1,
    },
    {
      id: 3,
      name: 'InnovatePro Solutions',
      status: 'inactive',
      documentProgress: 45,
      pendingRequests: 5,
    },
    {
      id: 4,
      name: 'NextGen Robotics',
      status: 'active',
      documentProgress: 75,
      pendingRequests: 2,
    },
    {
      id: 5,
      name: 'DataFlow Systems',
      status: 'inactive',
      documentProgress: 60,
      pendingRequests: 4,
    },
  ];

  const navigate = useNavigate();

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
    <List>
      {companies.slice(0, limit).map((company, index) => (
        <React.Fragment key={company.id}>
          <ListItem
            sx={{ py: 2, cursor: 'pointer' }}
            onClick={() => navigate(`/portfolio/${company.id}`)}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Avatar
                sx={{ width: 40, height: 40, mr: 2, bgcolor: 'primary.main' }}
              >
                {company.name[0]}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography variant="subtitle2">{company.name}</Typography>
                  <Chip
                    label={getStatusInfo(company.status).label}
                    color={getStatusInfo(company.status).color}
                    size="small"
                  />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={company.documentProgress}
                    sx={{ flex: 1, height: 6, borderRadius: 3 }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {company.documentProgress}% complete
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {company.pendingRequests} pending requests
                </Typography>
              </Box>
            </Box>
          </ListItem>
          {index < (limit || companies.length) - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
