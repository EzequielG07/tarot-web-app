import Link from 'next/link';

export const InquiriesMainContent = () => {
    return (
        <div className="relative w-full h-[470px] bg-bg-main text-text-dark rounded-2xl p-6 overflow-hidden flex flex-col justify-between justify-center text-left">
            {/* Imagen de fondo exclusiva para BlogSidebar */}

            <div className="lg:col-span-6 w-full space-y-6 relative z-10 flex flex-col justify-between">
                <div className="space-y-6">
                    <p className="text-xs sm:text-sm font-medium font-serif uppercase">Que esta pasando en tu vida?</p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide uppercase">
                        Sentís que hay algo que no terminás de comprender?
                    </h2>

                    <p className="text-lg sm:text-xl font-serif">
                        Estás en un momento de transición, con muchas preguntes internas. Este es un momento de mirar
                        adentro, conectar con tu intuición y recibir la guía que necesitás.
                        <br />
                        El Tarot y la energía pueden ayudarte a encontrar claridad y tomar decisiones con más seguridad.
                    </p>
                </div>

                <div className="pt-2">
                    <Link
                        href="/schedule"
                        className="inline-block px-5 py-2.5 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors uppercase font-bold text-xs shrink-0"
                    >
                        Eligí tu consulta →
                    </Link>
                </div>
            </div>
        </div>
    );
};
