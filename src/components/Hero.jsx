import React from 'react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <h1 className="mb-6">
              Domina <span className="accent-green">IA</span><br />
              y crea en minutos.
            </h1>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed italic">
              Aprende a crear contenido profesional con IA: prompts, imágenes y videos en 10 horas en vivo.
            </p>
            <div className="space-y-4 mb-8">
              <button className="btn-primary">Reservar cupo</button>
              <p className="text-sm text-slate-600">
                10 horas · en vivo · con certificado
              </p>
            </div>
          </div>

          {/* Right side - Status panel */}
          <div className="card bg-white/80 backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Tu curso de IA en vivo</span>
              <span className="status-badge">Lanzamiento</span>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lime-400 font-bold">💬</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Prompts</p>
                  <p className="text-sm text-slate-600">Tu librería lista</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lime-400 font-bold">🖼️</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Imágenes</p>
                  <p className="text-sm text-slate-600">Kit de marca visual</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lime-400 font-bold">🎬</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Videos</p>
                  <p className="text-sm text-slate-600">Reel de 45 segundos</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lime-400 font-bold">📅</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Integración</p>
                  <p className="text-sm text-slate-600">7 posts a la semana</p>
                </div>
              </div>

              <div className="pt-4 border-t border-cream-200 flex items-center gap-2 text-slate-700">
                <span>⚡</span>
                <p className="text-sm"><strong>40+ archivos</strong> listos al terminar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
