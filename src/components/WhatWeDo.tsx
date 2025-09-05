const items = [
  { title: 'Buy & Sell', desc: 'Trusted properties with transparent details.' },
  { title: 'Rentals', desc: 'Flexible, verified listings for every budget.' },
  { title: 'Expert Support', desc: 'We guide you through every step.' },
  { title: 'Secure', desc: 'Safe auth & privacy-first experience.' },
]
export default function WhatWeDo(){
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">What We Do</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((i)=> (
          <div key={i.title} className="card p-5">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
