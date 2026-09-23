'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-bg-card text-text-light border-b border-border-accent sticky top-0 z-50 backdrop-blur-md">
            <div className="max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-x-16 h-20 gap-x-4">
                    {/* Logo / Nombre */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-xl xl:text-2xl font-serif tracking-widest text-btn-light font-bold whitespace-nowrap shrink-0"
                    >
                        <span>✨</span> Anita Tarot
                    </Link>

                    {/* Menú Escritorio */}
                    <div className="hidden xl:flex items-center gap-x-4 2xl:gap-x-6 text-xs xl:text-sm tracking-wider font-medium shrink-0">
                        <Link href="/" className="hover:text-btn-light transition-colors whitespace-nowrap">
                            Inicio
                        </Link>
                        <Link href="/#lectures" className="hover:text-btn-light transition-colors whitespace-nowrap">
                            Lecturas
                        </Link>
                        <Link href="/#services" className="hover:text-btn-light transition-colors whitespace-nowrap">
                            Servicios Energéticos
                        </Link>
                        <Link href="/#aboutme" className="hover:text-btn-light transition-colors whitespace-nowrap">
                            Sobre Anita
                        </Link>
                        <Link href="/#frequency" className="hover:text-btn-light transition-colors whitespace-nowrap">
                            Frecuencia Sacerdotisa
                        </Link>
                        <Link href="/#blog" className="hover:text-btn-light transition-colors whitespace-nowrap">
                            Blog
                        </Link>
                        <Link href="/#contact" className="hover:text-btn-light transition-colors whitespace-nowrap">
                            Contacto
                        </Link>
                        <button className="px-4 py-2 rounded-full bg-btn-light text-text-dark hover:bg-btn-light-hover transition-colors whitespace-nowrap uppercase font-bold">
                            Agendar Consulta →
                        </button>
                    </div>

                    {/* Botón Hamburguesa Móvil */}
                    <div className="xl:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text-light hover:text-btn-light focus:outline-none p-2"
                            aria-label="Abrir menú"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú Desplegable Móvil */}
            {isOpen && (
                <div className="xl:hidden bg-bg-card border-b border-border-accent px-4 pt-2 pb-6 space-y-3 font-sans">
                    <Link
                        href="/"
                        className="block py-2 text-text-light hover:text-btn-light"
                        onClick={() => setIsOpen(false)}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/#lectures"
                        className="block py-2 text-text-light hover:text-btn-light"
                        onClick={() => setIsOpen(false)}
                    >
                        Lecturas
                    </Link>
                    <Link
                        href="/#services"
                        className="block py-2 text-text-light hover:text-btn-light"
                        onClick={() => setIsOpen(false)}
                    >
                        Servicios Energéticos
                    </Link>
                    <Link
                        href="/#aboutme"
                        className="block py-2 text-text-light hover:text-btn-light"
                        onClick={() => setIsOpen(false)}
                    >
                        Sobre Anita
                    </Link>
                    <Link
                        href="/#frequency"
                        className="block py-2 text-text-light hover:text-btn-light"
                        onClick={() => setIsOpen(false)}
                    >
                        Frecuencia Sacerdotisa
                    </Link>
                    <Link
                        href="/#blog"
                        className="block py-2 text-text-light hover:text-btn-light"
                        onClick={() => setIsOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/#contact"
                        className="block py-2 text-text-light hover:text-btn-light"
                        onClick={() => setIsOpen(false)}
                    >
                        Contacto
                    </Link>
                    <Link
                        href="/schedule"
                        className="block w-full text-center mt-4 px-4 py-2 bg-btn-light text-text-dark hover:bg-btn-light-hover rounded-md transition-colors font-bold"
                        onClick={() => setIsOpen(false)}
                    >
                        Agendar Consulta →
                    </Link>
                </div>
            )}
        </nav>
    );
}
