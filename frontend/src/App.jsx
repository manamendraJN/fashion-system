import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WardrobeProvider } from './context/WardrobeContext';
import { WardrobePage }  from './pages/AccWardrobe';
import { DiscoverPage }  from './pages/AccDiscover';
import { AnalyticsPage } from './pages/AccAnalytics';
import { UploadPage } from './pages/Upload';
import { ChatPage } from './pages/Chat';
import { AnalyticsPage as WardrobeAnalyticsPage } from './pages/Analytics';
import { MeasurementsPage } from './pages/Measurements';
import SizeMatching from './pages/SizeMatching';
import { AdminPage } from './pages/AdminPage';

function App() {
  return (
    <WardrobeProvider>
      <Router>
        <Routes>
          <Route path="/"                  element={<DiscoverPage />} />
          <Route path="/wardrobe"          element={<WardrobePage />} />
          <Route path="/analytics"         element={<AnalyticsPage />} />
          <Route path="/upload"            element={<UploadPage />} />
          <Route path="/chat"              element={<ChatPage />} />
          <Route path="/wardrobe-analytics" element={<WardrobeAnalyticsPage />} />
          <Route path="/measurements"      element={<MeasurementsPage />} />
          <Route path="/size-matching"     element={<SizeMatching />} />
          <Route path="/admin"             element={<AdminPage />} />
        </Routes>
      </Router>
    </WardrobeProvider>
  );
}

export default App;
