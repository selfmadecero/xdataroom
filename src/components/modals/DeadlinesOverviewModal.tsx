import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Chip,
  Button,
  Divider,
  Avatar,
} from '@mui/material';
import {
  Close as CloseIcon,
  Notifications as NotificationsIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';

interface DeadlinesOverviewModalProps {
  open: boolean;
  onClose: () => void;
}

export const DeadlinesOverviewModal: React.FC<DeadlinesOverviewModalProps> = ({
  open,
  onClose,
}) => {
  const deadlines = [
    {
      id: 1,
      title: 'Q4 2023 Financial Statements',
      company: 'TechVision Labs',
      dueDate: '2024-03-30',
      status: 'upcoming',
      type: 'Financial',
      daysLeft: 5,
    },
    {
      id: 2,
      title: 'Annual Compliance Report',
      company: 'Growth Dynamics',
      dueDate: '2024-03-25',
      status: 'overdue',
      type: 'Legal',
      daysOverdue: 2,
    },
    {
      id: 3,
      title: 'Board Meeting Minutes',
      company: 'InnovatePro Solutions',
      dueDate: '2024-04-05',
      status: 'upcoming',
      type: 'Governance',
      daysLeft: 10,
    },
  ];

  const getStatusChip = (status: string, days: number) => {
    if (status === 'overdue') {
      return <Chip label={`${days} days overdue`} color="error" size="small" />;
    }
    return (
      <Chip
        label={`${days} days left`}
        color={days <= 5 ? 'warning' : 'success'}
        size="small"
      />
    );
  };

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
          <Typography variant="h6">Upcoming Deadlines</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {/* Summary Section */}
        <Box
          sx={{
            mb: 4,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2,
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              p: 2,
              bgcolor: 'error.50',
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" color="error.main">
              2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Overdue
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: 'center',
              p: 2,
              bgcolor: 'warning.50',
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" color="warning.main">
              3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Due This Week
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: 'center',
              p: 2,
              bgcolor: 'success.50',
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" color="success.main">
              5
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Upcoming
            </Typography>
          </Box>
        </Box>

        {/* Deadlines List */}
        <List>
          {deadlines.map((deadline, index) => (
            <React.Fragment key={deadline.id}>
              <ListItem
                sx={{
                  py: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    mb: 1,
                  }}
                >
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                    {deadline.company[0]}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2">
                      {deadline.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {deadline.company} • {deadline.type}
                    </Typography>
                  </Box>
                  {getStatusChip(
                    deadline.status,
                    deadline.status === 'overdue'
                      ? deadline.daysOverdue!
                      : deadline.daysLeft!
                  )}
                </Box>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 7 }}
                >
                  <Button
                    size="small"
                    startIcon={<NotificationsIcon />}
                    sx={{ textTransform: 'none' }}
                  >
                    Set Reminder
                  </Button>
                  <Button
                    size="small"
                    startIcon={<CalendarIcon />}
                    sx={{ textTransform: 'none' }}
                  >
                    Change Due Date
                  </Button>
                </Box>
              </ListItem>
              {index < deadlines.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};
