import React from 'react'

export default function Features() {
  const features = [
    {
      icon: '📚',
      title: 'Sesiones de clase',
      description: 'Planificaciones completas por competencia, tema, grado y tiempo disponible'
    },
    {
      icon: '📝',
      title: 'Exámenes y rúbricas',
      description: 'Evaluaciones, listas de cotejo y criterios de retroalimentación generados con IA'
    },
    {
      icon: '🎨',
      title: 'Material visual',
      description: 'Fichas, láminas, organizadores y recursos para explicar tus temas en clase'
    },
    {
      icon: '🧩',
      title: 'Banco de actividades',
      description: 'Dinámicas y ejercicios adaptados para inicial, primaria y secundaria'
    }
  ]

  return (
    <section className="section bg-gradient-to-b from-cream-100 to-soft-blue/20">
      <div className="container-custom">
        <p className="text-slate-600 uppercase tracking-widest font-bold mb-4 text-xs">Qué crearás</p>
        <p className="text-slate-700 mb-12 max-w-xl">
          Convierte la IA en una asistente de aula: materiales concretos para planificar, enseñar, evaluar y ahorrar tiempo cada semana.
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
