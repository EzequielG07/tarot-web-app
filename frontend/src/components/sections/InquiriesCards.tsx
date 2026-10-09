// src/components/sections/InquiriesCards.tsx

'use client';

import { CardExpandible } from '@/components/ui/CardExpandible';
import { RECURSOS_DATA } from '@/data/recursosData';
import Link from 'next/link';

interface InquiriesCardsProps {
    selectedCardId: string | null;
    onToggle: (id: string) => void;
}

export const InquiriesCards = ({ selectedCardId, onToggle }: InquiriesCardsProps) => {
    return (
        <div className="w-full h-full flex flex-col justify-start rounded-2xl p-4 sm:p-6 border-2 border-dashed border-emerald-500/60">
            {/* Título arriba con margen responsive */}
            <div className="mb-6 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bodoni font-bold text-text-dark">
                    ¿NO SABÉS QUÉ NECESITÁS?
                </h2>
                <p className="text-base sm:text-lg font-serif text-text-dark/90 leading-relaxed">
                    No hace falta que sepas qué servicio elegir. Contame qué estás viviendo y te voy a orientar hacia el abordaje más adecuado para vos.
                </p>
                <div className="pt-2">
                    <Link
                        href="/schedule"
                        className="inline-block px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors uppercase font-bold text-xs shrink-0"
                    >
                        QUIERO SABER QUÉ NECESITO →
                    </Link>
                </div>
            </div>

            {/* Grilla responsive de tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 items-stretch justify-items-center">
                {RECURSOS_DATA.map((item) => (
                    <CardExpandible
                        key={item.id}
                        id={item.id}
                        logoSrc={item.logoSrc}
                        logoAlt={item.logoAlt}
                        titulo={item.titulo}
                        descripcionCorta={item.descripcionCorta}
                        contenidoExpandido={item.contenidoExpandido}
                        bgClass={item.bgClass}
                        estaAbierto={selectedCardId === item.id}
                        onToggle={() => onToggle(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

