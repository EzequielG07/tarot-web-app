'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
    const [isFaqOpen, setIsFaqOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsFaqOpen(false);
            }
        };

        if (isFaqOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isFaqOpen]);

    return (
        <footer className="bg-bg-card text-text-light border-t border-border-accent font-sans">
            {/* Contenedor Principal de 12 Columnas */}
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-stretch divide-y lg:divide-y-0 divide-gray-500/40">
                    {/* Columna 1: Logo (3/12) */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start p-6 text-center lg:text-left space-y-3 h-full lg:border-r border-gray-500/40">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-2xl font-serif tracking-widest text-btn-light font-bold"
                        >
                            <span>✨</span> Anita Tarot
                        </Link>
                        <p className="text-xs text-text-light/70 max-w-xs">Maestra Parapsicóloga</p>
                        <p className="text-xs text-text-light/70 max-w-xs">Psíquica · Vidente · Reiki Master</p>

                    </div>

                    {/* Columna 2: Anita Tarotista (2/12) */}
                    <div className="lg:col-span-2 flex flex-col p-6 space-y-3 h-full lg:border-r border-gray-500/40">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-2">
                            Anita Tarotista
                        </h3>
                        <p className="text-sm hover:text-btn-light transition-colors">Maestra Parapsicóloga</p>
                        <p className="text-sm hover:text-btn-light transition-colors">Psíquica · Vidente · Reiki Master</p>
                        <p className="text-sm hover:text-btn-light transition-colors">20 años de experiencia · Tarot</p>
                        <p className="text-sm hover:text-btn-light transition-colors">Videncia Natural · Parapsicología · Energía</p>
                    </div>

                    {/* Columna 3: Frecuencia Sacerdotista (2/12) */}
                    <div className="lg:col-span-2 flex flex-col p-6 space-y-3 h-full lg:border-r border-gray-500/40">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-2">
                            Frecuencia Sacerdotista
                        </h3>
                        <Link href="/#aboutme" className="text-sm hover:text-btn-light transition-colors">
                            Encuentros - Rituales - Recursos
                        </Link>
                        <Link href="/#blog" className="text-sm hover:text-btn-light transition-colors">
                            Comunidad
                        </Link>
                    </div>

                    {/* Columna 4: Información (2/12) */}
                    <div className="lg:col-span-2 flex flex-col p-6 space-y-3 h-full lg:border-r border-gray-500/40">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-2">
                            Información
                        </h3>
                        <button
                            type="button"
                            onClick={() => setIsFaqOpen(true)}
                            className="text-sm text-left hover:text-btn-light transition-colors cursor-pointer"
                        >
                            Preguntas Frecuentes
                        </button>
                        <Link href="/faq" className="text-sm hover:text-btn-light transition-colors">
                            Términos y condiciones - Política de Privacidad
                        </Link>
                    </div>

                    {/* Columna 5: Redes + Botón Agendar (3/12 - Ancho extra) */}
                    <div className="lg:col-span-3 flex flex-col justify-start p-6 space-y-3 h-full">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-2 text-center lg:text-left">
                            Seguinos en:
                        </h3>

                        <div className="flex items-center justify-center lg:justify-start gap-3 flex-nowrap">
                            {/* Íconos de Redes */}
                            <div className="flex items-center gap-1.5 text-text-light/70 shrink-0">
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 hover:text-btn-light transition-colors duration-200"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>

                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 hover:text-btn-light transition-colors duration-200"
                                    aria-label="Facebook"
                                >
                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03.22-1.5 1.5-1.5H18V2.14c-.52-.07-1.62-.14-2.76-.14-3.26 0-5.24 1.83-5.24 5.5v2H7v4h3V22h4v-8.5z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://www.tiktok.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 hover:text-btn-light transition-colors duration-200"
                                    aria-label="TikTok"
                                >
                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.14 1.03 1.12 2.49 1.83 3.94 1.93v3.86c-1.77-.08-3.52-.64-4.91-1.74-.29-.23-.55-.49-.79-.77v5.77c.06 1.77-.42 3.58-1.42 5.03-1.15 1.74-3.12 2.92-5.18 3.06-2.31.2-4.71-.62-6.19-2.39-1.58-1.83-2.14-4.51-1.39-6.84.69-2.22 2.61-3.99 4.9-4.28.91-.12 1.84-.01 2.72.26v3.91c-.88-.28-1.89-.19-2.67.33-.88.56-1.42 1.57-1.44 2.62-.02 1.34.88 2.61 2.15 2.99 1.19.37 2.58-.09 3.25-1.16.42-.64.59-1.42.57-2.19V0h-.02z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 hover:text-btn-light transition-colors duration-200"
                                    aria-label="YouTube"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 3.88 12 3.88 12 3.88s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                    </svg>
                                </a>
                            </div>

                            {/* Botón Agendar Consulta */}
                            <Link
                                href="/schedule"
                                className="px-3.5 py-2 rounded-full bg-btn-light text-text-dark hover:bg-btn-light-hover transition-colors whitespace-nowrap uppercase font-bold text-xs shrink-0"
                            >
                                Agendar Consulta →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sub-barras: Derechos Reservados y Ubicación */}
            <div className="border-t border-gray-500/40 py-6 px-6 sm:px-10 lg:px-12 text-xs text-text-light/60">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                    <p>© {new Date().getFullYear()} Anita Tarot. Todos los derechos reservados.</p>
                    <div className="flex p-1 text-text-light/70">
                        <svg
                            className="h-5 w-5 mr-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <p>Serra, Argentina</p>
                    </div>
                </div>
            </div>

            {/* Modal: Preguntas Frecuentes / ¿Cómo reservo mi sesión? */}
            {isFaqOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-5 md:p-6 bg-black/80 backdrop-blur-sm transition-opacity duration-300 overflow-y-auto"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="faq-modal-title"
                    onClick={() => setIsFaqOpen(false)}
                >
                    <div
                        className="relative w-full max-w-lg md:max-w-xl bg-bg-card border border-border-accent/80 text-text-light rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl shadow-black/80 overflow-hidden my-auto transition-transform duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Resplandor decorativo (contenido gracias a overflow-hidden) */}
                        <div className="absolute -top-20 -right-20 w-44 h-44 bg-btn-light/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-btn-light/10 rounded-full blur-3xl pointer-events-none" />

                        {/* Botón Cerrar */}
                        <button
                            type="button"
                            onClick={() => setIsFaqOpen(false)}
                            aria-label="Cerrar modal"
                            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 text-text-light/70 hover:text-btn-light rounded-full bg-white/5 hover:bg-white/10 transition-all cursor-pointer z-10"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Cabecera del Modal */}
                        <div className="text-center mb-4 sm:mb-5 px-4 sm:px-6">
                            <span className="inline-block text-lg sm:text-xl mb-1">✨</span>
                            <h2
                                id="faq-modal-title"
                                className="text-lg sm:text-xl md:text-2xl font-serif font-bold tracking-wider sm:tracking-widest text-btn-light uppercase leading-snug"
                            >
                                ¿CÓMO RESERVO MI SESIÓN?
                            </h2>
                            <div className="w-12 sm:w-16 h-0.5 bg-btn-light/40 mx-auto mt-2 rounded-full" />
                        </div>

                        {/* Pasos */}
                        <div className="space-y-2.5 sm:space-y-3 text-left">
                            {/* Paso 01 */}
                            <div className="p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-btn-light/30 transition-colors">
                                <h3 className="font-semibold text-btn-light text-xs sm:text-sm md:text-base tracking-wide flex items-center gap-2">
                                    <span>01 ·</span> Completá el formulario
                                </h3>
                                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-text-light/85 pl-6 sm:pl-7 leading-relaxed">
                                    Contame brevemente qué necesitás trabajar.
                                </p>
                            </div>

                            {/* Paso 02 */}
                            <div className="p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-btn-light/30 transition-colors">
                                <h3 className="font-semibold text-btn-light text-xs sm:text-sm md:text-base tracking-wide flex items-center gap-2">
                                    <span>02 ·</span> Coordinamos tu cita
                                </h3>
                                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-text-light/85 pl-6 sm:pl-7 leading-relaxed">
                                    Me pondré en contacto para confirmar modalidad, día y horario.
                                </p>
                            </div>

                            {/* Paso 03 */}
                            <div className="p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-btn-light/30 transition-colors">
                                <h3 className="font-semibold text-btn-light text-xs sm:text-sm md:text-base tracking-wide flex items-center gap-2">
                                    <span>03 ·</span> Realizá el pago
                                </h3>
                                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-text-light/85 pl-6 sm:pl-7 leading-relaxed">
                                    El pago confirma y reserva tu turno.
                                </p>
                            </div>

                            {/* Paso 04 */}
                            <div className="p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-btn-light/30 transition-colors">
                                <h3 className="font-semibold text-btn-light text-xs sm:text-sm md:text-base tracking-wide flex items-center gap-2">
                                    <span>04 ·</span> Prepará tu espacio
                                </h3>
                                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-text-light/85 pl-6 sm:pl-7 leading-relaxed">
                                    Unos minutos antes, buscá un lugar cómodo, tranquilo y privado donde puedas expresarte con libertad.
                                </p>
                            </div>
                        </div>

                        {/* Mensaje Final */}
                        <div className="mt-4 sm:mt-5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-btn-light/10 border border-btn-light/20 text-center">
                            <p className="text-btn-light font-medium text-xs sm:text-sm md:text-base">
                                ✨ Y listo. Tu espacio está reservado.
                            </p>
                        </div>

                        {/* Botón de acción */}
                        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                            <Link
                                href="/schedule"
                                onClick={() => setIsFaqOpen(false)}
                                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-full bg-btn-light text-text-dark hover:bg-btn-light-hover transition-colors uppercase font-bold text-xs text-center shrink-0"
                            >
                                Agendar Consulta →
                            </Link>
                            <button
                                type="button"
                                onClick={() => setIsFaqOpen(false)}
                                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-text-light/80 hover:text-text-light transition-colors uppercase font-semibold text-xs cursor-pointer shrink-0"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}
