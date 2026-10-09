import Link from 'next/link';

export const InquiriesMainContent = () => {
    return (
        <div className="relative w-full h-[470px] bg-bg-main text-text-dark rounded-2xl p-6 overflow-hidden flex flex-col justify-between justify-center text-left">
            {/* Imagen de fondo exclusiva para BlogSidebar */}

            <div className="lg:col-span-6 w-full space-y-6 relative z-10 flex flex-col justify-between">
                <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bodoni font-bold tracking-wide">
                        ¿QUÉ ESTÁ PASANDO EN TU VIDA?
                    </h2>

                    <p className="text-lg sm:text-xl font-serif">
                        A veces sentimos que algo necesita cambiar, aunque todavía no sepamos bien qué. Si estás atravesando un momento de transición o tenés preguntas que te cuesta ordenar, podemos mirar juntas qué está pasando y encontrar un poco más de claridad.
                        <br />
                        El tarot y el trabajo energético pueden acompañarte a conectar con tu intuición y tomar decisiones con más confianza.
                    </p>
                </div>

                <div className="pt-2">
                    <Link
                        href="/schedule"
                        className="inline-block px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors uppercase font-bold text-xs shrink-0"
                    >
                        ELEGÍ CÓMO PUEDO ACOMPAÑARTE →
                    </Link>
                </div>
            </div>
        </div>
    );
};
