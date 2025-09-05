import { useState } from 'react'
import { useProperties } from '../hooks/useProperties'
import FilterBar from '../components/FilterBar'
import PropertyGrid from '../components/PropertyGrid'
import { CardSkeleton } from '../components/Skeletons'

export default function Listings(){
  const [filterFor, setFilterFor] = useState<'all'|'sale'|'rent'>('all')
  const [query, setQuery] = useState('')
  const { data, loading, error } = useProperties(filterFor, query)

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">All Properties</h1>
      <FilterBar filterFor={filterFor} setFilterFor={setFilterFor} query={query} setQuery={setQuery}/>
      {error && <p className="text-red-600">{error}</p>}
      {loading ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({length:9}).map((_,i)=>(<CardSkeleton key={i}/>))}
        </div>
      ) : (
        <PropertyGrid items={data} />
      )}
    </section>
  )
}
