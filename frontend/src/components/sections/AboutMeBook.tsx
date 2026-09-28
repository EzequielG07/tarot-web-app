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
                <div className="sm:col-span-5 w-full aspect-[2/3] relative rounded-xl overflow-hidden shadow-xl border border-white/10">
                    <Image
                        src="/images/about/portada-libro.jpg"
                        alt="Portada de Libro Destacado"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                {/* Texto (7 sub-cols -> 66.7%) */}
                <div className="sm:col-span-7 w-full flex flex-col justify-center space-y-2">
                    <div className="space-y-2">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-serif font-bold uppercase text-text-dark">
                            El Viaje del Loco
                        </h3>

                        <p className="text-sm font-serif text-text-dark/90 leading-relaxed line-clamp-4">
                            Una guía práctica y simbólica para comprender los arquetipos del Tarot y aplicarlos en tu
                            vida cotidiana.
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
            </div>
        </div>
    );
};
