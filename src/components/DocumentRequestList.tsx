import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';

interface DocumentRequestListProps {
  limit?: number;
}

export const DocumentRequestList: React.FC<DocumentRequestListProps> = ({
  limit,
}) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        문서 요청 목록
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="사업자등록증" secondary="요청일: 2024-03-20" />
        </ListItem>
        <ListItem>
          <ListItemText primary="재무제표" secondary="요청일: 2024-03-19" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="법인등기부등본"
            secondary="요청일: 2024-03-18"
          />
        </ListItem>
      </List>
    </Paper>
  );
};
