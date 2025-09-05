import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Listings from './pages/Listings'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './routes/ProtectedRoute'

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <NotFound />, children: [
    { index: true, element: <Home /> },
    { path: 'listings', element: (<ProtectedRoute><Listings/></ProtectedRoute>) },
    { path: 'login', element: <Login/> },
    { path: 'signup', element: <Signup/> }
  ] }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
