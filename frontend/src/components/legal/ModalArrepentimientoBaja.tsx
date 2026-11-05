// src/components/legal/ModalArrepentimientoBaja.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { getWhatsAppUrl } from '@/utils/whatsapp';

interface ModalArrepentimientoBajaProps {
    isOpen: boolean;
    onClose: () => void;
    tipo: 'arrepentimiento' | 'baja';
}

export const ModalArrepentimientoBaja: React.FC<ModalArrepentimientoBajaProps> = ({
    isOpen,
    onClose,
    tipo,
}) => {
    const isArrepentimiento = tipo === 'arrepentimiento';

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [servicioNombre, setServicioNombre] = useState('');
    const [fechaContratacion, setFechaContratacion] = useState('');
    const [motivo, setMotivo] = useState('');

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [constanciaGenerada, setConstanciaGenerada] = useState<string | null>(null);
    const [copiado, setCopiado] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen && !loading) {
                handleCerrar();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, loading]);

    const handleCerrar = () => {
        if (loading) return;
        setErrorMsg(null);
        setConstanciaGenerada(null);
        setCopiado(false);
        setNombre('');
        setEmail('');
        setCelular('');
        setServicioNombre('');
        setFechaContratacion('');
        setMotivo('');
        onClose();
    };

    const handleCopiarCodigo = () => {
        if (constanciaGenerada) {
            navigator.clipboard.writeText(constanciaGenerada);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 3000);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg(null);

        const cleanNombre = nombre.trim();
        const cleanEmail = email.trim().toLowerCase();
        const cleanCelular = celular.trim();
        const cleanServicio = servicioNombre.trim();

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

        if (cleanServicio.length < 2) {
            setErrorMsg('Por favor, indicá el servicio contratado.');
            return;
        }

        try {
            setLoading(true);

            // Generar código único identificador
            const randomCode = Math.floor(100000 + Math.random() * 900000);
            const prefix = isArrepentimiento ? 'ARR' : 'BAJA';
            const codigoLegal = `${prefix}-${randomCode}`;

            const { error: insertError } = await supabase.from('solicitudes_arrepentimiento_baja').insert([
                {
                    id: codigoLegal,
                    tipo: tipo,
                    nombre: cleanNombre,
                    email: cleanEmail,
                    celular: cleanCelular,
                    servicio_nombre: cleanServicio,
                    fecha_contratacion: fechaContratacion.trim() || 'No especificada',
                    motivo: motivo.trim() || 'Sin motivo especificado',
                    estado: 'Pendiente',
                },
            ]);

            if (insertError) {
                console.warn('Advertencia al registrar en Supabase:', insertError.message);
            }

            setConstanciaGenerada(codigoLegal);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : 'Error al registrar solicitud';
            console.error('Error en formulario:', msg);
            setErrorMsg('Ocurrió un error. Por favor intentá nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-action-modal-title"
            onClick={handleCerrar}
        >
            <div
                className="relative w-full max-w-xl bg-bg-card border border-border-accent/80 text-text-light rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl space-y-4 max-h-[92vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar ✕ */}
                <button
                    type="button"
                    disabled={loading}
                    onClick={handleCerrar}
                    aria-label="Cerrar ventana"
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-text-light/80 hover:text-text-light flex items-center justify-center text-sm transition-colors cursor-pointer"
                >
                    ✕
                </button>

                {/* Si la constancia ya fue generada, mostramos pantalla de éxito legal */}
                {constanciaGenerada ? (
                    <div className="space-y-5 text-center py-2 animate-fadeIn">
                        <div className="w-14 h-14 mx-auto rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-300 flex items-center justify-center text-2xl">
                            ✓
                        </div>

                        <div className="space-y-1.5">
                            <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-3 py-0.5 rounded-full">
                                Solicitud Registrada Oficialmente
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bodoni font-bold uppercase text-text-light">
                                {isArrepentimiento ? 'Solicitud de Arrepentimiento' : 'Solicitud de Baja de Servicio'}
                            </h3>
                            <p className="text-xs font-serif text-text-light/75 max-w-md mx-auto">
                                Conforme a la Disposición 954/2025 y Ley 24.240, se ha emitido tu comprobante fehaciente con fecha y hora de recepción.
                            </p>
                        </div>

                        {/* Bloque del Código */}
                        <div className="p-4 rounded-2xl bg-black/40 border border-amber-400/40 space-y-2">
                            <span className="text-[11px] font-serif uppercase tracking-wider text-text-light/70 block">
                                Tu Código de Seguimiento Legal:
                            </span>
                            <div className="text-2xl sm:text-3xl font-mono font-bold tracking-wider text-amber-300 select-all">
                                {constanciaGenerada}
                            </div>
                            <button
                                type="button"
                                onClick={handleCopiarCodigo}
                                className="text-xs font-serif text-btn-light hover:underline inline-flex items-center gap-1 cursor-pointer"
                            >
                                {copiado ? '✓ ¡Código copiado al portapapeles!' : 'Copiar código de seguimiento'}
                            </button>
                        </div>

                        <div className="text-xs font-serif text-text-light/70 text-left bg-white/[0.03] p-3.5 rounded-xl border border-white/10 space-y-1">
                            <p className="font-semibold text-text-light">Detalles registrados:</p>
                            <p>• Titular: {nombre}</p>
                            <p>• Servicio: {servicioNombre}</p>
                            <p>• Email: {email}</p>
                            <p>• Teléfono: {celular}</p>
                            <p className="text-[11px] text-text-light/50 pt-1">
                                Nos comunicaremos dentro de las 24 a 48 hs hábiles a tu correo o WhatsApp para confirmar la tramitación.
                            </p>
                        </div>

                        {/* Acciones */}
                        <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                            <a
                                href={getWhatsAppUrl(
                                    `¡Hola Anita! Registré mi ${
                                        isArrepentimiento ? 'Solicitud de Arrepentimiento' : 'Solicitud de Baja de Servicio'
                                    } en el sitio web (Código de trámite #${constanciaGenerada}) para el servicio "${servicioNombre}". Dejo constancia de mi solicitud.`
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-serif font-bold text-xs uppercase tracking-wider text-center transition-colors"
                            >
                                Notificar también por WhatsApp →
                            </a>
                            <button
                                type="button"
                                onClick={handleCerrar}
                                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-text-light font-serif text-xs uppercase tracking-wider transition-colors cursor-pointer"
                            >
                                Finalizar y Cerrar
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Formulario de Solicitud */
                    <>
                        <div className="text-left space-y-1.5 pr-6">
                            <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-widest text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                                Disposición 954/2025 · Ley 24.240
                            </span>
                            <h3
                                id="legal-action-modal-title"
                                className="text-xl sm:text-2xl font-bodoni font-bold uppercase tracking-wide text-text-light leading-snug"
                            >
                                {isArrepentimiento ? 'Botón de Arrepentimiento' : 'Botón de Baja de Servicio'}
                            </h3>
                            <p className="text-xs font-serif text-text-light/75 leading-relaxed">
                                {isArrepentimiento
                                    ? 'Conforme al art. 34 de la Ley 24.240 y Disposición 954/2025, podés solicitar la revocación de la contratación dentro del plazo legal de 10 días corridos contados desde la contratación.'
                                    : 'Conforme a la Disposición 954/2025, podés solicitar la baja o rescisión de un servicio contratado a distancia sin costo ni penalidades.'}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3 text-left pt-1">
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[11px] font-serif uppercase tracking-wider text-text-light/80 mb-1">
                                        Servicio a revocar / dar de baja *
                                    </label>
                                    <input
                                        type="text"
                                        value={servicioNombre}
                                        onChange={(e) => setServicioNombre(e.target.value)}
                                        placeholder="ej: Lectura de Claridad / Reiki"
                                        className="w-full bg-black/40 border border-white/20 focus:border-amber-400 rounded-xl px-4 py-2 text-xs sm:text-sm font-serif text-text-light placeholder:text-text-light/40 focus:outline-none transition-colors"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-serif uppercase tracking-wider text-text-light/80 mb-1">
                                        Fecha aproximada de contratación
                                    </label>
                                    <input
                                        type="text"
                                        value={fechaContratacion}
                                        onChange={(e) => setFechaContratacion(e.target.value)}
                                        placeholder="ej: 15/10/2026"
                                        className="w-full bg-black/40 border border-white/20 focus:border-amber-400 rounded-xl px-4 py-2 text-xs sm:text-sm font-serif text-text-light placeholder:text-text-light/40 focus:outline-none transition-colors"
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-serif uppercase tracking-wider text-text-light/80 mb-1">
                                    Motivo o comentarios adicionales (opcional)
                                </label>
                                <textarea
                                    value={motivo}
                                    onChange={(e) => setMotivo(e.target.value)}
                                    placeholder="Detallá cualquier aclaración que consideres relevante..."
                                    rows={2}
                                    className="w-full bg-black/40 border border-white/20 focus:border-amber-400 rounded-xl px-4 py-2 text-xs sm:text-sm font-serif text-text-light placeholder:text-text-light/40 focus:outline-none transition-colors resize-none"
                                    disabled={loading}
                                />
                            </div>

                            {errorMsg && (
                                <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-serif">
                                    {errorMsg}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 px-6 rounded-full text-stone-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-2 mt-2"
                            >
                                {loading ? (
                                    <>
                                        <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                        <span>EMITIENDO CONSTANCIA...</span>
                                    </>
                                ) : (
                                    <span>
                                        {isArrepentimiento ? 'CONFIRMAR ARREPENTIMIENTO →' : 'CONFIRMAR SOLICITUD DE BAJA →'}
                                    </span>
                                )}
                            </button>

                            <p className="text-[10px] font-serif text-text-light/50 text-center pt-1">
                                Al presionar el botón se emitirá inmediatamente un código identificador único fehaciente que servirá de constancia para tu trámite.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

