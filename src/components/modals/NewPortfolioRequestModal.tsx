import React, { useState } from 'react';
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
  Chip,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import {
  Close as CloseIcon,
  Send as SendIcon,
  AttachFile as AttachFileIcon,
} from '@mui/icons-material';

interface NewPortfolioRequestModalProps {
  open: boolean;
  onClose: () => void;
  portfolio: {
    name: string;
    id: number;
  };
}

export const NewPortfolioRequestModal: React.FC<
  NewPortfolioRequestModalProps
> = ({ open, onClose, portfolio }) => {
  const [requestType, setRequestType] = useState('document');
  const [priority, setPriority] = useState('normal');
  const [sendNotification, setSendNotification] = useState(true);

  const documentTemplates = [
    {
      id: 1,
      title: 'Financial Statements',
      description:
        'Quarterly financial statements including balance sheet, income statement, and cash flow statement',
      category: 'Financial',
    },
    {
      id: 2,
      title: 'Board Meeting Minutes',
      description: 'Minutes from the latest board meeting',
      category: 'Governance',
    },
    {
      id: 3,
      title: 'Compliance Report',
      description: 'Annual compliance and regulatory report',
      category: 'Legal',
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
            <Typography variant="h6">New Request</Typography>
            <Typography variant="body2" color="text.secondary">
              {portfolio.name}
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Request Type */}
          <FormControl fullWidth>
            <InputLabel>Request Type</InputLabel>
            <Select
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              label="Request Type"
            >
              <MenuItem value="document">Document Request</MenuItem>
              <MenuItem value="information">Information Request</MenuItem>
              <MenuItem value="update">Update Request</MenuItem>
            </Select>
          </FormControl>

          {/* Document Template */}
          {requestType === 'document' && (
            <FormControl fullWidth>
              <InputLabel>Document Template</InputLabel>
              <Select label="Document Template">
                {documentTemplates.map((template) => (
                  <MenuItem key={template.id} value={template.id}>
                    <Box>
                      <Typography variant="body2">{template.title}</Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        {template.description}
                      </Typography>
                      <Chip
                        label={template.category}
                        size="small"
                        sx={{ mt: 0.5 }}
                        color="primary"
                        variant="outlined"
                      />
                    </Box>
                  </MenuItem>
                ))}
                <MenuItem value="custom">
                  <Typography color="primary">
                    + Custom Document Request
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          )}

          {/* Request Details */}
          <TextField
            label="Request Title"
            fullWidth
            required
            placeholder="Enter request title"
          />

          <TextField
            label="Description"
            multiline
            rows={4}
            fullWidth
            required
            placeholder="Provide detailed information about what you're requesting..."
          />

          {/* Due Date and Priority */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Due Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              required
            />
            <FormControl fullWidth>
              <InputLabel>Priority</InputLabel>
              <Select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                label="Priority"
              >
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="normal">Normal</MenuItem>
                <MenuItem value="high">High</MenuItem>
                <MenuItem value="urgent">Urgent</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Additional Options */}
          <Box sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 1 }}>
            <Typography variant="subtitle2" gutterBottom>
              Additional Options
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sendNotification}
                    onChange={(e) => setSendNotification(e.target.checked)}
                  />
                }
                label="Send email notification"
              />
              <Button
                variant="outlined"
                startIcon={<AttachFileIcon />}
                sx={{ textTransform: 'none', alignSelf: 'flex-start' }}
              >
                Attach Reference Documents
              </Button>
            </Box>
          </Box>
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
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          sx={{ textTransform: 'none' }}
        >
          Send Request
        </Button>
      </DialogActions>
    </Dialog>
  );
};
