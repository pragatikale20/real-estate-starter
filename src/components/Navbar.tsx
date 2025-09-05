import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../services/firebase'

export default function Navbar(){
  const { user } = useAuth()
  const nav = useNavigate()
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">EstatePro</Link>
        <nav className="flex items-center gap-4">
          <NavLink to="/" className={({isActive}:any)=> isActive? 'font-semibold' : 'text-gray-600'}>Home</NavLink>
          <NavLink to="/listings" className={({isActive}:any)=> isActive? 'font-semibold' : 'text-gray-600'}>Listings</NavLink>
          {user ? (
            <button className="btn-outline" onClick={async()=>{ await signOut(auth); nav('/login') }}>Logout</button>
          ) : (
            <>
              <NavLink to="/login" className="btn-outline">Login</NavLink>
              <NavLink to="/signup" className="btn-primary">Sign Up</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
