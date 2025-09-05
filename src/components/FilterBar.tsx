export default function FilterBar({ filterFor, setFilterFor, query, setQuery }:{
  filterFor: 'all' | 'sale' | 'rent'
  setFilterFor: (v:'all'|'sale'|'rent')=>void
  query: string
  setQuery: (v:string)=>void
}){
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mb-6">
      <div className="flex gap-2">
        {(['all','sale','rent'] as const).map(v => (
          <button key={v} onClick={()=>setFilterFor(v)} className={`btn ${filterFor===v? 'btn-primary' : 'btn-outline'}`}>{v.toUpperCase()}</button>
        ))}
      </div>
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search city, state, country" className="input" />
    </div>
  )
}
