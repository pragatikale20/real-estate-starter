import { FormEvent, useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../services/firebase'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string|null>(null)
  const nav = useNavigate()

  async function onSubmit(e: FormEvent){
    e.preventDefault()
    if (password !== confirm) return setError('Passwords do not match')
    setLoading(true); setError(null)
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(cred.user, { displayName: name })
      nav('/login')
    } catch (e:any){ setError(e.message) } finally { setLoading(false) }
  }

  return (
    <section className="container py-16 max-w-md">
      <h1 className="text-3xl font-bold mb-6">Create account</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input className="input" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} required />
        <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
        <input className="input" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
        <input className="input" placeholder="Confirm password" value={confirm} onChange={e=>setConfirm(e.target.value)} type="password" required />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button className="btn-primary w-full" disabled={loading}>{loading? 'Creating…' : 'Sign up'}</button>
      </form>
      <p className="text-sm text-gray-600 mt-4">Already have an account? <Link to="/login" className="underline">Login</Link></p>
    </section>
  )
}
