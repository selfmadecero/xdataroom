import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  LinearProgress,
  Box,
  Button,
} from '@mui/material';
import { PortfolioDetailModal } from './modals/PortfolioDetailModal';
import { NewPortfolioRequestModal } from './modals/NewPortfolioRequestModal';

const portfolios = [
  {
    id: 1,
    name: 'TechVision Labs',
    industry: 'Technology',
    stage: 'Series B',
    status: 'active',
    documentProgress: 80,
    pendingRequests: 3,
    investmentDate: '2023-01-15',
    investmentAmount: '$2,000,000',
    ownership: '15%',
  },
  {
    id: 2,
    name: 'Growth Dynamics',
    industry: 'SaaS',
    stage: 'Series A',
    status: 'active',
    documentProgress: 95,
    pendingRequests: 1,
    investmentDate: '2023-03-20',
    investmentAmount: '$1,500,000',
    ownership: '12%',
  },
  {
    id: 3,
    name: 'InnovatePro Solutions',
    industry: 'AI/ML',
    stage: 'Series C',
    status: 'inactive',
    documentProgress: 45,
    pendingRequests: 5,
    investmentDate: '2022-11-10',
    investmentAmount: '$3,500,000',
    ownership: '8%',
  },
  {
    id: 4,
    name: 'NextGen Robotics',
    industry: 'Robotics',
    stage: 'Series B',
    status: 'active',
    documentProgress: 75,
    pendingRequests: 2,
    investmentDate: '2023-05-15',
    investmentAmount: '$2,800,000',
    ownership: '18%',
  },
  {
    id: 5,
    name: 'DataFlow Systems',
    industry: 'Big Data',
    stage: 'Series A',
    status: 'inactive',
    documentProgress: 60,
    pendingRequests: 4,
    investmentDate: '2023-02-28',
    investmentAmount: '$1,200,000',
    ownership: '20%',
  },
  {
    id: 6,
    name: 'CloudTech Solutions',
    industry: 'Cloud Computing',
    stage: 'Series B',
    status: 'active',
    documentProgress: 88,
    pendingRequests: 2,
    investmentDate: '2023-04-10',
    investmentAmount: '$2,500,000',
    ownership: '14%',
  },
  {
    id: 7,
    name: 'FinTech Innovations',
    industry: 'Fintech',
    stage: 'Series A',
    status: 'active',
    documentProgress: 70,
    pendingRequests: 3,
    investmentDate: '2023-06-05',
    investmentAmount: '$1,800,000',
    ownership: '16%',
  },
  {
    id: 8,
    name: 'HealthTech Solutions',
    industry: 'Healthcare',
    stage: 'Series C',
    status: 'active',
    documentProgress: 92,
    pendingRequests: 1,
    investmentDate: '2022-12-20',
    investmentAmount: '$4,000,000',
    ownership: '10%',
  },
  {
    id: 9,
    name: 'EcoSmart Technologies',
    industry: 'CleanTech',
    stage: 'Series B',
    status: 'inactive',
    documentProgress: 55,
    pendingRequests: 4,
    investmentDate: '2023-01-30',
    investmentAmount: '$2,200,000',
    ownership: '15%',
  },
  {
    id: 10,
    name: 'Quantum Computing Co',
    industry: 'Technology',
    stage: 'Series A',
    status: 'active',
    documentProgress: 85,
    pendingRequests: 2,
    investmentDate: '2023-07-01',
    investmentAmount: '$1,600,000',
    ownership: '18%',
  },
  {
    id: 11,
    name: 'Smart IoT Systems',
    industry: 'IoT',
    stage: 'Series B',
    status: 'active',
    documentProgress: 78,
    pendingRequests: 3,
    investmentDate: '2023-03-15',
    investmentAmount: '$2,300,000',
    ownership: '13%',
  },
  {
    id: 12,
    name: 'Blockchain Ventures',
    industry: 'Blockchain',
    stage: 'Series A',
    status: 'inactive',
    documentProgress: 50,
    pendingRequests: 5,
    investmentDate: '2023-05-20',
    investmentAmount: '$1,900,000',
    ownership: '17%',
  },
];

export const PortfolioGrid = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState<any>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [newRequestModalOpen, setNewRequestModalOpen] = useState(false);
  const [selectedPortfolioForRequest, setSelectedPortfolioForRequest] =
    useState<any>(null);

  const handleViewDetails = (portfolio: any) => {
    setSelectedPortfolio(portfolio);
    setDetailModalOpen(true);
  };

  const handleNewRequest = (portfolio: any) => {
    setSelectedPortfolioForRequest(portfolio);
    setNewRequestModalOpen(true);
  };

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
    <>
      <Grid container spacing={3}>
        {portfolios.map((portfolio) => (
          <Grid item xs={12} sm={6} md={4} key={portfolio.id}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontSize: '1rem', fontWeight: 600 }}
                  >
                    {portfolio.name}
                  </Typography>
                  <Chip
                    label={getStatusInfo(portfolio.status).label}
                    color={getStatusInfo(portfolio.status).color}
                    size="small"
                  />
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Document Progress
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={portfolio.documentProgress}
                      sx={{ flex: 1, height: 6, borderRadius: 3 }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {portfolio.documentProgress}%
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    {portfolio.industry} • {portfolio.stage}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {portfolio.pendingRequests} pending requests
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ flex: 1, textTransform: 'none' }}
                    onClick={() => handleViewDetails(portfolio)}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ flex: 1, textTransform: 'none' }}
                    onClick={() => handleNewRequest(portfolio)}
                  >
                    New Request
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedPortfolio && (
        <PortfolioDetailModal
          open={detailModalOpen}
          onClose={() => setDetailModalOpen(false)}
          portfolio={selectedPortfolio}
        />
      )}

      {selectedPortfolioForRequest && (
        <NewPortfolioRequestModal
          open={newRequestModalOpen}
          onClose={() => setNewRequestModalOpen(false)}
          portfolio={selectedPortfolioForRequest}
        />
      )}
    </>
  );
};
