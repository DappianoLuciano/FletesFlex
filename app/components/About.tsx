'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="nosotros" className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div>
              <span className="gold-metallic font-bold text-sm uppercase tracking-wider">Sobre Nosotros</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3 mb-6 whitespace-nowrap">
                Tu aliado en <span className="gold-metallic">movimientos</span>
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

          {/* Right Column - Image */}
          <div className="relative flex justify-center">
            <div className="relative z-10 w-full max-w-md">
              <div className="bg-gradient-to-br from-secondary to-primary rounded-3xl p-1">
                <div className="relative aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src="/img/trabajos1.webp"
                    alt="FletesFlex en acción"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    quality={95}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full -z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
