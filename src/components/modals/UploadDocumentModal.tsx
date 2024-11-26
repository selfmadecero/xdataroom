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
  ListItemIcon,
  ListItemText,
  LinearProgress,
} from '@mui/material';
import {
  Close as CloseIcon,
  Upload as UploadIcon,
  InsertDriveFile as FileIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

interface UploadDocumentModalProps {
  open: boolean;
  onClose: () => void;
}

export const UploadDocumentModal: React.FC<UploadDocumentModalProps> = ({
  open,
  onClose,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{
    [key: string]: number;
  }>({});

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setSelectedFiles((prev) => [...prev, ...newFiles]);

      // 각 파일에 대한 초기 진행률 설정
      newFiles.forEach((file) => {
        setUploadProgress((prev) => ({
          ...prev,
          [file.name]: 0,
        }));
      });

      // 업로드 진행률 시뮬레이션
      newFiles.forEach((file) => {
        simulateUploadProgress(file.name);
      });
    }
  };

  const simulateUploadProgress = (fileName: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress > 100) {
        progress = 100;
        clearInterval(interval);
      }
      setUploadProgress((prev) => ({
        ...prev,
        [fileName]: Math.round(progress),
      }));
    }, 500);
  };

  const handleRemoveFile = (fileName: string) => {
    setSelectedFiles((prev) => prev.filter((file) => file.name !== fileName));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
  };

  const getFileSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
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
          <Typography variant="h6">Upload Documents</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Portfolio Selection */}
          <FormControl fullWidth>
            <InputLabel>Portfolio Company</InputLabel>
            <Select label="Portfolio Company">
              <MenuItem value="techvision">TechVision Labs</MenuItem>
              <MenuItem value="growth">Growth Dynamics</MenuItem>
              <MenuItem value="innovate">InnovatePro Solutions</MenuItem>
            </Select>
          </FormControl>

          {/* Document Category */}
          <FormControl fullWidth>
            <InputLabel>Document Category</InputLabel>
            <Select label="Document Category">
              <MenuItem value="financial">Financial Documents</MenuItem>
              <MenuItem value="legal">Legal Documents</MenuItem>
              <MenuItem value="operational">Operational Documents</MenuItem>
              <MenuItem value="compliance">Compliance Documents</MenuItem>
            </Select>
          </FormControl>

          {/* Upload Area */}
          <Box
            sx={{
              border: '2px dashed',
              borderColor: 'grey.300',
              borderRadius: 2,
              p: 3,
              textAlign: 'center',
              bgcolor: 'grey.50',
              cursor: 'pointer',
            }}
            onClick={() => document.getElementById('file-input')?.click()}
          >
            <input
              type="file"
              id="file-input"
              multiple
              style={{ display: 'none' }}
              onChange={handleFileSelect}
            />
            <UploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="subtitle1" gutterBottom>
              Drag and drop files here or click to browse
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Supported formats: PDF, DOC, DOCX, XLS, XLSX (Max 50MB)
            </Typography>
          </Box>

          {/* File List */}
          {selectedFiles.length > 0 && (
            <List>
              {selectedFiles.map((file) => (
                <ListItem
                  key={file.name}
                  sx={{
                    bgcolor: 'grey.50',
                    borderRadius: 1,
                    mb: 1,
                  }}
                >
                  <ListItemIcon>
                    <FileIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={file.name}
                    secondary={
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Typography variant="caption">
                          {getFileSize(file.size)}
                        </Typography>
                        {uploadProgress[file.name] === 100 && (
                          <Chip
                            label="Uploaded"
                            size="small"
                            color="success"
                            icon={<CheckCircleIcon />}
                          />
                        )}
                      </Box>
                    }
                  />
                  <Box sx={{ width: '30%', mr: 2 }}>
                    <LinearProgress
                      variant="determinate"
                      value={uploadProgress[file.name] || 0}
                      sx={{ height: 6, borderRadius: 3 }}
                    />
                  </Box>
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveFile(file.name)}
                    sx={{ color: 'error.main' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Additional Notes */}
          <TextField
            label="Additional Notes"
            multiline
            rows={3}
            fullWidth
            placeholder="Add any notes or comments about these documents..."
          />
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
          startIcon={<UploadIcon />}
          sx={{ textTransform: 'none' }}
          disabled={selectedFiles.length === 0}
        >
          Upload Documents
        </Button>
      </DialogActions>
    </Dialog>
  );
};
