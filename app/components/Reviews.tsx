'use client';

import { useState } from 'react';
import Image from 'next/image';

// Reseñas reales de Google My Business
const reviews = [
  {
    id: 1,
    name: 'Agustín Molina',
    rating: 5,
    text: 'Me salvaron de una urgencia. El precio fue razonable y subieron un sofá por doce pisos de escalera en un tiempo asombroso. La atención por WhatsApp fue muy rápida y los muchachos eran muy respetuosos y amables.',
    image: '/img/reviews/agustin-molina.png'
  },
  {
    id: 2,
    name: 'Caito',
    rating: 5,
    text: 'Recomiendo FletesFlex con total confianza. Los chicos fueron súper respetuosos, puntuales y serviciales, cuidaron cada detalle, embalaron todo con muchísimo cuidado. Fueron ocho horas de trabajo intenso, siempre organizados, amables y profesionales. Tienen toda mi admiración por su profesionalismo.',
    image: '/img/reviews/caito.png'
  },
  {
    id: 3,
    name: 'Florencia Herrera',
    rating: 5,
    text: 'Un diez los chicos! Súper respetuosos con nosotros, con los vecinos y con los objetos. Llegó todo en perfectas condiciones y sin molestar a ningún vecino. Recontra resolutivos. Súper cuidadosos con las paredes y con todo! Recomiendo!',
    image: '/img/reviews/florencia-herrera.png'
  },
  {
    id: 4,
    name: 'Gustavo Coelho Silva',
    rating: 5,
    text: 'Super recomendables. El servicio es excelente y los chicos unos genios. Muy cuidadosos con todo y se tomaron el tiempo de embalar lo más delicado para que no sufran daños. Sin duda los contrataría de nuevo.',
    image: '/img/reviews/gustavo-silva.png'
  },
  {
    id: 5,
    name: 'Belen Lucero',
    rating: 5,
    text: 'Super recomendables!! Estamos muy agradecidos de haber contado con ustedes para nuestra mudanza. Nos tocó un día complicado por la lluvia y problemas con el ascensor pero ustedes le pusieron la mejor onda y lo dieron todo. Además se nota el buen clima laboral entre ustedes.',
    image: '/img/reviews/belen-lucero.png'
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-primary' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const averageRating = 5.0;
  const totalReviews = 59;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="gold-metallic font-bold text-sm uppercase tracking-wider">Opiniones</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Lo que dicen nuestros clientes
          </h2>

          {/* Google Rating Summary */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <span className="text-5xl font-bold gold-metallic">{averageRating}</span>
              <div>
                <StarRating rating={5} />
                <p className="text-gray-400 text-sm mt-1">{totalReviews} reseñas</p>
              </div>
            </div>
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl min-h-[280px] flex flex-col justify-between">
            <div>
              {/* Avatar and Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden relative ring-2 ring-primary/30">
                  <Image
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">{reviews[currentIndex].name}</h3>
                  <p className="text-gray-500 text-sm">Cliente de FletesFlex</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={reviews[currentIndex].rating} />
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-lg leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-16 bg-white rounded-full p-3 shadow-lg text-accent hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-16 bg-white rounded-full p-3 shadow-lg text-accent hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Link */}
        <div className="text-center mt-12">
          <a
            href="https://g.page/r/TU_LINK_DE_GOOGLE_AQUI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
          >
            <span>Ver todas las reseñas en Google</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
