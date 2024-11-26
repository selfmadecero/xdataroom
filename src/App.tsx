import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { PortfoliosPage } from './components/PortfoliosPage';
import { AppProvider } from './context/AppContext';
import { DocumentsPage } from './components/DocumentsPage';
import { SettingsPage } from './components/SettingsPage';
import { LandingPage } from './components/landing/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portfolio" element={<PortfoliosPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
