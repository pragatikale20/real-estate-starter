const BASE = 'https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing'

export async function fetchProperties(){
  const res = await fetch(BASE)
  if(!res.ok) throw new Error('Failed to fetch properties')
  const data = await res.json()
  return data.map((p,i) => ({ ...p, for: i % 2 === 0 ? 'sale' : 'rent' }))
}
