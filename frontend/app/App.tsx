import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ContextProvider from '../src/lib/context/index.context';
import MainRoutes from '../src/routes/index';

import './global.css';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
