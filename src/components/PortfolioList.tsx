import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  LinearProgress,
  Box,
  Typography,
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
  // ... 더 많은 포트폴리오 데이터
];

export const PortfolioList = () => {
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Portfolio Name</TableCell>
              <TableCell>Industry</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Document Progress</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {portfolios.map((portfolio) => (
              <TableRow key={portfolio.id} hover>
                <TableCell>{portfolio.name}</TableCell>
                <TableCell>{portfolio.industry}</TableCell>
                <TableCell>{portfolio.stage}</TableCell>
                <TableCell>
                  <Chip
                    label={getStatusInfo(portfolio.status).label}
                    color={getStatusInfo(portfolio.status).color}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      maxWidth: 200,
                    }}
                  >
                    <LinearProgress
                      variant="determinate"
                      value={portfolio.documentProgress}
                      sx={{ flex: 1, height: 6, borderRadius: 3 }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {portfolio.documentProgress}%
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1, textTransform: 'none' }}
                    onClick={() => handleViewDetails(portfolio)}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ textTransform: 'none' }}
                    onClick={() => handleNewRequest(portfolio)}
                  >
                    New Request
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
