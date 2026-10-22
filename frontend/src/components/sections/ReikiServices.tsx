'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export interface ReikiServiceItem {
    id: string;
    tag?: string;
    badgeColor?: string;
    titulo: string;
    subtitulo?: string;
    resumen: string;
    precioDuracion?: string;
    contenidoCompleto: React.ReactNode;
}

const REIKI_SERVICES: ReikiServiceItem[] = [
    {
        id: 'reiki-usui',
        tag: 'Sistema Tradicional',
        badgeColor: 'bg-stone-100 text-text-dark/80 border-stone-200/70',
        titulo: 'Reiki Usui · El Despertar del Equilibrio',
        subtitulo: 'Volvé a encontrar un espacio de calma',
        resumen: 'Reiki Usui propone un momento de pausa, relajación y conexión interior mediante una práctica energética tradicional. Ideal para acompañar procesos de relajación, descanso y equilibrio emocional.',
        precioDuracion: '50 min · $ 50,000 · USD 50. / 1 hr 20 min · $ 65,000 · USD 70.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-base font-serif italic text-text-dark/95 leading-relaxed">
                    Volvé a encontrar un espacio de calma.
                </p>
                <div className="space-y-3 text-sm font-serif text-text-dark/90 leading-relaxed">
                    <p>
                        Reiki Usui propone un momento de pausa, relajación y conexión interior mediante una práctica energética tradicional.
                    </p>
                    <p>
                        Ideal para quienes buscan acompañar procesos de relajación, descanso, equilibrio emocional y bienestar integral.
                    </p>
                </div>
                <div className="space-y-2 pt-3 border-t border-stone-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            50 min · $ 50,000 · USD 50.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Agendar Sesión (50 min) →
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            1 hr 20 min · $ 65,000 · USD 70.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Agendar Sesión (80 min) →
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'alineacion-chakras',
        tag: 'Chakras & Aura',
        badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
        titulo: 'Alineación de Chakras y Armonización Vital',
        subtitulo: 'Cuando necesitás volver a encontrar tu centro',
        resumen: 'Una sesión enfocada en el trabajo energético de los principales centros de energía. Incluye trabajo sobre los 7 chakras, campo áurico y protección energética.',
        precioDuracion: '50 min · $ 50,000 · USD 50. / 1 hr 20 min · $ 65,000 · USD 70.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Cuando necesitás volver a encontrar tu centro.
                </p>
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Una sesión enfocada en el trabajo energético de los principales centros de energía, acompañada de una mirada integral sobre tu estado actual.
                </p>
                <div className="bg-stone-50 rounded-xl p-3 text-xs sm:text-sm font-serif text-text-dark/85 border border-stone-200/60">
                    Incluye trabajo sobre los 7 chakras, campo áurico y protección energética.
                </div>
                <div className="space-y-2 pt-3 border-t border-stone-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            50 min · $ 50,000 · USD 50.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Armonizar mis Chakras (50 min) →
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            1 hr 20 min · $ 65,000 · USD 70.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Armonizar mis Chakras (80 min) →
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'karmic-reiki',
        tag: 'Liberación Kármica',
        badgeColor: 'bg-purple-50 text-purple-800 border-purple-200/60',
        titulo: 'Karmic Reiki · Liberación de Lazos y Patrones',
        subtitulo: 'Para explorar aquello que parece repetirse una y otra vez',
        resumen: 'Abordaje espiritual orientado a trabajar sobre patrones repetitivos, vínculos y apegos que necesitás comprender y soltar. Una experiencia de introspección y liberación.',
        precioDuracion: '50 min · $ 50,000 · USD 50. / 1 hr 20 min · $ 65,000 · USD 70.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Para explorar aquello que parece repetirse una y otra vez.
                </p>
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Un abordaje espiritual orientado a trabajar energéticamente sobre patrones repetitivos, vínculos, apegos y situaciones que sentís que necesitás comprender y soltar.
                </p>
                <p className="text-xs sm:text-sm font-serif text-text-dark/80">
                    Una experiencia de introspección y liberación energética profunda.
                </p>
                <div className="space-y-2 pt-3 border-t border-stone-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            50 min · $ 50,000 · USD 50.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Sesión Karmic Reiki (50 min) →
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            1 hr 20 min · $ 65,000 · USD 70.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Sesión Karmic Reiki (80 min) →
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'karuna-reiki',
        tag: 'Compasión y Sanación',
        badgeColor: 'bg-rose-50 text-rose-800 border-rose-200/60',
        titulo: 'Karuna Reiki · Sanación desde la Compasión',
        subtitulo: 'Un espacio para tratarte con más suavidad',
        resumen: 'Karuna significa acción compasiva. Propone un trabajo energético para cultivar armonía interior, calma, aceptación y conexión profunda con uno mismo.',
        precioDuracion: '50 min · $ 50,000 · USD 50. / 1 hr 20 min · $ 65,000 · USD 70.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Un espacio para tratarte con más suavidad.
                </p>
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Karuna significa acción compasiva. Esta práctica propone un trabajo energético orientado a cultivar armonía interior, calma, aceptación y conexión con uno mismo.
                </p>
                <p className="text-xs sm:text-sm font-serif text-text-dark/80 bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                    Una experiencia especialmente pensada para momentos en los que necesitás contención y profundidad.
                </p>
                <div className="space-y-2 pt-3 border-t border-stone-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            50 min · $ 50,000 · USD 50.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Experimentar Karuna Reiki (50 min) →
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            1 hr 20 min · $ 65,000 · USD 70.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Experimentar Karuna Reiki (80 min) →
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'reiki-jin-kei-do',
        tag: 'Sabiduría en Movimiento',
        badgeColor: 'bg-amber-50 text-amber-900 border-amber-200/60',
        titulo: 'Reiki Jin Kei Do · Sabiduría en Movimiento',
        subtitulo: 'Silenciar el ruido para volver a escucharte',
        resumen: 'Integra Reiki, respiración consciente, atención interior y presencia. Ideal para mentes activas, líderes y terapeutas que buscan despejar el canal mental y fluir.',
        precioDuracion: '50 min · $ 50,000 · USD 50. / 1 hr 20 min · $ 65,000 · USD 70.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Silenciar el ruido para volver a escucharte.
                </p>
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Una práctica que integra Reiki, respiración consciente, atención interior y trabajo energético.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Especialmente interesante para quienes buscan desarrollar claridad, concentración, presencia e intuición. Ideal para mentes activas, líderes y terapeutas que necesitan despejar el canal mental, para optimizar la intuición y fluidez en sus decisiones.
                </p>
                <div className="space-y-2 pt-3 border-t border-stone-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            50 min · $ 50,000 · USD 50.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Experimentar Jin Kei Do (50 min) →
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            1 hr 20 min · $ 65,000 · USD 70.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Experimentar Jin Kei Do (80 min) →
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'hara-reiki',
        tag: 'Centro de Poder',
        badgeColor: 'bg-orange-50 text-orange-900 border-orange-200/60',
        titulo: 'Hará Reiki · Tu Centro de Poder Vital',
        subtitulo: 'Volvé a tu eje y recupera tu estabilidad',
        resumen: 'Si sufres de fatiga, dispersión o indecisión. Centramos tu energía en el Hara para recuperar el equilibrio físico, enraizamiento y estabilidad emocional.',
        precioDuracion: '50 min · $ 50,000 · USD 50. / 1 hr 20 min · $ 65,000 · USD 70.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Volvé a tu eje.
                </p>
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Si sufres de fatiga, dispersión o indecisión. Centramos tu energía en el Hara para recuperar el equilibrio físico, el enraizamiento y la estabilidad emocional. Recupera tu vitalidad y potencial.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    El trabajo sobre el Hara se orienta al centro energético asociado simbólicamente con el enraizamiento, estabilidad, presencia y fuerza interior. Una propuesta para quienes sienten dispersión y desean recuperar su centro y equilibrio.
                </p>
                <div className="space-y-2 pt-3 border-t border-stone-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            50 min · $ 50,000 · USD 50.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Volver a mi Centro (50 min) →
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            1 hr 20 min · $ 65,000 · USD 70.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Volver a mi Centro (80 min) →
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'reiki-arcangeles',
        tag: 'Sintonía de Luz',
        badgeColor: 'bg-sky-50 text-sky-900 border-sky-200/60',
        titulo: 'Reiki con Arcángeles · Sintonía de Luz',
        subtitulo: 'Un espacio de calma, protección y conexión espiritual',
        resumen: 'Combina el Reiki con el simbolismo y la energía de los Arcángeles para brindar consuelo, restauración energética del ser, amor puro y profunda paz interior.',
        precioDuracion: '50 min · $ 50,000 · USD 50. / 1 hr 20 min · $ 65,000 · USD 70.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Un espacio de calma, protección y conexión espiritual.
                </p>
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Una experiencia que combina el Reiki con el simbolismo y la energía espiritual de los Arcángeles, para almas que anhelan consuelo, claridad espiritual o un refugio.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Una sesión que envuelve en frecuencia sutil en un espacio de amor puro, paz y restauración energética del ser. Pensada para quienes buscan contención, serenidad, claridad y una experiencia espiritual profunda.
                </p>
                <div className="space-y-2 pt-3 border-t border-stone-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            50 min · $ 50,000 · USD 50.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Sesión Arcángeles (50 min) →
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            1 hr 20 min · $ 65,000 · USD 70.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Sesión Arcángeles (80 min) →
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'apertura-tercer-ojo',
        tag: 'Visión Interior',
        badgeColor: 'bg-indigo-50 text-indigo-900 border-indigo-200/60',
        titulo: 'Apertura del Tercer Ojo · Visión Interior',
        subtitulo: 'Cuando querés escuchar con mayor claridad tu propia intuición',
        resumen: 'Experiencia energética orientada al desarrollo de la percepción interior, la introspección y la sensibilidad intuitiva. Para silenciar el ruido y conectar con tu mundo interior.',
        precioDuracion: '50 min · $ 60,000 · USD 60.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Cuando querés escuchar con mayor claridad tu propia intuición.
                </p>
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Una experiencia energética orientada al desarrollo de la percepción interior, la introspección y la sensibilidad intuitiva.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Un espacio para silenciar el exceso de ruido, conectar con tu mundo interior y explorar nuevas formas de percepción.
                </p>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-serif font-semibold text-text-dark/80">
                        50 min · $ 60,000 · USD 60.
                    </div>
                    <Link
                        href="/schedule"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                    >
                        Despertar mi Intuición →
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 'reiki-ninos-adolescentes',
        tag: 'Niños & Jóvenes',
        badgeColor: 'bg-teal-50 text-teal-900 border-teal-200/60',
        titulo: 'Reiki para Niños y Adolescentes',
        subtitulo: 'Acompañamiento sereno en cada etapa de crecimiento',
        resumen: 'Espacio de contención y templanza para equilibrar el campo vibratorio, favorecer la calma y un descanso reparador, abordando tensiones y transiciones de crecimiento.',
        precioDuracion: '50 min · $ 50,000 · USD 50. / 1 hr 20 min · $ 65,000 · USD 70.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Cada etapa necesita una forma diferente de acompañamiento.
                </p>
                <p className="text-sm sm:text-base font-serif text-text-dark/90 leading-relaxed">
                    Espacio de contención, serenidad y templanza para equilibrar el campo vibratorio, calma y descanso reparador.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Donde las tensiones externas y transiciones propias son abordadas con guía comprensiva para que reconecten con su propio eje y estabilidad energética.
                </p>
                <div className="space-y-2 pt-3 border-t border-stone-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            50 min · $ 50,000 · USD 50.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Sesión Reiki Niños (50 min) →
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            1 hr 20 min · $ 65,000 · USD 70.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Sesión Reiki Niños (80 min) →
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'reiki-mascotas',
        tag: 'Mascotas & Animales',
        badgeColor: 'bg-amber-50 text-amber-900 border-amber-200/60',
        titulo: 'Reiki para Mascotas · Armonía y Bienestar',
        subtitulo: 'Porque ellos también perciben el ambiente que los rodea',
        resumen: 'Sesión sutil para reconfortar a animales de compañía ante mudanzas, miedos, decaimiento o estrés ambiental, devolviéndoles su vitalidad y serenidad natural.',
        precioDuracion: '30 min · $ 35,000 · USD 40. / 50 min · $ 50,000 · USD 50.',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Porque ellos también perciben el ambiente que los rodea.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Nuestros compañeros animales son puros, sensibles y absorben las tensiones de su entorno. Esta sesión sutil equilibra su campo vibratorio para reconfortarlos ante mudanzas, miedos, decaimiento o transiciones físicas, devolviéndoles su vitalidad y serenidad natural.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Una práctica energética ideal para que mascotas y animales fluyan armónicamente en momentos de cambios, adaptación, estrés ambiental o situaciones que alteran su rutina. Una experiencia de bienestar y relajación complementaria.
                </p>
                <div className="space-y-2 pt-3 border-t border-stone-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            30 min · $ 35,000 · USD 40.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Sesión Mascotas (30 min) →
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            50 min · $ 50,000 · USD 50.
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                        >
                            Sesión Mascotas (50 min) →
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'registros-akashicos',
        tag: 'Registros Akáshicos',
        badgeColor: 'bg-violet-50 text-violet-900 border-violet-200/60',
        titulo: 'Registros Akáshicos · La Memoria Sagrada del Alma',
        subtitulo: 'Preguntas profundas. Nuevas perspectivas',
        resumen: 'Introspección espiritual para comprender procesos, vínculos y aprendizajes desde una mirada elevada. Conecta con la memoria de tu ser para hallar claridad y propósito.',
        precioDuracion: 'Consulta personalizada',
        contenidoCompleto: (
            <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif italic text-text-dark/70">
                    Preguntas profundas. Nuevas perspectivas.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Una experiencia espiritual de introspección destinada a quienes buscan comprender determinados procesos, vínculos, aprendizajes y etapas de su vida desde una mirada elevada. Conecta con la biblioteca etérica de tu ser para desvelar el origen de tus bloqueos y recordar tu propósito divino.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed">
                    Un espacio para escuchar, reflexionar y encontrar nuevas perspectivas sobre tu camino.
                </p>
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs font-serif italic text-text-dark/70">
                        Consulta personalizada / Información previa
                    </span>
                    <Link
                        href="/schedule"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                    >
                        Consultar sobre Registros →
                    </Link>
                </div>
            </div>
        ),
    },
];

export const ReikiServices = () => {
    const [selectedService, setSelectedService] = useState<ReikiServiceItem | null>(null);

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
        <section id="servicios-reiki" className="w-full bg-bg-main p-4 sm:p-6 lg:p-8 flex flex-col">
            <div className="w-full bg-area-servicios/95 rounded-3xl p-5 sm:p-7 lg:p-8 border border-border-accent/40 shadow-xs flex flex-col text-text-dark space-y-8">
                {/* Cabecera de la sección */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="inline-block text-xs font-semibold font-serif tracking-widest uppercase text-text-dark/70 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200/80">
                        Sistema Reiki & Sanación
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bodoni font-bold uppercase tracking-wide text-text-dark">
                        SISTEMA DE SANACIÓN Y ARMONIZACIÓN REIKI
                    </h2>
                    <p className="text-sm sm:text-base font-serif italic text-text-dark/85">
                        Espacios de pausa, equilibrio y conexión interior mediante prácticas energéticas tradicionales y especializadas.
                    </p>
                </div>

                {/* Grilla de rectángulos: reducida 15% en ancho (max-w-[85%]) y altura a la mitad (h-[175px]) */}
                <div className="w-full max-w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">
                    {REIKI_SERVICES.map((item) => (
                        <article
                            key={item.id}
                            className="bg-white/95 rounded-2xl p-3.5 sm:p-4 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-[175px] group overflow-hidden"
                        >
                            {/* Parte superior de la tarjeta */}
                            <div className="overflow-hidden">
                                <div className="flex items-center justify-between gap-1.5 mb-1.5">
                                    <span className={`text-[10px] font-serif font-medium px-2 py-0.5 rounded-full border truncate ${item.badgeColor || 'bg-stone-100 text-text-dark/80 border-stone-200/70'}`}>
                                        {item.tag || 'Reiki'}
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
                    aria-labelledby="modal-reiki-title"
                    onClick={(e) => {
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
                                    {selectedService.tag || 'Reiki'}
                                </span>
                            </div>

                            <h3
                                id="modal-reiki-title"
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

// Exportar también como ReikiService para conveniencia
export const ReikiService = ReikiServices;
export default ReikiServices;
