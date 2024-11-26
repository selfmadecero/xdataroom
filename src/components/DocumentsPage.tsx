import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Paper,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Add as AddIcon,
  Upload as UploadIcon,
  Refresh as RefreshIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { UploadDocumentModal } from './modals/UploadDocumentModal';
import { NewDocumentRequestModal } from './modals/NewDocumentRequestModal';
import { ViewDocumentModal } from './modals/ViewDocumentModal';
import { DocumentReminderModal } from './modals/DocumentReminderModal';
import { DocumentFollowUpModal } from './modals/DocumentFollowUpModal';

export const DocumentsPage = () => {
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [newRequestModalOpen, setNewRequestModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedDocumentForReminder, setSelectedDocumentForReminder] =
    useState<any>(null);
  const [reminderModalOpen, setReminderModalOpen] = useState(false);
  const [selectedDocumentForFollowUp, setSelectedDocumentForFollowUp] =
    useState<any>(null);
  const [followUpModalOpen, setFollowUpModalOpen] = useState(false);

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const getStatusChip = (status: string) => {
    const statusConfig: {
      [key: string]: { color: 'warning' | 'success' | 'error'; label: string };
    } = {
      pending: { color: 'warning', label: 'Pending' },
      submitted: { color: 'success', label: 'Submitted' },
      overdue: { color: 'error', label: 'Overdue' },
    };

    const config = statusConfig[status.toLowerCase()] || statusConfig.pending;
    return <Chip label={config.label} color={config.color} size="small" />;
  };

  const handleViewDocument = (document: any) => {
    setSelectedDocument(document);
    setViewModalOpen(true);
  };

  const handleRemind = (document: any) => {
    setSelectedDocumentForReminder(document);
    setReminderModalOpen(true);
  };

  const handleFollowUp = (document: any) => {
    setSelectedDocumentForFollowUp(document);
    setFollowUpModalOpen(true);
  };

  return (
    <Box>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Documents
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<UploadIcon />}
              sx={{ textTransform: 'none' }}
              onClick={() => setUploadModalOpen(true)}
            >
              Upload Document
            </Button>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ textTransform: 'none' }}
              onClick={() => setNewRequestModalOpen(true)}
            >
              New Request
            </Button>
          </Box>
        </Box>

        {/* Search and Filters */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <TextField
            placeholder="Search documents by title, portfolio, or status..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ flex: 1, maxWidth: 500 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'grey.500' }} />
                </InputAdornment>
              ),
            }}
          />
          <IconButton onClick={handleFilterClick}>
            <FilterListIcon />
          </IconButton>
          <Menu
            anchorEl={filterAnchorEl}
            open={Boolean(filterAnchorEl)}
            onClose={handleFilterClose}
          >
            <MenuItem onClick={handleFilterClose}>All Documents</MenuItem>
            <MenuItem onClick={handleFilterClose}>Pending</MenuItem>
            <MenuItem onClick={handleFilterClose}>Submitted</MenuItem>
            <MenuItem onClick={handleFilterClose}>Overdue</MenuItem>
          </Menu>
          <Button
            variant="text"
            startIcon={<RefreshIcon />}
            sx={{ textTransform: 'none' }}
          >
            Refresh
          </Button>
        </Box>
      </Box>

      {/* Overview Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Pending Requests
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                12
              </Typography>
              <Typography variant="body2" color="warning.main">
                5 due this week
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Submitted Documents
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                18
              </Typography>
              <Typography variant="body2" color="success.main">
                +3 this week
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Overdue Requests
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                4
              </Typography>
              <Typography variant="body2" color="error.main">
                Action needed
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Documents Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Document Title</TableCell>
              <TableCell>Portfolio</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Submitted Date</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id} hover>
                <TableCell>{doc.title}</TableCell>
                <TableCell>{doc.portfolio}</TableCell>
                <TableCell>{getStatusChip(doc.status)}</TableCell>
                <TableCell>{doc.dueDate}</TableCell>
                <TableCell>{doc.submittedDate || '-'}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1, textTransform: 'none' }}
                    onClick={() => handleViewDocument(doc)}
                  >
                    View
                  </Button>
                  {doc.status !== 'submitted' && (
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ textTransform: 'none' }}
                      onClick={() =>
                        doc.status === 'overdue'
                          ? handleFollowUp(doc)
                          : handleRemind(doc)
                      }
                    >
                      {doc.status === 'overdue' ? 'Follow Up' : 'Remind'}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <UploadDocumentModal
        open={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
      />
      <NewDocumentRequestModal
        open={newRequestModalOpen}
        onClose={() => setNewRequestModalOpen(false)}
      />
      {selectedDocument && (
        <ViewDocumentModal
          open={viewModalOpen}
          onClose={() => setViewModalOpen(false)}
          document={selectedDocument}
        />
      )}
      {selectedDocumentForReminder && (
        <DocumentReminderModal
          open={reminderModalOpen}
          onClose={() => setReminderModalOpen(false)}
          document={selectedDocumentForReminder}
        />
      )}
      {selectedDocumentForFollowUp && (
        <DocumentFollowUpModal
          open={followUpModalOpen}
          onClose={() => setFollowUpModalOpen(false)}
          document={selectedDocumentForFollowUp}
        />
      )}
    </Box>
  );
};

const documents = [
  {
    id: 1,
    title: 'Financial Report Q4 2023',
    portfolio: 'TechVision Labs',
    status: 'pending',
    dueDate: 'Nov 30, 2024',
    submittedDate: null,
  },
  {
    id: 2,
    title: 'Board Meeting Minutes',
    portfolio: 'Growth Dynamics',
    status: 'submitted',
    dueDate: 'Nov 25, 2024',
    submittedDate: 'Nov 24, 2024',
  },
  {
    id: 3,
    title: 'Sales Forecast 2024',
    portfolio: 'InnovatePro Solutions',
    status: 'overdue',
    dueDate: 'Nov 20, 2024',
    submittedDate: null,
  },
  // ... 더 많은 문서 데이터
];
