'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-bg-card/90 text-secondary border-b border-border-accent sticky top-0 z-50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo / Nombre */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-2xl font-serif tracking-widest text-primary font-bold"
                    >
                        <span>✨</span> TAROT MÍSTICO
                    </Link>

                    {/* Menú Escritorio */}
                    <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">
                            Inicio
                        </Link>
                        <Link href="/#nosotros" className="hover:text-primary transition-colors">
                            Sobre Mí
                        </Link>
                        <Link
                            href="/login"
                            className="px-4 py-2 border border-border-accent rounded-md text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                            Ingresar
                        </Link>
                    </div>

                    {/* Botón Hamburguesa Móvil */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-secondary hover:text-primary focus:outline-none p-2"
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
                <div className="md:hidden bg-bg-main border-b border-border-accent px-4 pt-2 pb-6 space-y-3 font-serif">
                    <Link
                        href="/"
                        className="block py-2 text-secondary hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/#nosotros"
                        className="block py-2 text-secondary hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Sobre Mí
                    </Link>
                    <Link
                        href="/login"
                        className="block w-full text-center mt-4 px-4 py-2 border border-border-accent text-secondary hover:text-primary rounded-md"
                        onClick={() => setIsOpen(false)}
                    >
                        Ingresar
                    </Link>
                </div>
            )}
        </nav>
    );
}
