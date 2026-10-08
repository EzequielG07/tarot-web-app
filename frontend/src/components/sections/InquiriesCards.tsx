// src/components/sections/InquiriesCards.tsx

'use client';

import { useState } from 'react';
import { CardExpandible } from '@/components/ui/CardExpandible';
import { CardDetalleExpandido } from '@/components/ui/CardDetalleExpandido';
import { RECURSOS_DATA } from '@/data/recursosData';
import Link from 'next/link';

export const InquiriesCards = () => {
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

    const selectedCard = RECURSOS_DATA.find((item) => item.id === selectedCardId) || null;

    const handleToggle = (id: string) => {
        setSelectedCardId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="w-full min-h-[470px] flex flex-col justify-start">
            {/* Título arriba con margen inferior fijo */}
            <div className="m-6">
                <h2 className="text-2xl font-serif font-bold text-text-dark">¿NO SABÉS QUÉ NECESITÁS?</h2>
                <p className="text-lg sm:text-xl font-serif text-text-dark">
                    No hace falta que sepas qué servicio elegir. Contame qué estás viviendo y te voy a orientar hacia el abordaje más adecuado para vos.</p>
                <div className="pt-2">
                    <Link
                        href="/schedule"
                        className="inline-block px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors uppercase font-bold text-xs shrink-0"
                    >
                        QUIERO SABER QUÉ NECESITO →
                    </Link>
                </div>
            </div>

            {/* Grilla con posición fija */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-start">
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
                        onToggle={() => handleToggle(item.id)}
                    />
                ))}
            </div>

            {/* Contenedor expandible a lo ancho de la pantalla/sección */}
            <CardDetalleExpandido
                tarjetaActiva={selectedCard}
                onCerrar={() => setSelectedCardId(null)}
            />
        </div>
    );
};

