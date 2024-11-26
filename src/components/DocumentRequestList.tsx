import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import { useApp } from '../context/AppContext';

export const DocumentRequestList: React.FC = () => {
  const { companies } = useApp();
  const allRequests = companies.flatMap((company) =>
    company.documentRequests.map((req) => ({
      ...req,
      companyName: company.name,
    }))
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          문서 요청 현황
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>기업명</TableCell>
              <TableCell>문서 종류</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>상태</TableCell>
              <TableCell>마감일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.companyName}</TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>{request.title}</TableCell>
                <TableCell>
                  <Chip
                    label={
                      request.status === 'pending'
                        ? '대기중'
                        : request.status === 'submitted'
                        ? '제출됨'
                        : '검토됨'
                    }
                    color={
                      request.status === 'pending'
                        ? 'warning'
                        : request.status === 'submitted'
                        ? 'info'
                        : 'success'
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>{request.dueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
