import Link from 'next/link';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const ServicesMyWork = () => {
    return (
        <div className="relative w-full h-full bg-bg-card rounded-2xl p-6 sm:p-8 overflow-hidden flex flex-col justify-start text-left">
            {/* Video de fondo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            >
                <source src="/videos/backgrounds/mirada-bg.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
            </video>
            <div className="w-full space-y-6 relative z-10 flex flex-col justify-start">
                <div className="space-y-4 sm:space-y-6">
                    <p className="text-xs sm:text-sm font-medium font-serif uppercase text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.95),0_2px_8px_rgba(0,0,0,0.9)]">
                        La mirada de Anita
                    </p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bodoni font-bold tracking-wide uppercase text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.95),0_4px_12px_rgba(0,0,0,0.9),0_8px_24px_rgba(0,0,0,0.75)]">
                        Una Perspectiva Diferente sobre lo que te está Sucediendo
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl font-serif text-white/95 leading-relaxed [text-shadow:0_1px_3px_rgba(0,0,0,0.95),0_3px_8px_rgba(0,0,0,0.85)]">
                        Mi trabajo no consiste en date respuestas predeterminadas. <br className="my-2" />
                        Consiste en ayudarte a observar aquello que hoy necesitas comprender, desde una perspectiva
                        diferente.
                    </p>
                </div>

                <div className="pt-2">
                    <Link
                        href={getWhatsAppUrl("¡Hola Anita! Quisiera saber más sobre tu trabajo y las consultas que realizás.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2.5 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-colors uppercase font-bold text-xs shrink-0 ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                    >
                        Conocé mi Trabajo →
                    </Link>
                </div>
            </div>
        </div>
    );
};
