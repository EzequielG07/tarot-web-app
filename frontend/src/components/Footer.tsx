import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-bg-card text-text-light border-t border-border-accent font-sans">
            {/* Contenedor Principal de 12 Columnas */}
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-stretch divide-y lg:divide-y-0 divide-gray-500/40">
                    {/* Columna 1: Logo (3/12) */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start p-6 text-center lg:text-left space-y-3 h-full lg:border-r border-gray-500/40">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-2xl font-serif tracking-widest text-btn-light font-bold"
                        >
                            <span>✨</span> Anita Tarot
                        </Link>
                        <p className="text-xs text-text-light/70 max-w-xs">Carta - Energía - Transformación</p>
                    </div>

                    {/* Columna 2: Anita Tarotista (2/12) */}
                    <div className="lg:col-span-2 flex flex-col p-6 space-y-3 h-full lg:border-r border-gray-500/40">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-1">
                            Anita Tarotista
                        </h3>
                        <Link href="/" className="text-sm hover:text-btn-light transition-colors">
                            Sobre Anita
                        </Link>
                        <Link href="/#lectures" className="text-sm hover:text-btn-light transition-colors">
                            Servicios Energéticos
                        </Link>
                        <Link href="/#services" className="text-sm hover:text-btn-light transition-colors">
                            Sobre Anita
                        </Link>
                    </div>

                    {/* Columna 3: Frecuencia Sacerdotista (2/12) */}
                    <div className="lg:col-span-2 flex flex-col p-6 space-y-3 h-full lg:border-r border-gray-500/40">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-1">
                            Frecuencia Sacerdotista
                        </h3>
                        <Link href="/#aboutme" className="text-sm hover:text-btn-light transition-colors">
                            Encuentros - Rituales - Recursos
                        </Link>
                        <Link href="/#blog" className="text-sm hover:text-btn-light transition-colors">
                            Comunidad
                        </Link>
                    </div>

                    {/* Columna 4: Información (2/12) */}
                    <div className="lg:col-span-2 flex flex-col p-6 space-y-3 h-full lg:border-r border-gray-500/40">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-1">
                            Información
                        </h3>
                        <Link href="/#contact" className="text-sm hover:text-btn-light transition-colors">
                            Blog - Contacto - Preguntas Frecuentes
                        </Link>
                        <Link href="/faq" className="text-sm hover:text-btn-light transition-colors">
                            Términos y condiciones - Política de Privacidad
                        </Link>
                    </div>

                    {/* Columna 5: Redes + Botón Agendar (3/12 - Ancho extra) */}
                    <div className="lg:col-span-3 flex flex-col justify-start p-6 space-y-3 h-full">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-1 text-center lg:text-left">
                            Seguinos en:
                        </h3>

                        <div className="flex items-center justify-center lg:justify-start gap-3 flex-nowrap">
                            {/* Íconos de Redes */}
                            <div className="flex items-center gap-1.5 text-text-light/70 shrink-0">
                                <a
                                    href="[https://www.instagram.com](https://www.instagram.com)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 hover:text-btn-light transition-colors duration-200"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>

                                <a
                                    href="[https://www.facebook.com](https://www.facebook.com)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 hover:text-btn-light transition-colors duration-200"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>

                                <a
                                    href="[https://www.tiktok.com](https://www.tiktok.com)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 hover:text-btn-light transition-colors duration-200"
                                    aria-label="TikTok"
                                >
                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.14 1.03 1.12 2.49 1.83 3.94 1.93v3.86c-1.77-.08-3.52-.64-4.91-1.74-.29-.23-.55-.49-.79-.77v5.77c.06 1.77-.42 3.58-1.42 5.03-1.15 1.74-3.12 2.92-5.18 3.06-2.31.2-4.71-.62-6.19-2.39-1.58-1.83-2.14-4.51-1.39-6.84.69-2.22 2.61-3.99 4.9-4.28.91-.12 1.84-.01 2.72.26v3.91c-.88-.28-1.89-.19-2.67.33-.88.56-1.42 1.57-1.44 2.62-.02 1.34.88 2.61 2.15 2.99 1.19.37 2.58-.09 3.25-1.16.42-.64.59-1.42.57-2.19V0h-.02z" />
                                    </svg>
                                </a>

                                <a
                                    href="[https://www.youtube.com](https://www.youtube.com)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 hover:text-btn-light transition-colors duration-200"
                                    aria-label="YouTube"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 3.88 12 3.88 12 3.88s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                    </svg>
                                </a>
                            </div>

                            {/* Botón Agendar Consulta */}
                            <Link
                                href="/schedule"
                                className="px-3.5 py-2 rounded-full bg-btn-light text-text-dark hover:bg-btn-light-hover transition-colors whitespace-nowrap uppercase font-bold text-xs shrink-0"
                            >
                                Agendar Consulta →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sub-barras: Derechos Reservados y Ubicación */}
            <div className="border-t border-gray-500/40 py-6 px-6 sm:px-10 lg:px-12 text-xs text-text-light/60">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                    <p>© {new Date().getFullYear()} Anita Tarot. Todos los derechos reservados.</p>
                    <p>Serra, Argentina</p>
                </div>
            </div>
        </footer>
    );
}
