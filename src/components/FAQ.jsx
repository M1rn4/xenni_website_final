import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: '¿Cuál es el nivel requerido para empezar?',
      answer: 'No necesitas experiencia previa en IA. Solo requiere comprensión básica de programación (Python es ideal pero podemos ayudarte). Todos los conceptos se explican desde cero.'
    },
    {
      question: '¿Puedo tomar el curso si trabajo a tiempo completo?',
      answer: 'Sí, está diseñado para profesionales ocupados. Las clases son de 2-3 horas por semana en vivo (grabadas), y puedes ver el contenido a tu propio ritmo.'
    },
    {
      question: '¿Qué pasa si no puedo asistir a una clase en vivo?',
      answer: 'Todas las sesiones se graban. Tienes acceso de por vida a los videos, recursos y materiales. Puedes ver todo cuando tengas disponibilidad.'
    },
    {
      question: '¿El certificado es reconocido en la industria?',
      answer: 'Sí. El certificado incluye verificación de asistencia y proyecto final. Es reconocido por empresas líderes en tecnología e IA.'
    },
    {
      question: '¿Hay descuentos disponibles?',
      answer: 'Sí. Ofrecemos descuentos especiales para primeros inscritos, referencias de amigos, y pequeños equipos de empresa. Escríbenos para más detalles.'
    },
    {
      question: '¿Qué herramientas necesito?',
      answer: 'Solo una computadora con conexión a internet. Proporcionamos acceso a entornos en la nube para programar, así que no necesitas instalar nada en tu máquina.'
    }
  ]

  return (
    <section id="faq" className="section bg-gradient-to-b from-soft-blue/20 to-cream-100">
      <div className="container-custom max-w-3xl">
        <p className="text-slate-600 uppercase tracking-widest font-bold mb-4 text-xs">Preguntas frecuentes</p>
        <h2 className="mb-12">Resolvemos tus dudas.</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="card">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left flex items-start justify-between gap-4 focus:outline-none"
              >
                <h3 className="font-bold text-slate-800">{faq.question}</h3>
                <span className="text-2xl text-lime-400 flex-shrink-0 mt-1">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === idx && (
                <p className="text-slate-600 text-sm mt-4 pt-4 border-t border-cream-200 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
