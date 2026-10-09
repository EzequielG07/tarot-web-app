'use client';

import { useState } from 'react';
import { ServicesMyWork } from '../sections/ServicesMyWork';
import { ServicesCards } from '../sections/ServicesCards';
import { CardDetalleExpandido } from '@/components/ui/CardDetalleExpandido';
import { SERVICIOS_DATA } from '@/data/serviciosData';

export const ServicesContainer = () => {
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

    const selectedCard = SERVICIOS_DATA.find((item) => item.id === selectedCardId) || null;

    const handleToggle = (id: string) => {
        setSelectedCardId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="w-full bg-bg-main p-4 sm:p-6 lg:p-8 flex flex-col">
            {/* Grilla principal con altura unificada basada en contenido */}
            <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                {/* Columna Izquierda: MyWork (~42%) */}
                <div className="lg:col-span-5 w-full h-full flex flex-col">
                    <ServicesMyWork />
                </div>

                {/* Columna Derecha: Cards + Título (~58%) */}
                <div className="lg:col-span-7 w-full h-full flex flex-col">
                    <ServicesCards
                        selectedCardId={selectedCardId}
                        onToggle={handleToggle}
                    />
                </div>
            </div>

            {/* Contenedor expandible a lo ancho completo debajo de ambos bloques */}
            <CardDetalleExpandido
                tarjetaActiva={selectedCard}
                onCerrar={() => setSelectedCardId(null)}
            />
        </section>
    );
};
