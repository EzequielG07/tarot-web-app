'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CardData } from '@/types/cards';

export const CardExpandible = ({ id, logoSrc, logoAlt, titulo, descripcionCorta, contenidoExpandido }: CardData) => {
    const [estaAbierto, setEstaAbierto] = useState(false);

    return (
        <div
            id={`card-${id}`}
            className={`w-full max-w-[220px] mx-auto bg-card-servicios rounded-2xl p-5 flex flex-col justify-between text-center transition-all duration-700 ease-in-out ${
                estaAbierto ? 'h-auto' : 'h-[380px]'
            }`}
        >
            {/* Bloque superior: Distribución uniforme de Logo, Título y Descripción */}
            <div className="w-full flex flex-col items-center flex-1 justify-around py-2">
                {/* Logo */}
                <div className="relative w-30 h-30 mb-2 flex-shrink-0">
                    <Image src={logoSrc} alt={logoAlt} fill className="object-contain" />
                </div>

                {/* Título con altura reservada para 2 líneas máximo */}
                <div className="min-h-[48px] flex items-center justify-center my-1">
                    <h3 className="text-base font-serif font-bold text-text-dark uppercase leading-snug line-clamp-2">
                        {titulo}
                    </h3>
                </div>

                {/* Descripción corta distribuida */}
                <div className="flex-1 flex items-center justify-center my-1">
                    <p className="text-xs font-serif text-text-dark/90 leading-relaxed line-clamp-4">
                        {descripcionCorta}
                    </p>
                </div>
            </div>

            {/* Bloque inferior: Botón alineado siempre a la base */}
            <div className="w-full flex flex-col items-center mt-auto pt-2 flex-shrink-0">
                <button
                    onClick={() => setEstaAbierto(!estaAbierto)}
                    aria-expanded={estaAbierto}
                    aria-controls={`content-${id}`}
                    className="text-[11px] font-bold uppercase text-text-dark hover:text-text-dark/80 transition-colors cursor-pointer py-1"
                >
                    {estaAbierto ? 'Ocultar detalles ↑' : 'Ver detalles ↓'}
                </button>

                {/* Contenido desplegable animado */}
                <div
                    id={`content-${id}`}
                    className={`grid transition-all duration-700 ease-in-out w-full text-left ${
                        estaAbierto
                            ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-gray-500/10'
                            : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0'
                    }`}
                >
                    <div className="overflow-hidden">{contenidoExpandido}</div>
                </div>
            </div>
        </div>
    );
};
