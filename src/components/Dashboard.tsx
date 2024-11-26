import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  Add as AddIcon,
  MoreVert as MoreVertIcon,
  TrendingUp,
  Warning,
} from '@mui/icons-material';
import { DocumentRequestList } from './DocumentRequestList';
import { CompanyList } from './CompanyList';

export const Dashboard = () => {
  const theme = useTheme();

  const overviewCards = [
    { title: 'Active Portfolios', value: '15', change: '+2 this month' },
    { title: 'Pending Requests', value: '8', change: '3 due soon' },
    { title: 'Uploaded Documents', value: '147', change: '+12 this week' },
    { title: 'Upcoming Deadlines', value: '5', change: 'Next: Dec 1' },
  ];

  const portfolioHighlights = [
    {
      name: 'ABC Corporation',
      status: 'On Track',
      documents: 12,
      growth: '+15%',
    },
    {
      name: 'XYZ Tech',
      status: 'Needs Attention',
      documents: 8,
      growth: '-3%',
    },
    {
      name: 'Future Ventures',
      status: 'On Track',
      documents: 15,
      growth: '+8%',
    },
  ];

  const documentRequests = [
    {
      name: 'Q4 Financial Statements',
      date: '2024-01-15',
      status: 'Pending',
      company: 'ABC Corporation',
    },
    {
      name: 'Board Meeting Minutes',
      date: '2024-01-10',
      status: 'Overdue',
      company: 'XYZ Tech',
    },
    {
      name: 'Compliance Report',
      date: '2024-01-20',
      status: 'Submitted',
      company: 'Future Ventures',
    },
  ];

  return (
    <div className="space-y-6">
      {/* 상단 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="총 문서 요청" value="124" />
        <StatCard title="처리 대기" value="45" />
        <StatCard title="처리 완료" value="79" />
        <StatCard title="반려" value="12" />
      </div>

      {/* 문서 요청 목록과 회사 목록 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">최근 문서 요청</h2>
          <DocumentRequestList limit={5} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">등록된 회사</h2>
          <CompanyList limit={5} />
        </div>
      </div>
    </div>
  );
};

// StatCard 컴포넌트
const StatCard: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
};
