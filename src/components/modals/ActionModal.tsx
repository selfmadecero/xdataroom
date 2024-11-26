import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
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
import { Close as CloseIcon, Send as SendIcon } from '@mui/icons-material';

interface ActionModalProps {
  open: boolean;
  onClose: () => void;
  action: {
    title: string;
    description: string;
    type: 'document_request' | 'follow_up';
    company: string;
    dueDate?: string;
    status?: string;
  };
}

export const ActionModal: React.FC<ActionModalProps> = ({
  open,
  onClose,
  action,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    // TODO: Handle action submission
    onClose();
  };

  const steps =
    action.type === 'document_request'
      ? ['Review Request', 'Set Parameters', 'Confirm']
      : ['Review Issue', 'Compose Message', 'Confirm'];

  const renderStepContent = (step: number) => {
    if (action.type === 'document_request') {
      switch (step) {
        case 0:
          return (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  Document Request Details
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {action.description}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Chip label={`Company: ${action.company}`} size="small" />
                  <Chip
                    label={`Due: ${action.dueDate}`}
                    size="small"
                    color="warning"
                  />
                </Box>
              </Box>
              <Divider />
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Previous Requests
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Q3 2023 Financial Statements"
                      secondary="Submitted on Oct 15, 2023"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Q2 2023 Financial Statements"
                      secondary="Submitted on Jul 15, 2023"
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
          );
        case 1:
          return (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Request Title"
                defaultValue={`Q4 2023 Financial Statements - ${action.company}`}
                fullWidth
              />
              <FormControl fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select label="Priority" defaultValue="medium">
                  <MenuItem value="high">High</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="low">Low</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Due Date"
                type="date"
                defaultValue={action.dueDate}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Additional Notes"
                multiline
                rows={4}
                fullWidth
                placeholder="Add any specific requirements or notes..."
              />
            </Box>
          );
        case 2:
          return (
            <Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Review and Confirm
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Company" secondary={action.company} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Document"
                    secondary="Q4 2023 Financial Statements"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Due Date" secondary={action.dueDate} />
                </ListItem>
              </List>
              <Typography variant="body2" color="warning.main" sx={{ mt: 2 }}>
                An email notification will be sent to the company
                representatives.
              </Typography>
            </Box>
          );
        default:
          return null;
      }
    } else {
      // Follow-up action steps
      switch (step) {
        case 0:
          return (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  Issue Details
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {action.description}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Chip label={`Company: ${action.company}`} size="small" />
                  <Chip label={action.status} size="small" color="error" />
                </Box>
              </Box>
            </Box>
          );
        case 1:
          return (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Subject"
                defaultValue={`Follow-up: Overdue Documents - ${action.company}`}
                fullWidth
              />
              <TextField
                label="Message"
                multiline
                rows={6}
                fullWidth
                defaultValue={`Dear ${action.company} team,\n\nI hope this email finds you well. I am following up regarding...`}
              />
              <FormControl fullWidth>
                <InputLabel>Send Copy To</InputLabel>
                <Select label="Send Copy To" multiple defaultValue={[]}>
                  <MenuItem value="team_lead">Team Lead</MenuItem>
                  <MenuItem value="account_manager">Account Manager</MenuItem>
                </Select>
              </FormControl>
            </Box>
          );
        case 2:
          return (
            <Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Review and Confirm
              </Typography>
              <Typography variant="body2" color="warning.main" sx={{ mt: 2 }}>
                This message will be sent immediately to the selected
                recipients.
              </Typography>
            </Box>
          );
        default:
          return null;
      }
    }
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
          <Typography variant="h6">{action.title}</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mb: 4 }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        {renderStepContent(activeStep)}
      </DialogContent>
      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ textTransform: 'none' }}
        >
          Cancel
        </Button>
        {activeStep > 0 && (
          <Button
            onClick={handleBack}
            variant="outlined"
            sx={{ textTransform: 'none' }}
          >
            Back
          </Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button
            onClick={handleNext}
            variant="contained"
            sx={{ textTransform: 'none' }}
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            variant="contained"
            startIcon={<SendIcon />}
            sx={{ textTransform: 'none' }}
          >
            {action.type === 'document_request'
              ? 'Send Request'
              : 'Send Message'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
