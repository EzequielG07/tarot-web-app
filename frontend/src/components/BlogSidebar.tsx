import Image from 'next/image';
import Link from 'next/link';

export const BlogSidebar = () => {
    return (
        <div className="relative w-full h-full max-w-none flex flex-col items-center justify-center lg:border-l lg:border-gray-500/10 lg:pl-8 p-6 rounded-2xl overflow-hidden text-center">
            {/* Imagen de fondo exclusiva para BlogSidebar */}
            <Image
                src="/images/backgrounds/frequency-bg.png"
                alt="Fondo Frecuencia Sacerdotista"
                fill
                priority
                className="object-cover object-center z-0 pointer-events-none"
            />

            {/* Contenedor interno centrado vertical y horizontalmente */}
            <div className="mt-5 w-full space-y-6 relative z-10 flex flex-col items-center justify-center max-w-sm flex-1 my-auto">
                {/* Título de la sección */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide uppercase text-text-light">
                    Frecuencia Sacerdotista
                </h2>

                {/* Texto descriptivo */}
                <p className="text-lg sm:text-xl font-serif text-text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde ut quibusdam consequuntur cumque
                    eos velit eligendi vero mollitia. Quisquam perferendis ea repellat harum placeat quasi porro neque
                    quas sapiente.
                </p>

                {/* Botón/Link */}
                <div className="pt-2">
                    <Link
                        href="/schedule"
                        className="inline-block px-5 py-2.5 rounded-full text-btn-dark bg-btn-light hover:bg-btn-light-hover transition-colors uppercase font-bold text-xs shrink-0"
                    >
                        Entrar en Frecuencia →
                    </Link>
                </div>
            </div>
        </div>
    );
};
