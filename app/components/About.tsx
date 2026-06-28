'use client';

export default function About() {
  return (
    <section id="nosotros" className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-secondary to-primary rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-12">
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-accent text-lg mb-1">Equipo Profesional</h4>
                        <p className="text-gray-600">Personal capacitado y uniformado</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-accent text-lg mb-1">Horario Extendido</h4>
                        <p className="text-gray-600">De 7 a 22 hs todos los días</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-accent text-lg mb-1">Carga Asegurada</h4>
                        <p className="text-gray-600">Tu mercadería protegida</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full -z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full -z-0"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <span className="gold-metallic font-bold text-sm uppercase tracking-wider">Sobre Nosotros</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-black mt-3 mb-6">
                Tu aliado en <span className="gold-metallic">logística</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              En <span className="font-bold text-black">FletesFlex</span> somos especialistas en fletes y mudanzas
              en Quilmes, CABA y Gran Buenos Aires. Con años de experiencia en el sector, nos
              destacamos por nuestra <span className="font-semibold gold-metallic">flexibilidad, puntualidad y profesionalismo</span>.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Nuestro equipo está compuesto por profesionales capacitados que entienden la
              importancia de cuidar tu carga como si fuera propia. Desde pequeños envíos
              hasta mudanzas completas, manejamos cada operación con el mismo nivel de
              compromiso y dedicación.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-gray-50 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-primary mb-2">9.9k+</div>
                <div className="text-sm text-gray-600 font-medium">Clientes Satisfechos</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Entregas Exitosas</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 text-center">
              <a
                href="#contacto"
                className="inline-block gold-metallic-bg text-black px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all transform hover:scale-105"
              >
                Conocé Más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
