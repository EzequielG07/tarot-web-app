// src/components/sections/ContactFormSection.tsx
'use client';

import Image from 'next/image';

export const ContactFormSection = () => {
    return (
        <section className="relative w-full max-w-7xl mx-auto min-h-[600px] flex items-center overflow-hidden rounded-2xl my-8 py-12 px-6 sm:px-10 lg:px-16 border shadow-2xl">
            {/* Imagen de fondo ocupando el 100% del contenedor sin franjas vacías */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/backgrounds/turnos-bg.png"
                    alt="Fondo de contacto"
                    fill
                    className="object-cover object-left" // 'object-cover' llena todo el espacio y 'object-left' prioriza el encuadre izquierdo
                    priority
                />
            </div>

            {/* Contenedor principal del contenido */}
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Espacio a la izquierda (6 cols) para visibilizar el fondo */}
                <div className="hidden lg:block lg:col-span-6" />

                {/* Formulario a la derecha (6 cols) */}
                <div className="lg:col-span-6 w-full p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl space-y-6">
                    <div className="space-y-2">
                        <p className="text-xs font-medium font-serif uppercase text-text-light/80">Contacto</p>
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase text-text-light">
                            Enviame tu consulta
                        </h2>
                    </div>

                    {/* Formulario */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        {/* Campo: Nombre */}
                        <div className="space-y-1">
                            <label htmlFor="nombre" className="block text-xs font-serif uppercase text-text-light/90">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Tu nombre"
                                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-text-light text-sm placeholder:text-text-light/40 focus:outline-none focus:border-amber-400/60 transition-colors"
                                required
                            />
                        </div>

                        {/* Campo: Celular */}
                        <div className="space-y-1">
                            <label htmlFor="celular" className="block text-xs font-serif uppercase text-text-light/90">
                                Celular / WhatsApp
                            </label>
                            <input
                                type="tel"
                                id="celular"
                                name="celular"
                                placeholder="+54 9 11 ..."
                                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-text-light text-sm placeholder:text-text-light/40 focus:outline-none focus:border-amber-400/60 transition-colors"
                                required
                            />
                        </div>

                        {/* Campo: Email */}
                        <div className="space-y-1">
                            <label htmlFor="email" className="block text-xs font-serif uppercase text-text-light/90">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="tu@email.com"
                                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-text-light text-sm placeholder:text-text-light/40 focus:outline-none focus:border-amber-400/60 transition-colors"
                                required
                            />
                        </div>

                        {/* Campo: Consulta */}
                        <div className="space-y-1">
                            <label htmlFor="consulta" className="block text-xs font-serif uppercase text-text-light/90">
                                Consulta
                            </label>
                            <textarea
                                id="consulta"
                                name="consulta"
                                rows={4}
                                placeholder="Escribí tu mensaje o consulta acá..."
                                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-text-light text-sm placeholder:text-text-light/40 focus:outline-none focus:border-amber-400/60 transition-colors resize-none"
                                required
                            />
                        </div>

                        {/* Botón de envío */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-colors uppercase font-bold text-xs tracking-wider"
                            >
                                Enviar Consulta →
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
