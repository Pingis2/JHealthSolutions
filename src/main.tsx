import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styling/main.scss';
import App from './App.tsx'

import './i18n.ts';
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </StrictMode>,
)
