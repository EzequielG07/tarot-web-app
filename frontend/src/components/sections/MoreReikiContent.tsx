'use client';

import Link from 'next/link';

export const MoreReikiContent = () => {
    return (
        <div className="w-full h-full bg-area-servicios/95 rounded-3xl p-5 sm:p-7 lg:p-8 border border-border-accent/40 shadow-xs flex flex-col justify-start text-text-dark space-y-6">
            {/* Encabezado Principal */}
            <div className="bg-white/90 rounded-2xl p-6 sm:p-7 border border-stone-200/70 shadow-xs space-y-4">
                <span className="inline-block text-xs font-semibold font-serif tracking-widest uppercase text-text-dark/70 bg-stone-100 px-3 py-1 rounded-full border border-stone-200/80">
                    Sistema de Sanación y Armonización Reiki
                </span>

                <h2 className="text-2xl sm:text-3xl font-bodoni font-bold uppercase tracking-wide text-text-dark">
                    Reiki Usui · El Despertar del Equilibrio
                </h2>

                <p className="text-base sm:text-lg font-serif italic text-text-dark/95 leading-relaxed">
                    Volvé a encontrar un espacio de calma.
                </p>

                <div className="space-y-3 text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                    <p>
                        Reiki Usui propone un momento de pausa, relajación y conexión interior mediante una práctica energética tradicional.
                    </p>
                    <p>
                        Ideal para quienes buscan acompañar procesos de relajación, descanso, equilibrio emocional y bienestar integral.
                    </p>
                </div>

                {/* Opciones de Duración para Reiki Usui */}
                <div className="space-y-2 pt-2 border-t border-stone-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            50 minutos · $50.000 · USD 50 · EUR 40
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Agendar Sesión (50 min) →
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                        <span className="text-xs font-serif font-semibold text-text-dark/80">
                            80 minutos · $65.000 · USD 70 · EUR 55
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Agendar Sesión (80 min) →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Separador de Sección */}
            <div className="pt-2">
                <h3 className="text-lg sm:text-xl font-bodoni font-bold uppercase tracking-wider text-text-dark flex items-center gap-2">
                    <span>Especialidades y Sanación Energética</span>
                    <span className="h-px flex-1 bg-stone-300/80"></span>
                </h3>
            </div>

            {/* Lista de Modalidades Reiki */}
            <div className="space-y-4">
                {/* 1. Alineación de Chakras y Armonización Vital */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>✨</span> Alineación de Chakras y Armonización Vital
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Cuando necesitás volver a encontrar tu centro.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Una sesión enfocada en el trabajo energético de los principales centros de energía, acompañada de una mirada integral sobre tu estado actual.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/80">
                            Incluye trabajo sobre los 7 chakras, campo áurico y protección energética.
                        </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-stone-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                50 minutos · $50.000 · USD 50 · EUR 40
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Armonizar mis Chakras (50 min) →
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                80 minutos · $65.000 · USD 70 · EUR 55
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Armonizar mis Chakras (80 min) →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 2. Karmic Reiki · Liberación de Lazos y Patrones */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>🌀</span> Karmic Reiki · Liberación de Lazos y Patrones
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Para explorar aquello que parece repetirse una y otra vez.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Un abordaje espiritual orientado a trabajar energéticamente sobre patrones repetitivos, vínculos, apegos y situaciones que sentís que necesitás comprender y soltar.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/80">
                            Una experiencia de introspección y liberación energética.
                        </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-stone-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                50 minutos · $50.000 · USD 50 · EUR 40
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Sesión Karmic Reiki (50 min) →
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                80 minutos · $65.000 · USD 70 · EUR 55
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Sesión Karmic Reiki (80 min) →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 3. Karuna Reiki · Sanación desde la Compasión */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>🤍</span> Karuna Reiki · Sanación desde la Compasión
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Un espacio para tratarte con más suavidad.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Karuna significa acción compasiva. Esta práctica propone un trabajo energético orientado a cultivar armonía interior, calma, aceptación y conexión con uno mismo.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/80">
                            Una experiencia especialmente pensada para momentos en los que necesitás contención y profundidad.
                        </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-stone-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                50 minutos · $50.000 · USD 50 · EUR 40
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Experimentar Karuna Reiki (50 min) →
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                80 minutos · $65.000 · USD 70 · EUR 55
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Experimentar Karuna Reiki (80 min) →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 4. Reiki Jin Kei Do · Sabiduría en Movimiento */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>🧘</span> Reiki Jin Kei Do · Sabiduría en Movimiento
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Silenciar el ruido para volver a escucharte.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Una práctica que integra Reiki, respiración consciente, atención interior y trabajo energético.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Especialmente interesante para quienes buscan desarrollar claridad, concentración, presencia e intuición. Ideal para mentes activas, líderes y terapeutas que necesitan despejar el canal mental, para optimizar la intuición y fluidez en sus decisiones.
                        </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-stone-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                50 minutos · $50.000 · USD 50 · EUR 40
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Experimentar Jin Kei Do (50 min) →
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                80 minutos · $65.000 · USD 70 · EUR 55
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Experimentar Jin Kei Do (80 min) →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 5. Hará Reiki · Tu Centro de Poder Vital */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>🔥</span> Hará Reiki · Tu Centro de Poder Vital
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Volvé a tu eje.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Si sufres de fatiga, dispersión o indecisión. Centramos tu energía en el Hara para recuperar el equilibrio físico, el enraizamiento y la estabilidad emocional. Recupera tu vitalidad y potencial.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            El trabajo sobre el Hara se orienta al centro energético asociado simbólicamente con el enraizamiento, estabilidad, presencia y fuerza interior. Una propuesta para quienes sienten dispersión y desean recuperar su centro y equilibrio.
                        </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-stone-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                50 minutos · $50.000 · USD 50 · EUR 40
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Volver a mi Centro (50 min) →
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                80 minutos · $65.000 · USD 70 · EUR 55
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Volver a mi Centro (80 min) →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 6. Reiki con Arcángeles · Sintonía de Luz */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>🪽</span> Reiki con Arcángeles · Sintonía de Luz
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Un espacio de calma, protección y conexión espiritual.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Una experiencia que combina el Reiki con el simbolismo y la energía espiritual de los Arcángeles, para almas que anhelan consuelo, claridad espiritual o un refugio.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Una sesión que envuelve en frecuencia sutil en un espacio de amor puro, paz y restauración energética del ser. Pensada para quienes buscan contención, serenidad, claridad y una experiencia espiritual profunda.
                        </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-stone-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                50 minutos · $50.000 · USD 50 · EUR 40
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Sesión Arcángeles (50 min) →
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                80 minutos · $65.000 · USD 70 · EUR 55
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Sesión Arcángeles (80 min) →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 7. Apertura del Tercer Ojo · Visión Interior */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>👁️</span> Apertura del Tercer Ojo · Visión Interior
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Cuando querés escuchar con mayor claridad tu propia intuición.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Una experiencia energética orientada al desarrollo de la percepción interior, la introspección y la sensibilidad intuitiva.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Un espacio para silenciar el exceso de ruido, conectar con tu mundo interior y explorar nuevas formas de percepción.
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
                            Despertar mi Intuición →
                        </Link>
                    </div>
                </div>

                {/* 8. Reiki para Niños y Adolescentes */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>🌱</span> Reiki para Niños y Adolescentes
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Cada etapa necesita una forma diferente de acompañamiento.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Espacio de contención, serenidad y templanza para equilibrar el campo vibratorio, calma y descanso reparador.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Donde las tensiones externas y transiciones propias son abordadas con guía comprensiva para que reconecten con su propio eje y estabilidad energética.
                        </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-stone-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                50 minutos · $50.000 · USD 50 · EUR 40
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Sesión Reiki Niños (50 min) →
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                80 minutos · $65.000 · USD 70 · EUR 55
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Sesión Reiki Niños (80 min) →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 9. Reiki para Mascotas · Armonía y Bienestar */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>🐾</span> Reiki para Mascotas · Armonía y Bienestar
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Porque ellos también perciben el ambiente que los rodea.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Nuestros compañeros animales son puros, sensibles y absorben las tensiones de su entorno. Esta sesión sutil equilibra su campo vibratorio para reconfortarlos ante mudanzas, miedos, decaimiento o transiciones físicas, devolviéndoles su vitalidad y serenidad natural.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Una práctica energética ideal para que mascotas y animales fluyan armónicamente en momentos de cambios, adaptación, estrés ambiental o situaciones que alteran su rutina. Una experiencia de bienestar y relajación complementaria.
                        </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-stone-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                30 minutos · $35.000 · USD 40 · EUR 30
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Sesión Mascotas (30 min) →
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/50">
                            <span className="text-xs font-serif font-semibold text-text-dark/80">
                                50 minutos · $50.000 · USD 50 · EUR 40
                            </span>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                            >
                                Sesión Mascotas (50 min) →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 10. Registros Akáshicos · La Memoria Sagrada del Alma */}
                <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bodoni font-bold uppercase text-text-dark flex items-center gap-2">
                            <span>📜</span> Registros Akáshicos · La Memoria Sagrada del Alma
                        </h4>
                        <p className="text-xs font-serif italic text-text-dark/70">
                            Preguntas profundas. Nuevas perspectivas.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Una experiencia espiritual de introspección destinada a quienes buscan comprender determinados procesos, vínculos, aprendizajes y etapas de su vida desde una mirada elevada. Conecta con la biblioteca etérica de tu ser para desvelar el origen de tus bloqueos y recordar tu propósito divino.
                        </p>
                        <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                            Un espacio para escuchar, reflexionar y encontrar nuevas perspectivas sobre tu camino.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                        <span className="text-xs font-serif italic text-text-dark/70">
                            Consulta personalizada / Información previa
                        </span>
                        <Link
                            href="/schedule"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide shrink-0"
                        >
                            Consultar sobre Registros →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
