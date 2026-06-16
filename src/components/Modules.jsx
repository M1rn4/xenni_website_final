import React from 'react'

export default function Modules() {
  const modules = [
    {
      week: '01',
      title: 'Prompts',
      description: 'ChatGPT, Claude, Gemini · Técnicas profesionales · 15 prompts reutilizables',
      status: '2.5 h'
    },
    {
      week: '02',
      title: 'Imágenes',
      description: 'Leonardo AI, DALL-E · Estilo y composición · Tu kit de marca',
      status: '2.5 h'
    },
    {
      week: '03',
      title: 'Videos',
      description: 'Runway, Pika, Veo · Guion y voz con IA · Reel de 45 seg',
      status: '3 h'
    },
    {
      week: '04',
      title: 'Integración',
      description: 'Flujo completo · 7 posts en 2 horas · Casos reales para tu industria',
      status: '2 h'
    }
  ]

  return (
    <section id="modulos" className="section">
      <div className="container-custom">
        <p className="text-slate-600 uppercase tracking-widest font-bold mb-4 text-xs">Qué vas a dominar</p>
        <h2 className="mb-12">4 módulos prácticos · 10 horas en vivo</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module, idx) => (
            <div key={idx} className="card border-l-4 border-lime-400">
              <div className="flex justify-between items-start mb-3">
                <span className="text-4xl font-serif font-bold text-slate-200">{module.week}</span>
                <span className="text-xs font-bold px-2 py-1 bg-cream-200 text-slate-600 rounded">
                  {module.status}
                </span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{module.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
