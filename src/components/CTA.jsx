import React from 'react'

export default function CTA() {
  const individualText = 'Hola quiero inscribirme al curso de IA para docentes'
  const schoolText = 'Hola quiero cotizar el taller de IA para docentes para mi colegio'

  return (
    <section className="section bg-gradient-to-b from-cream-100 to-slate-800">
      <div className="container-custom text-center">
        <h2 className="text-white mb-6">
          5 horas para recuperar tiempo y llevar IA a tu aula.
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Inscríbete como docente o solicita una propuesta para capacitar a toda la plana docente de tu colegio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`https://wa.me/51975963255?text=${encodeURIComponent(individualText)}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center justify-center"
          >
            Inscripción individual
          </a>
          <a
            href={`https://wa.me/51975963255?text=${encodeURIComponent(schoolText)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-slate-900"
          >
            Taller para colegios
          </a>
        </div>
        <p className="text-white/80 text-sm mt-4">
          Vía individual: S/150 por persona · Vía colegio: taller presencial in-situ · Certificado verificable
        </p>
      </div>
    </section>
  )
}
