import { FormEvent, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebase'
import { useLocation, useNavigate, Link } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string|null>(null)
  const nav = useNavigate()
  const loc = useLocation() as any

  async function onSubmit(e: FormEvent){
    e.preventDefault()
    setLoading(true); setError(null)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      nav(loc.state?.from?.pathname || '/', { replace: true })
    } catch (e:any){
      setError(e.message)
    } finally { setLoading(false) }
  }

  return (
    <section className="container py-16 max-w-md">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
        <input className="input" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button className="btn-primary w-full" disabled={loading}>{loading? 'Signing in…' : 'Login'}</button>
      </form>
      <p className="text-sm text-gray-600 mt-4">No account? <Link to="/signup" className="underline">Create one</Link></p>
    </section>
  )
}
