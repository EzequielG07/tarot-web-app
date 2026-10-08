// src/components/sections/ServicesCards.tsx

'use client';

import { useState } from 'react';
import { CardExpandible } from '@/components/ui/CardExpandible';
import { CardDetalleExpandido } from '@/components/ui/CardDetalleExpandido';
import { SERVICIOS_DATA } from '@/data/serviciosData';

export const ServicesCards = () => {
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

    const selectedCard = SERVICIOS_DATA.find((item) => item.id === selectedCardId) || null;

    const handleToggle = (id: string) => {
        setSelectedCardId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="w-full min-h-[470px] flex flex-col justify-start border-2 border-violet-500 p-4 rounded-xl">
            {/* Título arriba con margen inferior fijo */}
            <div className="m-6">
                <h2 className="text-2xl font-serif font-bold text-text-dark">
                    ELEGÍ TU EXPERIENCIA según lo que estás viviendo y encontrá el espacio adecuado para vos.
                </h2>
            </div>

            {/* Grilla con posición fija */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
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

