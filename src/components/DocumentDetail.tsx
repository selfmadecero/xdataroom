import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import { useApp } from '../context/AppContext';

export const DocumentDetail: React.FC = () => {
  const { id } = useParams();
  const { companies } = useApp();
  const document = companies
    .flatMap((c) => c.documentRequests)
    .find((d) => d.id === id);

  if (!document) {
    return <Typography>문서를 찾을 수 없습니다.</Typography>;
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {document.title}
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography>유형: {document.type}</Typography>
        <Typography>상태: {document.status}</Typography>
        <Typography>마감일: {document.dueDate}</Typography>
        {document.submittedDate && (
          <Typography>제출일: {document.submittedDate}</Typography>
        )}
      </Paper>
    </Box>
  );
};
