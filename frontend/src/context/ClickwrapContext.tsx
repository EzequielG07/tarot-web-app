// src/context/ClickwrapContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { ModalTerminosYCondiciones } from '@/components/legal/ModalTerminosYCondiciones';

export interface ClickwrapData {
    servicioId: string;
    servicioNombre: string;
    precioTexto: string;
}

interface ClickwrapContextType {
    abrirClickwrap: (data: ClickwrapData) => void;
    cerrarClickwrap: () => void;
    abrirTerminosModal: () => void;
}

const ClickwrapContext = createContext<ClickwrapContextType | undefined>(undefined);

export const ClickwrapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [servicioActivo, setServicioActivo] = useState<ClickwrapData | null>(null);

    // Estados del formulario clickwrap
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [aceptaPrivacidad, setAceptaPrivacidad] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // Estado para ver el modal completo de términos dentro del clickwrap
    const [verTerminosModal, setVerTerminosModal] = useState(false);

    const abrirClickwrap = (data: ClickwrapData) => {
        setServicioActivo(data);
        setErrorMsg(null);
        setAceptaTerminos(false);
        setAceptaPrivacidad(false);
    };

    const cerrarClickwrap = () => {
        if (loading) return;
        setServicioActivo(null);
        setErrorMsg(null);
    };

    const abrirTerminosModal = () => {
        setVerTerminosModal(true);
    };

    // Cerrar con Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (verTerminosModal) {
                    setVerTerminosModal(false);
                } else if (servicioActivo && !loading) {
                    setServicioActivo(null);
                }
            }
        };

        if (servicioActivo || verTerminosModal) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [servicioActivo, verTerminosModal, loading]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg(null);

        const cleanNombre = nombre.trim();
        const cleanEmail = email.trim().toLowerCase();
        const cleanCelular = celular.trim();

        if (cleanNombre.length < 2) {
            setErrorMsg('Por favor, ingresá tu nombre y apellido.');
            return;
        }

        if (!/^[0-9+\s\-()]{7,25}$/.test(cleanCelular)) {
            setErrorMsg('Por favor, ingresá un número de teléfono / WhatsApp válido.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
            setErrorMsg('Por favor, ingresá un correo electrónico válido.');
            return;
        }

        if (!aceptaTerminos || !aceptaPrivacidad) {
            setErrorMsg('Debés marcar ambas casillas para aceptar los Términos y Condiciones y la Política de Privacidad.');
            return;
        }

        try {
            setLoading(true);

            // Generar código de reserva aleatorio verificable (ej: RES-849201)
            const randomCode = Math.floor(100000 + Math.random() * 900000);
            const codigoReserva = `RES-${randomCode}`;
            const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'Desconocido';

            // Guardar constancia inmutable en Supabase
            const { error: insertError } = await supabase.from('registros_clickwrap').insert([
                {
                    id: codigoReserva,
                    nombre: cleanNombre,
                    email: cleanEmail,
                    celular: cleanCelular,
                    servicio_id: servicioActivo?.servicioId || 'general',
                    servicio_nombre: servicioActivo?.servicioNombre || 'Servicio',
                    precio_texto: servicioActivo?.precioTexto || '',
                    version_terminos: 'v1.0 - 2026',
                    terminos_aceptados: true,
                    privacidad_aceptada: true,
                    user_agent: userAgent,
                },
            ]);

            if (insertError) {
                console.warn('Advertencia al registrar clickwrap en Supabase:', insertError.message);
            }

            // Construir mensaje oficial de WhatsApp con la constancia legal
            const waMsg = `¡Hola Anita! Acepté los Términos y Condiciones de Contratación y la Política de Privacidad (Constancia Oficial #${codigoReserva}) para el servicio "${servicioActivo?.servicioNombre}" (${servicioActivo?.precioTexto}).\n\n• Nombre: ${cleanNombre}\n• Celular: ${cleanCelular}\n• Email: ${cleanEmail}\n\n¿Cómo podemos coordinar día y horario?`;
            const waUrl = getWhatsAppUrl(waMsg);

            // Abrir WhatsApp y cerrar modal
            window.open(waUrl, '_blank');
            setServicioActivo(null);
            setNombre('');
            setEmail('');
            setCelular('');
            setAceptaTerminos(false);
            setAceptaPrivacidad(false);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : 'Error al procesar reserva';
            console.error('Error en clickwrap:', msg);
            setErrorMsg('Ocurrió un error. Por favor intentá nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ClickwrapContext.Provider value={{ abrirClickwrap, cerrarClickwrap, abrirTerminosModal }}>
            {children}

            {/* Modal Clickwrap de Aceptación Previa a WhatsApp */}
            {servicioActivo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-5 bg-black/80 backdrop-blur-md animate-fadeIn"
                    role="dialog"
                    aria-modal="true"
                    onClick={cerrarClickwrap}
                >
                    <div
                        className="relative w-full max-w-lg bg-bg-card border border-border-accent/80 text-text-light rounded-3xl p-5 sm:p-7 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón cerrar ✕ */}
                        <button
                            type="button"
                            disabled={loading}
                            onClick={cerrarClickwrap}
                            aria-label="Cerrar"
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-text-light/80 hover:text-text-light flex items-center justify-center text-sm transition-colors cursor-pointer"
                        >
                            ✕
                        </button>

                        {/* Encabezado */}
                        <div className="text-left space-y-1.5 pr-6">
                            <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-widest text-btn-light bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                                Paso previo a WhatsApp · Contratación
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bodoni font-bold uppercase tracking-wide text-text-light leading-snug">
                                Confirmá tu Reserva
                            </h3>
                            <p className="text-xs font-serif text-text-light/75">
                                Antes de continuar a WhatsApp para coordinar tu turno, por favor completá tus datos y aceptá las condiciones del servicio.
                            </p>
                        </div>

                        {/* Tarjeta resumen del servicio seleccionado */}
                        <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-amber-400/30 text-left space-y-1">
                            <span className="text-[10px] font-sans uppercase tracking-wider text-btn-light/80 block">
                                Servicio seleccionado:
                            </span>
                            <div className="text-sm sm:text-base font-bodoni font-bold text-text-light uppercase">
                                {servicioActivo.servicioNombre}
                            </div>
                            <div className="text-xs font-serif font-bold text-btn-light">
                                {servicioActivo.precioTexto}
                            </div>
                        </div>

                        {/* Formulario */}
                        <form onSubmit={handleSubmit} className="space-y-3.5 text-left pt-1">
                            <div>
                                <label className="block text-[11px] font-serif uppercase tracking-wider text-text-light/80 mb-1">
                                    Nombre y Apellido *
                                </label>
                                <input
                                    type="text"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    placeholder="Tu nombre completo..."
                                    className="w-full bg-black/40 border border-white/20 focus:border-amber-400 rounded-xl px-4 py-2 text-xs sm:text-sm font-serif text-text-light placeholder:text-text-light/40 focus:outline-none transition-colors"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[11px] font-serif uppercase tracking-wider text-text-light/80 mb-1">
                                        Celular / WhatsApp *
                                    </label>
                                    <input
                                        type="tel"
                                        value={celular}
                                        onChange={(e) => setCelular(e.target.value)}
                                        placeholder="ej: 11 1234-5678"
                                        className="w-full bg-black/40 border border-white/20 focus:border-amber-400 rounded-xl px-4 py-2 text-xs sm:text-sm font-serif text-text-light placeholder:text-text-light/40 focus:outline-none transition-colors"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-serif uppercase tracking-wider text-text-light/80 mb-1">
                                        Correo Electrónico *
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="ejemplo@correo.com"
                                        className="w-full bg-black/40 border border-white/20 focus:border-amber-400 rounded-xl px-4 py-2 text-xs sm:text-sm font-serif text-text-light placeholder:text-text-light/40 focus:outline-none transition-colors"
                                        required
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            {/* Casillas de Aceptación Clickwrap Obligatorias */}
                            <div className="p-3.5 rounded-2xl bg-black/30 border border-white/10 space-y-2.5">
                                <label className="flex items-start gap-2.5 cursor-pointer text-xs font-serif text-text-light/90 select-none">
                                    <input
                                        type="checkbox"
                                        checked={aceptaTerminos}
                                        onChange={(e) => setAceptaTerminos(e.target.checked)}
                                        className="mt-0.5 w-4 h-4 rounded text-btn-light border-white/30 focus:ring-amber-400 bg-black/40 shrink-0 cursor-pointer"
                                        required
                                        disabled={loading}
                                    />
                                    <span>
                                        He leído y acepto los{' '}
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setVerTerminosModal(true);
                                            }}
                                            className="text-btn-light hover:underline font-semibold cursor-pointer underline decoration-amber-400/50"
                                        >
                                            Términos y Condiciones de Contratación
                                        </button>
                                        . (Servicios espirituales para mayores de 18 años).
                                    </span>
                                </label>

                                <label className="flex items-start gap-2.5 cursor-pointer text-xs font-serif text-text-light/90 select-none">
                                    <input
                                        type="checkbox"
                                        checked={aceptaPrivacidad}
                                        onChange={(e) => setAceptaPrivacidad(e.target.checked)}
                                        className="mt-0.5 w-4 h-4 rounded text-btn-light border-white/30 focus:ring-amber-400 bg-black/40 shrink-0 cursor-pointer"
                                        required
                                        disabled={loading}
                                    />
                                    <span>
                                        He leído y acepto la{' '}
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setVerTerminosModal(true);
                                            }}
                                            className="text-btn-light hover:underline font-semibold cursor-pointer underline decoration-amber-400/50"
                                        >
                                            Política de Privacidad
                                        </button>{' '}
                                        (Protección de datos personales conforme Ley 25.326).
                                    </span>
                                </label>
                            </div>

                            {errorMsg && (
                                <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-serif">
                                    {errorMsg}
                                </div>
                            )}

                            {/* Botón Acción Final hacia WhatsApp */}
                            <button
                                type="submit"
                                disabled={loading || !aceptaTerminos || !aceptaPrivacidad}
                                className="w-full py-3 px-6 rounded-full text-text-light bg-btn-dark hover:bg-btn-dark-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>REGISTRANDO CONSTANCIA...</span>
                                    </>
                                ) : (
                                    <span>CONFIRMAR Y CONTINUAR A WHATSAPP →</span>
                                )}
                            </button>

                            <p className="text-[10px] font-serif text-text-light/50 text-center">
                                ⚖️ Al hacer clic se emitirá un número de constancia oficial verificable para tu tranquilidad y la de Anita.
                            </p>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal de Términos y Condiciones Completo para Lectura */}
            <ModalTerminosYCondiciones
                isOpen={verTerminosModal}
                onClose={() => setVerTerminosModal(false)}
            />
        </ClickwrapContext.Provider>
    );
};

export const useClickwrap = () => {
    const context = useContext(ClickwrapContext);
    if (!context) {
        throw new Error('useClickwrap debe ser usado dentro de un ClickwrapProvider');
    }
    return context;
};
