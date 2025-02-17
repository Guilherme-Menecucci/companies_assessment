import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../app/pages/home';

import { PageLayout } from '../layouts';

const MainRoutes: React.FC = () => (
  <PageLayout>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </PageLayout>
);

export default MainRoutes;
