import React from 'react';
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Grid,
  Typography,
  Chip,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export const PerformanceChart = () => {
  const [period, setPeriod] = React.useState('30');
  const [portfolio, setPortfolio] = React.useState('all');

  const handlePeriodChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  const handlePortfolioChange = (event: SelectChangeEvent) => {
    setPortfolio(event.target.value);
  };

  // Document Submission Trend
  const submissionTrendData = [
    { month: 'Jan', submitted: 45, requested: 50 },
    { month: 'Feb', submitted: 48, requested: 52 },
    { month: 'Mar', submitted: 51, requested: 55 },
    { month: 'Apr', submitted: 47, requested: 53 },
    { month: 'May', submitted: 49, requested: 51 },
    { month: 'Jun', submitted: 52, requested: 54 },
  ];

  // Document Status Distribution
  const documentStatusData = [
    { name: 'On Time', value: 68, color: '#4CAF50' },
    { name: 'Pending', value: 20, color: '#FFA726' },
    { name: 'Overdue', value: 12, color: '#EF5350' },
  ];

  // Portfolio Compliance Score
  const complianceScoreData = [
    { name: 'TechVision Labs', score: 92 },
    { name: 'Growth Dynamics', score: 88 },
    { name: 'InnovatePro', score: 76 },
    { name: 'NextGen Robotics', score: 85 },
    { name: 'DataFlow Systems', score: 79 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            bgcolor: 'white',
            p: 1.5,
            border: '1px solid',
            borderColor: 'grey.200',
            borderRadius: 1,
          }}
        >
          <Typography variant="subtitle2">{label}</Typography>
          {payload.map((entry: any) => (
            <Box key={entry.name} sx={{ color: entry.color, mt: 0.5 }}>
              <Typography variant="body2">
                {entry.name}: {entry.value}
                {entry.name.includes('Score') ? '%' : ''}
              </Typography>
            </Box>
          ))}
        </Box>
      );
    }
    return null;
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="body2" color="text.secondary">
            Overall Document Compliance
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              85%
            </Typography>
            <Chip label="+5% from last month" color="success" size="small" />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={portfolio}
              onChange={handlePortfolioChange}
              displayEmpty
              sx={{ fontSize: '0.875rem' }}
            >
              <MenuItem value="all">All Portfolios</MenuItem>
              <MenuItem value="tech">Tech Companies</MenuItem>
              <MenuItem value="saas">SaaS Companies</MenuItem>
              <MenuItem value="fintech">Fintech Companies</MenuItem>
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
              <MenuItem value="90">Last Quarter</MenuItem>
              <MenuItem value="365">Last Year</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Document Submission Trend */}
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Document Submission Trend
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={submissionTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="submitted"
                    name="Submitted Documents"
                    stroke="#2196F3"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="requested"
                    name="Requested Documents"
                    stroke="#9C27B0"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Grid>

        {/* Document Status Distribution */}
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Document Status Distribution
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={documentStatusData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {documentStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Grid>

        {/* Portfolio Compliance Scores */}
        <Grid item xs={12}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Portfolio Compliance Scores
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={complianceScoreData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="score"
                    name="Compliance Score"
                    fill="#1976D2"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
