export default function AboutMe() {
    return (
        <section id="nosotros" className="bg-bg-main border-b border-border-accent py-20 px-4 text-center">
            <div className="grid grid-cols-3">
                <div>
                    <h1 className="text-primary font-serif text-4xl sm:text-6xl font-bold">Sobre Anita</h1>
                    <p className="text-secondary mt-4">Un espacio dedicado al autoconocimiento.</p>
                    <button className="bg-primary hover:bg-primary-hover text-bg-card font-bold px-8 py-3 rounded mt-6">
                        Conocer Más
                    </button>
                </div>
                <div>
                    <h1 className="text-primary font-serif text-4xl sm:text-6xl font-bold">Libro Destacado</h1>
                    <p className="text-secondary mt-4">Un espacio dedicado al autoconocimiento.</p>
                    <button className="bg-primary hover:bg-primary-hover text-bg-card font-bold px-8 py-3 rounded mt-6">
                        Conocer Más
                    </button>
                </div>
                <div>
                    <h1 className="text-primary font-serif text-4xl sm:text-6xl font-bold">Desde mi Frecuencia</h1>
                    <p className="text-secondary mt-4">Un espacio dedicado al autoconocimiento.</p>
                    <button className="bg-primary hover:bg-primary-hover text-bg-card font-bold px-8 py-3 rounded mt-6">
                        Conocer Más
                    </button>
                </div>
            </div>
        </section>
    );
}
