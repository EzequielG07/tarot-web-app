// src/app/admin/login/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // Si ya tiene sesión activa, redirigir directo al dashboard
    useEffect(() => {
        const checkExistingSession = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                router.replace('/admin/dashboard');
            }
        };
        checkExistingSession();
    }, [router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg(null);
        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email.trim(),
                password: password,
            });

            if (error) {
                if (error.message.includes('Invalid login credentials')) {
                    setErrorMsg('Email o contraseña incorrectos. Verificá los datos ingresados.');
                } else {
                    setErrorMsg(error.message);
                }
                return;
            }

            if (data.session) {
                router.replace('/admin/dashboard');
            }
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : 'Error inesperado al iniciar sesión';
            setErrorMsg(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-bg-main flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-12">
            {/* Resplandor místico decorativo */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-btn-light/10 rounded-full blur-3xl pointer-events-none" />

            {/* Tarjeta de Login */}
            <div className="w-full max-w-md bg-bg-card border border-border-accent/80 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10 space-y-8 backdrop-blur-md">
                {/* Logo y Encabezado */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center gap-4">
                        <Image src="/images/logos/logo-signo.png" alt="Logo" width={48} height={48} priority />
                        <Image src="/images/logos/logo-anita.png" alt="Anita Tarot" width={90} height={48} priority />
                    </div>
                    <div>
                        <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-text-light/60 bg-white/5 border border-border-accent/50 px-3 py-1 rounded-full">
                            Panel de Administración
                        </span>
                        <h1 className="mt-3 text-2xl font-bodoni font-bold uppercase tracking-wide text-text-light">
                            Iniciar Sesión
                        </h1>
                        <p className="mt-1 text-xs font-serif text-text-light/70">
                            Ingresá tus credenciales para gestionar tarifas y servicios.
                        </p>
                    </div>
                </div>

                {/* Mensaje de Error */}
                {errorMsg && (
                    <div className="bg-red-950/40 border border-red-500/60 text-red-200 text-xs rounded-xl p-3.5 flex items-start gap-2.5">
                        <svg className="w-4 h-4 shrink-0 mt-0.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="flex-1">{errorMsg}</p>
                    </div>
                )}

                {/* Formulario */}
                <form className="space-y-5" onSubmit={handleLogin}>
                    <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-serif uppercase tracking-wider text-text-light/90">
                            Correo Electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@anitatarot.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-text-light text-sm placeholder:text-text-light/30 focus:outline-none focus:border-btn-light transition-colors"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="password" className="block text-xs font-serif uppercase tracking-wider text-text-light/90">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••••••"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-text-light text-sm placeholder:text-text-light/30 focus:outline-none focus:border-btn-light transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-6 rounded-full bg-btn-light text-text-dark hover:bg-btn-light-hover font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 cursor-pointer"
                    >
                        {loading ? (
                            <>
                                <div className="w-4 h-4 border-2 border-text-dark border-t-transparent rounded-full animate-spin" />
                                <span>Ingresando...</span>
                            </>
                        ) : (
                            <span>Acceder al Panel →</span>
                        )}
                    </button>
                </form>

                {/* Enlace para volver a la web */}
                <div className="pt-2 text-center border-t border-white/10">
                    <Link
                        href="/"
                        className="text-xs font-serif text-text-light/60 hover:text-btn-light transition-colors inline-flex items-center gap-1.5"
                    >
                        <span>← Volver al sitio web principal</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

