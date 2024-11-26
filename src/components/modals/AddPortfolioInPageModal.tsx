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
  Grid,
  Divider,
  InputAdornment,
} from '@mui/material';
import { Close as CloseIcon, Upload as UploadIcon } from '@mui/icons-material';

interface AddPortfolioInPageModalProps {
  open: boolean;
  onClose: () => void;
}

export const AddPortfolioInPageModal: React.FC<
  AddPortfolioInPageModalProps
> = ({ open, onClose }) => {
  const [activeSection, setActiveSection] = useState('company');

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
          <Typography variant="h6">Add New Portfolio Company</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={4}>
          {/* Company Information */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              Company Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Company Name"
                  fullWidth
                  required
                  placeholder="Enter company name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Industry</InputLabel>
                  <Select label="Industry">
                    <MenuItem value="technology">Technology</MenuItem>
                    <MenuItem value="healthcare">Healthcare</MenuItem>
                    <MenuItem value="finance">Finance</MenuItem>
                    <MenuItem value="consumer">Consumer</MenuItem>
                    <MenuItem value="industrial">Industrial</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Company Stage</InputLabel>
                  <Select label="Company Stage">
                    <MenuItem value="seed">Seed</MenuItem>
                    <MenuItem value="seriesA">Series A</MenuItem>
                    <MenuItem value="seriesB">Series B</MenuItem>
                    <MenuItem value="seriesC">Series C</MenuItem>
                    <MenuItem value="growth">Growth</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Company Website"
                  fullWidth
                  placeholder="https://"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          {/* Investment Details */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              Investment Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Investment Amount"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  placeholder="0.00"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ownership Percentage"
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                  placeholder="0.00"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Investment Date"
                  type="date"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Investment Type</InputLabel>
                  <Select label="Investment Type">
                    <MenuItem value="equity">Equity</MenuItem>
                    <MenuItem value="convertible">Convertible Note</MenuItem>
                    <MenuItem value="safe">SAFE</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              Primary Contact
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact Name"
                  fullWidth
                  required
                  placeholder="Enter contact name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Job Title"
                  fullWidth
                  placeholder="Enter job title"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  placeholder="Enter email address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone"
                  fullWidth
                  placeholder="Enter phone number"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          {/* Additional Information */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              Additional Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Company Description"
                  multiline
                  rows={4}
                  fullWidth
                  placeholder="Enter a brief description of the company..."
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  startIcon={<UploadIcon />}
                  sx={{ textTransform: 'none' }}
                >
                  Upload Company Logo
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 2.5, gap: 1 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ textTransform: 'none' }}
        >
          Cancel
        </Button>
        <Button variant="contained" sx={{ textTransform: 'none' }}>
          Add Portfolio
        </Button>
      </DialogActions>
    </Dialog>
  );
};
