import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../services/firebase'

interface AuthCtx { user: User | null; loading: boolean }
const Context = createContext<AuthCtx>({ user: null, loading: true })

export function AuthProvider({ children }: { children: React.ReactNode }){
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u)
      setLoading(false)
      if(u) localStorage.setItem('uid', u.uid)
      else localStorage.removeItem('uid')
    })
    return () => unsub()
  },[])

  return <Context.Provider value={{ user, loading }}>{children}</Context.Provider>
}

export const useAuth = () => useContext(Context)
