import PropertyCard from './PropertyCard'
import { Property } from '../types'
export default function PropertyGrid({ items }: { items: Property[] }){
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map(p => <PropertyCard key={p.id} p={p} />)}
    </div>
  )
}
