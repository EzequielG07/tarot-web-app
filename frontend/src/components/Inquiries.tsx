export default function Inquires() {
    return (
        <section className="bg-bg-main border-b border-border-accent py-20 px-4 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <h1 className="text-primary font-serif text-4xl sm:text-6xl font-bold">
                        SENTÍS QUE HAY ALGO QUE NO TERMINÁS DE COMPRENDER?
                    </h1>
                    <button className="bg-primary hover:bg-primary-hover text-bg-card font-bold px-8 py-3 rounded mt-6">
                        ELEGÍ TU CONSULTA →
                    </button>
                </div>
                <div className="group bg-zinc-950/60 border border-zinc-800/80 p-5 sm:p-6 rounded-xl hover:border-logo-cian/50 transition-all duration-300 relative overflow-hidden shadow-xl hover:shadow-logo-cian/5 cursor-pointer">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-logo-cian to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-xs font-semibold text-logo-cian tracking-widest uppercase">Digital</span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-logo-cian transition-colors">
                        Diseño UI/UX
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">
                        Creación de interfaces intuitivas y experiencias digitales optimizadas centradas en el usuario.
                    </p>
                </div>

                <div className="group bg-zinc-950/60 border border-zinc-800/80 p-5 sm:p-6 rounded-xl hover:border-logo-fucsia/50 transition-all duration-300 relative overflow-hidden shadow-xl hover:shadow-logo-fucsia/5 cursor-pointer">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-logo-fucsia to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-xs font-semibold text-logo-fucsia tracking-widest uppercase">Visual</span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-logo-fucsia transition-colors">
                        Diseño Gráfico
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">
                        Comunicación visual efectiva a través de piezas gráficas creativas para todo tipo de formatos.
                    </p>
                </div>

                <div className="group bg-zinc-950/60 border border-zinc-800/80 p-5 sm:p-6 rounded-xl hover:border-logo-cian/50 transition-all duration-300 relative overflow-hidden shadow-xl hover:shadow-logo-cian/5 cursor-pointer">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-logo-cian to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-xs font-semibold text-logo-cian tracking-widest uppercase">Estática</span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-logo-cian transition-colors">
                        Diseño de Imagen
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">
                        Desarrollo y curaduría de la estética visual global adaptada a las necesidades de tu entorno.
                    </p>
                </div>

                <div className="group bg-zinc-950/60 border border-zinc-800/80 p-5 sm:p-6 rounded-xl hover:border-logo-fucsia/50 transition-all duration-300 relative overflow-hidden shadow-xl hover:shadow-logo-fucsia/5 cursor-pointer">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-logo-fucsia to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-xs font-semibold text-logo-fucsia tracking-widest uppercase">
                        Editorial & Marca
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-logo-fucsia transition-colors">
                        Identidad Corporativa
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">
                        Construcción integral de identidad visual y diseño de Brochures Corporativos profesionales.
                    </p>
                </div>

                <div className="group bg-zinc-950/60 border border-zinc-800/80 p-5 sm:p-6 rounded-xl hover:border-logo-cian/50 transition-all duration-300 relative overflow-hidden shadow-xl hover:shadow-logo-cian/5 cursor-pointer">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-logo-cian to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-xs font-semibold text-logo-cian tracking-widest uppercase">Evolución</span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-logo-cian transition-colors">
                        Rediseño de Marcas
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">
                        Modernización y evolución de logotipos e identidades visuales manteniendo su esencia original.
                    </p>
                </div>
            </div>
        </section>
    );
}
