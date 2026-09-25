import Image from 'next/image';
import Link from 'next/link';

export const BlogMainContent = () => {
    return (
        <div className="relative w-full h-full max-w-none grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-2xl overflow-hidden text-text-light p-6 border border-gray-500/10">
            {/* Imagen de fondo única y exclusiva para BlogMainContent */}
            <Image
                src="/images/backgrounds/blog-bg.png"
                alt="Fondo de la Sesión Integral"
                fill
                priority
                className="object-cover object-center z-0 pointer-events-none"
            />

            {/* Capa de overlay opcional para asegurar legibilidad sobre el fondo */}
            <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />

            {/* Columna izquierda: Ilustración */}
            <div className="lg:col-span-6 w-full relative z-10"></div>

            {/* Columna derecha: Detalles de la sesión */}
            <div className="lg:col-span-6 w-full space-y-6 relative z-10 flex flex-col justify-between">
                <div className="space-y-6">
                    <p className="text-xs sm:text-sm font-medium font-serif uppercase">
                        Tu primera consulta o una mirada integral
                    </p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide uppercase">
                        Sesión Integral de Claridad
                    </h2>

                    <p className="text-lg sm:text-xl font-serif">
                        Vivienda, Tarot, Lectura de manos, Péndulo de Luz y alineamiento energético según tu situación.
                    </p>

                    <div className="flex items-center justify-start text-xl sm:text-2xl lg:text-3xl font-serif gap-2">
                        <div className="p-1 text-text-light/70 hover:text-btn-light transition-colors duration-200">
                            <svg
                                className="h-8 w-8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <p>90 minutos</p>
                        <p className="mx-2">·</p>
                        <div className="p-1 text-text-light/70 hover:text-btn-light transition-colors duration-200">
                            <svg
                                className="h-8 w-8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <rect x="2" y="6" width="20" height="12" rx="2" />
                                <circle cx="12" cy="12" r="2" />
                                <path d="M6 12h.01M18 12h.01" />
                            </svg>
                        </div>
                        <p>$62.000</p>
                    </div>
                </div>

                <div className="pt-2">
                    <Link
                        href="/schedule"
                        className="inline-block px-5 py-2.5 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-colors uppercase font-bold text-xs shrink-0"
                    >
                        Agendar Sesión →
                    </Link>
                </div>
            </div>
        </div>
    );
};
