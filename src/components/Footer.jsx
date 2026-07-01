import React from 'react'
import BrandLogo from './BrandLogo'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white/80 py-12 px-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <BrandLogo light />
            </div>
            <p className="text-sm">IA práctica para docentes de aula</p>
          </div>
          
          <div>
            <h5 className="font-bold text-white mb-4 text-sm">Navegación</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#como-funciona" className="hover:text-white transition">Cómo funciona</a></li>
              <li><a href="#modulos" className="hover:text-white transition">Módulos</a></li>
              <li><a href="#beneficios" className="hover:text-white transition">Beneficios</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4 text-sm">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4 text-sm">Conecta</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://wa.me/51975963255?text=Hola%20quiero%20reservar%20mi%20cupo" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path d="M20.52 3.48A11.9 11.9 0 0 0 3.48 20.52l-1.2 4.39 4.5-1.18A11.92 11.92 0 0 0 21 3.45l-.48.03Zm-1.7 13.16c-.44 1.23-2.47 2.38-3.48 2.51-.94.12-1.84.18-4.02-.81-3.5-1.45-5.79-5.03-6.04-5.28-.25-.25-2.04-2.38-2.04-4.54 0-2.16 1.13-3.23 1.53-3.63.4-.4.96-.69 1.53-.69.57 0 1.13.01 1.62.02.53.01.84.08 1.2.11.3.03.57.03.82-.02.25-.05.94-.35 1.15-.48.2-.12.46-.25.7-.02.25.24.79.97.9 1.16.11.19.18.42.06.68-.12.26-.2.42-.4.65-.2.23-.42.5-.6.67-.2.18-.4.38-.2.63.2.24.88 1.43 1.9 2.33 1.3 1.2 2.38 1.58 2.62 1.76.24.18.38.16.53-.1.15-.26.64-1.07.8-1.45.16-.38.32-.32.53-.31.2.01.65.02.99.02.34 0 .88-.14 1.34.64.46.78.46 1.45.32 1.59Z" />
                    </svg>
                  </span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/xenni" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5Zm.02 4.5H0v16h5V8zm7.5 0h-4.98v16h5v-8.9c0-4.74 6.23-5.12 6.23 0V24h5V14.2c0-8.2-8.75-7.9-10.25-3.86V8z" transform="translate(3 2)" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61578306463537" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.65 9.12 8.44 9.88v-6.99h-2.54V12h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.35 21.12 22 16.99 22 12Z" />
                    </svg>
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/xenni.xyz/" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.96.24 2.414.403a4.92 4.92 0 0 1 1.77 1.15 4.92 4.92 0 0 1 1.15 1.77c.162.453.35 1.243.403 2.414.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.403 2.414a4.92 4.92 0 0 1-1.15 1.77 4.92 4.92 0 0 1-1.77 1.15c-.453.162-1.243.35-2.414.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.414-.403a4.92 4.92 0 0 1-1.77-1.15 4.92 4.92 0 0 1-1.15-1.77c-.162-.453-.35-1.243-.403-2.414C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.054-1.17.24-1.96.403-2.414A4.92 4.92 0 0 1 3.78 3.02 4.92 4.92 0 0 1 5.55 1.87c.453-.162 1.243-.35 2.414-.403C8.416 2.172 8.8 2.16 12 2.16Zm0 1.8c-3.15 0-3.52.01-4.76.068-.98.043-1.51.203-1.86.34-.46.18-.79.4-1.14.74a2.83 2.83 0 0 0-.74 1.14c-.137.35-.297.88-.34 1.86-.058 1.24-.068 1.61-.068 4.76s.01 3.52.068 4.76c.043.98.203 1.51.34 1.86.18.46.4.79.74 1.14.35.35.68.56 1.14.74.35.137.88.297 1.86.34 1.24.058 1.61.068 4.76.068s3.52-.01 4.76-.068c.98-.043 1.51-.203 1.86-.34.46-.18.79-.4 1.14-.74.35-.35.56-.68.74-1.14.137-.35.297-.88.34-1.86.058-1.24.068-1.61.068-4.76s-.01-3.52-.068-4.76c-.043-.98-.203-1.51-.34-1.86a2.83 2.83 0 0 0-.74-1.14 2.83 2.83 0 0 0-1.14-.74c-.35-.137-.88-.297-1.86-.34-1.24-.058-1.61-.068-4.76-.068Z" />
                      <path d="M12 5.84a6.16 6.16 0 1 1 0 12.32 6.16 6.16 0 0 1 0-12.32Zm0 10.16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm5.2-10.7a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
                    </svg>
                  </span>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@xenni_xyz?lang=es" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path d="M16 3.5c-2.48 0-4.5 2.02-4.5 4.5v8.65c0 .83-.67 1.5-1.5 1.5S8.5 17.0 8.5 16.17V8.75a4.5 4.5 0 1 1 4.5 4.5h.75c.83 0 1.5.67 1.5 1.5v1.92c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5V8.75c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6V8.0c1.38.0 2.5-1.12 2.5-2.5V6.0h-1.5v.0c0 .28-.22.5-.5.5H16v-3Z" />
                    </svg>
                  </span>
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 xenni. Todos los derechos reservados.</p>
          <p>Hecho para docentes que quieren ahorrar tiempo con IA</p>
        </div>
      </div>
    </footer>
  )
}
