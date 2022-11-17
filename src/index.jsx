import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './app/App.jsx';
import App from './app';
import './app/style.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
