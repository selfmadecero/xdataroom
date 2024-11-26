import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  TrendingUp,
  Description,
  Assignment,
  DateRange,
  MoreVert,
  Add as AddIcon,
} from '@mui/icons-material';
import { DocumentRequestList } from './DocumentRequestList';
import { CompanyList } from './CompanyList';
import { PerformanceChart } from './PerformanceChart';

export const Dashboard = () => {
  const userName = 'John';

  return (
    <Box>
      {/* Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          Welcome back, {userName}!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's what's happening with your portfolios today.
        </Typography>
      </Box>

      {/* Overview Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Portfolios"
            value="15"
            change="+2 this month"
            icon={<TrendingUp />}
            trend="up"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Pending Requests"
            value="8"
            change="3 due soon"
            icon={<Assignment />}
            trend="neutral"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Uploaded Documents"
            value="147"
            change="+12 this week"
            icon={<Description />}
            trend="up"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Upcoming Deadlines"
            value="5"
            change="Next: Dec 1"
            icon={<DateRange />}
            trend="down"
          />
        </Grid>
      </Grid>

      {/* Main Content */}
      <Grid container spacing={3}>
        {/* Portfolio Status */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{ height: '100%', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1rem', fontWeight: 600 }}
                >
                  Portfolio Highlights
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<AddIcon />}
                  sx={{ textTransform: 'none' }}
                >
                  Add Portfolio
                </Button>
              </Box>
              <CompanyList limit={5} />
            </CardContent>
          </Card>
        </Grid>

        {/* Document Requests */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{ height: '100%', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1rem', fontWeight: 600 }}
                >
                  Pending Document Requests
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<AddIcon />}
                  sx={{ textTransform: 'none' }}
                >
                  New Request
                </Button>
              </Box>
              <DocumentRequestList limit={5} />
            </CardContent>
          </Card>
        </Grid>

        {/* Performance Analytics */}
        <Grid item xs={12}>
          <Card sx={{ boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1rem', fontWeight: 600 }}
                >
                  Portfolio Performance Overview
                </Typography>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </Box>
              <PerformanceChart />
            </CardContent>
          </Card>
        </Grid>

        {/* Suggested Actions */}
        <Grid item xs={12}>
          <Card sx={{ boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontSize: '1rem', fontWeight: 600, mb: 3 }}
              >
                Suggested Actions
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Request quarterly financials from ABC Corp"
                    secondary="Due in 5 days"
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ textTransform: 'none' }}
                  >
                    Take Action
                  </Button>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Follow up with XYZ Inc. for overdue documents"
                    secondary="3 days overdue"
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ textTransform: 'none' }}
                  >
                    Take Action
                  </Button>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'neutral';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  trend,
}) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'success.main';
      case 'down':
        return 'error.main';
      default:
        return 'grey.600';
    }
  };

  return (
    <Card sx={{ height: '100%', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
      <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="body2" color="grey.600" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
              {value}
            </Typography>
            <Typography variant="body2" sx={{ color: getTrendColor() }}>
              {change}
            </Typography>
          </Box>
          <Box
            sx={{
              p: 1,
              borderRadius: 1,
              bgcolor: 'grey.50',
              color: 'grey.600',
              display: 'flex',
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
