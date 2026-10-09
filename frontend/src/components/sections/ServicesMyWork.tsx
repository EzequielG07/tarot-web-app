import Image from 'next/image';
import Link from 'next/link';

export const ServicesMyWork = () => {
    return (
        <div className="relative w-full h-full bg-bg-card rounded-2xl p-6 sm:p-8 overflow-hidden flex flex-col justify-start text-left border-2 border-dashed border-sky-500/60">
            {/* Imagen de fondo exclusiva */}
            <Image
                src="/images/backgrounds/services-bg.png"
                alt="Fondo Frecuencia Sacerdotista"
                fill
                priority
                className="object-cover object-center z-0 pointer-events-none"
            />
            <div className="w-full space-y-6 relative z-10 flex flex-col justify-start">
                <div className="space-y-4 sm:space-y-6">
                    <p className="text-xs sm:text-sm font-medium font-serif uppercase text-text-light/80">La mirada de Anita</p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bodoni font-bold tracking-wide uppercase text-text-light">
                        Una Perspectiva Diferente sobre lo que te está Sucediendo
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl font-serif text-text-light/90 leading-relaxed">
                        Mi trabajo no consiste en date respuestas predeterminadas. <br className="my-2" />
                        Consiste en ayudarte a observar aquello que hoy necesitas comprender, desde una perspectiva
                        diferente.
                    </p>
                </div>

                <div className="pt-2">
                    <Link
                        href="/schedule"
                        className="inline-block px-5 py-2.5 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-colors uppercase font-bold text-xs shrink-0"
                    >
                        Conocé mi Trabajo →
                    </Link>
                </div>
            </div>
        </div>
    );
};
