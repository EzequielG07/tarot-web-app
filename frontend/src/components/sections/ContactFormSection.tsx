// src/components/sections/ContactFormSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        celular: '',
        email: '',
        consulta: '',
    });

    const [errors, setErrors] = useState<{
        nombre?: string;
        celular?: string;
        email?: string;
        consulta?: string;
    }>({});

    const [touched, setTouched] = useState({
        nombre: false,
        celular: false,
        email: false,
        consulta: false,
    });

    const validateField = (name: string, value: string): string | undefined => {
        const val = value.trim();
        switch (name) {
            case 'nombre':
                if (!val) return 'El nombre es obligatorio.';
                if (val.length < 2) return 'El nombre debe tener al menos 2 caracteres.';
                return undefined;
            case 'celular':
                if (!val) return 'El celular / WhatsApp es obligatorio.';
                if (!/^[0-9+\s\-()]{7,20}$/.test(val)) return 'Ingresá un número de teléfono válido (mínimo 7 dígitos).';
                return undefined;
            case 'email':
                if (!val) return 'El email es obligatorio.';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Ingresá un email válido (ej: nombre@correo.com).';
                return undefined;
            case 'consulta':
                if (!val) return 'La consulta es obligatoria.';
                if (val.length < 10) return 'Escribí al menos 10 caracteres para detallar tu consulta.';
                return undefined;
            default:
                return undefined;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (touched[name as keyof typeof touched]) {
            const error = validateField(name, value);
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    // Verifica que todos los campos estén completos y sin errores
    const isFormComplete =
        Boolean(formData.nombre.trim()) &&
        Boolean(formData.celular.trim()) &&
        Boolean(formData.email.trim()) &&
        Boolean(formData.consulta.trim()) &&
        !validateField('nombre', formData.nombre) &&
        !validateField('celular', formData.celular) &&
        !validateField('email', formData.email) &&
        !validateField('consulta', formData.consulta);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validar todos los campos al enviar
        const newErrors = {
            nombre: validateField('nombre', formData.nombre),
            celular: validateField('celular', formData.celular),
            email: validateField('email', formData.email),
            consulta: validateField('consulta', formData.consulta),
        };

        setTouched({
            nombre: true,
            celular: true,
            email: true,
            consulta: true,
        });

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(Boolean);
        if (hasErrors || !isFormComplete) {
            return;
        }

        // Armar el mensaje estructurado para WhatsApp
        const mensaje = `¡Hola Anita! Te envío una consulta desde la web:\n\n• Nombre: ${formData.nombre.trim()}\n• Celular / WhatsApp: ${formData.celular.trim()}\n• Email: ${formData.email.trim()}\n• Consulta: ${formData.consulta.trim()}`;

        const url = getWhatsAppUrl(mensaje);
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section
            id="contacto"
            className="scroll-mt-24 relative w-full max-w-7xl mx-auto min-h-[600px] flex flex-col lg:flex-row items-center overflow-hidden rounded-2xl my-8 py-6 px-4 sm:px-8 lg:py-12 lg:px-16 border border-border-accent/40 shadow-2xl bg-bg-main"
        >
            {/* Imagen de fondo ocupando el 100% solo en Desktop (>= lg) */}
            <div className="hidden lg:block absolute inset-0 w-full h-full">
                <Image
                    src="/images/backgrounds/turnos-bg.png"
                    alt="Fondo de contacto"
                    fill
                    className="object-cover object-left"
                    priority
                />
            </div>

            {/* Imagen de encabezado solo visible en Mobile (< lg) */}
            <div className="block lg:hidden w-full relative aspect-square sm:aspect-[4/3] max-h-[380px] rounded-2xl overflow-hidden mb-6 shadow-lg border border-white/10">
                <Image
                    src="/images/backgrounds/turnos-bg-mobile.png"
                    alt="Contacto Anita Tarot"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Contenedor principal del contenido */}
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Espacio a la izquierda (6 cols) para visibilizar el fondo en Desktop */}
                <div className="hidden lg:block lg:col-span-6" />

                {/* Formulario a la derecha (6 cols) con fondo bg-bg-main */}
                <div className="lg:col-span-6 w-full p-6 sm:p-8 rounded-2xl bg-bg-main border border-white/10 shadow-xl space-y-6">
                    <div className="space-y-2">
                        <p className="text-xs font-medium font-serif uppercase text-text-light/80">Contacto</p>
                        <h2 className="text-2xl sm:text-3xl font-bodoni font-bold uppercase text-text-light">
                            Enviame tu consulta
                        </h2>
                    </div>

                    {/* Formulario */}
                    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                        {/* Campo: Nombre */}
                        <div className="space-y-1">
                            <label htmlFor="nombre" className="block text-xs font-serif uppercase text-text-light/90">
                                Nombre <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Tu nombre"
                                className={`w-full px-4 py-2.5 rounded-xl text-text-light text-sm placeholder:text-text-light/40 focus:outline-none transition-colors ${
                                    errors.nombre && touched.nombre
                                        ? 'bg-red-950/20 border border-red-400 focus:border-red-400'
                                        : 'bg-white/10 border border-white/15 focus:border-amber-400/60'
                                }`}
                                required
                            />
                            {errors.nombre && touched.nombre && (
                                <p className="text-[11px] text-red-400 font-sans mt-1">{errors.nombre}</p>
                            )}
                        </div>

                        {/* Campo: Celular */}
                        <div className="space-y-1">
                            <label htmlFor="celular" className="block text-xs font-serif uppercase text-text-light/90">
                                Celular / WhatsApp <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="tel"
                                id="celular"
                                name="celular"
                                value={formData.celular}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="+54 9 11 ..."
                                className={`w-full px-4 py-2.5 rounded-xl text-text-light text-sm placeholder:text-text-light/40 focus:outline-none transition-colors ${
                                    errors.celular && touched.celular
                                        ? 'bg-red-950/20 border border-red-400 focus:border-red-400'
                                        : 'bg-white/10 border border-white/15 focus:border-amber-400/60'
                                }`}
                                required
                            />
                            {errors.celular && touched.celular && (
                                <p className="text-[11px] text-red-400 font-sans mt-1">{errors.celular}</p>
                            )}
                        </div>

                        {/* Campo: Email */}
                        <div className="space-y-1">
                            <label htmlFor="email" className="block text-xs font-serif uppercase text-text-light/90">
                                Email <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="tu@email.com"
                                className={`w-full px-4 py-2.5 rounded-xl text-text-light text-sm placeholder:text-text-light/40 focus:outline-none transition-colors ${
                                    errors.email && touched.email
                                        ? 'bg-red-950/20 border border-red-400 focus:border-red-400'
                                        : 'bg-white/10 border border-white/15 focus:border-amber-400/60'
                                }`}
                                required
                            />
                            {errors.email && touched.email && (
                                <p className="text-[11px] text-red-400 font-sans mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Campo: Consulta */}
                        <div className="space-y-1">
                            <label htmlFor="consulta" className="block text-xs font-serif uppercase text-text-light/90">
                                Consulta <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                id="consulta"
                                name="consulta"
                                rows={4}
                                value={formData.consulta}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Escribí tu mensaje o consulta acá..."
                                className={`w-full px-4 py-2.5 rounded-xl text-text-light text-sm placeholder:text-text-light/40 focus:outline-none transition-colors resize-none ${
                                    errors.consulta && touched.consulta
                                        ? 'bg-red-950/20 border border-red-400 focus:border-red-400'
                                        : 'bg-white/10 border border-white/15 focus:border-amber-400/60'
                                }`}
                                required
                            />
                            {errors.consulta && touched.consulta && (
                                <p className="text-[11px] text-red-400 font-sans mt-1">{errors.consulta}</p>
                            )}
                        </div>

                        {/* Botón de envío */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={!isFormComplete}
                                className={`w-full py-3 px-6 rounded-full text-text-light bg-btn-dark uppercase font-bold text-xs tracking-wider transition-all ${
                                    isFormComplete
                                        ? 'hover:bg-btn-dark-hover cursor-pointer ring-2 ring-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]'
                                        : 'opacity-50 cursor-not-allowed border border-white/10'
                                }`}
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
