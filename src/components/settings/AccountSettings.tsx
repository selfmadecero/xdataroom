import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
  Card,
  CardContent,
  Divider,
  Switch,
  FormControlLabel,
  IconButton,
  Chip,
} from '@mui/material';
import {
  Edit as EditIcon,
  Upload as UploadIcon,
  Delete as DeleteIcon,
  Notifications as NotificationsIcon,
  Language as LanguageIcon,
  Schedule as ScheduleIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

export const AccountSettings = () => {
  const [editMode, setEditMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [browserNotifications, setBrowserNotifications] = useState(true);

  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@company.com',
    role: 'Investment Manager',
    organization: 'XYZ Capital Partners',
    phone: '+1 (555) 123-4567',
    timezone: 'UTC-5 (Eastern Time)',
    language: 'English (US)',
    lastLogin: '2024-03-25 14:30',
    lastPasswordChange: '2024-02-15',
    twoFactorEnabled: true,
  };

  const sessions = [
    {
      device: 'Chrome on MacBook Pro',
      location: 'New York, US',
      ipAddress: '192.168.1.1',
      lastActive: '2 minutes ago',
      current: true,
    },
    {
      device: 'Safari on iPhone 13',
      location: 'New York, US',
      ipAddress: '192.168.1.2',
      lastActive: '1 hour ago',
      current: false,
    },
  ];

  return (
    <Box>
      {/* Profile Section */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box
            sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 4 }}
          >
            <Box sx={{ position: 'relative' }}>
              <Avatar src="/user-avatar.jpg" sx={{ width: 100, height: 100 }} />
              <IconButton
                size="small"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  bgcolor: 'background.paper',
                  boxShadow: 1,
                  '&:hover': { bgcolor: 'background.paper' },
                }}
              >
                <UploadIcon fontSize="small" />
              </IconButton>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}
              >
                <Box>
                  <Typography variant="h6">{userProfile.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {userProfile.role} at {userProfile.organization}
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={() => setEditMode(!editMode)}
                  sx={{ textTransform: 'none' }}
                >
                  Edit Profile
                </Button>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    defaultValue={userProfile.name}
                    disabled={!editMode}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    defaultValue={userProfile.email}
                    disabled={!editMode}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    defaultValue={userProfile.phone}
                    disabled={!editMode}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Organization"
                    defaultValue={userProfile.organization}
                    disabled={!editMode}
                    size="small"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Preferences */}
          <Typography variant="subtitle2" gutterBottom>
            Preferences
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LanguageIcon color="action" />
                <Box>
                  <Typography variant="body2">Language</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {userProfile.language}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <ScheduleIcon color="action" />
                <Box>
                  <Typography variant="body2">Timezone</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {userProfile.timezone}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle2" gutterBottom>
            Notifications
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                />
              }
              label={
                <Box>
                  <Typography variant="body2">Email Notifications</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Receive notifications about document requests, updates, and
                    reminders
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              control={
                <Switch
                  checked={browserNotifications}
                  onChange={(e) => setBrowserNotifications(e.target.checked)}
                />
              }
              label={
                <Box>
                  <Typography variant="body2">Browser Notifications</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Show desktop notifications when important updates occur
                  </Typography>
                </Box>
              }
            />
          </Box>
        </CardContent>
      </Card>

      {/* Security */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle2" gutterBottom>
            Security
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="body2">
                  Two-Factor Authentication
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {userProfile.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                size="small"
                sx={{ textTransform: 'none' }}
              >
                {userProfile.twoFactorEnabled ? 'Manage' : 'Enable'}
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="body2">Password</Typography>
                <Typography variant="caption" color="text.secondary">
                  Last changed {userProfile.lastPasswordChange}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                size="small"
                sx={{ textTransform: 'none' }}
              >
                Change Password
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Active Sessions */}
      <Card>
        <CardContent>
          <Typography variant="subtitle2" gutterBottom>
            Active Sessions
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {sessions.map((session, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 2,
                  bgcolor: 'grey.50',
                  borderRadius: 1,
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2">{session.device}</Typography>
                    {session.current && (
                      <Chip label="Current" size="small" color="primary" />
                    )}
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    {session.location} • {session.ipAddress} •{' '}
                    {session.lastActive}
                  </Typography>
                </Box>
                {!session.current && (
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    startIcon={<DeleteIcon />}
                    sx={{ textTransform: 'none' }}
                  >
                    End Session
                  </Button>
                )}
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
