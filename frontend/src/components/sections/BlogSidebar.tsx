'use client';

import { useState } from 'react';

export interface BlogSidebarProps {
    estaAbierto?: boolean;
    onToggle?: () => void;
}

export const BlogSidebar = ({
    estaAbierto: propEstaAbierto,
    onToggle,
}: BlogSidebarProps = {}) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const estaAbierto = propEstaAbierto !== undefined ? propEstaAbierto : internalOpen;

    const handleToggle = () => {
        if (onToggle) {
            onToggle();
        } else {
            setInternalOpen((prev) => !prev);
        }
    };

    return (
        <div
            id="blog-sidebar"
            className={`relative w-full h-full max-w-none flex flex-col items-center justify-center lg:border-l lg:border-gray-500/10 lg:pl-8 p-6 rounded-2xl overflow-hidden text-center transition-all duration-300 ${
                estaAbierto ? 'ring-2 ring-amber-400/50 shadow-lg' : ''
            }`}
        >
            {/* Video de fondo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            >
                <source src="/videos/backgrounds/frecuencia-bg.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
            </video>

            {/* Contenedor interno centrado vertical y horizontalmente */}
            <div className="mt-5 w-full space-y-6 relative z-10 flex flex-col items-center justify-center max-w-sm flex-1 my-auto">
                {/* Título de la sección */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bodoni font-bold tracking-wide uppercase text-text-light">
                    Frecuencia Sacerdotista
                </h2>

                {/* Texto descriptivo */}
                <p className="text-lg sm:text-xl font-serif text-text-light">
                    El conocimiento que despierta cuando decidís mirar más allá de lo evidente.
                </p>
                <p className="text-lg sm:text-xl font-serif text-text-light">
                    Un espacio creado por Anita Tarotista para explorar parapsicología, energía, intuición, rituales, autoconocimiento y espiritualidad práctica.
                </p>
                {/* Botón interactivo para desplegar detalle */}
                <div className="pt-2">
                    <button
                        type="button"
                        onClick={handleToggle}
                        aria-expanded={estaAbierto}
                        aria-controls="panel-blog-sidebar-expandido"
                        className="inline-block px-5 py-2.5 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-all uppercase font-bold text-xs shrink-0 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                    >
                        {estaAbierto ? 'Ocultar Frecuencia Sacerdotisa ↑' : 'Explorar Frecuencia Sacerdotisa ↓'}
                    </button>
                </div>
            </div>
        </div>
    );
};

