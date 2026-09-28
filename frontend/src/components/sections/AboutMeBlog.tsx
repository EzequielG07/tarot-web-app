// src/components/sections/AboutMeBlog.tsx

import Image from 'next/image';
import Link from 'next/link';

export const AboutMeBlog = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center space-y-4">
            {/* Encabezado: Título y Subtítulo */}
            <div className="w-full space-y-1">
                <p className="text-xs font-medium font-serif uppercase text-text-dark/80">Desde mi Frecuencia</p>
                <h3 className="text-sm sm:text-base lg:text-lg font-serif font-bold uppercase text-text-dark leading-snug">
                    Rituales, tips y mensajes para tu camino de sanación
                </h3>
            </div>

            {/* Sub-grilla de 3 columnas para los artículos */}
            <div className="w-full grid grid-cols-3 gap-3 items-start">
                {/* Artículo 1 */}
                <Link href="/blog/articulo-1" className="group block space-y-2">
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10">
                        <Image
                            src="/images/about/thumb-1.png"
                            alt="Artículo 1"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <p className="text-[11px] font-serif text-text-dark/90 leading-tight line-clamp-2 group-hover:text-text-dark transition-colors">
                        Rituales para la Luna Llena
                    </p>
                </Link>

                {/* Artículo 2 */}
                <Link href="/blog/articulo-2" className="group block space-y-2">
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10">
                        <Image
                            src="/images/about/thumb-2.png"
                            alt="Artículo 2"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <p className="text-[11px] font-serif text-text-dark/90 leading-tight line-clamp-2 group-hover:text-text-dark transition-colors">
                        Cómo limpiar tus cristales
                    </p>
                </Link>

                {/* Artículo 3 */}
                <Link href="/blog/articulo-3" className="group block space-y-2">
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10">
                        <Image
                            src="/images/about/thumb-3.png"
                            alt="Artículo 3"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <p className="text-[11px] font-serif text-text-dark/90 leading-tight line-clamp-2 group-hover:text-text-dark transition-colors">
                        Mensajes del Tarot del mes
                    </p>
                </Link>
            </div>

            {/* Link final */}
            <div className="pt-1">
                <Link
                    href="/blog"
                    className="inline-block text-xs font-serif font-bold uppercase text-text-dark hover:text-text-dark transition-colors tracking-wide"
                >
                    VER TODOS LOS ARTÍCULOS →
                </Link>
            </div>
        </div>
    );
};
