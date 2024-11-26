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
  Select,
  MenuItem,
  IconButton,
  Chip,
  FormControlLabel,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Close as CloseIcon,
  Send as SendIcon,
  Warning as WarningIcon,
  History as HistoryIcon,
} from '@mui/icons-material';

interface DocumentFollowUpModalProps {
  open: boolean;
  onClose: () => void;
  document: {
    id: number;
    title: string;
    portfolio: string;
    dueDate: string;
    overdueDays: number;
  };
}

export const DocumentFollowUpModal: React.FC<DocumentFollowUpModalProps> = ({
  open,
  onClose,
  document,
}) => {
  const [messageTemplate, setMessageTemplate] = useState('standard');
  const [sendCopy, setSendCopy] = useState(true);
  const [escalateToManager, setEscalateToManager] = useState(false);

  const templates = {
    standard: `Dear ${document.portfolio} team,

I am following up regarding the overdue document:

Document: ${document.title}
Due Date: ${document.dueDate}
Days Overdue: ${document.overdueDays}

Please provide an update on the status of this document. If you are experiencing any difficulties or need additional time, please let us know.

Best regards,
[Your Name]`,

    urgent: `Dear ${document.portfolio} team,

URGENT FOLLOW-UP: This is regarding the significantly overdue document:

Document: ${document.title}
Due Date: ${document.dueDate}
Days Overdue: ${document.overdueDays}

This document requires immediate attention. Please submit the document or provide a detailed explanation for the delay along with an expected submission date.

Regards,
[Your Name]`,

    escalation: `Dear ${document.portfolio} team,

This is a formal escalation notice regarding the following overdue document:

Document: ${document.title}
Due Date: ${document.dueDate}
Days Overdue: ${document.overdueDays}

Due to the significant delay, this matter has been escalated to senior management. Immediate action is required.

Please be advised that continued non-compliance may affect our reporting requirements.

Regards,
[Your Name]`,
  };

  const previousCommunications = [
    {
      date: '2024-03-20',
      type: 'Reminder',
      message: 'Automatic reminder sent',
    },
    {
      date: '2024-03-15',
      type: 'Email',
      message: 'Response received: "Will submit by next week"',
    },
    {
      date: '2024-03-10',
      type: 'Initial Request',
      message: 'Document request sent',
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
            <Typography variant="h6">Follow Up on Overdue Document</Typography>
            <Typography variant="body2" color="text.secondary">
              {document.portfolio} • {document.title}
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Status Info */}
          <Box sx={{ bgcolor: 'error.50', p: 2, borderRadius: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <WarningIcon color="error" fontSize="small" />
              <Typography variant="subtitle2" color="error.main">
                Document Overdue
              </Typography>
            </Box>
            <Typography variant="body2">
              This document is overdue by {document.overdueDays} days (Due:{' '}
              {document.dueDate})
            </Typography>
          </Box>

          {/* Previous Communications */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Previous Communications
            </Typography>
            <List sx={{ bgcolor: 'grey.50', borderRadius: 1 }}>
              {previousCommunications.map((comm, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={comm.type}
                      secondary={
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0.5,
                          }}
                        >
                          <Typography variant="body2">
                            {comm.message}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {comm.date}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < previousCommunications.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Box>

          {/* Message Template Selection */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Message Template
            </Typography>
            <FormControl fullWidth size="small">
              <Select
                value={messageTemplate}
                onChange={(e) => setMessageTemplate(e.target.value)}
              >
                <MenuItem value="standard">Standard Follow-up</MenuItem>
                <MenuItem value="urgent">Urgent Follow-up</MenuItem>
                <MenuItem value="escalation">Escalation Notice</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Message Preview */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Message Preview
            </Typography>
            <TextField
              multiline
              rows={12}
              fullWidth
              defaultValue={
                templates[messageTemplate as keyof typeof templates]
              }
              sx={{ bgcolor: 'grey.50' }}
            />
          </Box>

          {/* Additional Options */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Additional Options
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sendCopy}
                    onChange={(e) => setSendCopy(e.target.checked)}
                  />
                }
                label="Send me a copy"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={escalateToManager}
                    onChange={(e) => setEscalateToManager(e.target.checked)}
                  />
                }
                label="Escalate to portfolio manager"
              />
            </Box>
          </Box>
        </Box>
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
          Cancel
        </Button>
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          color="primary"
          sx={{ textTransform: 'none' }}
        >
          Send Follow-up
        </Button>
      </DialogActions>
    </Dialog>
  );
};
