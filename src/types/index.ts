export interface Company {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  documentRequests: DocumentRequest[];
}

export interface DocumentRequest {
  id: string;
  type: 'financial' | 'operational' | 'legal';
  title: string;
  status: 'pending' | 'submitted' | 'reviewed';
  dueDate: string;
  submittedDate?: string;
}

export interface User {
  id: string;
  name: string;
  role: 'investor' | 'company';
  companyId?: string;
}
