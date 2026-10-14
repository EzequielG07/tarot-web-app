export default function EggBook() {
    return (
        <section className="relative w-full overflow-hidden border-b border-border-accent bg-bg-card">
            {/* Video de fondo sin recortes arriba ni abajo (proporción natural 16:9) */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-auto block"
            >
                <source src="/videos/backgrounds/egg-bg.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
            </video>

            {/* Contenido principal (sin capas de gradiente) */}
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-btn-light font-bodoni text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide uppercase drop-shadow-md">
                        Anita Tarotista
                    </h1>
                    <p className="text-text-light text-base sm:text-lg md:text-xl mt-3 font-serif max-w-2xl mx-auto drop-shadow">
                        Un espacio dedicado al autoconocimiento.
                    </p>
                </div>
            </div> */}
        </section>
    );
}
