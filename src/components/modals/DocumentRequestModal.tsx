import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface DocumentRequestModalProps {
  open: boolean;
  onClose: () => void;
}

export const DocumentRequestModal: React.FC<DocumentRequestModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
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
          <Typography variant="h6">New Document Request</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Portfolio Company</InputLabel>
            <Select label="Portfolio Company">
              <MenuItem value="techvision">TechVision Labs</MenuItem>
              <MenuItem value="growth">Growth Dynamics</MenuItem>
              <MenuItem value="innovate">InnovatePro Solutions</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Document Title"
            fullWidth
            placeholder="e.g., Q1 2024 Financial Statements"
          />

          <FormControl fullWidth>
            <InputLabel>Document Category</InputLabel>
            <Select label="Document Category">
              <MenuItem value="financial">Financial</MenuItem>
              <MenuItem value="legal">Legal</MenuItem>
              <MenuItem value="operational">Operational</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Due Date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Additional Notes"
            multiline
            rows={4}
            fullWidth
            placeholder="Add any specific requirements or notes..."
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ textTransform: 'none' }}
        >
          Cancel
        </Button>
        <Button variant="contained" sx={{ textTransform: 'none' }}>
          Create Request
        </Button>
      </DialogActions>
    </Dialog>
  );
};
