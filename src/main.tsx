import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouteConfig } from './routes/route.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteConfig></RouteConfig>
    </BrowserRouter>
  </React.StrictMode>,
)
