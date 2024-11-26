import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
} from '@mui/material';
import { useApp } from '../context/AppContext';

interface CompanyListProps {
  limit?: number;
}

export const CompanyList: React.FC<CompanyListProps> = ({ limit }) => {
  const { companies } = useApp();
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          포트폴리오 기업
        </Typography>
        <List>
          {companies.map((company) => (
            <ListItem key={company.id} disablePadding>
              <ListItemButton
                onClick={() => navigate(`/company/${company.id}`)}
              >
                <ListItemText
                  primary={company.name}
                  secondary={`문서 요청: ${company.documentRequests.length}개`}
                />
                <Chip
                  label={company.status === 'active' ? '활성' : '비활성'}
                  color={company.status === 'active' ? 'success' : 'default'}
                  size="small"
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
