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
  Divider,
} from '@mui/material';
import {
  Close as CloseIcon,
  Send as SendIcon,
  AttachFile as AttachFileIcon,
} from '@mui/icons-material';

interface NewDocumentRequestModalProps {
  open: boolean;
  onClose: () => void;
}

export const NewDocumentRequestModal: React.FC<
  NewDocumentRequestModalProps
> = ({ open, onClose }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [sendNotification, setSendNotification] = useState(true);
  const [priority, setPriority] = useState('normal');

  const documentTemplates = [
    {
      id: 'financial_statements',
      title: 'Financial Statements',
      description:
        'Quarterly financial statements including balance sheet, income statement, and cash flow statement',
      category: 'Financial',
      defaultDueDate: 30, // days
    },
    {
      id: 'board_minutes',
      title: 'Board Meeting Minutes',
      description: 'Minutes and resolutions from the latest board meeting',
      category: 'Governance',
      defaultDueDate: 14,
    },
    {
      id: 'compliance_report',
      title: 'Compliance Report',
      description: 'Regular compliance status report and certifications',
      category: 'Legal',
      defaultDueDate: 45,
    },
    {
      id: 'investor_update',
      title: 'Investor Update',
      description: 'Monthly business performance and KPI report',
      category: 'Operations',
      defaultDueDate: 15,
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
          <Typography variant="h6">New Document Request</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Company Selection */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Portfolio Company
            </Typography>
            <FormControl fullWidth size="small">
              <Select defaultValue="">
                <MenuItem value="">Select a company</MenuItem>
                <MenuItem value="techvision">TechVision Labs</MenuItem>
                <MenuItem value="growth">Growth Dynamics</MenuItem>
                <MenuItem value="innovate">InnovatePro Solutions</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Document Template */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Document Template
            </Typography>
            <FormControl fullWidth>
              <Select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                displayEmpty
              >
                <MenuItem value="">Select a template</MenuItem>
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
          </Box>

          <Divider />

          {/* Request Details */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Request Details
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Request Title"
                fullWidth
                required
                size="small"
                placeholder="e.g., Q1 2024 Financial Statements"
              />
              <TextField
                label="Description"
                multiline
                rows={4}
                fullWidth
                required
                placeholder="Provide detailed information about what you're requesting..."
              />
            </Box>
          </Box>

          {/* Due Date and Priority */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Due Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              required
              size="small"
            />
            <FormControl fullWidth size="small">
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
