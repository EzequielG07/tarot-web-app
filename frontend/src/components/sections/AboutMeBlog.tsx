// src/components/sections/AboutMeBlog.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/utils/whatsapp';

interface RitualData {
    id: number;
    titulo: string;
    subtitulo: string;
    tag: string;
    imagen: string;
    contenido: React.ReactNode;
}

export const AboutMeBlog = () => {
    const [modalActivo, setModalActivo] = useState<number | null>(null);

    // Cierre con la tecla Escape y bloqueo del scroll de fondo cuando el modal está abierto
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setModalActivo(null);
            }
        };

        if (modalActivo !== null) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalActivo]);

    const rituales: RitualData[] = [
        {
            id: 1,
            titulo: 'RITUAL DE LIMPIEZA ENERGÉTICA Y PROTECCIÓN',
            subtitulo: 'Cuando necesitás recuperar la armonía y fortalecer tu protección espiritual',
            tag: 'Limpieza & Protección',
            imagen: '/images/about/thumb-1.png',
            contenido: (
                <div className="space-y-5 text-text-dark text-sm sm:text-base font-serif leading-relaxed">
                    <p className="italic text-text-dark/90 text-base sm:text-lg">
                        Cuando necesitás recuperar la armonía, también es importante fortalecer tu protección espiritual.
                    </p>

                    <p>
                        En las tradiciones esotéricas existen numerosos rituales destinados a simbolizar la limpieza de los ambientes, renovar la energía personal y establecer una intención de protección frente a las influencias externas que generan malestar.
                    </p>

                    <div className="bg-amber-500/10 border-l-4 border-amber-600 p-4 rounded-r-xl">
                        <p className="text-xs sm:text-sm font-semibold text-text-dark/95">
                            Como principio fundamental, recordá que la magia debe utilizarse con responsabilidad. No se trata de buscar el daño ajeno, sino de fortalecer nuestra propia protección, neutralizar simbólicamente las influencias negativas y recuperar la tranquilidad en nuestros espacios cotidianos.
                        </p>
                    </div>

                    <p>
                        Te comparto algunas prácticas tradicionales para incorporar a tus momentos de conexión y cuidado energético:
                    </p>

                    {/* Sección Principal del Ritual */}
                    <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-4">
                        <h4 className="font-bodoni font-bold text-lg sm:text-xl uppercase text-text-dark">
                            1. Ritual de Limpieza Energética del Hogar
                        </h4>

                        <div className="space-y-2 text-xs sm:text-sm">
                            <p>
                                <strong>Objetivo:</strong> Realizar una limpieza energética del ambiente y renovar la intención de armonía y protección del hogar.
                            </p>
                            <p>
                                <strong>Fundamento:</strong> En las tradiciones populares, la ruda, el romero, el incienso, la lavanda y la mirra son elementos asociados a la purificación y la protección espiritual.
                            </p>
                        </div>

                        <div className="p-3.5 bg-white rounded-xl border border-stone-200/60 space-y-2">
                            <p className="font-bold text-xs uppercase tracking-wider text-text-dark/80">
                                Elementos tradicionales:
                            </p>
                            <ul className="list-disc list-inside text-xs sm:text-sm space-y-1 text-text-dark/90">
                                <li>Un puñado de ruda, romero, incienso, lavanda y mirra (todas las hierbas secas; en lo posible, incienso y mirra en granos).</li>
                                <li>Un recipiente resistente al calor y carbón.</li>
                            </ul>
                        </div>

                        <div className="space-y-2.5 text-xs sm:text-sm">
                            <p className="font-bold uppercase tracking-wider text-text-dark/80">
                                Procedimiento:
                            </p>
                            <p>
                                Podés realizar una limpieza energética del hogar utilizando también sahumerios comerciales de triple empaste, aunque las hierbas y los granos son mucho más potentes para sahumar, siguiendo siempre las indicaciones de seguridad.
                            </p>
                            <p>
                                Prendé el carbón y espolvoreá las hierbas. Recorré los ambientes con una intención clara de renovación, prestando especial atención a los rincones y puertas. Iniciá el recorrido desde la última habitación hacia la puerta de entrada.
                            </p>
                            <p>
                                Podés complementar con aguas consagradas y sonidos de alta vibración, en frecuencias como 417 Hz, Solfeggio 741 Hz, o bien mantrear una oración al santo de tu devoción.
                            </p>
                            <p>
                                Una vez finalizado, recordá sacarte toda la vestimenta y lavarla, y date un baño utilizando un jabón de descarga o bien con un preparado de agua, vinagre y sal gruesa. Realizá la práctica siempre con ventilación adecuada y todas las medidas de seguridad.
                            </p>
                        </div>
                    </div>

                    {/* Cierre / Llamado */}
                    <div className="p-5 bg-stone-100 rounded-2xl border border-stone-200 text-center space-y-3">
                        <h5 className="font-bodoni font-bold text-base sm:text-lg uppercase tracking-wide text-text-dark">
                            ¿Querés aprender más sobre limpieza y protección espiritual?
                        </h5>
                        <p className="text-xs sm:text-sm text-text-dark/90">
                            Estos rituales son apenas una introducción al fascinante mundo de las prácticas esotéricas de limpieza, armonización y protección.
                        </p>
                        <p className="text-xs sm:text-sm text-text-dark/90">
                            En <strong>COMUNIDAD FRECUENCIA SACERDOTISA</strong> encontrarás conocimientos, técnicas y enseñanzas para profundizar en el arte de la protección espiritual y las tradiciones mágicas.
                        </p>
                        <p className="text-xs sm:text-sm font-semibold italic text-text-dark/80">
                            Tu conocimiento es tu primera herramienta de protección.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            titulo: '5 RITUALES PARA REALIZAR EL 31 DE DICIEMBRE',
            subtitulo: 'Despedí el año, renová tu energía y preparate para recibir un nuevo ciclo',
            tag: 'Fin de Año & Prosperidad',
            imagen: '/images/about/thumb-2.png',
            contenido: (
                <div className="space-y-5 text-text-dark text-sm sm:text-base font-serif leading-relaxed">
                    <p className="italic text-text-dark/90 text-base sm:text-lg">
                        Despedí el año, renová tu energía y preparate para recibir un nuevo ciclo.
                    </p>

                    <p>
                        La Nochevieja es mucho más que el final de un calendario: representa simbólicamente el cierre de una etapa y la oportunidad de establecer nuevas intenciones para el futuro. Desde tiempos antiguos, diferentes culturas han conservado rituales y tradiciones para atraer la buena fortuna, favorecer la prosperidad, abrir caminos en el amor, proteger el hogar y materializar nuevos proyectos.
                    </p>

                    <p>
                        Comer doce uvas, llevar monedas, encender velas de colores o salir con una valija son algunas de las costumbres que se transmiten de generación en generación. Desde la mirada esotérica, estos rituales permiten transformar nuestros deseos en intenciones conscientes, acompañadas de símbolos, elementos y actos que representan aquello que queremos recibir.
                    </p>

                    {/* Los 5 Rituales */}
                    <div className="space-y-4">
                        {/* 1 */}
                        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1.5">
                            <h4 className="font-bodoni font-bold text-base sm:text-lg uppercase text-text-dark">
                                1. Usar ropa interior de color amarillo
                            </h4>
                            <p className="text-xs sm:text-sm text-text-dark/90">
                                El amarillo representa el Sol, la vitalidad, la alegría y la prosperidad. Se utiliza como símbolo de buena fortuna, abundancia y nuevas oportunidades para el año que comienza. Según la tradición, la prenda debe ser nueva y, preferentemente, regalada.
                            </p>
                        </div>

                        {/* 2 */}
                        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1.5">
                            <h4 className="font-bodoni font-bold text-base sm:text-lg uppercase text-text-dark">
                                2. Barrer la casa hacia afuera
                            </h4>
                            <p className="text-xs sm:text-sm text-text-dark/90">
                                Este ritual representa la limpieza simbólica de todo aquello que deseamos dejar atrás. Antes de la medianoche, tomá una escoba y barré desde el interior hacia la puerta de entrada, visualizando que con cada movimiento se retiran las preocupaciones, las dificultades y las situaciones que ya cumplieron su ciclo.
                            </p>
                        </div>

                        {/* 3 */}
                        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1.5">
                            <h4 className="font-bodoni font-bold text-base sm:text-lg uppercase text-text-dark">
                                3. Llevar monedas o billetes
                            </h4>
                            <p className="text-xs sm:text-sm text-text-dark/90">
                                Este ritual busca representar la continuidad de la prosperidad económica. Una de las tradiciones consiste en llevar trece monedas doradas en el bolsillo o colocar un billete dentro de la billetera durante las celebraciones. También podés sostener una moneda entre tus manos a medianoche y formular una intención de crecimiento económico, estabilidad y nuevas oportunidades laborales.
                            </p>
                        </div>

                        {/* 4 */}
                        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1.5">
                            <h4 className="font-bodoni font-bold text-base sm:text-lg uppercase text-text-dark">
                                4. El anillo en la copa del brindis
                            </h4>
                            <p className="text-xs sm:text-sm text-text-dark/90">
                                Este ritual tradicional está relacionado con el compromiso y la consolidación de una relación, o bien para quienes buscan una nueva oportunidad afectiva. La costumbre consiste en colocar un anillo de oro dentro de una copa durante el brindis de medianoche. De manera alternativa, podés realizar el simbolismo sosteniendo el anillo junto a la copa durante el brindis.
                            </p>
                        </div>

                        {/* 5 */}
                        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-2">
                            <h4 className="font-bodoni font-bold text-base sm:text-lg uppercase text-text-dark">
                                5. Centro de mesa con velas de colores
                            </h4>
                            <ul className="text-xs sm:text-sm space-y-1 text-text-dark/90 list-disc list-inside">
                                <li><strong>Dorado:</strong> Éxito y prosperidad.</li>
                                <li><strong>Verde:</strong> Crecimiento, renovación y bienestar.</li>
                                <li><strong>Rojo:</strong> Pasión, amor, fuerza vital y atracción.</li>
                            </ul>
                            <p className="text-xs sm:text-sm italic text-text-dark/80 pt-1">
                                El fuego representa transformación, iluminación y renovación.
                            </p>
                        </div>
                    </div>

                    {/* Cierre / Llamado */}
                    <div className="p-5 bg-stone-100 rounded-2xl border border-stone-200 text-center space-y-3">
                        <h5 className="font-bodoni font-bold text-base sm:text-lg uppercase tracking-wide text-text-dark">
                            ¿Querés aprender más?
                        </h5>
                        <p className="text-xs sm:text-sm text-text-dark/90">
                            Te invito a conocer <strong>COMUNIDAD FRECUENCIA SACERDOTISA 2</strong>, un espacio dedicado al conocimiento esotérico, las prácticas rituales y el aprendizaje de técnicas de protección y transformación energética.
                        </p>
                    </div>
                </div>
            ),
        },
    ];

    const ritualSeleccionado = rituales.find((r) => r.id === modalActivo);

    return (
        <div id="blog" className="scroll-mt-24 bg-area-servicios/95 rounded-3xl p-5 sm:p-7 lg:p-8 border border-border-accent/40 shadow-xs w-full h-full flex flex-col justify-between space-y-4">
            {/* Encabezado: Título y Subtítulo */}
            <div className="w-full space-y-1">
                <p className="text-xs font-medium font-serif uppercase text-text-dark/80">Desde mi Frecuencia</p>
                <h3 className="text-sm sm:text-base lg:text-lg font-bodoni font-bold uppercase text-text-dark leading-snug">
                    Rituales
                </h3>
            </div>

            {/* Grilla uniforme de 2 columnas para los 2 rituales */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                {rituales.map((ritual) => (
                    <button
                        key={ritual.id}
                        type="button"
                        onClick={() => setModalActivo(ritual.id)}
                        className="group text-left block space-y-2.5 p-2.5 rounded-2xl bg-white/70 hover:bg-white/95 border border-stone-200/80 shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                        {/* Imagen con aspect ratio uniforme */}
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-black/5 bg-stone-100">
                            <Image
                                src={ritual.imagen}
                                alt={ritual.titulo}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 left-2">
                                <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-xs">
                                    {ritual.tag}
                                </span>
                            </div>
                        </div>

                        {/* Título y llamado sutil */}
                        <div className="space-y-1">
                            <p className="text-xs font-serif font-bold text-text-dark leading-snug line-clamp-2 group-hover:text-text-dark transition-colors uppercase">
                                {ritual.titulo}
                            </p>
                            <span className="text-[11px] font-serif font-semibold text-text-dark/60 group-hover:text-text-dark flex items-center gap-1 transition-colors">
                                Leer ritual completo →
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Modal emergente */}
            {ritualSeleccionado && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-ritual-title"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setModalActivo(null);
                        }
                    }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
                >
                    <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200/80 overflow-y-auto flex flex-col space-y-6 animate-in zoom-in-95 duration-200 [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.25)_transparent]">
                        {/* Botón cerrar (X) en la esquina superior */}
                        <button
                            type="button"
                            onClick={() => setModalActivo(null)}
                            aria-label="Cerrar modal"
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200/80 text-text-dark flex items-center justify-center transition-colors cursor-pointer border border-stone-200/70 z-10"
                        >
                            <span className="text-base font-bold leading-none">✕</span>
                        </button>

                        {/* Encabezado del modal */}
                        <div className="pr-10 space-y-2">
                            <span className="text-[11px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-stone-100 text-text-dark/80 border border-stone-200/70 inline-block">
                                {ritualSeleccionado.tag}
                            </span>
                            <h3
                                id="modal-ritual-title"
                                className="text-xl sm:text-2xl font-bodoni font-bold uppercase tracking-wide text-text-dark leading-snug"
                            >
                                {ritualSeleccionado.titulo}
                            </h3>
                            {ritualSeleccionado.subtitulo && (
                                <p className="text-xs sm:text-sm font-serif italic text-text-dark/80">
                                    {ritualSeleccionado.subtitulo}
                                </p>
                            )}
                        </div>

                        {/* Imagen destacada en el modal */}
                        <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-2xl overflow-hidden border border-black/10 shadow-xs">
                            <Image
                                src={ritualSeleccionado.imagen}
                                alt={ritualSeleccionado.titulo}
                                fill
                                className="object-cover object-center"
                            />
                        </div>

                        {/* Contenido completo */}
                        <div className="pt-2">
                            {ritualSeleccionado.contenido}
                        </div>

                        {/* Botón CTA a WhatsApp */}
                        <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <Link
                                href={getWhatsAppUrl("¡Hola Anita! Me gustaría consultar por sus Ebooks de Rituales, Limpiezas y Protección. ¿Podrías brindarme más información?")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center text-center px-5 sm:px-6 py-3 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors font-bold text-xs uppercase tracking-wide ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] cursor-pointer"
                            >
                                Consultá por nuestros EBOOKS DE RITUALES, LIMPIEZAS Y PROTECCIÓN.
                            </Link>

                            <button
                                type="button"
                                onClick={() => setModalActivo(null)}
                                className="w-full sm:w-auto text-xs font-serif font-bold uppercase text-text-dark/70 hover:text-text-dark bg-stone-100 hover:bg-stone-200/70 px-4 py-2.5 rounded-full transition-colors cursor-pointer border border-stone-200/60"
                            >
                                Cerrar ventana ↑
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
