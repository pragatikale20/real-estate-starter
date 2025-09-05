import React from 'react'
export default function Footer(){
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container py-8 text-sm text-gray-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} EstatePro</p>
        <a href="#" className="hover:underline">Privacy</a>
      </div>
    </footer>
  )
}
