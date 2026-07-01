import React from 'react'

export default function Results() {
  return (
    <section className="section bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),_transparent_45%),linear-gradient(to_b,_#f8fafc,_#e2e8f0)]">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-3 py-1 text-sm font-semibold text-lime-700">
              RESULTADOS REALES</span>
            <h2 className="mt-6 mb-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900">
              Más que aprendizaje: materiales listos para tu aula.
            </h2>
            <p className="mb-8 max-w-xl text-lg text-slate-700 leading-relaxed">
              Al finalizar el programa tendrás un paquete docente para planificar menos desde cero y llegar con sesiones, recursos y evaluaciones aplicables.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-5xl font-bold text-slate-900">4</p>
                <p className="mt-3 text-sm text-slate-600">Sesiones modelo listas para adaptar</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-5xl font-bold text-slate-900">20+</p>
                <p className="mt-3 text-sm text-slate-600">Prompts docentes reutilizables</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-5xl font-bold text-slate-900">1</p>
                <p className="mt-3 text-sm text-slate-600">Banco de actividades por grado</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-5xl font-bold text-slate-900">1</p>
                <p className="mt-3 text-sm text-slate-600">Kit de evaluaciones y rúbricas</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
            <div className="mb-6 rounded-3xl bg-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Certificado docente</p>
              <h3 className="mt-4 text-3xl font-bold">Suma a tu carrera pública magisterial</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 text-sm font-bold text-white">✓</span>
                <span>Certificado verificable por horas de capacitación y participación en vivo.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 text-sm font-bold text-white">✓</span>
                <span>Enfocado en evidencias concretas: sesiones, materiales, evaluaciones y rúbricas.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 text-sm font-bold text-white">✓</span>
                <span>Diseñado para docentes estatales y privados que necesitan aplicar IA sin complicarse.</span>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/51975963255?text=Hola%20quiero%20saber%20si%20el%20certificado%20sirve%20para%20mi%20escala%20magisterial"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full justify-center rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-lime-400 sm:w-auto"
              >
                Consultar por certificado
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
