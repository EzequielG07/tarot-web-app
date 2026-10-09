// src/components/sections/ServicesCards.tsx

'use client';

import { CardExpandible } from '@/components/ui/CardExpandible';
import { SERVICIOS_DATA } from '@/data/serviciosData';

interface ServicesCardsProps {
    selectedCardId: string | null;
    onToggle: (id: string) => void;
}

export const ServicesCards = ({ selectedCardId, onToggle }: ServicesCardsProps) => {
    return (
        <div className="w-full h-full flex flex-col justify-start rounded-2xl p-4 sm:p-6 border-2 border-dashed border-emerald-500/60">
            {/* Título arriba con margen responsive */}
            <div className="mb-6 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bodoni font-bold text-text-dark">
                    ELEGÍ TU EXPERIENCIA según lo que estás viviendo y encontrá el espacio adecuado para vos.
                </h2>
            </div>

            {/* Grilla responsive de tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch justify-items-center">
                {SERVICIOS_DATA.map((item) => (
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

