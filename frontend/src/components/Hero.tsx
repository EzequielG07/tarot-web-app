export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden border-b border-border-accent bg-bg-card mb-6 sm:mb-8 lg:mb-10 shadow-sm">
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
