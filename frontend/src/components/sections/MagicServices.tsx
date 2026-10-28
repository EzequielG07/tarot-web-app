// src/components/sections/MagicServices.tsx
'use client';

import { useState } from 'react';
import { MagicServicesExpandido } from './MagicServicesExpandido';

export interface MagicServicesProps {
    estaAbierto?: boolean;
    onToggle?: () => void;
}

export const MagicServices = ({
    estaAbierto: propEstaAbierto,
    onToggle,
}: MagicServicesProps = {}) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const estaAbierto = propEstaAbierto !== undefined ? propEstaAbierto : internalOpen;

    const handleToggle = () => {
        if (onToggle) {
            onToggle();
        } else {
            setInternalOpen((prev) => !prev);
        }
    };

    return (
        <section id="servicios-magia" className="w-full bg-bg-main p-4 sm:p-6 lg:p-8 flex flex-col">
            {/* Contenedor principal a lo ancho de la web (inspirado en BlogSidebar sin video) */}
            <div
                id="magic-services"
                className={`relative w-full max-w-none flex flex-col items-center justify-center p-6 sm:p-10 lg:p-14 rounded-3xl overflow-hidden text-center transition-all duration-500 bg-indigo-950 border border-white/10 shadow-xl ${estaAbierto ? 'ring-2 ring-amber-400/50 shadow-amber-950/30' : ''
                    }`}
            >
                {/* Contenedor interno centrado y espacioso */}
                <div className="w-full space-y-6 relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto my-auto">
                    {/* Badge temático */}
                    <div>
                        <span className="inline-block text-xs font-semibold font-serif tracking-widest uppercase text-btn-light bg-white/5 px-4 py-1.5 rounded-full border border-white/10 shadow-2xs">
                            ENERGÍA CUÁNTICA RADIÓNICA Y MAGIA PSÍQUICA
                        </span>
                    </div>

                    {/* Título de la sección */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bodoni font-bold tracking-wide uppercase text-text-light leading-snug">
                        Sesión de Energía Cuántica Radiónica y Magia Psíquica
                    </h2>

                    {/* Subtítulo */}
                    <p className="text-base sm:text-lg lg:text-xl font-serif italic text-btn-light/95 max-w-2xl mx-auto">
                        Cuando necesitás mirar tu energía desde otra perspectiva.
                    </p>

                    {/* Texto descriptivo principal */}
                    <div className="space-y-4 max-w-3xl mx-auto text-sm sm:text-base font-serif text-text-light/90 leading-relaxed text-center sm:text-justify pt-1">
                        <p>
                            Una sesión especializada a través de la combinación de Máquinas Radionicas de alta precisión, Radiestesia y herramientas de Parapsicología, creando un abordaje personalizado de exploración y transformación energética, en una integración de energías sutiles, tecnología y prácticas místicas, para abordar la transformación en el ser, en una reestructuración cuántica completa.
                        </p>
                        <p>
                            Se realiza una lectura del campo energético desde una perspectiva simbólica y espiritual, identificando aspectos que pueden estar asociados a sensación de estancamiento, desgaste o falta de armonía, para liberar esos bloqueos y devolver la fluidez en tu vida cotidiana.
                        </p>
                    </div>

                    {/* Botón interactivo para desplegar detalle */}
                    <div className="pt-3">
                        <button
                            type="button"
                            onClick={handleToggle}
                            aria-expanded={estaAbierto}
                            aria-controls="panel-magic-services-expandido"
                            className="inline-block px-7 py-3 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-all uppercase font-bold text-xs tracking-wider shrink-0 cursor-pointer shadow-md hover:scale-105 active:scale-95"
                        >
                            {estaAbierto ? 'Ocultar Experiencia Cuántica ↑' : 'Explorar Experiencia Cuántica ↓'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Contenedor expandible a lo ancho completo */}
            <MagicServicesExpandido
                estaAbierto={estaAbierto}
                onCerrar={() => {
                    if (onToggle) {
                        onToggle();
                    } else {
                        setInternalOpen(false);
                    }
                }}
            />
        </section>
    );
};

export default MagicServices;
