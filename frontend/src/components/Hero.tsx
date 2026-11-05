export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden border-b border-border-accent bg-bg-card mb-6 sm:mb-8 lg:mb-10 shadow-sm">
            {/* Título semántico principal H1 para posicionamiento SEO en Google */}
            <h1 className="sr-only">
                Anita Tarotista · Lecturas de Tarot Online, Videncia Natural y Terapias Holísticas
            </h1>

            {/* Video sin recortes con proporción natural al ancho completo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-auto block"
            >
                <source src="/videos/backgrounds/hero-bg.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
            </video>
        </section>
    );
}
