import React from 'react'
import mirnaImage from '../assets/MIRNA2.jpg'

export default function Instructors() {
  const instructor = {
    name: 'Mirna Ampuero',
    role: 'Especialista en IA aplicada a educación',
    bio: 'Docentes capacitados en el Colegio Politécnico Villa Los Reyes, Ventanilla. Metodología práctica con demo en vivo y casos reales de aula.',
  }

  return (
    <section className="section">
      <div className="container-custom">
        <p className="text-slate-600 uppercase tracking-widest font-bold mb-4 text-xs">Tu profesora</p>
        <h2 className="mb-12">Aprende IA con casos reales de aula.</h2>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl">
            <img
              src={mirnaImage}
              alt="Mirna Ampuero"
              className="w-full min-h-[28rem] object-cover"
            />
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950/95 p-8 shadow-xl text-white">
            <span className="inline-flex rounded-full bg-lime-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-lime-300">
              Lanzamiento 11 de julio
            </span>
            <h3 className="mt-6 text-3xl font-bold leading-tight">Tu plan de 5 horas para trabajar menos fuera del aula</h3>

            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Inicio</p>
                <p className="mt-2 text-xl font-semibold text-white">11 de julio</p>
                <p className="mt-2 text-sm text-slate-400">Curso intensivo en vivo</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-5 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Horario</p>
                  <p className="mt-2 text-lg font-semibold text-white">Horario por confirmar</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Duración</p>
                  <p className="mt-2 text-lg font-semibold text-white">5 h total</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-lime-500/10 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-lime-300">Inversión</p>
                <p className="mt-2 text-3xl font-bold text-white">S/150 por persona</p>
                <p className="mt-1 text-sm text-slate-300">Cupos limitados · Grupos reducidos</p>
              </div>
            </div>

            <p className="mt-8 text-slate-300 leading-relaxed">
              {instructor.bio} En este curso intensivo recibirás herramientas para planificar, crear material y evaluar con IA sin depender de conocimientos técnicos.
            </p>

            <div className="mt-8">
              <a
                href="https://wa.me/51975963255?text=Hola%20quiero%20reservar%20mi%20cupo%20para%20el%20curso"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full justify-center rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-400 sm:w-auto"
              >
                Reservar mi cupo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
