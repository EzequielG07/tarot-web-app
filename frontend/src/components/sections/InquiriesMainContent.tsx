import Link from 'next/link';

export const InquiriesMainContent = () => {
    return (
        <div className="relative w-full h-full text-text-light flex flex-col justify-start text-left bg-bg-main rounded-3xl p-5 sm:p-7 lg:p-8 border-4 border-amber-400 shadow-xs">
            <div className="w-full space-y-6 flex flex-col justify-start">
                <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bodoni font-bold tracking-wide">
                        ¿QUÉ ESTÁ PASANDO EN TU VIDA?
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl font-serif leading-relaxed">
                        A veces sentimos que algo necesita cambiar, aunque todavía no sepamos bien qué. Si estás atravesando un momento de transición o tenés preguntas que te cuesta ordenar, podemos mirar juntas qué está pasando y encontrar un poco más de claridad.
                        <br className="my-2" />
                        El tarot y el trabajo energético pueden acompañarte a conectar con tu intuición y tomar decisiones con más confianza.
                    </p>
                </div>

                <div className="pt-2">
                    <Link
                        href="/schedule"
                        className="inline-block px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors uppercase font-bold text-xs shrink-0 ring-2 ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                    >
                        ELEGÍ CÓMO PUEDO ACOMPAÑARTE →
                    </Link>
                </div>
            </div>
        </div>
    );
};
