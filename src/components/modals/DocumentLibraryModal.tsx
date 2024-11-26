import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Close as CloseIcon,
  Search as SearchIcon,
  Download as DownloadIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';

interface DocumentLibraryModalProps {
  open: boolean;
  onClose: () => void;
}

export const DocumentLibraryModal: React.FC<DocumentLibraryModalProps> = ({
  open,
  onClose,
}) => {
  const [documentType, setDocumentType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const documents = [
    {
      id: 1,
      title: 'Q4 2023 Financial Report',
      type: 'Financial',
      uploadDate: '2024-03-20',
      size: '2.4 MB',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Board Meeting Minutes',
      type: 'Legal',
      uploadDate: '2024-03-19',
      size: '1.1 MB',
      status: 'Archived',
    },
    {
      id: 3,
      title: 'Product Roadmap 2024',
      type: 'Strategic',
      uploadDate: '2024-03-18',
      size: '3.7 MB',
      status: 'Active',
    },
  ];

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
          <Typography variant="h6">Document Library</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {/* Search and Filters */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="small"
            sx={{ flex: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'grey.500' }} />
                </InputAdornment>
              ),
            }}
          />
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              displayEmpty
            >
              <MenuItem value="all">All Types</MenuItem>
              <MenuItem value="financial">Financial</MenuItem>
              <MenuItem value="legal">Legal</MenuItem>
              <MenuItem value="strategic">Strategic</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{ textTransform: 'none' }}
          >
            Download All
          </Button>
        </Box>

        {/* Documents Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Document Title</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Upload Date</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id} hover>
                  <TableCell>{doc.title}</TableCell>
                  <TableCell>
                    <Chip
                      label={doc.type}
                      size="small"
                      color={
                        doc.type === 'Financial'
                          ? 'primary'
                          : doc.type === 'Legal'
                          ? 'secondary'
                          : 'default'
                      }
                    />
                  </TableCell>
                  <TableCell>{doc.uploadDate}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>
                    <Chip
                      label={doc.status}
                      size="small"
                      color={doc.status === 'Active' ? 'success' : 'default'}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" sx={{ mr: 1 }}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton size="small" sx={{ mr: 1 }}>
                      <DownloadIcon />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
};
