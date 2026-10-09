'use client';

import { useState } from 'react';
import { InquiriesMainContent } from '../sections/InquiriesMainContent';
import { InquiriesCards } from '../sections/InquiriesCards';
import { CardDetalleExpandido } from '@/components/ui/CardDetalleExpandido';
import { RECURSOS_DATA } from '@/data/recursosData';

export const InquiriesContainer = () => {
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

    const selectedCard = RECURSOS_DATA.find((item) => item.id === selectedCardId) || null;

    const handleToggle = (id: string) => {
        setSelectedCardId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="w-full bg-bg-main p-4 sm:p-6 lg:p-8 flex flex-col">
            {/* Grilla principal con altura unificada basada en contenido */}
            <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                {/* Columna Izquierda: Main Content (~33%) */}
                <div className="lg:col-span-4 w-full h-full flex flex-col">
                    <InquiriesMainContent />
                </div>

                {/* Columna Derecha: Cards + Título (~67%) */}
                <div className="lg:col-span-8 w-full h-full flex flex-col">
                    <InquiriesCards
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
