// src/components/sections/AboutMeBook.tsx

import Image from 'next/image';
import Link from 'next/link';

export const AboutMeBook = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center space-y-2 p-10 bg-area-libro rounded-2xl">
            {/* Párrafo Superior: Ancho completo arriba */}
            <div className="w-full mb-10">
                <p className="text-sm font-medium font-serif uppercase text-text-dark/80">Libro Destacado</p>
            </div>

            {/* Sub-grilla: 33.3% Portada / 66.7% Texto */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                {/* Portada (5 sub-cols -> 33.3%) */}
                <div className="sm:col-span-5 w-full aspect-[2/3] relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/about/portada-libro.png"
                        alt="Portada de Libro Destacado"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                {/* Texto (7 sub-cols -> 66.7%) */}
                <div className="sm:col-span-7 w-full flex flex-col justify-center space-y-2">
                    <div className="space-y-2">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bodoni font-bold uppercase text-text-dark">
                            Grimorio Moderno I: El Poder Oculto del Huevo
                        </h3>

                    </div>
                </div>
            </div>
            <div>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed line-clamp-4">
                    La ovomancia es una práctica ancestral que hoy podés explorar con esta guía. Aprendé paso a paso cómo realizar una limpieza energética con huevo y conocer algunas claves para interpretar la lectura.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed line-clamp-4">
                    Una herramienta sencilla y accesible para quienes sienten curiosidad por estas prácticas y quieren acercarse a ellas con más conocimiento.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed line-clamp-4">
                    Tu energía no espera. Descargá hoy el Grimorio Moderno I y empezá a soltar lo que ya no te pertenece.
                </p>
                <p className="text-sm font-serif text-text-dark/90 leading-relaxed line-clamp-4 font-bold">
                    Empezá a explorar esta práctica ancestral con el Grimorio Moderno I.
                </p>

            </div>

            <div className="pt-2">
                <Link
                    href="/libro"
                    className="inline-block px-4 py-2 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors uppercase font-bold text-[11px] shrink-0"
                >
                    Comprar Libro →
                </Link>
            </div>
        </div>
    );
};
