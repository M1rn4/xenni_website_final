import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: '¿Necesito saber de tecnología para empezar?',
      answer: 'No. El curso empieza desde cero y se trabaja con herramientas simples. Solo necesitas una computadora o laptop con internet y ganas de practicar con tus propios temas.'
    },
    {
      question: '¿Sirve para inicial, primaria y secundaria?',
      answer: 'Sí. Los ejercicios se adaptan por nivel, grado y área. Aprenderás a pedirle a la IA que ajuste lenguaje, dificultad, actividades y evaluación según tus estudiantes.'
    },
    {
      question: '¿Qué pasa si no puedo asistir a una clase en vivo?',
      answer: 'Las sesiones se graban y recibirás los materiales trabajados. Aun así, recomendamos asistir en vivo para resolver dudas sobre tus propios casos de aula.'
    },
    {
      question: '¿El certificado sirve para mi puntaje de escala magisterial?',
      answer: 'El certificado es verificable e indica horas de capacitación. Si necesitas usarlo para un proceso específico de escala magisterial, escríbenos para revisar los requisitos vigentes de tu convocatoria.'
    },
    {
      question: '¿Puedo llevar el taller a mi colegio?',
      answer: 'Sí. Tenemos una modalidad para colegios: taller presencial in-situ para la plana docente, con contenidos ajustados al nivel y necesidades de la institución.'
    },
    {
      question: '¿Qué herramientas necesito?',
      answer: 'Usaremos herramientas de IA accesibles desde el navegador. No necesitas programar ni instalar software complejo.'
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
