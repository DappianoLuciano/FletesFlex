'use client';

import { useState } from 'react';

const servicios = [
  'Mudanza',
  'Transporte',
  'Fletes',
  'Embalajes',
  'Peones',
  'Elevación por balcón',
  'Viajes larga distancia',
  'Otro'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    servicios: [] as string[],
    origen: '',
    destino: '',
    observaciones: '',
  });

  const handleServicioChange = (servicio: string) => {
    setFormData(prev => ({
      ...prev,
      servicios: prev.servicios.includes(servicio)
        ? prev.servicios.filter(s => s !== servicio)
        : [...prev.servicios, servicio]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let mensaje = 'Hola! Quiero cotizar los siguientes servicios:';

    if (formData.servicios.length > 0) {
      mensaje += `\n\n${formData.servicios.map(s => `• ${s}`).join('\n')}`;
    }

    if (formData.origen && formData.destino) {
      mensaje += `\n\nOrigen: ${formData.origen}\nDestino: ${formData.destino}`;
    } else if (formData.origen) {
      mensaje += `\n\nOrigen: ${formData.origen}`;
    } else if (formData.destino) {
      mensaje += `\n\nDestino: ${formData.destino}`;
    }

    if (formData.observaciones) {
      mensaje += `\n\nObservaciones: ${formData.observaciones}`;
    }

    mensaje += `\n\n¿Podrían darme más información?`;

    const whatsappUrl = `https://wa.me/5491151747499?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <section id="contacto" className="py-12 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden overflow-x-hidden">
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

        <div className="max-w-2xl mx-auto">
          <div>
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-accent mb-6">
                Cotizá tu envío ahora
              </h3>
              <p className="text-gray-600 mb-8">
                Obtené un presupuesto personalizado en minutos. Sin compromiso.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    ¿Qué trabajo necesitas? (seleccioná uno o varios)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {servicios.map((servicio) => (
                      <label
                        key={servicio}
                        className="flex items-center space-x-2 cursor-pointer p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
                      >
                        <input
                          type="checkbox"
                          checked={formData.servicios.includes(servicio)}
                          onChange={() => handleServicioChange(servicio)}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">{servicio}</span>
                      </label>
                    ))}
                  </div>
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Observaciones (opcional)
                  </label>
                  <textarea
                    placeholder="Detalles adicionales sobre tu envío..."
                    value={formData.observaciones}
                    onChange={(e) => setFormData({ ...formData, observaciones: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
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
