// src/components/sections/FrecuenciaRegister.tsx
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const FrecuenciaRegister = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Estados del formulario en el modal
    const [nombre, setNombre] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensajeExito, setMensajeExito] = useState<string | null>(null);
    const [mensajeError, setMensajeError] = useState<string | null>(null);

    // Cerrar modal con tecla Escape y bloquear scroll del fondo cuando está abierto
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMensajeError(null);
        setMensajeExito(null);

        const cleanNombre = nombre.trim();
        const cleanCelular = celular.trim();
        const cleanEmail = email.trim().toLowerCase();

        if (cleanNombre.length < 2) {
            setMensajeError('Por favor, ingresá tu nombre completo.');
            return;
        }

        if (!/^[0-9+\s\-()]{7,25}$/.test(cleanCelular)) {
            setMensajeError('Por favor, ingresá un número de WhatsApp válido.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
            setMensajeError('Por favor, ingresá un correo electrónico válido.');
            return;
        }

        try {
            setLoading(true);

            const { error } = await supabase.from('suscriptores').insert([
                {
                    nombre: cleanNombre,
                    celular: cleanCelular,
                    email: cleanEmail,
                },
            ]);

            const waMsg = `¡Hola Anita! Me acabo de suscribir a la Comunidad Frecuencia Sacerdotisa:\n\n• Nombre: ${cleanNombre}\n• Celular: ${cleanCelular}\n• Email: ${cleanEmail}\n\n¡Quiero formar parte del grupo de WhatsApp!`;
            const waUrl = getWhatsAppUrl(waMsg);

            if (error) {
                // Código 23505: email duplicado (Unique constraint)
                if (error.code === '23505') {
                    setMensajeExito('¡Ya formás parte de la comunidad! Te redirigimos a WhatsApp para conectar con Anita.');
                    setTimeout(() => {
                        window.open(waUrl, '_blank');
                        setIsModalOpen(false);
                    }, 1000);
                    return;
                }
                console.warn('Error al guardar suscriptor en Supabase:', error.message);
                setMensajeExito('¡Te estamos redirigiendo a WhatsApp para sumarte al grupo!');
                setTimeout(() => {
                    window.open(waUrl, '_blank');
                    setIsModalOpen(false);
                }, 1000);
                return;
            }

            setMensajeExito('¡Bienvenido/a a la Comunidad! Te redirigimos a WhatsApp para confirmar tu ingreso al grupo...');
            setNombre('');
            setCelular('');
            setEmail('');

            setTimeout(() => {
                window.open(waUrl, '_blank');
                setIsModalOpen(false);
            }, 1000);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : 'Ocurrió un error inesperado';
            console.error('Error en suscripción:', msg);
            setMensajeError('No pudimos completar tu registro en este momento. Por favor intentá de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section
                id="frecuencia-register"
                className="scroll-mt-20 relative w-full min-h-[320px] flex items-center overflow-hidden py-12 px-6 sm:px-12 lg:px-20 border-y border-white/10"
            >
                {/* Video de fondo */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                >
                    <source src="/videos/backgrounds/register-bg.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>

                {/* Capa de contraste suave sobre el video */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                {/* Contenedor interno del contenido */}
                <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Columna 1: Textos (6 cols) */}
                    <div className="lg:col-span-6 space-y-2 text-left">
                        <p className="text-xs font-serif font-medium uppercase tracking-widest text-text-light/80">
                            Formá Parte de
                        </p>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bodoni font-bold uppercase text-text-light tracking-wide leading-tight">
                            FRECUENCIA SACERDOTISA
                        </h2>

                        <p className="text-xs sm:text-sm font-serif text-text-light/90 leading-relaxed max-w-lg">
                            Recibí reflexiones semanales, mensajes del oráculo, rituales exclusivos y formá parte de nuestra
                            comunidad privada en WhatsApp para acompañar tu proceso de transformación energética.
                        </p>
                    </div>

                    {/* Columna 2: Cápsula unificada de un solo renglón (6 cols) */}
                    <div className="lg:col-span-6 w-full flex items-center justify-center lg:justify-end">
                        <div className="w-full max-w-md flex items-center justify-between bg-white/10 border border-white/20 backdrop-blur-md rounded-full p-1.5 focus-within:border-amber-400/80 transition-all shadow-lg hover:border-white/30">
                            {/* Texto identificador a la izquierda */}
                            <span className="px-4 text-xs sm:text-sm font-serif text-text-light/90 select-none truncate">
                                Registro a la Comunidad
                            </span>

                            {/* Botón a la derecha que abre el modal */}
                            <button
                                type="button"
                                onClick={() => {
                                    setMensajeError(null);
                                    setMensajeExito(null);
                                    setIsModalOpen(true);
                                }}
                                className="shrink-0 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover transition-all font-serif font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                            >
                                UNIRME A LA COMUNIDAD →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal emergente de Registro */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
                    onClick={() => !loading && setIsModalOpen(false)}
                >
                    <div
                        className="relative w-full max-w-md bg-stone-900/95 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 text-text-light"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón de cerrar ✕ */}
                        <button
                            type="button"
                            disabled={loading}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-text-light flex items-center justify-center text-sm transition-colors cursor-pointer disabled:opacity-50"
                            aria-label="Cerrar ventana"
                        >
                            ✕
                        </button>

                        {/* Encabezado del Modal */}
                        <div className="text-left space-y-1.5 pr-6">
                            <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-widest text-btn-light bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                                Comunidad Frecuencia Sacerdotisa
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bodoni font-bold uppercase tracking-wide text-text-light leading-snug">
                                Unite a Nuestra Comunidad
                            </h3>
                            <p className="text-xs font-serif text-text-light/75 leading-relaxed">
                                Completá tus datos para ingresar al grupo privado de WhatsApp y recibir los rituales y novedades.
                            </p>
                        </div>

                        {/* Formulario */}
                        <form onSubmit={handleSubmit} className="space-y-3.5 pt-2 text-left">
                            {/* Campo Nombre */}
                            <div className="space-y-1">
                                <label className="block text-[11px] font-serif uppercase tracking-wider text-text-light/80">
                                    Nombre y Apellido
                                </label>
                                <input
                                    type="text"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    placeholder="Tu nombre completo..."
                                    className="w-full bg-black/40 border border-white/20 focus:border-amber-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-serif text-text-light placeholder:text-text-light/40 focus:outline-none transition-colors"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            {/* Campo Celular / WhatsApp */}
                            <div className="space-y-1">
                                <label className="block text-[11px] font-serif uppercase tracking-wider text-text-light/80">
                                    Celular / WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    value={celular}
                                    onChange={(e) => setCelular(e.target.value)}
                                    placeholder="ej: 11 1234-5678"
                                    className="w-full bg-black/40 border border-white/20 focus:border-amber-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-serif text-text-light placeholder:text-text-light/40 focus:outline-none transition-colors"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            {/* Campo Email */}
                            <div className="space-y-1">
                                <label className="block text-[11px] font-serif uppercase tracking-wider text-text-light/80">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="ejemplo@correo.com"
                                    className="w-full bg-black/40 border border-white/20 focus:border-amber-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-serif text-text-light placeholder:text-text-light/40 focus:outline-none transition-colors"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            {/* Mensaje de error si falla */}
                            {mensajeError && (
                                <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-serif">
                                    {mensajeError}
                                </div>
                            )}

                            {/* Mensaje de éxito */}
                            {mensajeExito && (
                                <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs font-serif">
                                    {mensajeExito}
                                </div>
                            )}

                            {/* Botón de Confirmación */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 px-6 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover disabled:opacity-60 transition-all font-serif font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>REGISTRANDO...</span>
                                        </>
                                    ) : (
                                        <span>CONFIRMAR Y UNIRME AL GRUPO →</span>
                                    )}
                                </button>
                            </div>

                            <p className="text-[10px] font-serif text-text-light/60 text-center pt-1">
                                🔒 Tus datos están protegidos. Te contactaremos únicamente para contenidos y novedades de la Comunidad.
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
