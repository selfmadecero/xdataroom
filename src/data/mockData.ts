import { Company, DocumentRequest, User } from '../types';

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: '테크스타트업 A',
    status: 'active',
    documentRequests: [
      {
        id: 'req1',
        type: 'financial',
        title: '2024년 1분기 재무제표',
        status: 'pending',
        dueDate: '2024-04-15',
      },
      {
        id: 'req2',
        type: 'operational',
        title: '월간 운영보고서',
        status: 'submitted',
        dueDate: '2024-03-31',
        submittedDate: '2024-03-30',
      },
    ],
  },
  {
    id: '2',
    name: '바이오텍 B',
    status: 'active',
    documentRequests: [
      {
        id: 'req3',
        type: 'legal',
        title: '특허 등록 서류',
        status: 'reviewed',
        dueDate: '2024-03-20',
        submittedDate: '2024-03-15',
      },
    ],
  },
  {
    id: '3',
    name: '이커머스 C',
    status: 'inactive',
    documentRequests: [
      {
        id: 'req4',
        type: 'financial',
        title: '2023년 4분기 재무제표',
        status: 'submitted',
        dueDate: '2024-01-31',
        submittedDate: '2024-01-30',
      },
      {
        id: 'req5',
        type: 'operational',
        title: '물류 현황 보고서',
        status: 'pending',
        dueDate: '2024-04-10',
      },
    ],
  },
];

export const mockUsers: User[] = [
  {
    id: 'user1',
    name: '김투자',
    role: 'investor',
  },
  {
    id: 'user2',
    name: '이대표',
    role: 'company',
    companyId: '1',
  },
  {
    id: 'user3',
    name: '박대표',
    role: 'company',
    companyId: '2',
  },
];
