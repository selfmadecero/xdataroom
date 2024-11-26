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
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  Edit as EditIcon,
  Archive as ArchiveIcon,
  Add as AddIcon,
  Description as DescriptionIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

interface PortfolioOverviewModalProps {
  open: boolean;
  onClose: () => void;
  portfolio: {
    name: string;
    industry: string;
    location: string;
    status: string;
    investmentAmount: string;
    investmentDate: string;
    recentActivities: Array<{
      id: number;
      type: string;
      description: string;
      date: string;
    }>;
  };
}

export const PortfolioOverviewModal: React.FC<PortfolioOverviewModalProps> = ({
  open,
  onClose,
  portfolio,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
        },
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
          <Typography variant="h6">{portfolio.name}</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Portfolio Information
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Industry
              </Typography>
              <Typography variant="body1">{portfolio.industry}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Location
              </Typography>
              <Typography variant="body1">{portfolio.location}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Investment Amount
              </Typography>
              <Typography variant="body1">
                {portfolio.investmentAmount}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Investment Date
              </Typography>
              <Typography variant="body1">
                {portfolio.investmentDate}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Recent Activities
          </Typography>
          <List>
            {portfolio.recentActivities.map((activity) => (
              <ListItem key={activity.id} divider>
                <ListItemText
                  primary={activity.description}
                  secondary={activity.date}
                  primaryTypographyProps={{ variant: 'body2' }}
                  secondaryTypographyProps={{ variant: 'caption' }}
                />
                <Chip
                  label={activity.type}
                  size="small"
                  color={activity.type === 'Document' ? 'info' : 'default'}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          sx={{ textTransform: 'none' }}
        >
          Edit Portfolio
        </Button>
        <Button
          variant="outlined"
          startIcon={<ArchiveIcon />}
          sx={{ textTransform: 'none' }}
        >
          Archive
        </Button>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{ textTransform: 'none' }}
        >
          Add Document
        </Button>
        <Button
          variant="contained"
          startIcon={<DescriptionIcon />}
          sx={{ textTransform: 'none' }}
        >
          View Requests
        </Button>
      </DialogActions>
    </Dialog>
  );
};
