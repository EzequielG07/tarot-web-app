// src/components/ui/CardDetalleExpandido.tsx

'use client';

import { CardData } from '@/types/cards';

interface CardDetalleExpandidoProps {
    tarjetaActiva: CardData | null;
    onCerrar: () => void;
}

export const CardDetalleExpandido = ({
    tarjetaActiva,
    onCerrar,
}: CardDetalleExpandidoProps) => {
    return (
        <div
            id={tarjetaActiva ? `panel-detalle-${tarjetaActiva.id}` : undefined}
            className={`grid transition-all duration-700 ease-in-out w-full ${
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
                        <h3 className="text-xl font-serif font-bold text-text-dark uppercase mb-4 tracking-wide">
                            {tarjetaActiva.titulo}
                        </h3>

                        <div className="w-full text-sm font-serif text-text-dark/90 leading-relaxed max-w-4xl text-left sm:text-justify mb-6">
                            {typeof tarjetaActiva.contenidoExpandido === 'string' ? (
                                <p>{tarjetaActiva.contenidoExpandido}</p>
                            ) : (
                                tarjetaActiva.contenidoExpandido
                            )}
                        </div>

                        {/* Botón Ocultar detalles centrado al final */}
                        <button
                            onClick={onCerrar}
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
