import React from 'react';
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

export const PerformanceChart = () => {
  const [period, setPeriod] = React.useState('30');
  const [portfolio, setPortfolio] = React.useState('all');

  const handlePeriodChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  const handlePortfolioChange = (event: SelectChangeEvent) => {
    setPortfolio(event.target.value);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 3 }}>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={portfolio}
            onChange={handlePortfolioChange}
            displayEmpty
            sx={{ fontSize: '0.875rem' }}
          >
            <MenuItem value="all">All Portfolios</MenuItem>
            <MenuItem value="abc">ABC Corporation</MenuItem>
            <MenuItem value="xyz">XYZ Tech</MenuItem>
            <MenuItem value="future">Future Ventures</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={period}
            onChange={handlePeriodChange}
            displayEmpty
            sx={{ fontSize: '0.875rem' }}
          >
            <MenuItem value="7">Last 7 days</MenuItem>
            <MenuItem value="30">Last 30 days</MenuItem>
            <MenuItem value="90">Last 90 days</MenuItem>
            <MenuItem value="365">Last year</MenuItem>
          </Select>
        </FormControl>
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
        <Typography variant="body2">
          Chart will be implemented with a chart library
        </Typography>
      </Box>
    </Box>
  );
};
