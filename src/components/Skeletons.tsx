export function CardSkeleton(){
  return <div className="card overflow-hidden">
    <div className="h-40 bg-gray-100 animate-pulse" />
    <div className="p-4 space-y-2">
      <div className="h-4 bg-gray-100 animate-pulse rounded" />
      <div className="h-4 w-2/3 bg-gray-100 animate-pulse rounded" />
    </div>
  </div>
}
