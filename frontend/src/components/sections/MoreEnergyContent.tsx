'use client';

import Link from 'next/link';

export const MoreEnergyContent = () => {
    return (
        <div className="w-full h-full bg-area-servicios/95 rounded-3xl p-5 sm:p-7 lg:p-8 border border-border-accent/40 shadow-xs flex flex-col justify-start text-text-dark space-y-6">
            {/* Encabezado Principal */}
            <div className="bg-white/90 rounded-2xl p-6 sm:p-7 border border-stone-200/70 shadow-xs space-y-4">
                <span className="inline-block text-xs font-semibold font-serif tracking-widest uppercase text-text-dark/70 bg-stone-100 px-3 py-1 rounded-full border border-stone-200/80">
                    Servicios Energéticos
                </span>

                <h2 className="text-2xl sm:text-3xl font-bodoni font-bold uppercase tracking-wide text-text-dark">
                    Lecturas de Tarot, Videncia y Oráculos
                </h2>

                <p className="text-base sm:text-lg font-serif italic text-text-dark/95 leading-relaxed">
                    Cuando necesitás comprender lo que está pasando, una mirada diferente puede abrir nuevas perspectivas.
                </p>

                <div className="space-y-3 text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                    <p className="font-semibold text-text-dark">
                        Soy Anita Tarotista, Maestra Parapsicóloga y Psíquica Vidente.
                    </p>
                    <p>
                        Combino videncia natural, Tarot, Oráculos, Péndulo de Luz y otras herramientas de percepción para realizar consultas personalizadas según aquello que quieras explorar.
                    </p>
                </div>

                <div className="pt-2">
                    <Link
                        href="/schedule"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-all font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow-md cursor-pointer"
                    >
                        Elegir mi Lectura →
                    </Link>
                </div>
            </div>

            {/* Subtítulo: Tus Opciones */}
            <div className="pt-2">
                <h3 className="text-lg sm:text-xl font-bodoni font-bold uppercase tracking-wider text-text-dark flex items-center gap-2">
                    <span>Tus Opciones</span>
                    <span className="h-px flex-1 bg-stone-300/80"></span>
                </h3>
            </div>

            {/* Opciones de Lectura */}
            <div className="space-y-4">
                {/* 1. Orientación Express */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                                <span>⚡</span> Orientación Express
                            </h4>
                            <span className="text-xs font-serif font-medium bg-stone-100 text-text-dark/90 px-3 py-1 rounded-full border border-stone-200/60">
                                WhatsApp
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Para una consulta concreta que necesita una orientación breve y puntual.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <div className="text-xs font-serif font-semibold text-text-dark/80">
                            15 minutos · $19.900 · USD 15 · EUR 14
                        </div>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Quiero mi Orientación →
                        </Link>
                    </div>
                </div>

                {/* 2. Lectura de Claridad */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>🔮</span> Lectura de Claridad
                        </h4>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Para una situación puntual, una pregunta concreta o un momento en el que necesitás orientación.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <div className="text-xs font-serif font-semibold text-text-dark/80">
                            30 minutos · $35.000 · USD 30 · EUR 27
                        </div>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Reservar 30 Min →
                        </Link>
                    </div>
                </div>

                {/* 3. Sesión Integral de Claridad */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                                <span>🔮</span> Sesión Integral de Claridad
                            </h4>
                            <span className="text-xs font-serif font-bold text-text-dark bg-btn-light/80 px-2.5 py-0.5 rounded-full">
                                Tu consulta más completa
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Integra, según las necesidades de la consulta, Videncia + Tarot + Lectura de Manos + Péndulo de Luz.
                        </p>
                        <p className="text-xs sm:text-sm font-serif italic text-text-dark/80">
                            Ideal para explorar una situación que requiere una mirada más amplia.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <div className="text-xs font-serif font-semibold text-text-dark/80">
                            50 minutos · $50.000 · USD 50 · EUR 45
                        </div>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Reservar Sesión →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Separador de Sección */}
            <div className="pt-2">
                <h3 className="text-lg sm:text-xl font-bodoni font-bold uppercase tracking-wider text-text-dark flex items-center gap-2">
                    <span>Diagnóstico, Armonización y Destrabe</span>
                    <span className="h-px flex-1 bg-stone-300/80"></span>
                </h3>
            </div>

            <div className="space-y-4">
                {/* 4. Diagnóstico Energético y Lectura Profunda */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>✨</span> Diagnóstico Energético y Lectura Profunda
                        </h4>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Una mirada integral sobre tu momento energético y las áreas que pueden requerir atención.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/80">
                            Incluye consideraciones astrológicas a tener en cuenta, numerología, radiestesia, tarot, oráculo y videncia.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <div className="text-xs font-serif font-semibold text-text-dark/80">
                            50 minutos · $60.000 · USD 60 · EUR 55
                        </div>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Quiero mi Diagnóstico →
                        </Link>
                    </div>
                </div>

                {/* 5. Diagnóstico + Sesión de Armonización */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                                <span>🌿</span> Diagnóstico + Sesión de Armonización
                            </h4>
                            <span className="text-xs font-serif font-semibold bg-emerald-50 text-emerald-800 px-3 py-0.5 rounded-full border border-emerald-200/60">
                                Experiencia Premium
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Una experiencia integral para quienes necesitan comprender y trabajar su situación.
                        </p>
                        <div className="bg-stone-50 rounded-xl p-3 text-xs font-serif text-text-dark/85 space-y-1 border border-stone-200/60">
                            <p>• Primero observamos y exploramos.</p>
                            <p>• Después trabajamos energéticamente.</p>
                            <p className="pt-1 italic">
                                Esta experiencia combina diagnóstico energético, lectura y sesión de armonización en un único encuentro extendido.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <div className="text-xs font-serif font-semibold text-text-dark/80">
                            ⏳ Duración: 1 hora 30 min · $80.000 ARS · USD 80 · EUR 75
                        </div>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Reservar Experiencia Premium →
                        </Link>
                    </div>
                </div>

                {/* 6. Limpieza · Armonización y Protección */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>🧿</span> Limpieza · Armonización y Protección
                        </h4>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Para quienes sienten pesadez, estancamiento o necesidad de renovación energética. Liberación de estrés, angustia, miedos. Incluye diagnóstico energético inicial.
                        </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-stone-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                30 minutos — $45.000 · USD 30 · EUR 28
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Quiero Armonizarme (30 min) →
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                50 minutos — $60.000 · USD 50 · EUR 48
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Quiero Armonizarme (50 min) →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 7. Limpieza, Destrabe y Apertura de Caminos */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>🚪</span> Limpieza, Destrabe y Apertura de Caminos
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Cuando sentís que necesitás movimiento.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Hay momentos en los que una situación parece repetirse: proyectos que no avanzan, oportunidades que no llegan o áreas de la vida que sentís detenidas.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Esta sesión combina limpieza y trabajo energético de destrabe, orientado a acompañar procesos relacionados con amor, trabajo, dinero y proyectos.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <div className="text-xs font-serif font-semibold text-text-dark/80">
                            50 minutos — $60.000 · USD 55 · EUR 50
                        </div>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Quiero Abrir Caminos →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Separador de Sección */}
            <div className="pt-2">
                <h3 className="text-lg sm:text-xl font-bodoni font-bold uppercase tracking-wider text-text-dark flex items-center gap-2">
                    <span>Espacios, Rituales y Parapsicología</span>
                    <span className="h-px flex-1 bg-stone-300/80"></span>
                </h3>
            </div>

            <div className="space-y-4">
                {/* 8. Limpieza y Armonización de Espacios */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark">
                            Limpieza y Armonización de Espacios
                        </h4>
                        <div className="text-xs font-serif text-text-dark/70 bg-stone-100 px-3 py-1 rounded-lg inline-block">
                            Casas · Locales comerciales · Consultorios · Fincas · Terrenos
                        </div>
                        <p className="text-xs sm:text-sm font-serif font-medium text-text-dark">
                            ¿Sentís que un espacio perdió su armonía?
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Hay lugares que parecen acumular tensión, cansancio o una sensación difícil de explicar. Una limpieza energética permite trabajar energéticamente sobre esas cargas y recuperar una atmósfera más liviana, equilibrada y agradable.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            En espacios comerciales, el abordaje puede orientarse a armonizar el ambiente, favorecer una sensación de apertura y acompañar nuevos ciclos, proyectos y movimientos de prosperidad. Trabajo personalizado según las características del lugar y la necesidad planteada.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <div className="text-xs font-serif font-semibold text-text-dark/80">
                            50 minutos · $60.000 · USD 60 · EUR 57
                        </div>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Consulta Armonizar mi Espacio →
                        </Link>
                    </div>
                </div>

                {/* 9. Baños y Limpias de Desbloqueo */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark">
                            Baños y Limpias de Desbloqueo
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Cuando sentís que necesitás soltar y volver a avanzar.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Los baños y limpias energéticas forman parte de antiguas prácticas de purificación y renovación. Se diseñan de manera personalizada según aquello que quieras trabajar: amor, prosperidad, proyectos, protección, apertura y nuevos comienzos.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Un ritual pensado para marcar un antes y un después, cerrar ciclos y recuperar tu sensación de movimiento.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <div className="text-xs font-serif font-semibold text-text-dark/80">
                            50 minutos · $60.000 · USD 60 · EUR 57
                        </div>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Consulta mi Limpia →
                        </Link>
                    </div>
                </div>

                {/* 10. Parapsicología Integral */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark">
                            Parapsicología Integral
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Cuando lo evidente no alcanza para comprender lo que estás viviendo. ¿Ruidos inexplicables? ¿Movimiento de objetos? ¿Malos olores? ¿Mala racha?
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            La Parapsicología aborda fenómenos y experiencias que escapan a las explicaciones habituales, desde una mirada de observación, análisis y exploración espiritual.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Si atravesás experiencias inusuales, sensaciones extrañas en determinados espacios o situaciones que necesitás comprender desde otra perspectiva, podemos realizar una evaluación personalizada del caso.
                        </p>
                        <p className="text-xs sm:text-sm font-serif font-medium text-text-dark leading-relaxed">
                            El objetivo es ordenar la experiencia, identificar qué aspectos requieren atención y determinar qué tipo de abordaje puede resultar adecuado. La evidencia de lo inexplicable, interpretada con maestría.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <div className="text-xs font-serif font-semibold text-text-dark/80">
                            50 minutos · $60.000 · USD 60 · EUR 57
                        </div>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Consulta Personalizada →
                        </Link>
                    </div>
                </div>

                {/* 11. Sanaciones Ancestrales */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark">
                            Sanaciones Ancestrales
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Comprender tus raíces también puede ayudarte a comprender tus patrones.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            A veces repetimos historias, vínculos o formas de relacionarnos que parecen venir de muy atrás. Desde una mirada espiritual y simbólica, las Sanaciones Ancestrales trabajan sobre patrones familiares, lealtades invisibles, vínculos y cargas emocionales heredadas.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Una experiencia de introspección, liberación simbólica y reconexión con tu propia historia.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <div className="text-xs font-serif font-semibold text-text-dark/80">
                            50 minutos · $60.000 · USD 60 · EUR 57
                        </div>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Sesión Sanación Ancestral →
                        </Link>
                    </div>

                    {/* Nota Legal/Importante */}
                    <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-3 text-[11px] font-serif text-amber-950 leading-relaxed">
                        <span className="font-bold">Importante:</span> Las Sanaciones Ancestrales y prácticas energéticas ofrecidas tienen un propósito complementario, espiritual y de bienestar personal. No sustituyen, reemplazan ni interfieren con el diagnóstico, tratamiento o seguimiento indicado por médicos u otros profesionales de la salud. Ante cualquier síntoma, enfermedad o condición de salud, se recomienda realizar la correspondiente consulta con un profesional de la salud.
                    </div>
                </div>

                {/* 12. Talismanes y Amuletos de Poder */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark">
                            Talismanes y Amuletos de Poder
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Un objeto creado especialmente para acompañar tu intención.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Los talismanes y amuletos personalizados combinan simbolismo, intención y consagración energética para crear un objeto único.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Pueden orientarse a diferentes propósitos personales, como protección, prosperidad, amor, confianza, apertura y nuevos comienzos. Cada pieza se prepara de manera personalizada, de acuerdo con la intención que quieras trabajar.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-3 pt-2 border-t border-stone-100">
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Crear mi Talismán →
                        </Link>
                    </div>
                </div>

                {/* 13. Alta Magia Ritual y Psíquica */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark">
                            Alta Magia Ritual y Psíquica
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Cuando querés trabajar energéticamente sobre un objetivo específico.
                        </p>
                        <div className="text-xs font-serif text-text-dark/70 bg-stone-100 px-3 py-1 rounded-lg inline-block">
                            Apertura de caminos · Protección · Liberación de ciclos · Prosperidad · Amor · Éxito · Nuevos proyectos
                        </div>
                        <p className="text-xs sm:text-sm font-serif font-medium text-text-dark leading-relaxed">
                            No seas víctima de las circunstancias, toma el control, rompe cadenas y reclama lo que viene por destino.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Cuando la fuerza de voluntad no basta, el trabajo energético abre puertas que el mundo físico te ha cerrado. Cortes de daño y liberación absoluta. Apertura de Caminos. Rituales de Éxito y Victoria. Trabajos en General, soluciones personalizadas para el dominio de tu propio destino. Cada trabajo se evalúa previamente para determinar el enfoque y las herramientas adecuadas.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <div className="text-xs font-serif font-semibold text-text-dark/80">
                            50 minutos · $60.000 · USD 60 · EUR 57
                        </div>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Consultar mi Caso →
                        </Link>
                    </div>
                </div>

                {/* 14. Clarividencia Activa */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark">
                            Clarividencia Activa
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Desarrollá una percepción más consciente de tu mundo interior.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Un espacio destinado a quienes desean explorar y profundizar su sensibilidad intuitiva, percepción y capacidad de interpretación, para recibir mensajes nítidos.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Ideal para personas interesadas en Tarot, mancias, prácticas espirituales, holísticas y desarrollo personal. La experiencia se adapta al nivel y objetivo de cada persona.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <div className="text-xs font-serif font-semibold text-text-dark/80">
                            50 minutos · $60.000 · USD 60 · EUR 57
                        </div>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Explorar mi Intuición →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
