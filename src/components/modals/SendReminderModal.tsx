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
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import {
  Close as CloseIcon,
  Send as SendIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

interface SendReminderModalProps {
  open: boolean;
  onClose: () => void;
  data: {
    title: string;
    description: string;
    companies: Array<{
      name: string;
      documents: string[];
      dueDate: string;
    }>;
  };
}

export const SendReminderModal: React.FC<SendReminderModalProps> = ({
  open,
  onClose,
  data,
}) => {
  const [messageTemplate, setMessageTemplate] = useState('friendly');
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  const templates = {
    friendly: `Dear [Company] team,

This is a friendly reminder about the upcoming document submissions due in 5 days. 

Required documents:
[Documents]

Due date: [Due Date]

Please let us know if you need any assistance or have questions about the submission process.

Best regards,
[Your Name]`,
    formal: `Dear [Company] team,

We are writing to remind you about the following document submissions that are due in 5 days:

Required documents:
[Documents]

Due date: [Due Date]

Please ensure timely submission of these documents.

Regards,
[Your Name]`,
    urgent: `Dear [Company] team,

URGENT REMINDER: Document submissions are due in 5 days.

Required documents:
[Documents]

Due date: [Due Date]

Immediate attention to this matter is required. Please submit the documents as soon as possible.

Regards,
[Your Name]`,
  };

  const handleCompanyToggle = (companyName: string) => {
    setSelectedCompanies((prev) =>
      prev.includes(companyName)
        ? prev.filter((name) => name !== companyName)
        : [...prev, companyName]
    );
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
              {data.description}
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        {/* Companies Selection */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2" gutterBottom>
            Select Companies
          </Typography>
          <List sx={{ bgcolor: 'grey.50', borderRadius: 1 }}>
            {data.companies.map((company, index) => (
              <React.Fragment key={company.name}>
                <ListItem>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCompanies.includes(company.name)}
                        onChange={() => handleCompanyToggle(company.name)}
                      />
                    }
                    label={
                      <Box>
                        <Typography variant="subtitle2">
                          {company.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Due: {company.dueDate}
                        </Typography>
                        <Box
                          sx={{
                            mt: 1,
                            display: 'flex',
                            gap: 1,
                            flexWrap: 'wrap',
                          }}
                        >
                          {company.documents.map((doc) => (
                            <Chip
                              key={doc}
                              label={doc}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      </Box>
                    }
                    sx={{ width: '100%' }}
                  />
                </ListItem>
                {index < data.companies.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>

        {/* Message Template Selection */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" gutterBottom>
            Message Template
          </Typography>
          <FormControl fullWidth size="small">
            <Select
              value={messageTemplate}
              onChange={(e) => setMessageTemplate(e.target.value)}
            >
              <MenuItem value="friendly">Friendly Reminder</MenuItem>
              <MenuItem value="formal">Formal Reminder</MenuItem>
              <MenuItem value="urgent">Urgent Reminder</MenuItem>
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
            defaultValue={templates[messageTemplate as keyof typeof templates]}
            sx={{ bgcolor: 'grey.50' }}
          />
        </Box>

        {/* Scheduling Options */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" gutterBottom>
            Scheduling Options
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Send Time</InputLabel>
              <Select label="Send Time" defaultValue="now">
                <MenuItem value="now">Send Immediately</MenuItem>
                <MenuItem value="morning">Send Tomorrow Morning</MenuItem>
                <MenuItem value="custom">Custom Time</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Send me a copy"
            />
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
          disabled={selectedCompanies.length === 0}
        >
          Send Reminder
        </Button>
      </DialogActions>
    </Dialog>
  );
};
