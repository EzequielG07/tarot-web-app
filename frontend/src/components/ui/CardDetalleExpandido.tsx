// src/components/ui/CardDetalleExpandido.tsx

'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/utils/whatsapp';
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

                        {/* Modalidades con precios, duración y botones de reserva */}
                        {tarjetaActiva.modalidades && tarjetaActiva.modalidades.length > 0 && (
                            <div
                                className={`w-full grid gap-4 mb-6 text-left ${
                                    tarjetaActiva.modalidades.length === 1
                                        ? 'max-w-md mx-auto grid-cols-1'
                                        : tarjetaActiva.modalidades.length === 2
                                        ? 'max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2'
                                        : 'max-w-4xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                                }`}
                            >
                                {tarjetaActiva.modalidades.map((mod, idx) => (
                                    <div
                                        key={mod.id || idx}
                                        className="bg-white/80 hover:bg-white/95 backdrop-blur-xs rounded-xl p-5 border border-black/5 shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
                                    >
                                        <div className="space-y-2">
                                            <div className="flex items-start justify-between gap-2">
                                                <h4 className="font-bodoni font-bold text-base text-text-dark uppercase tracking-wide leading-snug">
                                                    {mod.nombre}
                                                </h4>
                                                {mod.tag && (
                                                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-btn-dark/10 text-btn-dark shrink-0">
                                                        {mod.tag}
                                                    </span>
                                                )}
                                            </div>

                                            {mod.descripcion && (
                                                <p className="text-xs font-serif text-text-dark/80 leading-relaxed">
                                                    {mod.descripcion}
                                                </p>
                                            )}
                                        </div>

                                        <div className="pt-4 mt-3 border-t border-black/5 space-y-3">
                                            <div className="text-xs font-serif font-bold text-text-dark">
                                                {mod.precioDuracion}
                                            </div>
                                            <Link
                                                href={getWhatsAppUrl(`¡Hola Anita! Me gustaría reservar la opción "${mod.nombre}" de "${tarjetaActiva.titulo}" (${mod.precioDuracion}). ¿Cómo podemos coordinar?`)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wider shadow-xs ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                                            >
                                                Reservar →
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Nota final adicional si existe */}
                        {tarjetaActiva.notaFinal && (
                            <p className="text-xs font-serif italic text-text-dark/75 text-center max-w-2xl mb-6">
                                {tarjetaActiva.notaFinal}
                            </p>
                        )}

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
