import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
  Button,
  LinearProgress,
  Divider,
  Avatar,
} from '@mui/material';
import {
  Close as CloseIcon,
  TrendingUp as TrendingUpIcon,
  Description as DescriptionIcon,
  Add as AddIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Business as BusinessIcon,
  CalendarToday as CalendarIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';

interface PortfolioDetailModalProps {
  open: boolean;
  onClose: () => void;
  portfolio: {
    id: number;
    name: string;
    industry: string;
    stage: string;
    investmentDate: string;
    investmentAmount: string;
    ownership: string;
    status: string;
    documentProgress: number;
    pendingRequests: number;
  };
}

export const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({
  open,
  onClose,
  portfolio,
}) => {
  const [activeTab, setActiveTab] = useState(0);

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
      label: 'Document Compliance',
      value: '85%',
      trend: '+5%',
      trendUp: true,
    },
    {
      label: 'Response Time',
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

  const contacts = [
    {
      name: 'John Smith',
      role: 'CEO',
      email: 'john@company.com',
      phone: '+1 (555) 123-4567',
    },
    {
      name: 'Sarah Johnson',
      role: 'CFO',
      email: 'sarah@company.com',
      phone: '+1 (555) 234-5678',
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
      maxWidth="lg"
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
            <Typography variant="h6">{portfolio.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {portfolio.industry} • {portfolio.stage}
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
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <MoneyIcon color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        Investment Amount
                      </Typography>
                    </Box>
                    <Typography variant="h6">
                      {portfolio.investmentAmount}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <BusinessIcon color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        Ownership
                      </Typography>
                    </Box>
                    <Typography variant="h6">{portfolio.ownership}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <DescriptionIcon color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        Document Submission Progress
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <LinearProgress
                        variant="determinate"
                        value={portfolio.documentProgress}
                        sx={{ flex: 1, height: 8, borderRadius: 4 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {portfolio.documentProgress}%
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 2,
                  bgcolor: 'grey.50',
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}
                >
                  <CalendarIcon color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    Key Dates
                  </Typography>
                </Box>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Investment Date"
                      secondary={portfolio.investmentDate}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Next Board Meeting"
                      secondary="Apr 15, 2024"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Financial Report Due"
                      secondary="Apr 30, 2024"
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Documents" />
            <Tab label="Contacts" />
            <Tab label="Performance" />
          </Tabs>
        </Box>

        {/* Tab Content */}
        {activeTab === 0 && (
          <Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}
            >
              <Typography variant="subtitle2">Recent Documents</Typography>
              <Button
                variant="outlined"
                size="small"
                startIcon={<AddIcon />}
                sx={{ textTransform: 'none' }}
              >
                Request Document
              </Button>
            </Box>
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
              Key Contacts
            </Typography>
            <Grid container spacing={2}>
              {contacts.map((contact) => (
                <Grid item xs={12} sm={6} key={contact.email}>
                  <Card variant="outlined">
                    <CardContent>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
                      >
                        <Avatar sx={{ mr: 2 }}>{contact.name[0]}</Avatar>
                        <Box>
                          <Typography variant="subtitle2">
                            {contact.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {contact.role}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                        >
                          <EmailIcon fontSize="small" color="action" />
                          <Typography variant="body2">
                            {contact.email}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                        >
                          <PhoneIcon fontSize="small" color="action" />
                          <Typography variant="body2">
                            {contact.phone}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {activeTab === 2 && (
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Performance Metrics
            </Typography>
            <Grid container spacing={3}>
              {keyMetrics.map((metric, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      {metric.label}
                    </Typography>
                    <Box
                      sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}
                    >
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
        )}
      </DialogContent>
    </Dialog>
  );
};
