// src/components/sections/AboutMeContent.tsx

import Image from 'next/image';
import Link from 'next/link';

export const AboutMeContent = () => {
    return (
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
            {/* Foto Personal (4 de 12 sub-cols -> 33.3%) */}
            <div className="sm:col-span-4 w-full h-full min-h-[300px] relative rounded-2xl overflow-hidden">
                <Image
                    src="/images/about/foto-personal.jpg"
                    alt="Foto de perfil"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Texto (8 de 12 sub-cols -> 66.7%) */}
            <div className="sm:col-span-8 w-full space-y-4 relative z-10 flex flex-col justify-between">
                <div className="space-y-3">
                    <p className="text-xs font-medium font-serif uppercase text-text-dark/80">Sobre Mí</p>

                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bodoni tracking-wide uppercase text-text-dark">
                        Mi camino a través del Tarot y la Guía Espiritual
                    </h2>

                    <p className="text-xs sm:text-sm font-serif text-text-dark/90 leading-relaxed">
                        Acompaño a personas en sus procesos de transformación personal a través de la lectura simbólica
                        del Tarot.
                        <br />
                        <br />
                        Cada sesión es un espacio seguro de escucha y conexión con tu intuición.
                    </p>
                </div>

                <div className="pt-2">
                    <Link
                        href="/about"
                        className="inline-block px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors uppercase font-bold text-xs shrink-0"
                    >
                        Conocé más sobre mi historia →
                    </Link>
                </div>
            </div>
        </div>
    );
};
