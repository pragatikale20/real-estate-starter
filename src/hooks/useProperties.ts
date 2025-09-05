import { useEffect, useMemo, useState } from 'react'
import { fetchProperties } from '../services/api'
import { Property } from '../types'

export function useProperties(filterFor: 'all'|'sale'|'rent', query: string){
  const [data, setData] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string|null>(null)

  useEffect(()=>{
    let ok = true
    setLoading(true)
    fetchProperties()
      .then(list => { if(ok) setData(list) })
      .catch(e => { if(ok) setError(e.message) })
      .finally(() => { if(ok) setLoading(false) })
    return () => { ok = false }
  },[])

  const filtered = useMemo(()=> {
    const q = query.trim().toLowerCase()
    return data.filter(p => {
      const matchesFor = filterFor === 'all' || p.for === filterFor
      const matchesQ = !q || [p.name, p.city, p.state, p.country].some(x => x?.toLowerCase().includes(q))
      return matchesFor && matchesQ
    })
  },[data, filterFor, query])

  return { data: filtered, loading, error }
}
