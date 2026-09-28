// src/components/sections/FrecuenciaSacerdotisaSection.tsx
'use client';

import Image from 'next/image';

export const FrecuenciaRegister = () => {
    return (
        <section className="relative w-full min-h-[320px] flex items-center overflow-hidden py-12 px-6 sm:px-12 lg:px-20 border-y border-white/10">
            {/* Imagen de fondo ocupando el 100% del ancho de la pantalla */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/backgrounds/register-bg.png" // Ruta de tu imagen
                    alt="Fondo Frecuencia Sacerdotisa"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay sutil para legibilidad del texto */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Contenedor interno del contenido (centrado y limitado en ancho para no pegarse a los bordes de la pantalla) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Columna 1: Textos (6 cols) */}
                <div className="lg:col-span-6 space-y-2 text-left">
                    <p className="text-xs font-serif font-medium uppercase tracking-widest text-text-light/80">
                        Forma Parte de
                    </p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold uppercase text-text-light tracking-wide leading-tight">
                        FRECUENCIA SACERDOTISA
                    </h2>

                    <p className="text-xs sm:text-sm font-serif text-text-light/90 leading-relaxed max-w-lg">
                        Recibí reflexiones, mensajes del oráculo y rituales exclusivos directo en tu casilla de correo
                        para acompañar tu proceso de transformación.
                    </p>
                </div>

                {/* Columna 2: Input + Botón integrados como un semicírculo unificado (6 cols) */}
                <div className="lg:col-span-6 w-full flex items-center justify-center lg:justify-end">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="w-full max-w-md flex items-center bg-white/10 border border-white/20 backdrop-blur-md rounded-full p-1.5 focus-within:border-amber-400/80 transition-all shadow-lg"
                    >
                        {/* Campo del Email */}
                        <input
                            type="email"
                            placeholder="Tu email..."
                            className="w-full bg-transparent px-4 py-2.5 text-xs sm:text-sm font-serif text-text-light placeholder:text-text-light/50 focus:outline-none"
                            required
                        />

                        {/* Botón Integrado */}
                        <button
                            type="submit"
                            className="shrink-0 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-serif font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-md"
                        >
                            QUIERO REGISTRARME
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
