export default function Blog() {
    return (
        <section id="nosotros" className="bg-bg-main border-b border-border-accent py-20 px-4 text-center">
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="text-primary font-serif text-4xl sm:text-6xl font-bold">
                        Sesión Integral de Claridad
                    </h1>
                    <p className="text-secondary mt-4">Un espacio dedicado al autoconocimiento.</p>
                    <button className="bg-primary hover:bg-primary-hover text-bg-card font-bold px-8 py-3 rounded mt-6">
                        AGENDAR SESIÓN →
                    </button>
                </div>
                <div>
                    <h1 className="text-primary font-serif text-4xl sm:text-6xl font-bold">Frecuencia Sacerdotista</h1>
                    <p className="text-secondary mt-4">Un espacio dedicado al autoconocimiento.</p>
                    <button className="bg-primary hover:bg-primary-hover text-bg-card font-bold px-8 py-3 rounded mt-6">
                        ENTRAR EN FRECUENCIA →
                    </button>
                </div>
            </div>
        </section>
    );
}
