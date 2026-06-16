import React from 'react'

export default function Features() {
  const features = [
    {
      icon: '�',
      title: 'Prompts listos',
      description: '15 prompts reutilizables para escribir posts, emails y anuncios con IA'
    },
    {
      icon: '🖼️',
      title: 'Kit visual',
      description: 'Logo, paleta y 5 imágenes con tu identidad de marca'
    },
    {
      icon: '🎬',
      title: 'Video profesional',
      description: 'Un reel de 45 segundos listo para TikTok y Reels'
    },
    {
      icon: '📅',
      title: 'Calendario de contenido',
      description: '7 publicaciones completas para toda tu semana'
    }
  ]

  return (
    <section className="section bg-gradient-to-b from-cream-100 to-soft-blue/20">
      <div className="container-custom">
        <p className="text-slate-600 uppercase tracking-widest font-bold mb-4 text-xs">Qué crearás</p>
        <p className="text-slate-700 mb-12 max-w-xl">
          Convierte la IA en resultados reales: contenido listo para publicar con un flujo práctico y enfocado en tu marca.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="card">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
