export default function Hero(){
  return (
    <section className="relative">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Find your next home with confidence</h1>
          <p className="mt-4 text-gray-600">Browse verified listings for sale and rent, with real-time updates.</p>
          <a href="#featured" className="btn-primary mt-6 inline-block">Explore Properties</a>
        </div>
        <img alt="hero" className="w-full rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop" loading="lazy"/>
      </div>
    </section>
  )
}
