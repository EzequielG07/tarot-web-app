'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { usePrecios, PrecioItemInfo } from '@/context/PreciosContext';
import { useMemo } from 'react';

export interface EnergyServiceItem {
    id: string;
    tag?: string;
    badgeColor?: string;
    titulo: string;
    subtitulo?: string;
    resumen: string;
    precioDuracion?: string;
    // Detalle completo para el modal
    contenidoCompleto: React.ReactNode;
}

export const getEnergyServices = (getPrecio: (id: string) => PrecioItemInfo): EnergyServiceItem[] => [
    {
        id: 'lecturas-tarot',
        tag: 'Servicios Energéticos',
        titulo: 'Lecturas de Tarot, Videncia y Oráculos',
        subtitulo: 'Cuando necesitás comprender lo que está pasando, una mirada diferente puede abrir nuevas perspectivas.',
        resumen: 'Soy Anita Tarotista, Maestra Parapsicóloga y Psíquica Vidente. Combino videncia natural, Tarot, Oráculos, Péndulo de Luz y otras herramientas de percepción para realizar consultas personalizadas.',
        precioDuracion: 'Consulta personalizada',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-base font-serif italic text-text-dark/95 leading-relaxed">
                    Cuando necesitás comprender lo que está pasando, una mirada diferente puede abrir nuevas perspectivas.
                </p>
                <div className="space-y-3 text-sm font-serif text-text-dark/90 leading-relaxed">
                    <p className="font-semibold text-text-dark">
                        Soy Anita Tarotista, Maestra Parapsicóloga y Psíquica Vidente.
                    </p>
                    <p>
                        Combino videncia natural, Tarot, Oráculos, Péndulo de Luz y otras herramientas de percepción para realizar consultas personalizadas según aquello que quieras explorar.
                    </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs font-serif font-semibold text-text-dark/80">
                        Atención Personalizada
                    </span>
                    <Link
                        href={getWhatsAppUrl("¡Hola Anita! Quisiera consultar por una Lectura de Tarot, Videncia y Oráculos personalizada. ¿Cómo podemos coordinar?")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-all font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow-md cursor-pointer shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Elegir mi Lectura →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'orientacion-express',
        tag: 'WhatsApp',
        badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
        titulo: 'Orientación Express',
        subtitulo: 'Respuesta rápida y puntual para tus dudas',
        resumen: 'Para una consulta concreta que necesita una orientación breve y puntual.',
        precioDuracion: getPrecio('orientacion-express').labelText,
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Para una consulta concreta que necesita una orientación breve y puntual. Ideal si tenés una decisión inmediata que tomar o necesitás confirmar una percepción rápida.
                </p>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        {getPrecio('orientacion-express').labelText}
                    </div>
                    <Link
                        href={getWhatsAppUrl(`¡Hola Anita! Quisiera solicitar una Orientación Express (${getPrecio('orientacion-express').labelText}). ¿Cómo podemos coordinar?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Quiero mi Orientación →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'lectura-claridad',
        tag: 'Lectura',
        titulo: 'Lectura de Claridad',
        subtitulo: 'Orientación profunda sobre tu presente',
        resumen: 'Para una situación puntual, una pregunta concreta o un momento en el que necesitás orientación.',
        precioDuracion: getPrecio('lectura-claridad').labelText,
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Para una situación puntual, una pregunta concreta o un momento en el que necesitás orientación. Una sesión focalizada para disipar la confusión y encontrar dirección clara en tus caminos.
                </p>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        {getPrecio('lectura-claridad').labelText}
                    </div>
                    <Link
                        href={getWhatsAppUrl(`¡Hola Anita! Quisiera reservar una Lectura de Claridad (${getPrecio('lectura-claridad').labelText}). ¿Cómo podemos coordinar?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Reservar 30 Min →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'sesion-integral-claridad',
        tag: 'Tu consulta más completa',
        badgeColor: 'bg-btn-light/80 text-text-dark border-btn-light',
        titulo: 'Sesión Integral de Claridad',
        subtitulo: 'Videncia + Tarot + Lectura de Manos + Péndulo',
        resumen: 'Integra, según las necesidades de la consulta, Videncia + Tarot + Lectura de Manos + Péndulo de Luz. Ideal para explorar una situación que requiere una mirada más amplia.',
        precioDuracion: getPrecio('sesion-integral-claridad').labelText,
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Integra, según las necesidades de la consulta, Videncia + Tarot + Lectura de Manos + Péndulo de Luz.
                </p>
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/80 bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                    Ideal para explorar una situación que requiere una mirada más amplia y detallada desde múltiples disciplinas de percepción.
                </p>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        {getPrecio('sesion-integral-claridad').labelText}
                    </div>
                    <Link
                        href={getWhatsAppUrl(`¡Hola Anita! Quisiera reservar la Sesión Integral de Claridad (${getPrecio('sesion-integral-claridad').labelText}). ¿Cómo podemos coordinar?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Reservar Sesión →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'diagnostico-energetico-profundo',
        tag: 'Diagnóstico',
        titulo: 'Diagnóstico Energético y Lectura Profunda',
        subtitulo: 'Mapa holístico de tu momento actual',
        resumen: 'Una mirada integral sobre tu momento energético y las áreas que pueden requerir atención. Incluye consideraciones astrológicas, numerología, radiestesia y videncia.',
        precioDuracion: getPrecio('diagnostico-energetico-profundo').labelText,
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Una mirada integral sobre tu momento energético y las áreas que pueden requerir atención.
                </p>
                <div className="bg-stone-50 rounded-xl p-3.5 text-xs sm:text-sm font-serif text-text-dark/85 border border-stone-200/60">
                    Incluye consideraciones astrológicas a tener en cuenta, numerología, radiestesia, tarot, oráculo y videncia.
                </div>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        {getPrecio('diagnostico-energetico-profundo').labelText}
                    </div>
                    <Link
                        href={getWhatsAppUrl(`¡Hola Anita! Quisiera solicitar el Diagnóstico Energético y Lectura Profunda (${getPrecio('diagnostico-energetico-profundo').labelText}). ¿Cómo podemos coordinar?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Quiero mi Diagnóstico →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'diagnostico-sesion-armonizacion',
        tag: 'Experiencia Premium',
        badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
        titulo: 'Diagnóstico + Sesión de Armonización',
        subtitulo: 'Encuentro extendido de diagnóstico y acción',
        resumen: 'Una experiencia integral para quienes necesitan comprender y trabajar su situación. Combina diagnóstico energético, lectura y sesión de armonización en un único encuentro extendido.',
        precioDuracion: getPrecio('diagnostico-sesion-armonizacion').labelText,
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Una experiencia integral para quienes necesitan comprender y trabajar su situación.
                </p>
                <div className="bg-stone-50 rounded-xl p-4 text-xs sm:text-sm font-serif text-text-dark/85 space-y-2 border border-stone-200/60">
                    <p className="font-semibold text-text-dark">• Primero observamos y exploramos.</p>
                    <p className="font-semibold text-text-dark">• Después trabajamos energéticamente.</p>
                    <p className="pt-1 italic text-text-dark/80">
                        Esta experiencia combina diagnóstico energético, lectura y sesión de armonización en un único encuentro extendido.
                    </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        {getPrecio('diagnostico-sesion-armonizacion').labelText}
                    </div>
                    <Link
                        href={getWhatsAppUrl(`¡Hola Anita! Quisiera reservar la Experiencia Premium: Diagnóstico + Sesión de Armonización (${getPrecio('diagnostico-sesion-armonizacion').labelText}). ¿Cómo podemos coordinar?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Reservar Experiencia Premium →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'limpieza-armonizacion-proteccion',
        tag: 'Armonización',
        titulo: 'Limpieza · Armonización y Protección',
        subtitulo: 'Liberación de estrés, angustia y miedos',
        resumen: 'Para quienes sienten pesadez, estancamiento o necesidad de renovación energética. Liberación de cargas emocionales. Incluye diagnóstico energético inicial.',
        precioDuracion: '30 min · $ 45,000 · USD 30. / 50 min · $ 60,000 · USD 50.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Para quienes sienten pesadez, estancamiento o necesidad de renovación energética. Liberación de estrés, angustia, miedos. Incluye diagnóstico energético inicial.
                </p>
                <div className="space-y-3 pt-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            30 min · $ 45,000 · USD 30.
                        </span>
                        <Link
                            href={getWhatsAppUrl("¡Hola Anita! Quisiera reservar la sesión de Limpieza, Armonización y Protección (30 min - $ 45,000 / USD 30). ¿Cómo podemos coordinar?")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                        >
                            Quiero Armonizarme (30 min) →
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            50 min · $ 60,000 · USD 50.
                        </span>
                        <Link
                            href={getWhatsAppUrl("¡Hola Anita! Quisiera reservar la sesión de Limpieza, Armonización y Protección (50 min - $ 60,000 / USD 50). ¿Cómo podemos coordinar?")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                        >
                            Quiero Armonizarme (50 min) →
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'limpieza-destrabe-caminos',
        tag: 'Destrabe',
        titulo: 'Limpieza, Destrabe y Apertura de Caminos',
        subtitulo: 'Cuando sentís que necesitás movimiento',
        resumen: 'Hay momentos en los que una situación parece repetirse. Combina limpieza y trabajo energético orientado a acompañar procesos de amor, trabajo, dinero y proyectos.',
        precioDuracion: getPrecio('limpieza-destrabe-caminos').labelText,
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Cuando sentís que necesitás movimiento.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Hay momentos en los que una situación parece repetirse: proyectos que no avanzan, oportunidades que no llegan o áreas de la vida que sentís detenidas.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Esta sesión combina limpieza y trabajo energético de destrabe, orientado a acompañar procesos relacionados con amor, trabajo, dinero y proyectos.
                </p>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        {getPrecio('limpieza-destrabe-caminos').labelText}
                    </div>
                    <Link
                        href={getWhatsAppUrl(`¡Hola Anita! Quisiera consultar y solicitar una sesión de Limpieza, Destrabe y Apertura de Caminos (${getPrecio('limpieza-destrabe-caminos').labelText}). ¿Cómo podemos coordinar?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Quiero Abrir Caminos →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'limpieza-espacios',
        tag: 'Espacios',
        titulo: 'Limpieza y Armonización de Espacios',
        subtitulo: 'Casas · Locales · Consultorios · Terrenos',
        resumen: '¿Sentís que un espacio perdió su armonía? Una limpieza energética permite disolver cargas y recuperar una atmósfera más liviana, equilibrada y agradable.',
        precioDuracion: getPrecio('limpieza-espacios').labelText,
        contenidoCompleto: (
            <div className="space-y-4">
                <div className="text-xs font-serif text-text-dark/70 bg-stone-100 px-3 py-1 rounded-lg inline-block border border-stone-200/60">
                    Casas · Locales comerciales · Consultorios · Fincas · Terrenos
                </div>
                <p className="text-xs sm:text-sm font-serif font-semibold text-text-dark">
                    ¿Sentís que un espacio perdió su armonía?
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Hay lugares que parecen acumular tensión, cansancio o una sensación difícil de explicar. Una limpieza energética permite trabajar energéticamente sobre esas cargas y recuperar una atmósfera más liviana, equilibrada y agradable.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    En espacios comerciales, el abordaje puede orientarse a armonizar el ambiente, favorecer una sensación de apertura y acompañar nuevos ciclos, proyectos y movimientos de prosperidad. Trabajo personalizado según las características del lugar y la necesidad planteada.
                </p>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        {getPrecio('limpieza-espacios').labelText}
                    </div>
                    <Link
                        href={getWhatsAppUrl(`¡Hola Anita! Quisiera consultar por la Limpieza y Armonización de Espacios (${getPrecio('limpieza-espacios').labelText}). ¿Cómo podemos coordinar?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Consulta Armonizar mi Espacio →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'banos-limpias-desbloqueo',
        tag: 'Rituales',
        titulo: 'Baños y Limpias de Desbloqueo',
        subtitulo: 'Cuando sentís que necesitás soltar y volver a avanzar',
        resumen: 'Prácticas de purificación y renovación diseñadas de manera personalizada: amor, prosperidad, proyectos, protección y nuevos comienzos. Un ritual para marcar un antes y un después.',
        precioDuracion: '50 min · $ 60,000 · USD 60.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Cuando sentís que necesitás soltar y volver a avanzar.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Los baños y limpias energéticas forman parte de antiguas prácticas de purificación y renovación. Se diseñan de manera personalizada según aquello que quieras trabajar: amor, prosperidad, proyectos, protección, apertura y nuevos comienzos.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Un ritual pensado para marcar un antes y un después, cerrar ciclos y recuperar tu sensación de movimiento.
                </p>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        {getPrecio('banos-limpias-desbloqueo').labelText}
                    </div>
                    <Link
                        href={getWhatsAppUrl(`¡Hola Anita! Quisiera consultar por los Baños y Limpias de Desbloqueo (${getPrecio('banos-limpias-desbloqueo').labelText}). ¿Cómo podemos coordinar?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Consulta mi Limpia →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'parapsicologia-integral',
        tag: 'Parapsicología',
        titulo: 'Parapsicología Integral',
        subtitulo: 'Cuando lo evidente no alcanza para comprender lo que vivís',
        resumen: 'Aborda fenómenos y experiencias que escapan a las explicaciones habituales. Evaluación de situaciones inusuales desde una mirada de observación, análisis y exploración espiritual.',
        precioDuracion: '50 min · $ 60,000 · USD 60.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Cuando lo evidente no alcanza para comprender lo que estás viviendo. ¿Ruidos inexplicables? ¿Movimiento de objetos? ¿Malos olores? ¿Mala racha?
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    La Parapsicología aborda fenómenos y experiencias que escapan a las explicaciones habituales, desde una mirada de observación, análisis y exploración espiritual.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Si atravesás experiencias inusuales, sensaciones extrañas en determinados espacios o situaciones que necesitás comprender desde otra perspectiva, podemos realizar una evaluación personalizada del caso.
                </p>
                <p className="text-xs sm:text-sm font-serif font-medium text-text-dark leading-relaxed bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                    El objetivo es ordenar la experiencia, identificar qué aspectos requieren atención y determinar qué tipo de abordaje puede resultar adecuado. La evidencia de lo inexplicable, interpretada con maestría.
                </p>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        {getPrecio('parapsicologia-integral').labelText}
                    </div>
                    <Link
                        href={getWhatsAppUrl(`¡Hola Anita! Quisiera una Consulta Personalizada de Parapsicología Integral (${getPrecio('parapsicologia-integral').labelText}). ¿Cómo podemos coordinar?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Consulta Personalizada →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'sanaciones-ancestrales',
        tag: 'Linaje y Vínculos',
        titulo: 'Sanaciones Ancestrales',
        subtitulo: 'Comprender tus raíces para transformar tus patrones',
        resumen: 'Trabajo sobre patrones familiares, lealtades invisibles y cargas emocionales heredadas. Una experiencia de introspección, liberación simbólica y reconexión.',
        precioDuracion: '50 min · $ 60,000 · USD 60.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Comprender tus raíces también puede ayudarte a comprender tus patrones.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    A veces repetimos historias, vínculos o formas de relacionarnos que parecen venir de muy atrás. Desde una mirada espiritual y simbólica, las Sanaciones Ancestrales trabajan sobre patrones familiares, lealtades invisibles, vínculos y cargas emocionales heredadas.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Una experiencia de introspección, liberación simbólica y reconexión con tu propia historia.
                </p>
                <div className="bg-amber-50/80 border border-amber-200/70 rounded-xl p-3 text-[11px] font-serif text-amber-950 leading-relaxed">
                    <span className="font-bold">Importante:</span> Las Sanaciones Ancestrales y prácticas energéticas ofrecidas tienen un propósito complementario, espiritual y de bienestar personal. No sustituyen, reemplazan ni interfieren con el diagnóstico, tratamiento o seguimiento indicado por médicos u otros profesionales de la salud.
                </div>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        {getPrecio('sanaciones-ancestrales').labelText}
                    </div>
                    <Link
                        href={getWhatsAppUrl(`¡Hola Anita! Quisiera agendar una Sesión de Sanación Ancestral (${getPrecio('sanaciones-ancestrales').labelText}). ¿Cómo podemos coordinar?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Sesión Sanación Ancestral →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'talismanes-amuletos',
        tag: 'Consagración',
        titulo: 'Talismanes y Amuletos de Poder',
        subtitulo: 'Un objeto creado especialmente para acompañar tu intención',
        resumen: 'Piezas consagradas combinando simbolismo e intención para propósitos de protección, prosperidad, amor, confianza y nuevos comienzos.',
        precioDuracion: 'Preparación personalizada',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Un objeto creado especialmente para acompañar tu intención.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Los talismanes y amuletos personalizados combinan simbolismo, intención y consagración energética para crear un objeto único.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Pueden orientarse a diferentes propósitos personales, como protección, prosperidad, amor, confianza, apertura y nuevos comienzos. Cada pieza se prepara de manera personalizada, de acuerdo con la intención que quieras trabajar.
                </p>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs font-serif font-semibold text-text-dark/80">
                        Pieza artesanal y consagrada
                    </span>
                    <Link
                        href={getWhatsAppUrl("¡Hola Anita! Quisiera consultar por la creación de un Talismán o Amuleto de Poder personalizado y consagrado. ¿Podrías brindarme más información?")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Crear mi Talismán →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'alta-magia-ritual',
        tag: 'Alta Magia',
        titulo: 'Alta Magia Ritual y Psíquica',
        subtitulo: 'Apertura de caminos, cortes de daño y victoria',
        resumen: 'Cuando la fuerza de voluntad no basta, el trabajo energético abre puertas. Cortes de daño, apertura de caminos y rituales de éxito para el dominio de tu propio destino.',
        precioDuracion: '50 min · $ 60,000 · USD 60.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Cuando querés trabajar energéticamente sobre un objetivo específico.
                </p>
                <div className="text-xs font-serif text-text-dark/70 bg-stone-100 px-3 py-1 rounded-lg inline-block border border-stone-200/60">
                    Apertura de caminos · Protección · Prosperidad · Amor · Éxito · Nuevos proyectos
                </div>
                <p className="text-xs sm:text-sm font-serif font-semibold text-text-dark leading-relaxed">
                    No seas víctima de las circunstancias, toma el control, rompe cadenas y reclama lo que viene por destino.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Cuando la fuerza de voluntad no basta, el trabajo energético abre puertas que el mundo físico te ha cerrado. Cortes de daño y liberación absoluta. Apertura de Caminos. Rituales de Éxito y Victoria. Trabajos en General, soluciones personalizadas para el dominio de tu propio destino. Cada trabajo se evalúa previamente para determinar el enfoque y las herramientas adecuadas.
                </p>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        {getPrecio('alta-magia-ritual').labelText}
                    </div>
                    <Link
                        href={getWhatsAppUrl(`¡Hola Anita! Quisiera consultar mi caso para un trabajo de Alta Magia Ritual y Psíquica (${getPrecio('alta-magia-ritual').labelText}). ¿Cómo podemos coordinar?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Consultar mi Caso →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'clarividencia-activa',
        tag: 'Percepción',
        titulo: 'Clarividencia Activa',
        subtitulo: 'Desarrollá una percepción más consciente de tu intuición',
        resumen: 'Espacio para profundizar la sensibilidad intuitiva, percepción y capacidad de interpretación para recibir mensajes nítidos. Se adapta a tu nivel y objetivo.',
        precioDuracion: '50 min · $ 60,000 · USD 60.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Desarrollá una percepción más consciente de tu mundo interior.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Un espacio destinado a quienes desean explorar y profundizar su sensibilidad intuitiva, percepción y capacidad de interpretación, para recibir mensajes nítidos.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Ideal para personas interesadas en Tarot, mancias, prácticas espirituales, holísticas y desarrollo personal. La experiencia se adapta al nivel y objetivo de cada persona.
                </p>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        {getPrecio('clarividencia-activa').labelText}
                    </div>
                    <Link
                        href={getWhatsAppUrl(`¡Hola Anita! Quisiera agendar una sesión de Clarividencia Activa (${getPrecio('clarividencia-activa').labelText}). ¿Cómo podemos coordinar?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Explorar mi Intuición →
                    </Link>
                </div>
            </div>
        ),
    },
];

export const EnergyServices = () => {
    const { getPrecio, preciosList } = usePrecios();
    const energyServices = useMemo(() => getEnergyServices(getPrecio), [getPrecio, preciosList]);
    const [selectedService, setSelectedService] = useState<EnergyServiceItem | null>(null);

    // Cierre con la tecla Escape y bloqueo del scroll de fondo cuando el modal está abierto
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedService(null);
            }
        };

        if (selectedService) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedService]);

    return (
        <section id="servicios-energeticos" className="scroll-mt-24 w-full bg-bg-main p-4 sm:p-6 lg:p-8 flex flex-col">
            <div className="w-full bg-bg-main rounded-3xl p-5 sm:p-7 lg:p-8 border-4 border-amber-400 shadow-xs flex flex-col space-y-8">
                {/* Cabecera de la sección */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="inline-block text-xs font-semibold font-serif tracking-widest uppercase text-text-dark/70 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200/80">
                        Servicios Energéticos
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bodoni font-bold uppercase tracking-wide text-text-light">
                        LECTURAS DE TAROT, VIDENCIA Y ORÁCULOS
                    </h2>
                    <p className="text-sm sm:text-base font-serif italic text-text-light/85">
                        Cuando necesitás comprender lo que está pasando, una mirada diferente puede abrir nuevas perspectivas.
                    </p>
                </div>

                {/* Grilla de 15 rectángulos: reducida 15% en ancho (max-w-[85%]) y altura a la mitad (h-[175px]) */}
                <div className="w-full max-w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">
                    {energyServices.map((item) => (
                        <article
                            key={item.id}
                            className="bg-white/95 rounded-2xl p-3.5 sm:p-4 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-[175px] group overflow-hidden"
                        >
                            {/* Parte superior de la tarjeta */}
                            <div className="overflow-hidden">
                                <div className="flex items-center justify-between gap-1.5 mb-1.5">
                                    <span className={`text-[10px] font-serif font-medium px-2 py-0.5 rounded-full border truncate ${item.badgeColor || 'bg-stone-100 text-text-dark/80 border-stone-200/70'}`}>
                                        {item.tag || 'Servicio'}
                                    </span>
                                </div>

                                <h3 className="text-xs sm:text-[13px] font-bodoni font-bold uppercase text-text-dark tracking-wide line-clamp-1 leading-snug">
                                    {item.titulo}
                                </h3>

                                <div className="mt-1">
                                    <p className="text-[11px] font-serif text-text-dark/80 leading-snug line-clamp-2">
                                        {item.resumen}
                                    </p>
                                    <span className="text-[10px] font-mono text-stone-400 tracking-widest block leading-tight">
                                        ........
                                    </span>
                                </div>
                            </div>

                            {/* Parte inferior de la tarjeta */}
                            <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2 mt-auto shrink-0">
                                <span
                                    title={item.precioDuracion || 'Personalizado'}
                                    className="text-[10px] font-serif font-semibold text-text-dark/70 truncate flex-1 min-w-0"
                                >
                                    {item.precioDuracion || 'Personalizado'}
                                </span>

                                {/* Botón Saber Más que abre el modal */}
                                <button
                                    type="button"
                                    onClick={() => setSelectedService(item)}
                                    className="inline-flex items-center justify-center gap-1 py-1 px-2.5 rounded-lg text-[10px] sm:text-[11px] font-bold font-serif uppercase tracking-wider text-text-dark bg-stone-100 hover:bg-btn-light hover:text-btn-dark transition-all border border-stone-200/80 cursor-pointer shadow-2xs shrink-0"
                                >
                                    <span>Saber Más</span>
                                    <span className="text-xs leading-none">↓</span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Modal para mostrar el contenido completo */}
            {selectedService && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-service-title"
                    onClick={(e) => {
                        // Cierra el modal si se hace clic fuera del contenedor modal (backdrop)
                        if (e.target === e.currentTarget) {
                            setSelectedService(null);
                        }
                    }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
                >
                    <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200/80 overflow-y-auto flex flex-col space-y-5 animate-in zoom-in-95 duration-200">
                        {/* Botón cerrar (X) en la esquina superior */}
                        <button
                            type="button"
                            onClick={() => setSelectedService(null)}
                            aria-label="Cerrar modal"
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200/80 text-text-dark flex items-center justify-center transition-colors cursor-pointer border border-stone-200/70"
                        >
                            <span className="text-base font-bold leading-none">✕</span>
                        </button>

                        {/* Encabezado del modal */}
                        <div className="pr-10 space-y-2">
                            <div className="flex items-center gap-2">
                                <span className={`text-xs font-serif font-medium px-3 py-1 rounded-full border ${selectedService.badgeColor || 'bg-stone-100 text-text-dark/80 border-stone-200/70'}`}>
                                    {selectedService.tag || 'Servicio'}
                                </span>
                            </div>

                            <h3
                                id="modal-service-title"
                                className="text-xl sm:text-2xl font-bodoni font-bold uppercase tracking-wide text-text-dark"
                            >
                                {selectedService.titulo}
                            </h3>

                            {selectedService.subtitulo && (
                                <p className="text-xs sm:text-sm font-serif italic text-text-dark/80">
                                    {selectedService.subtitulo}
                                </p>
                            )}
                        </div>

                        {/* Contenido íntegro y original */}
                        <div className="text-text-dark pt-2">
                            {selectedService.contenidoCompleto}
                        </div>

                        {/* Pie del modal con botón de cierre secundario */}
                        <div className="pt-2 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setSelectedService(null)}
                                className="text-xs font-serif font-bold uppercase text-text-dark/70 hover:text-text-dark bg-stone-100 hover:bg-stone-200/70 px-4 py-2 rounded-full transition-colors cursor-pointer border border-stone-200/60"
                            >
                                Cerrar ventana ↑
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default EnergyServices;
