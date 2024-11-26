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
  List,
  ListItem,
  ListItemText,
  Button,
  LinearProgress,
  Tab,
  Tabs,
} from '@mui/material';
import {
  Close as CloseIcon,
  Description as DescriptionIcon,
  TrendingUp as TrendingUpIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';

interface CompanyDetailModalProps {
  open: boolean;
  onClose: () => void;
  company: {
    id: number;
    name: string;
    status: string;
    documentProgress: number;
    pendingRequests: number;
  };
}

export const CompanyDetailModal: React.FC<CompanyDetailModalProps> = ({
  open,
  onClose,
  company,
}) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const recentDocuments = [
    {
      id: 1,
      title: 'Q4 2023 Financial Statements',
      status: 'Submitted',
      date: '2024-03-15',
    },
    {
      id: 2,
      title: 'Board Meeting Minutes',
      status: 'Pending',
      date: '2024-03-10',
    },
    {
      id: 3,
      title: 'Annual Compliance Report',
      status: 'Overdue',
      date: '2024-03-01',
    },
  ];

  const keyMetrics = [
    {
      label: 'Document Compliance Rate',
      value: '85%',
      trend: '+5%',
      trendUp: true,
    },
    {
      label: 'Average Response Time',
      value: '2.3 days',
      trend: '-0.5 days',
      trendUp: true,
    },
    {
      label: 'Pending Documents',
      value: '3',
      trend: '+1',
      trendUp: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'submitted':
        return 'success';
      case 'overdue':
        return 'error';
      default:
        return 'warning';
    }
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
          <Box>
            <Typography variant="h6">{company.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              Portfolio Company
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        {/* Overview Section */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={3}>
            {keyMetrics.map((metric, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {metric.label}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      {metric.value}
                    </Typography>
                    <Chip
                      label={metric.trend}
                      size="small"
                      color={metric.trendUp ? 'success' : 'error'}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Documents" />
            <Tab label="Activity" />
            <Tab label="Details" />
          </Tabs>
        </Box>

        {/* Tab Content */}
        {activeTab === 0 && (
          <Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Document Submission Progress
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={company.documentProgress}
                  sx={{ flex: 1, height: 8, borderRadius: 4 }}
                />
                <Typography variant="body2" color="text.secondary">
                  {company.documentProgress}%
                </Typography>
              </Box>
            </Box>

            <Typography variant="subtitle2" gutterBottom>
              Recent Documents
            </Typography>
            <List>
              {recentDocuments.map((doc, index) => (
                <React.Fragment key={doc.id}>
                  <ListItem>
                    <ListItemText
                      primary={doc.title}
                      secondary={doc.date}
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                    <Chip
                      label={doc.status}
                      size="small"
                      color={getStatusColor(doc.status)}
                    />
                  </ListItem>
                  {index < recentDocuments.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Box>
        )}

        {activeTab === 1 && (
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Recent Activity
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Financial statements submitted"
                  secondary="Today at 2:30 PM"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="New document request created"
                  secondary="Yesterday at 4:15 PM"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Compliance report reviewed"
                  secondary="Mar 20, 2024"
                />
              </ListItem>
            </List>
          </Box>
        )}

        {activeTab === 2 && (
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Company Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Industry
                    </Typography>
                    <Typography variant="body1">Technology</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Investment Stage
                    </Typography>
                    <Typography variant="body1">Series B</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Investment Date
                    </Typography>
                    <Typography variant="body1">Jan 15, 2023</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Primary Contact
                    </Typography>
                    <Typography variant="body1">John Smith</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body1">john@techvision.com</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Phone
                    </Typography>
                    <Typography variant="body1">+1 (555) 123-4567</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Action Buttons */}
        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<DescriptionIcon />}
            sx={{ textTransform: 'none' }}
          >
            Request Document
          </Button>
          <Button
            variant="outlined"
            startIcon={<AssignmentIcon />}
            sx={{ textTransform: 'none' }}
          >
            View All Documents
          </Button>
          <Button
            variant="outlined"
            startIcon={<TrendingUpIcon />}
            sx={{ textTransform: 'none' }}
          >
            View Performance
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
