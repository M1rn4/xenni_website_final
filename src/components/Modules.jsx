import React from 'react'

export default function Modules() {
  const modules = [
    {
      week: '01',
      title: 'IA para planificar clases',
      description: 'ChatGPT, Claude, Gemini · Sesiones por competencia · Adaptación por grado y nivel',
      status: '1.25 h'
    },
    {
      week: '02',
      title: 'Materiales y fichas',
      description: 'Textos, ejemplos, guías, láminas y actividades listas para llevar al aula',
      status: '1.25 h'
    },
    {
      week: '03',
      title: 'Evaluaciones y rúbricas',
      description: 'Pruebas, listas de cotejo, criterios de logro y retroalimentación para estudiantes',
      status: '1.25 h'
    },
    {
      week: '04',
      title: 'Flujo semanal del docente',
      description: 'De tema a clase lista · Banco reutilizable de prompts · Rutina para ahorrar horas',
      status: '1.25 h'
    }
  ]

  return (
    <section id="modulos" className="section">
      <div className="container-custom">
        <p className="text-slate-600 uppercase tracking-widest font-bold mb-4 text-xs">Qué vas a dominar</p>
        <h2 className="mb-12">4 módulos prácticos · 5 horas en vivo.</h2>

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
