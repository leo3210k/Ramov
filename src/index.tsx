import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/App';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
    <Analytics/>
    <SpeedInsights/>
  </React.StrictMode>
);