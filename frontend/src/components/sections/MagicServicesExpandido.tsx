// src/components/sections/MagicServicesExpandido.tsx
'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';

export interface MagicServicesExpandidoProps {
    estaAbierto: boolean;
    onCerrar: () => void;
}

export const MagicServicesExpandido = ({
    estaAbierto,
    onCerrar,
}: MagicServicesExpandidoProps) => {
    const panelRef = useRef<HTMLDivElement>(null);

    // Scroll suave hacia el panel de detalle cuando se despliega
    useEffect(() => {
        if (estaAbierto) {
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
    }, [estaAbierto]);

    // Retorno suave a la sección principal al hacer clic en "Ocultar detalles"
    const handleCerrar = () => {
        onCerrar();
        setTimeout(() => {
            const mainElement = document.getElementById('magic-services');
            if (mainElement) {
                mainElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }, 80);
    };

    return (
        <div
            ref={panelRef}
            id="panel-magic-services-expandido"
            className={`scroll-mt-28 grid transition-all duration-700 ease-in-out w-full ${
                estaAbierto
                    ? 'grid-rows-[1fr] opacity-100 mt-6'
                    : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
            }`}
        >
            <div className="overflow-hidden">
                <div className="w-full bg-card-servicios rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md border border-border-accent/40 transition-colors duration-500 text-text-dark flex flex-col space-y-8">
                    
                    {/* Estructura en 2 Columnas Responsivas (Desktop: 2 cols, Mobile/Tablet: 1 col) */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                        
                        {/* COLUMNA 1: ¿Qué podemos trabajar? + Experiencia Cuántica */}
                        <div className="flex flex-col justify-between h-full space-y-6">
                            <div className="space-y-4">
                                {/* Encabezado Columna 1 */}
                                <div className="space-y-2 text-center lg:text-left">
                                    <span className="inline-block text-[11px] font-serif font-bold uppercase tracking-widest text-text-dark/70 bg-black/5 px-3 py-1 rounded-full border border-stone-200/60">
                                        Energía Cuántica Radiónica
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-bodoni font-bold uppercase tracking-wide text-text-dark">
                                        ¿Qué podemos trabajar?
                                    </h3>
                                    <p className="text-xs sm:text-sm font-serif italic text-text-dark/75">
                                        Áreas clave de armonización, desbloqueo y transformación en el campo cuántico sutil.
                                    </p>
                                </div>

                                {/* Grilla de 4 aspectos de trabajo */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left pt-2">
                                    {/* 1. Limpieza energética */}
                                    <div className="bg-white/95 rounded-2xl p-4 border border-stone-200/80 shadow-2xs space-y-1.5 hover:shadow-xs transition-all flex flex-col justify-start">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-amber-500/80 shrink-0"></span>
                                            <h4 className="text-sm font-bodoni font-bold uppercase text-text-dark leading-snug">
                                                Limpieza energética
                                            </h4>
                                        </div>
                                        <p className="text-xs font-serif text-text-dark/85 leading-relaxed">
                                            Abordaje intenso de cargas y energías percibidas como densas, influencias negativas, entre otros.
                                        </p>
                                    </div>

                                    {/* 2. Protección energética */}
                                    <div className="bg-white/95 rounded-2xl p-4 border border-stone-200/80 shadow-2xs space-y-1.5 hover:shadow-xs transition-all flex flex-col justify-start">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-indigo-500/80 shrink-0"></span>
                                            <h4 className="text-sm font-bodoni font-bold uppercase text-text-dark leading-snug">
                                                Protección energética
                                            </h4>
                                        </div>
                                        <p className="text-xs font-serif text-text-dark/85 leading-relaxed">
                                            Trabajo de armonización y fortalecimiento del campo energético para salvaguardar de agresiones o fugas. Armonización de Chakras y sellado áurico.
                                        </p>
                                    </div>

                                    {/* 3. Apertura de caminos */}
                                    <div className="bg-white/95 rounded-2xl p-4 border border-stone-200/80 shadow-2xs space-y-1.5 hover:shadow-xs transition-all flex flex-col justify-start">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500/80 shrink-0"></span>
                                            <h4 className="text-sm font-bodoni font-bold uppercase text-text-dark leading-snug">
                                                Apertura de caminos
                                            </h4>
                                        </div>
                                        <p className="text-xs font-serif text-text-dark/85 leading-relaxed">
                                            Desbloqueo de frecuencias para destrabar situaciones estancadas, para acompañar nuevos ciclos y procesos de cambio.
                                        </p>
                                    </div>

                                    {/* 4. Proyectos y prosperidad */}
                                    <div className="bg-white/95 rounded-2xl p-4 border border-stone-200/80 shadow-2xs space-y-1.5 hover:shadow-xs transition-all flex flex-col justify-start">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-teal-500/80 shrink-0"></span>
                                            <h4 className="text-sm font-bodoni font-bold uppercase text-text-dark leading-snug">
                                                Proyectos y prosperidad
                                            </h4>
                                        </div>
                                        <p className="text-xs font-serif text-text-dark/85 leading-relaxed">
                                            Calibración cuántica para alinearte con el éxito, abundancia y objetivos. Trabajo enfocado en intención, claridad y movimiento.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta destacada de Sesión Cuántica */}
                            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 border border-stone-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mt-auto">
                                <div className="space-y-1">
                                    <p className="text-xs sm:text-sm font-serif italic text-text-dark/90">
                                        Una sesión integral, personalizada y diferente a una consulta convencional.
                                    </p>
                                    <div className="text-xs sm:text-sm font-serif font-bold text-text-dark/80 pt-0.5">
                                        50 min · $ 60,000 · USD 60.
                                    </div>
                                </div>

                                <Link
                                    href="/schedule"
                                    className="shrink-0 px-5 py-2.5 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-all uppercase font-bold text-xs tracking-wider shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
                                >
                                    Experiencia Cuántica →
                                </Link>
                            </div>
                        </div>

                        {/* COLUMNA 2: Mirar más profundo + Orientación / Consulta */}
                        <div className="flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-stone-200/80 lg:pl-10">
                            <div className="space-y-4">
                                {/* Encabezado Columna 2 */}
                                <div className="space-y-2 text-center lg:text-left">
                                    <span className="inline-block text-[11px] font-serif font-bold uppercase tracking-widest text-text-dark/70 bg-black/5 px-3 py-1 rounded-full border border-stone-200/60">
                                        Abordaje Personalizado
                                    </span>
                                    <h4 className="text-xl sm:text-2xl font-bodoni font-bold uppercase tracking-wide text-text-dark leading-snug">
                                        CUANDO LO EVIDENTE NO ALCANZA, PODEMOS MIRAR MÁS PROFUNDO.
                                    </h4>
                                </div>

                                {/* Párrafos descriptivos */}
                                <div className="space-y-3 text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed text-left sm:text-justify pt-1">
                                    <p>
                                        No todos los procesos necesitan la misma herramienta.
                                    </p>
                                    <p>
                                        Por eso, en Anita Tarotista cada consulta comienza escuchando tu situación para determinar qué tipo de lectura, práctica energética o abordaje puede acompañarte mejor.
                                    </p>
                                    <div className="bg-white/80 p-3.5 rounded-xl border border-stone-200/70 italic text-text-dark/85">
                                        Tarot, Parapsicología, Videncia Natural, Reiki, Radiestesia, Cuántica Radiónica y prácticas espirituales se integran desde una mirada personalizada y profesional.
                                    </div>
                                    <p className="font-semibold text-text-dark">
                                        No se trata de hacer más. Se trata de encontrar el abordaje adecuado para vos.
                                    </p>
                                </div>
                            </div>

                            {/* Tarjeta de llamado a la consulta / orientación */}
                            <div className="p-5 sm:p-6 rounded-2xl bg-bg-card text-text-light flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm border border-white/10 text-center sm:text-left mt-auto">
                                <div className="space-y-1">
                                    <h5 className="text-sm sm:text-base font-bodoni font-bold uppercase tracking-wide text-btn-light">
                                        ¿QUERÉS SABER QUÉ NECESITÁS?
                                    </h5>
                                    <p className="text-xs font-serif text-text-light/90 max-w-xs">
                                        Agendá una consulta y encontremos juntos el camino más adecuado para tu situación.
                                    </p>
                                </div>

                                <Link
                                    href="/schedule"
                                    className="shrink-0 px-5 py-2.5 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-all uppercase font-bold text-xs shadow-xs cursor-pointer hover:scale-105 active:scale-95"
                                >
                                    Quiero ver qué servicio necesito →
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Botón Ocultar detalles centrado al pie de ambas columnas */}
                    <div className="pt-2 flex justify-center w-full border-t border-stone-200/70">
                        <button
                            type="button"
                            onClick={handleCerrar}
                            className="text-xs font-bold uppercase text-text-dark hover:text-text-dark/80 bg-black/5 hover:bg-black/10 px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-xs mt-2"
                        >
                            Ocultar detalles ↑
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MagicServicesExpandido;
