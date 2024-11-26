import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  MoreVert,
  Download as DownloadIcon,
  DateRange as DateRangeIcon,
} from '@mui/icons-material';

export const ReportsPage = () => {
  const [dateRange, setDateRange] = useState('30');
  const [portfolio, setPortfolio] = useState('all');

  const handleDateRangeChange = (event: SelectChangeEvent) => {
    setDateRange(event.target.value);
  };

  const handlePortfolioChange = (event: SelectChangeEvent) => {
    setPortfolio(event.target.value);
  };

  return (
    <Box>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Reports
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl size="small" sx={{ minWidth: 200 }}>
              <Select
                value={portfolio}
                onChange={handlePortfolioChange}
                displayEmpty
                startAdornment={
                  <DateRangeIcon sx={{ mr: 1, color: 'grey.500' }} />
                }
              >
                <MenuItem value="all">All Portfolios</MenuItem>
                <MenuItem value="tech">Tech Companies</MenuItem>
                <MenuItem value="saas">SaaS Companies</MenuItem>
                <MenuItem value="fintech">Fintech Companies</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select
                value={dateRange}
                onChange={handleDateRangeChange}
                displayEmpty
              >
                <MenuItem value="7">Last 7 Days</MenuItem>
                <MenuItem value="30">Last 30 Days</MenuItem>
                <MenuItem value="90">Last Quarter</MenuItem>
                <MenuItem value="365">Last Year</MenuItem>
                <MenuItem value="custom">Custom Range</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              sx={{ textTransform: 'none' }}
            >
              Export Report
            </Button>
          </Box>
        </Box>
      </Box>

      {/* KPI Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <KpiCard
            title="Total Revenue"
            value="$5,200,000"
            change="+8%"
            trend="up"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KpiCard
            title="Net Profit Margin"
            value="12%"
            change="-2%"
            trend="down"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KpiCard
            title="Customer Acquisition Cost"
            value="$1,200"
            change="On Target"
            trend="neutral"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KpiCard
            title="Burn Rate"
            value="$120,000/mo"
            change="Stable"
            trend="neutral"
          />
        </Grid>
      </Grid>

      {/* Performance Charts */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1rem', fontWeight: 600 }}
                >
                  Revenue Trend
                </Typography>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </Box>
              <Box
                sx={{
                  height: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'grey.100',
                  borderRadius: 1,
                  color: 'text.secondary',
                }}
              >
                Line Chart will be implemented with a chart library
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Detailed Metrics Table */}
      <Card>
        <CardContent>
          <Typography
            variant="h6"
            sx={{ fontSize: '1rem', fontWeight: 600, mb: 3 }}
          >
            Portfolio Performance
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Portfolio Name</TableCell>
                  <TableCell align="right">Revenue</TableCell>
                  <TableCell align="right">Net Profit</TableCell>
                  <TableCell align="right">CAC</TableCell>
                  <TableCell align="right">Burn Rate</TableCell>
                  <TableCell align="right">Updated On</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {portfolioData.map((row) => (
                  <TableRow key={row.name} hover>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align="right">{row.revenue}</TableCell>
                    <TableCell align="right">{row.netProfit}</TableCell>
                    <TableCell align="right">{row.cac}</TableCell>
                    <TableCell align="right">{row.burnRate}</TableCell>
                    <TableCell align="right">{row.updatedOn}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ mr: 1, textTransform: 'none' }}
                      >
                        View
                      </Button>
                      <IconButton size="small">
                        <DownloadIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, change, trend }) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp sx={{ color: 'success.main' }} />;
      case 'down':
        return <TrendingDown sx={{ color: 'error.main' }} />;
      default:
        return null;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'success.main';
      case 'down':
        return 'error.main';
      default:
        return 'text.secondary';
    }
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {getTrendIcon()}
          <Typography variant="body2" sx={{ color: getTrendColor() }}>
            {change}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const portfolioData = [
  {
    name: 'TechVision Labs',
    revenue: '$2,000,000',
    netProfit: '$240,000',
    cac: '$900',
    burnRate: '$30,000',
    updatedOn: 'Nov 25, 2024',
  },
  {
    name: 'Growth Dynamics',
    revenue: '$1,500,000',
    netProfit: '$180,000',
    cac: '$1,100',
    burnRate: '$50,000',
    updatedOn: 'Nov 25, 2024',
  },
  {
    name: 'InnovatePro Solutions',
    revenue: '$1,700,000',
    netProfit: '$200,000',
    cac: '$1,300',
    burnRate: '$40,000',
    updatedOn: 'Nov 25, 2024',
  },
];
