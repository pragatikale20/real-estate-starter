export type Property = {
  id: string
  createdAt: string
  name: string
  buildingNumber: string
  cardinalDirection: string
  city: string
  country: string
  countryCode: string
  latitude: number
  longitude: number
  state: string
  timeZone: string
  image: string
  ownerName: string
  contactNumber: string
  for?: 'sale' | 'rent'
}
