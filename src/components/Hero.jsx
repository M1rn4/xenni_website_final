import React from 'react'

export default function Hero() {
  const individualText = 'Hola quiero reservar mi cupo para el curso de IA para docentes'
  const schoolText = 'Hola quiero llevar el taller de IA para docentes a mi colegio'

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-6">
              Enseña con <span className="accent-green">IA</span>.<br />
              Ahorra horas cada semana.
            </h1>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed italic">
              IA práctica para docentes de aula: planifica sesiones, crea materiales, diseña evaluaciones y llega a clase con recursos listos para usar.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/51975963255?text=${encodeURIComponent(individualText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-center"
                >
                  Reservar cupo
                </a>
                <a
                  href={`https://wa.me/51975963255?text=${encodeURIComponent(schoolText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline text-center"
                >
                  Para mi colegio
                </a>
              </div>
              <p className="text-sm text-slate-600">
                5 horas en vivo · S/150 por persona · certificado
              </p>
            </div>
          </div>

          <div className="card bg-white/80 backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">IA para docentes de aula</span>
              <span className="status-badge">Lanzamiento</span>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lime-400 font-bold">📚</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Sesiones de clase</p>
                  <p className="text-sm text-slate-600">Planificadas con IA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lime-400 font-bold">📝</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Evaluaciones</p>
                  <p className="text-sm text-slate-600">Exámenes y rúbricas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lime-400 font-bold">🧩</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Actividades</p>
                  <p className="text-sm text-slate-600">Por tema, grado y nivel</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lime-400 font-bold">🎨</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Material visual</p>
                  <p className="text-sm text-slate-600">Láminas, fichas y recursos</p>
                </div>
              </div>

              <div className="pt-4 border-t border-cream-200 flex items-center gap-2 text-slate-700">
                <span>✓</span>
                <p className="text-sm"><strong>Clase lista para mañana:</strong> sesión, material y evaluación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
