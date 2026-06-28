'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    servicio: 'Mudanza completa',
    origen: '',
    destino: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let mensaje = `Hola! Quiero cotizar un servicio de ${formData.servicio}.`;

    if (formData.origen && formData.destino) {
      mensaje += `\n\nOrigen: ${formData.origen}\nDestino: ${formData.destino}`;
    } else if (formData.origen) {
      mensaje += `\n\nOrigen: ${formData.origen}`;
    } else if (formData.destino) {
      mensaje += `\n\nDestino: ${formData.destino}`;
    }

    mensaje += `\n\n¿Podrían darme más información?`;

    const whatsappUrl = `https://wa.me/5491151747499?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <section id="contacto" className="py-12 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="gold-metallic font-bold text-sm uppercase tracking-wider">Hablemos</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            ¿Listo para tu próximo envío?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Contactanos ahora y obtené tu cotización en minutos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4">
            {/* WhatsApp Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-center">
                <div className="w-12 h-12 gold-metallic-bg rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
                <p className="text-gray-300 text-sm mb-3">
                  <span className="hidden lg:inline">Contactanos para cotizaciones y consultas. </span>
                  Respuesta inmediata
                </p>
                <a
                  href="https://wa.me/5491151747499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-metallic text-sm font-semibold hover:brightness-110 transition-colors"
                >
                  +54 9 11 5174-7499
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-center">
                <div className="w-12 h-12 gold-metallic-bg rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Instagram</h3>
                <p className="text-gray-300 text-sm mb-3">
                  <span className="hidden lg:inline">Mirá nuestros trabajos diarios. </span>
                  Seguinos en nuestras redes
                </p>
                <a
                  href="https://www.instagram.com/fletesflex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-metallic text-sm font-semibold hover:brightness-110 transition-colors"
                >
                  @fletesflex
                </a>
              </div>
            </div>

            {/* Coverage Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="w-12 h-12 gold-metallic-bg rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Cobertura</h3>
                <ul className="space-y-1.5 text-gray-300 text-sm">
                  <li><span className="hidden lg:inline">Quilmes y </span>alrededores</li>
                  <li>CABA</li>
                  <li><span className="hidden lg:inline">Gran Buenos Aires </span>(GBA)</li>
                </ul>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="w-12 h-12 gold-metallic-bg rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  <span className="hidden lg:inline">Horarios de </span>Atención
                </h3>
                <p className="text-gray-300 font-semibold">7:00 a 22:00 hs</p>
                <p className="text-gray-400 text-sm">Todos los días</p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="lg:mt-0">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-accent mb-6">
                Cotizá tu envío ahora
              </h3>
              <p className="text-gray-600 mb-8">
                Obtené un presupuesto personalizado en minutos. Sin compromiso.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Qué necesitás transportar?
                  </label>
                  <select
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option>Mudanza completa</option>
                    <option>Transporte</option>
                    <option>Fletes</option>
                    <option>Embalajes</option>
                    <option>Peones</option>
                    <option>Elevación por balcón</option>
                    <option>Viajes larga distancia</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿De dónde a dónde? (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Origen (ej: Quilmes)"
                    value={formData.origen}
                    onChange={(e) => setFormData({ ...formData, origen: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all mb-3"
                  />
                  <input
                    type="text"
                    placeholder="Destino (ej: CABA)"
                    value={formData.destino}
                    onChange={(e) => setFormData({ ...formData, destino: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-metallic-bg text-black text-center px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Enviar por WhatsApp
                </button>

                <p className="text-center text-sm text-gray-500">
                  O llamanos directamente al
                  <a href="tel:+5491151747499" className="text-primary font-semibold ml-1">
                    +54 9 11 5174-7499
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
