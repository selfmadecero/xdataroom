import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Link,
} from '@mui/material';
import {
  Close as CloseIcon,
  Download as DownloadIcon,
  History as HistoryIcon,
  InsertDriveFile as FileIcon,
  Person as PersonIcon,
  CalendarToday as CalendarIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

type ChipColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

interface ViewDocumentModalProps {
  open: boolean;
  onClose: () => void;
  document: {
    id: number;
    title: string;
    portfolio: string;
    status: string;
    dueDate: string;
    submittedDate?: string;
  };
}

export const ViewDocumentModal: React.FC<ViewDocumentModalProps> = ({
  open,
  onClose,
  document,
}) => {
  const getStatusInfo = (
    status: string
  ): { color: ChipColor; icon: JSX.Element } => {
    switch (status.toLowerCase()) {
      case 'submitted':
        return { color: 'success', icon: <CheckCircleIcon color="success" /> };
      case 'overdue':
        return { color: 'error', icon: <WarningIcon color="error" /> };
      default:
        return { color: 'warning', icon: <ScheduleIcon color="warning" /> };
    }
  };

  const history = [
    {
      date: '2024-03-20 14:30',
      action: 'Reminder sent',
      user: 'System',
      description: 'Automatic reminder sent to company',
    },
    {
      date: '2024-03-15 11:20',
      action: 'Document reviewed',
      user: 'John Smith',
      description: 'Previous version reviewed and feedback provided',
    },
    {
      date: '2024-03-10 09:45',
      action: 'Request created',
      user: 'Sarah Johnson',
      description: 'Initial document request sent',
    },
  ];

  const files = [
    {
      name: 'Financial_Report_Q4_2023_v1.pdf',
      size: '2.4 MB',
      uploadedBy: 'John Smith',
      uploadedAt: '2024-03-15 11:20',
    },
    {
      name: 'Financial_Report_Q4_2023_v2.pdf',
      size: '2.6 MB',
      uploadedBy: 'Jane Doe',
      uploadedAt: '2024-03-18 15:45',
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
            <Typography variant="h6">{document.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {document.portfolio}
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={3}>
          {/* Status Section */}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2, flex: 1 }}>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}
                >
                  {getStatusInfo(document.status).icon}
                  <Typography variant="body2" color="text.secondary">
                    Status
                  </Typography>
                </Box>
                <Chip
                  label={document.status}
                  color={getStatusInfo(document.status).color}
                  size="small"
                />
              </Box>
              <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2, flex: 1 }}>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}
                >
                  <CalendarIcon color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    Due Date
                  </Typography>
                </Box>
                <Typography variant="body1">{document.dueDate}</Typography>
              </Box>
              {document.submittedDate && (
                <Box
                  sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2, flex: 1 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <SendIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                      Submitted Date
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    {document.submittedDate}
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>

          {/* Files Section */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Document Versions
            </Typography>
            <List>
              {files.map((file, index) => (
                <React.Fragment key={file.name}>
                  <ListItem>
                    <ListItemIcon>
                      <FileIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Link href="#" underline="hover">
                          {file.name}
                        </Link>
                      }
                      secondary={
                        <Box sx={{ display: 'flex', gap: 2, mt: 0.5 }}>
                          <Typography variant="caption" color="text.secondary">
                            Size: {file.size}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Uploaded by: {file.uploadedBy}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {file.uploadedAt}
                          </Typography>
                        </Box>
                      }
                    />
                    <IconButton>
                      <DownloadIcon />
                    </IconButton>
                  </ListItem>
                  {index < files.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Grid>

          {/* History Section */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Activity History
            </Typography>
            <List>
              {history.map((item, index) => (
                <React.Fragment key={item.date}>
                  <ListItem>
                    <ListItemText
                      primary={item.action}
                      secondary={
                        <Box sx={{ display: 'flex', gap: 2, mt: 0.5 }}>
                          <Typography variant="caption" color="text.secondary">
                            {item.date}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            by {item.user}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < history.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button
          variant="outlined"
          startIcon={<HistoryIcon />}
          sx={{ textTransform: 'none' }}
        >
          View Full History
        </Button>
        <Box sx={{ flex: 1 }} />
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ textTransform: 'none' }}
        >
          Close
        </Button>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{ textTransform: 'none' }}
        >
          Download Latest Version
        </Button>
      </DialogActions>
    </Dialog>
  );
};
