import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Chip,
  Grid,
  Divider,
  Button,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  Close as CloseIcon,
  Send as SendIcon,
  Download as DownloadIcon,
  History as HistoryIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

interface DocumentRequestDetailModalProps {
  open: boolean;
  onClose: () => void;
  request: {
    id: number;
    title: string;
    company: string;
    date: string;
    status: string;
    dueDate: string;
  };
}

export const DocumentRequestDetailModal: React.FC<
  DocumentRequestDetailModalProps
> = ({ open, onClose, request }) => {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Submitted':
        return <CheckCircleIcon color="success" />;
      case 'Overdue':
        return <WarningIcon color="error" />;
      default:
        return <ScheduleIcon color="warning" />;
    }
  };

  const history = [
    {
      date: '2024-03-20 14:30',
      action: 'Reminder sent',
      description: 'Automatic reminder sent to company',
    },
    {
      date: '2024-03-15 11:20',
      action: 'Document reviewed',
      description: 'Previous version reviewed and feedback provided',
    },
    {
      date: '2024-03-10 09:45',
      action: 'Request created',
      description: 'Initial document request sent',
    },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2 },
      }}
    >
      <DialogTitle>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="h6">{request.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              Document Request
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        {/* Status Section */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}
                >
                  {getStatusIcon(request.status)}
                  <Typography variant="subtitle2">Status</Typography>
                </Box>
                <Chip
                  label={request.status}
                  color={getStatusColor(request.status)}
                  size="small"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Due Date
                </Typography>
                <Typography variant="body1">
                  {request.dueDate}
                  {request.status === 'Overdue' && (
                    <Chip
                      label="Overdue"
                      color="error"
                      size="small"
                      sx={{ ml: 1 }}
                    />
                  )}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Details Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2" gutterBottom>
            Request Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" color="text.secondary">
                Company
              </Typography>
              <Typography variant="body1">{request.company}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" color="text.secondary">
                Request Date
              </Typography>
              <Typography variant="body1">{request.date}</Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* History Timeline */}
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Request History
          </Typography>
          <Timeline>
            {history.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{ flex: 0.3 }}
                >
                  {item.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index < history.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle2">{item.action}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          {request.status === 'Submitted' ? (
            <>
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                sx={{ textTransform: 'none' }}
              >
                Download Document
              </Button>
              <Button
                variant="contained"
                startIcon={<CheckCircleIcon />}
                sx={{ textTransform: 'none' }}
              >
                Review Document
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                startIcon={<HistoryIcon />}
                sx={{ textTransform: 'none' }}
              >
                Extend Deadline
              </Button>
              <Button
                variant="contained"
                startIcon={<SendIcon />}
                sx={{ textTransform: 'none' }}
              >
                Send Reminder
              </Button>
            </>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
