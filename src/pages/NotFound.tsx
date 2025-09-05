import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <section className="container py-20 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-gray-600 mt-2">Page not found</p>
      <Link to="/" className="btn-primary mt-6 inline-block">Go Home</Link>
    </section>
  )
}
