// src/components/sections/AboutMeContent.tsx

import Link from 'next/link';

export const AboutMeContent = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between space-y-4 relative z-10">
            <div className="space-y-4">
                <p className="text-xs font-medium font-serif uppercase text-text-dark/80">Sobre Mí</p>

                <h2 className="text-lg sm:text-xl lg:text-2xl font-bodoni tracking-wide uppercase text-text-dark">
                    HAY COSAS QUE NO SE APRENDEN. SE DESPIERTAN.
                </h2>

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

            <div className="pt-2">
                <Link
                    href="/about"
                    className="inline-block px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors uppercase font-bold text-xs shrink-0"
                >
                    QUIERO TENER MI PRIMERA CONSULTA DE CLARIDAD →
                </Link>
            </div>
        </div>
    );
};

