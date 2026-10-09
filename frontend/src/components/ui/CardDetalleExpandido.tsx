// src/components/ui/CardDetalleExpandido.tsx

'use client';

import { useRef, useEffect } from 'react';
import { CardData } from '@/types/cards';

interface CardDetalleExpandidoProps {
    tarjetaActiva: CardData | null;
    onCerrar: () => void;
}

export const CardDetalleExpandido = ({
    tarjetaActiva,
    onCerrar,
}: CardDetalleExpandidoProps) => {
    const panelRef = useRef<HTMLDivElement>(null);

    // Scroll suave hacia el panel de detalle cuando se despliega
    useEffect(() => {
        if (tarjetaActiva) {
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
    }, [tarjetaActiva?.id]);

    // Retorno suave a la tarjeta correspondiente al hacer clic en "Ocultar detalles"
    const handleCerrar = () => {
        const cardId = tarjetaActiva?.id;
        onCerrar();
        if (cardId) {
            setTimeout(() => {
                const cardElement = document.getElementById(`card-${cardId}`);
                if (cardElement) {
                    cardElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });
                }
            }, 80);
        }
    };

    return (
        <div
            ref={panelRef}
            id={tarjetaActiva ? `panel-detalle-${tarjetaActiva.id}` : undefined}
            className={`scroll-mt-28 grid transition-all duration-700 ease-in-out w-full ${
                tarjetaActiva
                    ? 'grid-rows-[1fr] opacity-100 mt-6'
                    : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
            }`}
        >
            <div className="overflow-hidden">
                {tarjetaActiva && (
                    <div
                        className={`w-full ${
                            tarjetaActiva.bgClass || 'bg-card-servicios'
                        } rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-md transition-colors duration-500`}
                    >
                        <h3 className="text-xl font-bodoni font-bold text-text-dark uppercase mb-4 tracking-wide">
                            {tarjetaActiva.titulo}
                        </h3>

                        <div className="w-full whitespace-pre-line text-sm font-serif text-text-dark/90 leading-relaxed max-w-4xl text-left sm:text-justify mb-6">
                            {typeof tarjetaActiva.contenidoExpandido === 'string' ? (
                                <p>{tarjetaActiva.contenidoExpandido}</p>
                            ) : (
                                tarjetaActiva.contenidoExpandido
                            )}
                        </div>

                        {/* Botón Ocultar detalles centrado al final */}
                        <button
                            type="button"
                            onClick={handleCerrar}
                            className="text-xs font-bold uppercase text-text-dark hover:text-text-dark/80 bg-black/5 hover:bg-black/10 px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-xs"
                        >
                            Ocultar detalles ↑
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
