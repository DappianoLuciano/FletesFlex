'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detectar cuando pasa del hero (aproximadamente altura de viewport)
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-primary/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 mx-auto md:mx-0">
            <div className="relative w-44 h-14 sm:w-56 sm:h-18 lg:w-64 lg:h-20">
              <Image
                src="/img/logo2.png"
                alt="FletesFlex Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="h-9 sm:h-11 lg:h-12 w-px bg-primary/50"></div>
            <div className="flex flex-col text-primary text-sm sm:text-base font-bold tracking-wide">
              <span>FLETES &</span>
              <span>MUDANZAS</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#nosotros"
              className="font-medium text-white hover:text-primary transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="#servicios"
              className="font-medium text-white hover:text-primary transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#galeria"
              className="font-medium text-white hover:text-primary transition-colors"
            >
              Galería
            </Link>
            <Link
              href="#contacto"
              className="gold-metallic-bg text-black px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all transform hover:scale-105"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              ></span>
              <span
                className={`h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#nosotros"
                className="text-white font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#servicios"
                className="text-white font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#galeria"
                className="text-white font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Galería
              </Link>
              <Link
                href="#contacto"
                className="gold-metallic-bg text-black px-6 py-3 rounded-full font-bold text-center hover:brightness-110 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contactar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
