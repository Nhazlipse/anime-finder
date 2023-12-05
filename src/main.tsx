import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import SearchPage from './pages/searchPage';
import DetailsPage from './pages/detailsPage';
import NotFoundPage from './pages/notFound';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/anime/:animeId" element={<DetailsPage />} />


          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </React.StrictMode>,
  );

} else {
  console.error('Failed to find the root element');
}

