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
              Más que aprendizaje: entrega de contenido listo para publicar.
            </h2>
            <p className="mb-8 max-w-xl text-lg text-slate-700 leading-relaxed">
              Al finalizar el programa tendrás un paquete completo para acelerar tu presencia digital: posts, video, marca visual y prompts preparados para tu próxima semana.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-5xl font-bold text-slate-900">7</p>
                <p className="mt-3 text-sm text-slate-600">Posts completos para tu semana</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-5xl font-bold text-slate-900">40+</p>
                <p className="mt-3 text-sm text-slate-600">Archivos listos para usar inmediatamente</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-5xl font-bold text-slate-900">1</p>
                <p className="mt-3 text-sm text-slate-600">Reel de 45 segundos listo para publicar</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-5xl font-bold text-slate-900">1</p>
                <p className="mt-3 text-sm text-slate-600">Kit de marca visual con logo, paleta e imágenes</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
            <div className="mb-6 rounded-3xl bg-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Transformación en 10 horas</p>
              <h3 className="mt-4 text-3xl font-bold">Diseño, copy y video sin perder tiempo</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 text-sm font-bold text-white">✓</span>
                <span>Materiales creados con IA y aplicables a tu marca desde la primera clase.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 text-sm font-bold text-white">✓</span>
                <span>Resultados que se ven y se pueden publicar: más visibilidad en redes y menos trabajo manual.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 text-sm font-bold text-white">✓</span>
                <span>Modelo probado para cerrar lanzamientos con contenidos de alto impacto.</span>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/51975963255?text=Hola%20quiero%20conocer%20más%20sobre%20los%20resultados%20del%20curso"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full justify-center rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-lime-400 sm:w-auto"
              >
                Quiero este paquete ya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
