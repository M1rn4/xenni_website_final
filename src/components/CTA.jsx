import React from 'react'

export default function CTA() {
  return (
    <section className="section bg-gradient-to-b from-cream-100 to-slate-800">
      <div className="container-custom text-center">
        <h2 className="text-white mb-6">
          10 horas que cambian tu forma de trabajar para siempre.
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Recupera tu tiempo con IA y recibe materiales listos para publicar desde el primer día.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/51975963255?text=Hola%20quiero%20reservar%20mi%20cupo"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center justify-center"
          >
            Reservar mi cupo
          </a>
          <p className="text-white/60 text-sm">
            496 soles · Edición de lanzamiento · Escríbenos ya en WhatsApp
          </p>
        </div>
        <p className="text-white/80 text-sm mt-4">
          Certificado verificable · Comunidad privada · Garantía de 2 clases
        </p>
      </div>
    </section>
  )
}
