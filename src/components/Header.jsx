import React, { useState } from 'react'

export default function Header() {
  const [language, setLanguage] = useState('es')

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-cream-100/95 backdrop-blur-sm z-50 border-b border-cream-200">
      <div className="container-custom flex items-center justify-between py-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-serif font-bold">
            xenni<span className="accent-green">.</span>
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => handleScroll('como-funciona')}
            className="font-medium hover:text-lime-400 transition-colors"
          >
            Cómo funciona
          </button>
          <button
            onClick={() => handleScroll('modulos')}
            className="font-medium hover:text-lime-400 transition-colors"
          >
            Módulos
          </button>
          <button
            onClick={() => handleScroll('beneficios')}
            className="font-medium hover:text-lime-400 transition-colors"
          >
            Beneficios
          </button>
          <button
            onClick={() => handleScroll('faq')}
            className="font-medium hover:text-lime-400 transition-colors"
          >
            FAQ
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <span className="font-medium cursor-pointer">ES</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-400 cursor-pointer hover:text-slate-800">EN</span>
          </div>
        </div>
      </div>
    </header>
  )
}
