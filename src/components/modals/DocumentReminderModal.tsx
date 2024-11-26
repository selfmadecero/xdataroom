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
} from '@mui/material';
import {
  Close as CloseIcon,
  Send as SendIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

interface DocumentReminderModalProps {
  open: boolean;
  onClose: () => void;
  document: {
    id: number;
    title: string;
    portfolio: string;
    dueDate: string;
  };
}

export const DocumentReminderModal: React.FC<DocumentReminderModalProps> = ({
  open,
  onClose,
  document,
}) => {
  const [messageTemplate, setMessageTemplate] = useState('standard');
  const [sendCopy, setSendCopy] = useState(true);

  const templates = {
    standard: `Dear ${document.portfolio} team,

This is a friendly reminder about the following document that is due soon:

Document: ${document.title}
Due Date: ${document.dueDate}

Please ensure to submit this document before the due date. If you need any assistance or have questions, please don't hesitate to reach out.

Best regards,
[Your Name]`,

    urgent: `Dear ${document.portfolio} team,

URGENT REMINDER: The following document is due very soon:

Document: ${document.title}
Due Date: ${document.dueDate}

Please prioritize the submission of this document. If there are any issues preventing you from submitting on time, please let us know immediately.

Regards,
[Your Name]`,

    final: `Dear ${document.portfolio} team,

FINAL REMINDER: This is the final reminder for the following document:

Document: ${document.title}
Due Date: ${document.dueDate}

Immediate action is required to ensure timely submission. Please submit the document as soon as possible or contact us if you're experiencing any difficulties.

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
            <Typography variant="h6">Send Reminder</Typography>
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
          {/* Document Info */}
          <Box sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <ScheduleIcon color="primary" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                Due Date
              </Typography>
            </Box>
            <Typography variant="body1">{document.dueDate}</Typography>
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
                <MenuItem value="standard">Standard Reminder</MenuItem>
                <MenuItem value="urgent">Urgent Reminder</MenuItem>
                <MenuItem value="final">Final Reminder</MenuItem>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sendCopy}
                    onChange={(e) => setSendCopy(e.target.checked)}
                  />
                }
                label="Send me a copy"
              />
              <FormControl fullWidth size="small">
                <Select defaultValue="now">
                  <MenuItem value="now">Send Immediately</MenuItem>
                  <MenuItem value="morning">Send Tomorrow Morning</MenuItem>
                  <MenuItem value="afternoon">Send Tomorrow Afternoon</MenuItem>
                  <MenuItem value="custom">Custom Time</MenuItem>
                </Select>
              </FormControl>
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
          Send Reminder
        </Button>
      </DialogActions>
    </Dialog>
  );
};
