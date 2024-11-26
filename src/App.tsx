import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { PortfoliosPage } from './components/PortfoliosPage';
import { AppProvider } from './context/AppContext';

// 임시 랜딩 페이지
const LandingPage = () => (
  <div style={{ padding: 20 }}>
    <h1>Welcome to xDataRoom</h1>
    <a href="/dashboard">Go to Dashboard</a>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portfolio" element={<PortfoliosPage />} />
            <Route path="/documents" element={<div>Documents Page</div>} />
            <Route path="/reports" element={<div>Reports Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
