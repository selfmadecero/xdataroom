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
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Close as CloseIcon,
  Send as SendIcon,
  History as HistoryIcon,
} from '@mui/icons-material';

interface FollowUpModalProps {
  open: boolean;
  onClose: () => void;
  companies: string[];
  issue: {
    title: string;
    description: string;
    status: string;
  };
}

export const FollowUpModal: React.FC<FollowUpModalProps> = ({
  open,
  onClose,
  companies,
  issue,
}) => {
  const [messageTemplate, setMessageTemplate] = useState('standard');
  const [additionalRecipients, setAdditionalRecipients] = useState<string[]>(
    []
  );

  const templates = {
    standard: `Dear Team,

I hope this email finds you well. I am following up regarding the overdue document requests for your company. We noticed that some documents are currently past their due date.

Please review and submit the following documents at your earliest convenience:
- Q4 2023 Financial Statements
- Annual Compliance Report

If you are experiencing any difficulties or need additional time, please let us know.

Best regards,
[Your Name]`,
    urgent: `Dear Team,

This is an urgent follow-up regarding several critically overdue documents. These documents are essential for our ongoing compliance requirements.

Please prioritize the submission of the following documents:
- Q4 2023 Financial Statements (Overdue by 5 days)
- Annual Compliance Report (Overdue by 3 days)

If there are any issues preventing you from submitting these documents, please respond immediately to discuss.

Regards,
[Your Name]`,
    final: `Dear Team,

This is a final notice regarding the outstanding document requests. Despite previous reminders, we have not received the required documents.

Please be advised that immediate action is required for:
- Q4 2023 Financial Statements
- Annual Compliance Report

Failure to submit these documents may impact our compliance requirements.

Urgent response needed.

Regards,
[Your Name]`,
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
            <Typography variant="h6">Follow Up on Overdue Documents</Typography>
            <Typography variant="body2" color="text.secondary">
              Send follow-up message to companies with overdue documents
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2" gutterBottom>
            Issue Details
          </Typography>
          <Box sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 1 }}>
            <Typography variant="body2" color="error.main" gutterBottom>
              {issue.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {issue.description}
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              {companies.map((company) => (
                <Chip key={company} label={company} size="small" />
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
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
              <MenuItem value="final">Final Notice</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" gutterBottom>
            Message
          </Typography>
          <TextField
            multiline
            rows={12}
            fullWidth
            defaultValue={templates[messageTemplate as keyof typeof templates]}
            sx={{ bgcolor: 'grey.50' }}
          />
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Additional Recipients
          </Typography>
          <FormControl fullWidth size="small">
            <Select
              multiple
              value={additionalRecipients}
              onChange={(e) =>
                setAdditionalRecipients(
                  typeof e.target.value === 'string' ? [] : e.target.value
                )
              }
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} size="small" />
                  ))}
                </Box>
              )}
            >
              <MenuItem value="portfolio_manager">Portfolio Manager</MenuItem>
              <MenuItem value="compliance_team">Compliance Team</MenuItem>
              <MenuItem value="legal_team">Legal Team</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Recent Communication History
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText
                primary="Initial Request Sent"
                secondary="Mar 15, 2024 - via email"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Reminder"
                secondary="Mar 20, 2024 - via email"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="System Notification"
                secondary="Mar 22, 2024 - automatic reminder sent"
              />
            </ListItem>
          </List>
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
          sx={{ textTransform: 'none' }}
        >
          Send Follow-up
        </Button>
      </DialogActions>
    </Dialog>
  );
};
