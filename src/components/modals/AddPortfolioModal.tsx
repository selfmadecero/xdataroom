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
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface AddPortfolioModalProps {
  open: boolean;
  onClose: () => void;
}

export const AddPortfolioModal: React.FC<AddPortfolioModalProps> = ({
  open,
  onClose,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Basic Information', 'Investment Details', 'Team & Contacts'];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // TODO: Handle form submission
    onClose();
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Company Name"
              fullWidth
              required
              placeholder="e.g., TechVision Labs"
            />
            <FormControl fullWidth required>
              <InputLabel>Industry</InputLabel>
              <Select label="Industry">
                <MenuItem value="technology">Technology</MenuItem>
                <MenuItem value="healthcare">Healthcare</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
                <MenuItem value="retail">Retail</MenuItem>
                <MenuItem value="manufacturing">Manufacturing</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Company Website"
              fullWidth
              placeholder="e.g., https://example.com"
            />
            <TextField
              label="Company Description"
              fullWidth
              multiline
              rows={4}
              placeholder="Brief description of the company..."
            />
          </Box>
        );
      case 1:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Investment Amount"
              fullWidth
              required
              placeholder="e.g., $1,000,000"
            />
            <TextField
              label="Investment Date"
              type="date"
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth required>
              <InputLabel>Investment Stage</InputLabel>
              <Select label="Investment Stage">
                <MenuItem value="seed">Seed</MenuItem>
                <MenuItem value="seriesA">Series A</MenuItem>
                <MenuItem value="seriesB">Series B</MenuItem>
                <MenuItem value="seriesC">Series C</MenuItem>
                <MenuItem value="growth">Growth</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Ownership Percentage"
              fullWidth
              placeholder="e.g., 15%"
            />
          </Box>
        );
      case 2:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Primary Contact Name"
              fullWidth
              required
              placeholder="e.g., John Smith"
            />
            <TextField
              label="Contact Email"
              fullWidth
              required
              placeholder="e.g., john@example.com"
            />
            <TextField
              label="Contact Phone"
              fullWidth
              placeholder="e.g., +1 (555) 123-4567"
            />
            <TextField
              label="Additional Team Members"
              fullWidth
              multiline
              rows={4}
              placeholder="List other key team members and their roles..."
            />
          </Box>
        );
      default:
        return null;
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
          <Typography variant="h6">Add New Portfolio</Typography>
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
            sx={{ textTransform: 'none' }}
          >
            Add Portfolio
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
