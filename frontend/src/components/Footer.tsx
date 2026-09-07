import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-bg-card text-slate-400 border-t border-border-accent py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
                    {/* Columna 1: Branding */}
                    <div>
                        <h3 className="text-primary font-serif text-xl font-bold mb-3 tracking-widest">
                            TAROT MÍSTICO
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-300">
                            Guía espiritual, lecturas de cartas y recursos para acompañarte en tu camino de
                            autoconocimiento.
                        </p>
                    </div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <div>
                        <h4 className="text-secondary font-serif font-semibold mb-3">Navegación</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/#nosotros" className="hover:text-primary transition-colors">
                                    Sobre Mí
                                </Link>
                            </li>
                            <li>
                                <Link href="/ebooks" className="hover:text-primary transition-colors">
                                    eBooks & Cursos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Redes Sociales */}
                    <div>
                        <h4 className="text-secondary font-serif font-semibold mb-3">Redes Sociales</h4>
                        <div className="flex justify-center md:justify-start space-x-6 text-sm">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                            >
                                YouTube
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border-accent pt-6 text-center text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Tarot Místico. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
