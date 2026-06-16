import React from 'react'

export default function Benefits() {
  const benefits = [
    {
      icon: '1️⃣',
      title: 'Librería de prompts',
      description: '15 prompts listos para copiar y pegar en tus contenidos'
    },
    {
      icon: '2️⃣',
      title: 'Kit de marca visual',
      description: 'Logo, paleta y 5 imágenes con tu identidad'
    },
    {
      icon: '3️⃣',
      title: 'Video profesional',
      description: 'Un reel de 45 segundos listo para TikTok y Reels'
    },
    {
      icon: '4️⃣',
      title: 'Calendario de contenido',
      description: '7 publicaciones completas para tu semana'
    }
  ]

  return (
    <section id="beneficios" className="section bg-gradient-to-b from-soft-blue/20 to-cream-100">
      <div className="container-custom">
        <p className="text-slate-600 uppercase tracking-widest font-bold mb-4 text-xs">Te llevas 4 proyectos</p>
        <h2 className="mb-12">No es teoría. Sales con materiales listos para usar.</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-4">
              <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
