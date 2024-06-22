import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthLayout } from './layout/authLayout.tsx';
import { MainLayout } from './layout/mainLayout.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "/login",
    element: <AuthLayout></AuthLayout>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
