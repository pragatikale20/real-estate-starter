import { Property } from '../types'
export default function PropertyCard({ p }: { p: Property }){
  return (
    <article className="card overflow-hidden">
      <img src={p.image} alt={p.name} loading="lazy" className="h-48 w-full object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold line-clamp-1">{p.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-1">{p.city}, {p.state}, {p.country}</p>
        <p className="mt-2 inline-block text-xs rounded-full bg-gray-900 text-white px-2 py-1">{p.for?.toUpperCase()}</p>
      </div>
    </article>
  )
}
