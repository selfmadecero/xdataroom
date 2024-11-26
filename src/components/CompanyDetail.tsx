import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import { useApp } from '../context/AppContext';

export const CompanyDetail: React.FC = () => {
  const { id } = useParams();
  const { companies } = useApp();
  const company = companies.find((c) => c.id === id);

  if (!company) {
    return <Typography>기업을 찾을 수 없습니다.</Typography>;
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {company.name}
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          기업 정보
        </Typography>
        <Typography>
          상태: {company.status === 'active' ? '활성' : '비활성'}
        </Typography>
        <Typography>문서 요청 수: {company.documentRequests.length}</Typography>
      </Paper>
    </Box>
  );
};
