// src/components/ui/CardExpandible.tsx

'use client';

import Image from 'next/image';
import { CardData } from '@/types/cards';

export interface CardExpandibleProps extends CardData {
    estaAbierto?: boolean;
    onToggle?: () => void;
}

export const CardExpandible = ({
    id,
    logoSrc,
    logoAlt,
    titulo,
    descripcionCorta,
    bgClass = 'bg-card-servicios',
    estaAbierto = false,
    onToggle,
}: CardExpandibleProps) => {
    return (
        <div
            id={`card-${id}`}
            className={`scroll-mt-28 w-full max-w-[220px] mx-auto ${bgClass} rounded-2xl p-5 flex flex-col justify-between text-center h-[380px] transition-all duration-300 ${
                estaAbierto ? 'ring-2 ring-text-dark/40 shadow-lg scale-[1.02]' : 'hover:shadow-md'
            }`}
        >
            {/* Bloque superior */}
            <div className="w-full flex flex-col items-center flex-1 justify-around py-2">
                <div className="relative w-30 h-30 mb-2 flex-shrink-0">
                    <Image src={logoSrc} alt={logoAlt} fill className="object-contain" />
                </div>

                <div className="min-h-[48px] flex items-center justify-center my-1">
                    <h3 className="text-base font-bodoni font-bold text-text-dark uppercase leading-snug line-clamp-2">
                        {titulo}
                    </h3>
                </div>

                <div className="flex-1 flex items-center justify-center my-1">
                    <p className="text-xs font-serif text-text-dark/90 leading-relaxed line-clamp-4">
                        {descripcionCorta}
                    </p>
                </div>
            </div>

            {/* Bloque inferior */}
            <div className="w-full flex flex-col items-center mt-auto pt-2 flex-shrink-0">
                <button
                    onClick={onToggle}
                    aria-expanded={estaAbierto}
                    aria-controls={`panel-detalle-${id}`}
                    className="text-[11px] font-bold uppercase text-text-dark hover:text-text-dark/80 transition-colors cursor-pointer py-1"
                >
                    {estaAbierto ? 'Ocultar detalles ↑' : 'Ver detalles ↓'}
                </button>
            </div>
        </div>
    );
};

