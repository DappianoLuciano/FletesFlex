'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  { id: 1, category: 'trabajos', image: '/img/trabajo12.jpg' },
  { id: 2, category: 'trabajos', image: '/img/trabajo13.jpg' },
  { id: 3, category: 'trabajos', image: '/img/trabajo7.jpg' },
  { id: 4, category: 'trabajos', image: '/img/trabajo8.jpg' },
  { id: 5, category: 'trabajos', image: '/img/trabajo9.jpg' },
  { id: 6, category: 'trabajos', image: '/img/trabajo10.jpg' },
  { id: 7, category: 'trabajos', image: '/img/trabajo11.jpg' },
  { id: 8, category: 'trabajos', image: '/img/trabajos1.webp' },
  { id: 9, category: 'trabajos', image: '/img/trabajos2.webp' },
  { id: 10, category: 'trabajos', image: '/img/trabajos3.webp' },
  { id: 11, category: 'trabajos', image: '/img/trabajos4.webp' },
  { id: 12, category: 'trabajos', image: '/img/trabajos5.webp' },
  { id: 13, category: 'vehiculos', image: '/img/vehiculo 1.webp' },
  { id: 14, category: 'vehiculos', image: '/img/vehiculo2.webp' },
  { id: 15, category: 'vehiculos', image: '/img/vehiculo3.webp' },
  { id: 16, category: 'vehiculos', image: '/img/vehiculo4.webp' },
  { id: 17, category: 'vehiculos', image: '/img/vehiculo5.webp' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('trabajos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const nextImageGallery = () => {
    setCurrentImageIndex((prev) => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        return (prev + 1) % filteredImages.length;
      } else {
        // Desktop: saltar de 3 en 3
        const next = prev + 3;
        return next >= filteredImages.length ? 0 : next;
      }
    });
  };

  const prevImageGallery = () => {
    setCurrentImageIndex((prev) => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        return (prev - 1 + filteredImages.length) % filteredImages.length;
      } else {
        // Desktop: saltar de 3 en 3
        const prevIdx = prev - 3;
        return prevIdx < 0 ? Math.max(0, Math.floor((filteredImages.length - 1) / 3) * 3) : prevIdx;
      }
    });
  };

  return (
    <section id="galeria" className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="gold-metallic font-bold text-sm uppercase tracking-wider">Nuestro Trabajo</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mt-3 mb-4">
            Galería de Servicios
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mirá algunos de nuestros trabajos realizados
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['trabajos', 'vehiculos'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat
                  ? 'gold-metallic-bg text-black shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat === 'trabajos' ? 'Trabajos' : 'Vehículos'}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="md:hidden">
            <div className="relative px-4">
              <div
                onClick={() => openLightbox(currentImageIndex)}
                className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              >
                <Image
                  src={filteredImages[currentImageIndex].image}
                  alt={`Galería FletesFlex ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  loading="lazy"
                  quality={85}
                />
              </div>

              <button
                onClick={prevImageGallery}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg text-accent hover:text-primary transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImageGallery}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg text-accent hover:text-primary transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {filteredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className="text-center mt-3">
              <p className="text-sm text-gray-500">
                {currentImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative px-4">
              <div className="grid grid-cols-3 gap-8">
                {filteredImages.slice(currentImageIndex, currentImageIndex + 3).map((image, idx) => {
                  const actualIndex = currentImageIndex + idx;
                  return (
                    <div
                      key={image.id}
                      onClick={() => openLightbox(actualIndex)}
                      className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                      <Image
                        src={image.image}
                        alt={`Galería FletesFlex ${actualIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        quality={85}
                      />

                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredImages.length > 3 && (
                <>
                  <button
                    onClick={prevImageGallery}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg text-accent hover:text-primary transition-colors z-10"
                    disabled={currentImageIndex === 0}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={nextImageGallery}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg text-accent hover:text-primary transition-colors z-10"
                    disabled={currentImageIndex >= filteredImages.length - 3}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(filteredImages.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index * 3)}
                  className={`h-2 rounded-full transition-all ${
                    Math.floor(currentImageIndex / 3) === index
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white hover:text-primary transition-colors z-50"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white hover:text-primary transition-colors z-50"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="relative max-w-6xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={filteredImages[currentImageIndex].image}
                alt={`Imagen ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
