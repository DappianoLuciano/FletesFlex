'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-accent/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-accent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-14">
              <Image
                src="/img/logo2.png"
                alt="FletesFlex Logo"
                fill
                className="object-contain"
                priority
              />
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
              className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-[#e89610] transition-all transform hover:scale-105"
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
                className="bg-primary text-white px-6 py-3 rounded-full font-bold text-center hover:bg-[#e89610] transition-all"
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
