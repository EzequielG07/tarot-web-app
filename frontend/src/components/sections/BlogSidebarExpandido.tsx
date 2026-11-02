// src/components/sections/BlogSidebarExpandido.tsx
'use client';

import { useRef, useEffect } from 'react';

export interface BlogSidebarExpandidoProps {
    estaAbierto: boolean;
    onCerrar: () => void;
}

export const BlogSidebarExpandido = ({
    estaAbierto,
    onCerrar,
}: BlogSidebarExpandidoProps) => {
    const panelRef = useRef<HTMLDivElement>(null);

    // Scroll suave hacia el panel de detalle cuando se despliega
    useEffect(() => {
        if (estaAbierto) {
            const timer = setTimeout(() => {
                if (panelRef.current) {
                    panelRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }, 120);
            return () => clearTimeout(timer);
        }
    }, [estaAbierto]);

    // Retorno suave al sidebar al hacer clic en "Ocultar detalles"
    const handleCerrar = () => {
        onCerrar();
        setTimeout(() => {
            const sidebarElement = document.getElementById('blog-sidebar');
            if (sidebarElement) {
                sidebarElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }, 80);
    };

    // Scroll hacia la sección de registro/comunidad
    const handleScrollToRegister = () => {
        const registerElement = document.getElementById('frecuencia-register');
        if (registerElement) {
            registerElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
            const inputEmail = registerElement.querySelector('input[type="email"]') as HTMLInputElement | null;
            if (inputEmail) {
                setTimeout(() => inputEmail.focus(), 600);
            }
        }
    };

    return (
        <div
            ref={panelRef}
            id="panel-blog-sidebar-expandido"
            className={`scroll-mt-28 grid transition-all duration-700 ease-in-out w-full ${estaAbierto
                    ? 'grid-rows-[1fr] opacity-100 mt-6'
                    : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                }`}
        >
            <div className="overflow-hidden">
                <div className="w-full bg-card-servicios rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col items-center text-center shadow-md border border-border-accent/40 transition-colors duration-500">
                    {/* Encabezado */}
                    <div className="max-w-3xl mx-auto space-y-3 mb-6">
                        <span className="inline-block text-[11px] font-serif font-bold uppercase tracking-widest text-text-dark/70 bg-black/5 px-3.5 py-1 rounded-full">
                            Frecuencia Sacerdotisa
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bodoni font-bold text-text-dark uppercase tracking-wide">
                            Bienvenidos a Frecuencia Sacerdotisa
                        </h3>
                        <p className="text-base sm:text-lg font-serif italic text-text-dark/80 leading-relaxed">
                            un espacio para quienes sienten el llamado de reconectar con los saberes espirituales y explorar nuevas formas de comprender su mundo interior.
                        </p>
                    </div>

                    {/* Divisor estético sutil */}
                    <div className="w-20 h-px bg-text-dark/20 my-2" />

                    {/* Contenido descriptivo principal */}
                    <div className="w-full max-w-3xl mx-auto space-y-5 text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed text-left sm:text-justify my-6">
                        <p>
                            No es solamente un nombre: es una manera de entender mi trabajo. La Sacerdotisa representa el conocimiento que va más allá de lo evidente: la intuición, la percepción, el silencio y los símbolos que nos ayudan a mirar hacia adentro y descubrir lo que muchas veces permanece oculto.
                        </p>
                        <p>
                            Frecuencia Sacerdotisa es mi universo de conocimiento, investigación y herramientas puesto al servicio de la experiencia personal. Aquí convergen la parapsicología, el tarot, el trabajo energético, la intuición y el autoconocimiento. También encontrarás rituales, limpiezas energéticas, prácticas de protección espiritual y saberes transmitidos a través de generaciones.
                        </p>
                        <p>
                            Mi propósito es invitarte a mirar diferente para comprender diferente, porque cuando cambia la mirada, pueden aparecer nuevas posibilidades.
                        </p>
                        <div className="pt-2 text-center sm:text-left space-y-4">
                            <p className="font-bodoni font-bold text-base sm:text-lg text-text-dark uppercase tracking-wide">
                                Soy Anita Tarotista y esta es mi Frecuencia Sacerdotisa.
                            </p>

                            {/* Redes de Frecuencia Sacerdotisa */}
                            <div className="pt-3 border-t border-text-dark/15 flex flex-col sm:flex-row items-center sm:items-start gap-3">
                                <span className="text-xs font-serif font-bold uppercase tracking-wider text-text-dark/80 pt-1">
                                    Redes de Frecuencia Sacerdotisa:
                                </span>
                                <div className="flex items-center gap-2.5">
                                    <a
                                        href="https://www.instagram.com/frecuenciasacerdotisa?igsh=aGF6ZDJ4bGNzemN3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-text-dark hover:text-text-dark border border-stone-300/80 shadow-xs hover:shadow-sm flex items-center justify-center transition-all hover:scale-110"
                                        aria-label="Instagram"
                                    >
                                        <svg
                                            className="h-4 w-4"
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
                                        href="https://www.facebook.com/share/1EKGwphRAD/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-text-dark hover:text-text-dark border border-stone-300/80 shadow-xs hover:shadow-sm flex items-center justify-center transition-all hover:scale-110"
                                        aria-label="Facebook"
                                    >
                                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M14 13.5h2.5l1-4H14v-2c0-1.03.22-1.5 1.5-1.5H18V2.14c-.52-.07-1.62-.14-2.76-.14-3.26 0-5.24 1.83-5.24 5.5v2H7v4h3V22h4v-8.5z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://www.tiktok.com/@frecuenciasacerdotisa?_r=1&_t=ZS-98GIniqHtys"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-text-dark hover:text-text-dark border border-stone-300/80 shadow-xs hover:shadow-sm flex items-center justify-center transition-all hover:scale-110"
                                        aria-label="TikTok"
                                    >
                                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.14 1.03 1.12 2.49 1.83 3.94 1.93v3.86c-1.77-.08-3.52-.64-4.91-1.74-.29-.23-.55-.49-.79-.77v5.77c.06 1.77-.42 3.58-1.42 5.03-1.15 1.74-3.12 2.92-5.18 3.06-2.31.2-4.71-.62-6.19-2.39-1.58-1.83-2.14-4.51-1.39-6.84.69-2.22 2.61-3.99 4.9-4.28.91-.12 1.84-.01 2.72.26v3.91c-.88-.28-1.89-.19-2.67.33-.88.56-1.42 1.57-1.44 2.62-.02 1.34.88 2.61 2.15 2.99 1.19.37 2.58-.09 3.25-1.16.42-.64.59-1.42.57-2.19V0h-.02z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tarjeta de llamado a la comunidad / Registro */}
                    <div className="w-full max-w-3xl mx-auto my-4 p-6 sm:p-8 rounded-2xl bg-bg-card text-text-light flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-white/10">
                        <div className="text-center sm:text-left space-y-1.5">
                            <h4 className="text-lg sm:text-xl font-bodoni font-bold uppercase tracking-wide text-btn-light">
                                Sumate a la comunidad
                            </h4>
                            <p className="text-xs sm:text-sm font-serif text-text-light/90 max-w-md">
                                Registrate para recibir novedades, contenidos especiales y descuentos.
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={handleScrollToRegister}
                            className="shrink-0 px-6 py-2.5 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-all uppercase font-bold text-xs shadow-md cursor-pointer hover:scale-105 active:scale-95"
                        >
                            Quiero Registrarme →
                        </button>
                    </div>

                    {/* Botón Ocultar detalles centrado al final */}
                    <div className="mt-6">
                        <button
                            type="button"
                            onClick={handleCerrar}
                            className="text-xs font-bold uppercase text-text-dark hover:text-text-dark/80 bg-black/5 hover:bg-black/10 px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-xs"
                        >
                            Ocultar detalles ↑
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
