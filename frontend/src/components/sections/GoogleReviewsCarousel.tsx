// src/components/sections/GoogleReviewsCarousel.tsx
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { REVIEWS_DATA, GOOGLE_PROFILE_DATA } from '@/data/reviewsData';

export const GoogleReviewsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const touchStartX = useRef<number | null>(null);

    // Calcular cuántas tarjetas mostrar según el ancho de pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, REVIEWS_DATA.length - visibleCards);

    // Asegurar que currentIndex no quede fuera de rango al cambiar tamaño de pantalla
    useEffect(() => {
        setCurrentIndex((prev) => Math.min(prev, Math.max(0, REVIEWS_DATA.length - visibleCards)));
    }, [visibleCards]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    // Movimiento automático garantizado cada 3.5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 3500);

        return () => clearInterval(timer);
    }, [handleNext]);

    // Manejo de gestos táctiles (Swipe en móvil)
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diffX = touchStartX.current - e.changedTouches[0].clientX;
        if (diffX > 40) {
            handleNext();
        } else if (diffX < -40) {
            handlePrev();
        }
        touchStartX.current = null;
    };

    return (
        <section
            id="opiniones"
            className="scroll-mt-24 w-full bg-bg-main p-4 sm:p-6 lg:p-8 flex flex-col"
        >
            <div className="w-full bg-area-servicios/95 rounded-3xl p-5 sm:p-8 lg:p-10 border border-border-accent/40 shadow-xs flex flex-col text-text-dark space-y-6 sm:space-y-8">
                {/* Cabecera de la sección */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    {/* Badge Google oficial */}
                    <div className="flex items-center justify-center gap-2">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold font-serif tracking-widest uppercase text-text-dark/80 bg-stone-100 px-4 py-1.5 rounded-full border border-stone-200/80 shadow-2xs">
                            {/* Logo SVG oficial de Google */}
                            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                />
                            </svg>
                            Google Reviews · {GOOGLE_PROFILE_DATA.calificacion} Estrellas
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bodoni font-bold uppercase tracking-wide text-text-dark">
                        Lo que dicen quienes ya consultaron
                    </h2>

                    <p className="text-sm sm:text-base font-serif italic text-text-dark/85">
                        Experiencias y testimonios reales dejados por consultantes en el perfil de Google de Anita Tarot & Reiki.
                    </p>

                    {/* Calificación de 5 estrellas y enlace a Google Maps */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                        <div className="flex items-center gap-1.5">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 text-amber-400 fill-current drop-shadow-2xs"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            <span className="ml-1 text-xs sm:text-sm font-bold font-serif text-text-dark">
                                5.0 / 5.0
                            </span>
                        </div>

                        <a
                            href={GOOGLE_PROFILE_DATA.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold font-serif uppercase tracking-wider text-btn-dark bg-btn-light hover:bg-btn-light-hover px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xs"
                        >
                            Ver en Google Maps ↗
                        </a>
                    </div>
                </div>

                {/* Contenedor del Carrusel */}
                <div className="relative w-full overflow-hidden px-1">
                    <div
                        className="w-full overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                            }}
                        >
                            {REVIEWS_DATA.map((review) => (
                                <div
                                    key={review.id}
                                    className="shrink-0 px-2 sm:px-3"
                                    style={{ width: `${100 / visibleCards}%` }}
                                >
                                    <div className="bg-white/95 rounded-2xl p-5 sm:p-7 border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full min-h-[220px]">
                                        {/* Parte superior de la tarjeta */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between gap-3">
                                                {/* Autor con iniciales */}
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-btn-light/40 border border-amber-300/40 text-text-dark font-bold font-bodoni flex items-center justify-center text-xs shrink-0 shadow-2xs">
                                                        {review.iniciales}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bodoni font-bold text-sm sm:text-base text-text-dark leading-tight">
                                                            {review.autor}
                                                        </h3>
                                                        <span className="text-[10px] font-serif text-text-dark/60 block">
                                                            {review.fecha || 'Google Reviews'}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Icono de Google sutil */}
                                                <svg className="w-4 h-4 shrink-0 opacity-80" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        fill="#4285F4"
                                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                    />
                                                    <path
                                                        fill="#34A853"
                                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                    />
                                                    <path
                                                        fill="#FBBC05"
                                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                                    />
                                                    <path
                                                        fill="#EA4335"
                                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                                    />
                                                </svg>
                                            </div>

                                            {/* Estrellas */}
                                            <div className="flex items-center gap-1">
                                                {[...Array(review.calificacion)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-4 h-4 text-amber-400 fill-current"
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>

                                            {/* Texto del comentario */}
                                            <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed italic pt-1">
                                                &ldquo;{review.texto}&rdquo;
                                            </p>
                                        </div>

                                        {/* Pie de tarjeta: Verificada */}
                                        <div className="pt-4 mt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-serif text-text-dark/65">
                                            <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Opinión verificada
                                            </span>
                                            <span>Google</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botones de navegación (Flechas izquierda / derecha) */}
                    <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Opinión anterior"
                        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-text-dark border border-stone-200/90 shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-10 text-sm sm:text-base font-bold"
                    >
                        ←
                    </button>

                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Siguiente opinión"
                        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-text-dark border border-stone-200/90 shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-10 text-sm sm:text-base font-bold"
                    >
                        →
                    </button>
                </div>

                {/* Paginación por puntos (dots) */}
                <div className="flex items-center justify-center gap-2 pt-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Ir al grupo de opiniones ${idx + 1}`}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                                currentIndex === idx
                                    ? 'w-7 bg-btn-dark'
                                    : 'w-2 bg-text-dark/20 hover:bg-text-dark/40'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
