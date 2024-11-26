import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  TextField,
  Button,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Paper,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
  Business as BusinessIcon,
  Group as GroupIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

export const SettingsPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
          Settings
        </Typography>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab icon={<PersonIcon sx={{ mr: 1 }} />} label="Account" />
          <Tab icon={<GroupIcon sx={{ mr: 1 }} />} label="Team" />
          <Tab icon={<BusinessIcon sx={{ mr: 1 }} />} label="Portfolio" />
          <Tab
            icon={<NotificationsIcon sx={{ mr: 1 }} />}
            label="Notifications"
          />
          <Tab icon={<SecurityIcon sx={{ mr: 1 }} />} label="Security" />
        </Tabs>
      </Box>

      {/* Account Settings */}
      <TabPanel value={tabValue} index={0}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3 }}>
              General Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Organization Name"
                defaultValue="ABC Investment Partners"
                fullWidth
              />
              <TextField
                label="Admin Email"
                defaultValue="admin@abcinvest.com"
                fullWidth
              />
              <TextField
                label="Phone Number"
                defaultValue="+1 (555) 123-4567"
                fullWidth
              />
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Billing Information
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Current Plan
              </Typography>
              <Typography variant="h5">Pro Plan - $99/month</Typography>
            </Box>
            <Button variant="outlined" sx={{ mr: 2, textTransform: 'none' }}>
              Update Payment Method
            </Button>
            <Button variant="outlined" sx={{ textTransform: 'none' }}>
              View Invoices
            </Button>
          </CardContent>
        </Card>
      </TabPanel>

      {/* Team Management */}
      <TabPanel value={tabValue} index={1}>
        <Card>
          <CardContent>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}
            >
              <Typography variant="h6">Team Members</Typography>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{ textTransform: 'none' }}
              >
                Add Member
              </Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {teamMembers.map((member) => (
                    <TableRow key={member.email} hover>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar sx={{ mr: 2 }}>{member.name[0]}</Avatar>
                          {member.name}
                        </Box>
                      </TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>
                        <Chip
                          label={member.status}
                          color={
                            member.status === 'Active' ? 'success' : 'warning'
                          }
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="right">
                        <IconButton size="small" sx={{ mr: 1 }}>
                          <EditIcon />
                        </IconButton>
                        <IconButton size="small">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </TabPanel>

      {/* Portfolio Settings */}
      <TabPanel value={tabValue} index={2}>
        {/* Portfolio settings content */}
      </TabPanel>

      {/* Notifications */}
      <TabPanel value={tabValue} index={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Email Preferences
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography variant="subtitle2">
                    Document Request Notifications
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Receive email when new document is requested
                  </Typography>
                </Box>
                <Switch defaultChecked />
              </Box>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography variant="subtitle2">
                    Weekly Report Summary
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Receive weekly portfolio performance report
                  </Typography>
                </Box>
                <Switch defaultChecked />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </TabPanel>

      {/* Security */}
      <TabPanel value={tabValue} index={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Password & Authentication
            </Typography>
            <Button variant="outlined" sx={{ mb: 3, textTransform: 'none' }}>
              Change Password
            </Button>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="subtitle2">
                  Two-Factor Authentication
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Add an extra layer of security to your account
                </Typography>
              </Box>
              <Switch />
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Recent Activity
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>IP Address</TableCell>
                    <TableCell>Device</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {activityLogs.map((log) => (
                    <TableRow key={log.id} hover>
                      <TableCell>{log.date}</TableCell>
                      <TableCell>{log.time}</TableCell>
                      <TableCell>{log.ip}</TableCell>
                      <TableCell>{log.device}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </TabPanel>
    </Box>
  );
};

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Admin',
    email: 'john@example.com',
    status: 'Active',
  },
  {
    name: 'Jane Smith',
    role: 'Member',
    email: 'jane@example.com',
    status: 'Pending',
  },
];

const activityLogs = [
  {
    id: 1,
    date: 'Nov 25, 2024',
    time: '09:15 AM',
    ip: '192.168.1.100',
    device: 'Chrome (Windows)',
  },
  {
    id: 2,
    date: 'Nov 24, 2024',
    time: '08:45 PM',
    ip: '192.168.1.101',
    device: 'Safari (MacOS)',
  },
];
