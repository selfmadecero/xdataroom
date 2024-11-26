import React, { createContext, useContext, useState } from 'react';
import { mockCompanies, mockUsers } from '../data/mockData';
import { Company, User } from '../types';

interface AppContextType {
  companies: Company[];
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [companies] = useState(mockCompanies);
  const [currentUser, setCurrentUser] = useState<User | null>(mockUsers[0]);

  return (
    <AppContext.Provider value={{ companies, currentUser, setCurrentUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
