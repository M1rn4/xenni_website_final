import React from 'react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Idea',
      description: 'Definimos tu objetivo y la propuesta de contenido que necesitas.'
    },
    {
      number: '02',
      title: 'Prompt',
      description: 'La IA escribe tu copy con prompts profesionales y efectivos.'
    },
    {
      number: '03',
      title: 'Imagen',
      description: 'Generamos visuales atractivos al instante para tu marca.'
    },
    {
      number: '04',
      title: 'Video',
      description: 'Creamos un video listo para publicar en formato Reel.'
    }
  ]

  return (
    <section id="como-funciona" className="section bg-gradient-to-b from-cream-100 to-soft-blue/20">
      <div className="container-custom">
        <p className="text-slate-600 uppercase tracking-widest font-bold mb-4 text-xs">Un flujo simple</p>
        <h2 className="mb-12">Resultados reales en cuatro pasos.</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="mb-6">
                <div className="text-5xl font-serif font-bold text-slate-100 leading-none">{step.number}</div>
              </div>
              <h3 className="font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 text-slate-300 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
