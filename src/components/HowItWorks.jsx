import React from 'react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Elige tu tema',
      description: 'Partimos de tu curso, grado, competencia y tiempo real de clase.'
    },
    {
      number: '02',
      title: 'La IA arma la sesión',
      description: 'Generas una planificación clara, editable y alineada al objetivo de aprendizaje.'
    },
    {
      number: '03',
      title: 'Creas material y evaluación',
      description: 'Preparas fichas, ejemplos, actividades, examen y rúbrica en el mismo flujo.'
    },
    {
      number: '04',
      title: 'Lo usas mañana',
      description: 'Sales con recursos listos para aplicar y reutilizar durante la semana.'
    }
  ]

  return (
    <section id="como-funciona" className="section bg-gradient-to-b from-cream-100 to-soft-blue/20">
      <div className="container-custom">
        <p className="text-slate-600 uppercase tracking-widest font-bold mb-4 text-xs">Un flujo simple</p>
        <h2 className="mb-12">De un tema pendiente a una clase lista.</h2>

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
