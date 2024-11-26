import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Chip,
  Divider,
  Box,
  Avatar,
  Typography,
} from '@mui/material';
import { DocumentRequestDetailModal } from './modals/DocumentRequestDetailModal';

interface DocumentRequestListProps {
  limit?: number;
}

export const DocumentRequestList: React.FC<DocumentRequestListProps> = ({
  limit,
}) => {
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const requests = [
    {
      id: 1,
      title: 'Annual Financial Statements 2023',
      company: 'TechVision Labs',
      date: '2024-03-20',
      status: 'Pending',
      dueDate: '2024-04-05',
    },
    {
      id: 2,
      title: 'Q1 2024 Board Meeting Minutes',
      company: 'Growth Dynamics',
      date: '2024-03-19',
      status: 'Submitted',
      dueDate: '2024-03-25',
    },
    {
      id: 3,
      title: 'Monthly Management Report',
      company: 'InnovatePro Solutions',
      date: '2024-03-18',
      status: 'Overdue',
      dueDate: '2024-03-15',
    },
    {
      id: 4,
      title: 'Quarterly Compliance Report',
      company: 'NextGen Robotics',
      date: '2024-03-17',
      status: 'Pending',
      dueDate: '2024-03-30',
    },
    {
      id: 5,
      title: 'IP Portfolio Update',
      company: 'DataFlow Systems',
      date: '2024-03-16',
      status: 'Submitted',
      dueDate: '2024-03-20',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Submitted':
        return 'success';
      case 'Overdue':
        return 'error';
      default:
        return 'warning';
    }
  };

  const handleRequestClick = (request: any) => {
    setSelectedRequest(request);
    setDetailModalOpen(true);
  };

  return (
    <>
      <List>
        {requests.slice(0, limit).map((request, index) => (
          <React.Fragment key={request.id}>
            <ListItem
              sx={{ py: 2, cursor: 'pointer' }}
              onClick={() => handleRequestClick(request)}
            >
              <Box
                sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
              >
                <Avatar
                  sx={{ width: 40, height: 40, mr: 2, bgcolor: 'primary.main' }}
                >
                  {request.company[0]}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    {request.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {request.company} • Due {request.dueDate}
                  </Typography>
                </Box>
                <Chip
                  label={request.status}
                  color={getStatusColor(request.status)}
                  size="small"
                />
              </Box>
            </ListItem>
            {index < (limit || requests.length) - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>

      {selectedRequest && (
        <DocumentRequestDetailModal
          open={detailModalOpen}
          onClose={() => setDetailModalOpen(false)}
          request={selectedRequest}
        />
      )}
    </>
  );
};
