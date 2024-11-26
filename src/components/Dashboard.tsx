import React, { useState } from 'react';
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
import { PortfolioOverviewModal } from './modals/PortfolioOverviewModal';
import { DocumentRequestModal } from './modals/DocumentRequestModal';
import { DocumentLibraryModal } from './modals/DocumentLibraryModal';
import { DeadlinesOverviewModal } from './modals/DeadlinesOverviewModal';
import { AddPortfolioModal } from './modals/AddPortfolioModal';
import { ActionModal } from './modals/ActionModal';

export const Dashboard = () => {
  const userName = 'John';
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [documentRequestModalOpen, setDocumentRequestModalOpen] =
    useState(false);
  const [documentLibraryModalOpen, setDocumentLibraryModalOpen] =
    useState(false);
  const [deadlinesModalOpen, setDeadlinesModalOpen] = useState(false);
  const [addPortfolioModalOpen, setAddPortfolioModalOpen] = useState(false);
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<any>(null);

  const handlePortfolioClick = (portfolio: any) => {
    setSelectedPortfolio(portfolio);
    setPortfolioModalOpen(true);
  };

  const handleActionClick = (action: any) => {
    setSelectedAction(action);
    setActionModalOpen(true);
  };

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
                  onClick={() => setAddPortfolioModalOpen(true)}
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
                  onClick={() => setDocumentRequestModalOpen(true)}
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
                    onClick={() =>
                      handleActionClick({
                        title: 'Request Quarterly Financials',
                        description:
                          'Quarterly financial statements are due from ABC Corp. Previous submissions have been on time.',
                        type: 'document_request',
                        company: 'ABC Corp',
                        dueDate: '2024-04-05',
                      })
                    }
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
                    onClick={() =>
                      handleActionClick({
                        title: 'Follow Up on Overdue Documents',
                        description:
                          'Multiple documents are overdue from XYZ Inc. Last follow-up was sent 5 days ago.',
                        type: 'follow_up',
                        company: 'XYZ Inc',
                        status: '3 days overdue',
                      })
                    }
                  >
                    Take Action
                  </Button>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {selectedPortfolio && (
        <PortfolioOverviewModal
          open={portfolioModalOpen}
          onClose={() => setPortfolioModalOpen(false)}
          portfolio={selectedPortfolio}
        />
      )}
      <DocumentRequestModal
        open={documentRequestModalOpen}
        onClose={() => setDocumentRequestModalOpen(false)}
      />
      <DocumentLibraryModal
        open={documentLibraryModalOpen}
        onClose={() => setDocumentLibraryModalOpen(false)}
      />
      <DeadlinesOverviewModal
        open={deadlinesModalOpen}
        onClose={() => setDeadlinesModalOpen(false)}
      />
      <AddPortfolioModal
        open={addPortfolioModalOpen}
        onClose={() => setAddPortfolioModalOpen(false)}
      />
      {selectedAction && (
        <ActionModal
          open={actionModalOpen}
          onClose={() => setActionModalOpen(false)}
          action={selectedAction}
        />
      )}
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
