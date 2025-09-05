import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import { useProperties } from '../hooks/useProperties'
import PropertyGrid from '../components/PropertyGrid'
import { CardSkeleton } from '../components/Skeletons'

export default function Home(){
  const { data, loading, error } = useProperties('all','')
  return (
    <>
      <Hero />
      <WhatWeDo />
      <section id="featured" className="container py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Properties</h2>
        {error && <p className="text-red-600">{error}</p>}
        {loading ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({length:6}).map((_,i)=>(<CardSkeleton key={i}/>))}
          </div>
        ) : (
          <PropertyGrid items={data.slice(0,6)} />
        )}
      </section>
      <section className="container py-12">
        <div className="card p-6 text-center">
          <h3 className="text-xl font-semibold">Subscribe to our newsletter</h3>
          <p className="text-gray-600 mt-2">Get market insights and latest listings.</p>
          <form className="mt-4 flex gap-2 justify-center">
            <input className="input max-w-sm" placeholder="you@example.com"/>
            <button className="btn-primary" type="button">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}
