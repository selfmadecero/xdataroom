import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { CompanyList } from './CompanyList';
import { DocumentRequestList } from './DocumentRequestList';

export const Dashboard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        XDataRoom 대시보드
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CompanyList />
        </Grid>
        <Grid item xs={12} md={8}>
          <DocumentRequestList />
        </Grid>
      </Grid>
    </Box>
  );
};
