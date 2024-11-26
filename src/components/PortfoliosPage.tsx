import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  CardContent,
  Grid,
  Button,
  InputAdornment,
  Chip,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  MoreVert as MoreVertIcon,
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,
} from '@mui/icons-material';
import { PortfolioList } from './PortfolioList';
import { PortfolioGrid } from './PortfolioGrid';

export const PortfoliosPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleViewModeChange = (
    event: React.MouseEvent<HTMLElement>,
    newMode: 'grid' | 'list'
  ) => {
    if (newMode !== null) {
      setViewMode(newMode);
    }
  };

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Portfolios
          </Typography>
          <Button
            variant="contained"
            size="medium"
            sx={{ textTransform: 'none' }}
          >
            Add Portfolio
          </Button>
        </Box>

        {/* Search and Filters */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <TextField
            placeholder="Search portfolios by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ flex: 1, maxWidth: 400 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'grey.500' }} />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <IconButton onClick={handleFilterClick}>
              <FilterListIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleFilterClose}
            >
              <MenuItem onClick={handleFilterClose}>All</MenuItem>
              <MenuItem onClick={handleFilterClose}>On Track</MenuItem>
              <MenuItem onClick={handleFilterClose}>Delayed</MenuItem>
              <MenuItem onClick={handleFilterClose}>Needs Attention</MenuItem>
            </Menu>
            <ToggleButtonGroup
              value={viewMode}
              exclusive
              onChange={handleViewModeChange}
              size="small"
            >
              <ToggleButton value="grid">
                <ViewModuleIcon />
              </ToggleButton>
              <ToggleButton value="list">
                <ViewListIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
      </Box>

      {/* Portfolio Overview Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Total Portfolios
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                15
              </Typography>
              <Typography variant="body2" color="success.main">
                +2 this month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Pending Requests
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                23
              </Typography>
              <Typography variant="body2" color="warning.main">
                5 overdue
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Document Submission Rate
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                78%
              </Typography>
              <Typography variant="body2" color="success.main">
                +5% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Actionable Insights */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Attention Required
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="subtitle2">
                  2 companies have overdue requests
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  TechVision Labs, Growth Dynamics
                </Typography>
              </Box>
              <Button
                variant="outlined"
                size="small"
                sx={{ textTransform: 'none' }}
              >
                Follow Up
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="subtitle2">
                  Quarterly financial documents due in 5 days
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3 companies need to submit
                </Typography>
              </Box>
              <Button
                variant="outlined"
                size="small"
                sx={{ textTransform: 'none' }}
              >
                Send Reminder
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Portfolio List/Grid */}
      {viewMode === 'grid' ? <PortfolioGrid /> : <PortfolioList />}
    </Box>
  );
};
