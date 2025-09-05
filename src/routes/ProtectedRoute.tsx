import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }: { children: React.ReactNode }){
  const { user, loading } = useAuth()
  const loc = useLocation()
  if(loading) return <div className="container py-20">Loading…</div>
  if(!user) return <Navigate to="/login" state={{ from: loc }} replace />
  return <>{children}</>
}
