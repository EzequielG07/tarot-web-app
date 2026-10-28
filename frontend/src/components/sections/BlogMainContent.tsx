import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const BlogMainContent = () => {
    return (
        <div className="relative w-full h-full max-w-none grid grid-cols-1 lg:grid-cols-5 gap-8 rounded-3xl overflow-hidden text-text-light p-6 border border-gray-500/10">
            {/* Video de fondo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            >
                <source src="/videos/backgrounds/sesion-bg.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
            </video>

            {/* Capa de overlay opcional para asegurar legibilidad sobre el fondo */}
            <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />

            {/* Columna izquierda: 40% libre para visibilidad de la imagen de fondo (2 de 5) */}
            <div className="lg:col-span-2 w-full relative z-10"></div>

            {/* Columna derecha: 60% para el contenido de texto e información (3 de 5) */}
            <div className="lg:col-span-3 w-full space-y-6 relative z-10 flex flex-col justify-between">
                <div className="space-y-6">
                    <p className="text-xs sm:text-sm font-medium font-serif uppercase">
                        Tu primera consulta o una mirada integral
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bodoni font-bold tracking-wide">
                        SESIÓN INTEGRAL DE CLARIDAD
                    </h2>
                    <p className="text-lg sm:text-xl font-serif">
                        50 min
                    </p>
                    <p className="text-lg sm:text-xl font-serif">
                        La experiencia más completa. Combina videncia, tarot, oráculo, bola de cristal y péndulo de luz, según las necesidades de la consulta.
                    </p>
                    <p className="text-lg sm:text-xl font-serif">
                        Podemos abordar amor, vínculos, decisiones, trabajo, proyectos y situaciones que necesites comprender con mayor profundidad.
                    </p>
                    <p className="text-lg sm:text-xl font-serif">
                        $50.000 ARS · USD 50
                    </p>
                    <div className="pt-2">
                        <Link
                            href={getWhatsAppUrl("¡Hola Anita! Quisiera elegir la Sesión Integral de Claridad ($50.000 ARS / USD 50). ¿Cómo podemos coordinar?")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 py-2.5 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-colors font-bold text-xs shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                        >
                            ELEGIR SESIÓN INTEGRAL →
                        </Link>
                    </div>
                    <p className="text-lg sm:text-xl font-serif">
                        ¿NO SABÉS CUÁL ELEGIR?
                    </p>
                    <p className="text-lg sm:text-xl font-serif">
                        Contame qué estás viviendo y te ayudo a encontrar la modalidad más adecuada para vos.
                    </p>
                    <div className="pt-2">
                        <Link
                            href={getWhatsAppUrl("¡Hola Anita! No sé cuál servicio elegir y me gustaría que me orientes para encontrar la modalidad más adecuada para mí.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 py-2.5 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-colors font-bold text-xs shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                        >
                            QUIERO QUE ME ORIENTES →
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};
