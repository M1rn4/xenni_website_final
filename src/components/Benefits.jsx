import React from 'react'

export default function Benefits() {
  const benefits = [
    {
      icon: '1️⃣',
      title: 'Planificación más rápida',
      description: 'Prompts para convertir un tema en sesión, propósito, actividades y cierre'
    },
    {
      icon: '2️⃣',
      title: 'Material por nivel',
      description: 'Recursos adaptados para inicial, primaria y secundaria sin empezar de cero'
    },
    {
      icon: '3️⃣',
      title: 'Evaluación asistida',
      description: 'Rúbricas, listas de cotejo y retroalimentación clara para tus estudiantes'
    },
    {
      icon: '4️⃣',
      title: 'Certificado verificable',
      description: 'Constancia para respaldar tu capacitación y fortalecer tu trayectoria docente'
    }
  ]

  return (
    <section id="beneficios" className="section bg-gradient-to-b from-soft-blue/20 to-cream-100">
      <div className="container-custom">
        <p className="text-slate-600 uppercase tracking-widest font-bold mb-4 text-xs">Te llevas 4 avances</p>
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
