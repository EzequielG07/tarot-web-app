// src/components/sections/AboutMeContent.tsx

import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const AboutMeContent = () => {
    return (
        <div
            id="sobre-anita"
            className="scroll-mt-24 bg-area-servicios/95 rounded-3xl p-5 sm:p-7 lg:p-8 border border-border-accent/40 shadow-xs w-full h-[480px] sm:h-[500px] lg:h-full flex flex-col justify-between relative z-10 min-h-0"
        >
            {/* Encabezado fijo: Sobre Mí y Título */}
            <div className="space-y-2 pb-3 shrink-0 border-b border-stone-200/40">
                <p className="text-xs font-medium font-serif uppercase text-text-dark/80">Sobre Mí</p>

                <h2 className="text-lg sm:text-xl lg:text-2xl font-bodoni tracking-wide uppercase text-text-dark">
                    HAY COSAS QUE NO SE APRENDEN. SE DESPIERTAN.
                </h2>
            </div>

            {/* Contenido desplazable con scroll vertical estilizado */}
            <div className="flex-1 overflow-y-auto pr-2 sm:pr-3 my-3 flow-root min-h-0 [&>p]:mb-4 [&>p:last-child]:mb-0 [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.25)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-text-dark/25 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-text-dark/45">
                {/* Imagen flotante a la izquierda */}
                <div className="float-left mr-4 mb-3 sm:mr-5 sm:mb-3 w-32 sm:w-40 md:w-44 aspect-[3/4] relative rounded-2xl overflow-hidden shadow-sm">
                    <Image
                        src="/images/about/tarotista-example.jpg"
                        alt="Anita - Tarotista"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 128px, 176px"
                    />
                </div>

                <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                    Soy Anita, tarotista, maestra parapsicóloga, psíquica vidente y Reiki Master. Desde hace más de 20 años acompaño a personas que buscan comprender, ordenar o transformar algo en sus vidas.
                </p>

                <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                    Mi camino comenzó con una profunda intuición y curiosidad, y se fue convirtiendo en estudio, experiencia y práctica profesional. Me formé en parapsicología, tarot, radiestesia, numerología, astrología, percepción extrasensorial y manejo alternativo de la energía. También integro herramientas de orientación y diagnóstico, junto con el acompañamiento espiritual desde las raíces reikistas, los registros akáshicos y la tradición espiritista.
                </p>

                <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                    Pero mi trabajo nunca se limitó a leer las cartas. En cada consulta, combino las herramientas que mejor pueden acompañar a esa persona y a su situación. Para mí, lo valioso es mirar más allá de lo evidente: reconocer qué se repite, dónde puede haber un bloqueo y qué necesita ser revisado para abrir nuevas perspectivas.
                </p>

                <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                    No creo en respuestas hechas en serie. Creo en lecturas, diagnósticos y procesos personalizados, porque cada historia es única y merece una mirada propia.
                </p>

                <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed italic">
                    «Sé observar una situación desde diferentes dimensiones y elegir las herramientas adecuadas para cada consulta».
                </p>

                <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                    ¿Sentís que es momento de mirar tu situación desde otra perspectiva?
                </p>

                <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                    En una consulta voy a escucharte y a elegir las herramientas más adecuadas para acompañarte. Juntas vamos a explorar lo que estás viviendo y abrir nuevas preguntas y caminos posibles.
                </p>

                <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                    Conoceme en una primera consulta y descubramos qué necesitás hoy.
                </p>
            </div>

            {/* Botón CTA fijo al pie */}
            <div className="pt-3 shrink-0 clear-both border-t border-stone-200/40">
                <Link
                    href={getWhatsAppUrl("¡Hola Anita! Leí tu presentación y me gustaría tener mi primera consulta de claridad. ¿Cómo podemos coordinar?")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors uppercase font-bold text-xs shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                >
                    QUIERO TENER MI PRIMERA CONSULTA DE CLARIDAD →
                </Link>
            </div>
        </div>
    );
};
