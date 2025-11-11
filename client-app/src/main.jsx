import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Import CssBaseline from MUI
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Add CssBaseline here. It resets browser styles. */}
    <CssBaseline />
    <App />
  </React.StrictMode>,
);