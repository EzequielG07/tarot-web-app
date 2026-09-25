import Image from 'next/image';
import Link from 'next/link';

export const ServicesMyWork = () => {
    return (
        <div className="relative w-full h-[470px] bg-bg-card rounded-2xl p-6 overflow-hidden flex flex-col justify-between justify-center text-left">
            {/* Imagen de fondo exclusiva para BlogSidebar */}
            <Image
                src="/images/backgrounds/services-bg.png"
                alt="Fondo Frecuencia Sacerdotista"
                fill
                priority
                className="object-cover object-center z-0 pointer-events-none"
            />
            <div className="lg:col-span-6 w-full space-y-6 relative z-10 flex flex-col justify-between">
                <div className="space-y-6">
                    <p className="text-xs sm:text-sm font-medium font-serif uppercase">La mirada de Anita</p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide uppercase">
                        Una Perspectiva Diferente sobre lo que te está Sucediendo
                    </h2>

                    <p className="text-lg sm:text-xl font-serif">
                        Mi trabajo no consiste en date respuestas predeterminadas. <br />
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
