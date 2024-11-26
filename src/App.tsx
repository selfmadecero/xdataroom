import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Layout } from './components/Layout';
import { CompanyDetail } from './components/CompanyDetail';
import { DocumentDetail } from './components/DocumentDetail';
import { AppProvider } from './context/AppContext';
import { LandingLayout } from './components/landing/LandingLayout';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="company/:id" element={<CompanyDetail />} />
            <Route path="document/:id" element={<DocumentDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
