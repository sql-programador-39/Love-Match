import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { UserProvider } from './context/UserProvider'
import { AuthProvider } from './auth/AuthProvider'

import HomePage from './pages/HomePage/HomePage'
import SignInPage from './pages/SignInPage/SignInPage'
import SearchPage from './pages/SearchPage/SearchPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute'

import Pruebas from './components/Pruebas'
import Layout from './Layouts/Layout'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/search',
            element: <SearchPage />,
          },
          {
            path: '/pruebas',
            element: <Pruebas />,
          },
          {
            path: '/profile',
            element: <ProfilePage />,
          },
          {
            path: '/likes',
            element: <h1>likes</h1>,
          },
          {
            path: '/matchs',
            element: <h1>Matchs</h1>
          }
        ]
      }
    ] 
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
)
