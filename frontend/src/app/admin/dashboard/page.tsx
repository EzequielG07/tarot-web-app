// src/app/admin/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { usePrecios } from '@/context/PreciosContext';
import { ServicioPrecio } from '@/types/precios';

export default function AdminDashboardPage() {
    const router = useRouter();
    const { preciosList, updatePrecio, refreshPrecios, loading: contextLoading } = usePrecios();

    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [authChecking, setAuthChecking] = useState(true);

    // Estado local para los valores editados
    const [editedValues, setEditedValues] = useState<Record<string, { duracion: string; precio_ars: number; precio_usd: number }>>({});
    const [savingId, setSavingId] = useState<string | null>(null);
    const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

    // Filtros
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
    const [searchQuery, setSearchQuery] = useState<string>('');

    // 1. Verificar autenticación
    useEffect(() => {
        const verifyAuth = async () => {
            const { data } = await supabase.auth.getSession();
            if (!data.session) {
                router.replace('/admin/login');
            } else {
                setUserEmail(data.session.user.email || 'Admin');
                setAuthChecking(false);
            }
        };
        verifyAuth();

        // Escuchar cambios de sesión
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                router.replace('/admin/login');
            } else {
                setUserEmail(session.user.email || 'Admin');
            }
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [router]);

    // 2. Inicializar valores editados cuando carga la lista
    useEffect(() => {
        if (preciosList.length > 0) {
            const initial: Record<string, { duracion: string; precio_ars: number; precio_usd: number }> = {};
            preciosList.forEach((p) => {
                initial[p.id] = {
                    duracion: p.duracion,
                    precio_ars: Number(p.precio_ars),
                    precio_usd: Number(p.precio_usd),
                };
            });
            setEditedValues(initial);
        }
    }, [preciosList]);

    // Cerrar sesión
    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.replace('/admin/login');
    };

    // Manejar cambios en los inputs
    const handleFieldChange = (id: string, field: 'duracion' | 'precio_ars' | 'precio_usd', value: string | number) => {
        setEditedValues((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                [field]: field === 'duracion' ? value : Number(value) || 0,
            },
        }));
    };

    // Guardar cambios de un servicio específico
    const handleSaveSingle = async (servicio: ServicioPrecio) => {
        const currentEdit = editedValues[servicio.id];
        if (!currentEdit) return;

        setSavingId(servicio.id);
        setToastMessage(null);

        const res = await updatePrecio(servicio.id, {
            duracion: currentEdit.duracion.trim(),
            precio_ars: currentEdit.precio_ars,
            precio_usd: currentEdit.precio_usd,
        });

        setSavingId(null);

        if (res.success) {
            setToastMessage({
                text: `¡Tarifa "${servicio.servicio_nombre}" guardada con éxito!`,
                type: 'success',
            });
            setTimeout(() => setToastMessage(null), 3500);
        } else {
            setToastMessage({
                text: `Error al guardar: ${res.error || 'No se pudo actualizar'}`,
                type: 'error',
            });
        }
    };

    // Comprobar si un servicio tiene cambios pendientes
    const hasChanges = (servicio: ServicioPrecio) => {
        const currentEdit = editedValues[servicio.id];
        if (!currentEdit) return false;
        return (
            currentEdit.duracion !== servicio.duracion ||
            currentEdit.precio_ars !== Number(servicio.precio_ars) ||
            currentEdit.precio_usd !== Number(servicio.precio_usd)
        );
    };

    // Categorías disponibles
    const categorias = ['Todos', 'Lecturas & Orientación', 'Limpiezas & Magia', 'Reiki & Terapias Holísticas', 'Experiencias Destacadas'];

    // Filtrar lista
    const filteredList = preciosList.filter((item) => {
        const matchesCategory = selectedCategory === 'Todos' || item.categoria === selectedCategory;
        const matchesSearch =
            item.servicio_nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.opcion_nombre && item.opcion_nombre.toLowerCase().includes(searchQuery.toLowerCase())) ||
            item.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (authChecking || contextLoading) {
        return (
            <div className="min-h-screen bg-bg-main flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-2 border-btn-light border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm font-serif text-text-light/70 tracking-widest uppercase">
                        Cargando panel de tarifas...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg-main text-text-light flex flex-col">
            {/* Barra Superior del Panel Admin */}
            <header className="bg-bg-card border-b border-border-accent/80 sticky top-0 z-40 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-3" title="Ir al sitio web público">
                        <Image src="/images/logos/logo-signo.png" alt="Logo" width={38} height={38} priority />
                        <span className="font-bodoni font-bold text-base uppercase tracking-wider text-text-light hidden sm:inline">
                            Anita Tarot
                        </span>
                    </Link>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-text-light/80 bg-white/10 border border-white/20 px-2.5 py-1 rounded-full">
                        Admin Dashboard
                    </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                    <Link
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-serif text-text-light/70 hover:text-btn-light transition-colors hidden md:inline-flex items-center gap-1.5"
                    >
                        <span>Ver sitio público</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Link>

                    <div className="h-4 w-px bg-white/20 hidden md:block" />

                    <div className="flex items-center gap-2 text-xs font-sans text-text-light/80">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="max-w-[140px] truncate">{userEmail}</span>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="px-3.5 py-1.5 rounded-full text-xs font-serif font-bold uppercase tracking-wider bg-white/5 hover:bg-red-500/20 text-red-300 border border-red-500/30 transition-colors cursor-pointer"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </header>

            {/* Notificación Toast flotante */}
            {toastMessage && (
                <div
                    className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl shadow-2xl border text-sm font-sans flex items-center gap-3 transition-all animate-bounce ${
                        toastMessage.type === 'success'
                            ? 'bg-emerald-950 border-emerald-500 text-emerald-100'
                            : 'bg-red-950 border-red-500 text-red-100'
                    }`}
                >
                    {toastMessage.type === 'success' ? (
                        <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                    <span>{toastMessage.text}</span>
                </div>
            )}

            {/* Contenido Principal */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
                {/* Encabezado del Dashboard */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bodoni font-bold uppercase tracking-wide text-text-light">
                            Gestión de Tarifas y Servicios
                        </h1>
                        <p className="text-xs sm:text-sm font-serif text-text-light/70 mt-1">
                            Modificá los valores en pesos (ARS), dólares (USD) y la duración. Al guardar, los cambios se verán reflejados al instante en la web y en los enlaces de WhatsApp.
                        </p>
                    </div>

                    <button
                        onClick={() => refreshPrecios()}
                        className="self-start md:self-auto px-4 py-2 rounded-full text-xs font-serif font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 border border-white/15 text-text-light transition-colors flex items-center gap-2 cursor-pointer shrink-0"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>Sincronizar Datos</span>
                    </button>
                </div>

                {/* Filtros: Categorías y Buscador */}
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                    {/* Tabs de Categorías */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 [scrollbar-width:none]">
                        {categorias.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-sans font-semibold whitespace-nowrap transition-all cursor-pointer ${
                                    selectedCategory === cat
                                        ? 'bg-btn-light text-text-dark shadow-md'
                                        : 'bg-white/5 text-text-light/75 hover:bg-white/10 hover:text-text-light border border-white/10'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Buscador Rápido */}
                    <div className="relative w-full lg:w-72 shrink-0">
                        <svg className="w-4 h-4 text-text-light/40 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Buscar servicio..."
                            className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/15 text-xs text-text-light placeholder:text-text-light/40 focus:outline-none focus:border-btn-light transition-colors"
                        />
                    </div>
                </div>

                {/* Listado de Servicios en Grilla */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredList.map((servicio) => {
                        const edit = editedValues[servicio.id] || {
                            duracion: servicio.duracion,
                            precio_ars: Number(servicio.precio_ars),
                            precio_usd: Number(servicio.precio_usd),
                        };
                        const changed = hasChanges(servicio);
                        const isSaving = savingId === servicio.id;

                        // Vista previa formateada
                        const previewText = `${edit.duracion} · $ ${edit.precio_ars.toLocaleString('es-AR')} · USD ${edit.precio_usd}.`;

                        return (
                            <div
                                key={servicio.id}
                                className={`bg-bg-card border rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all space-y-4 ${
                                    changed
                                        ? 'border-amber-400/80 ring-2 ring-amber-400/20'
                                        : 'border-border-accent/60 hover:border-border-accent'
                                }`}
                            >
                                {/* Encabezado de la Tarjeta */}
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-text-light/50 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                                            {servicio.categoria}
                                        </span>
                                        {changed && (
                                            <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
                                                Sin guardar
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-base font-bodoni font-bold uppercase tracking-wide text-text-light leading-snug">
                                        {servicio.servicio_nombre}
                                    </h3>

                                    {servicio.opcion_nombre && (
                                        <p className="text-xs font-serif text-text-light/70 italic">
                                            {servicio.opcion_nombre}
                                        </p>
                                    )}

                                    <p className="text-[10px] font-mono text-text-light/40">
                                        ID: {servicio.id}
                                    </p>
                                </div>

                                {/* Formulario de Edición */}
                                <div className="space-y-3 pt-3 border-t border-white/10">
                                    {/* Campo Duración */}
                                    <div className="space-y-1">
                                        <label className="block text-[11px] font-serif uppercase tracking-wider text-text-light/80">
                                            Duración
                                        </label>
                                        <input
                                            type="text"
                                            value={edit.duracion}
                                            onChange={(e) => handleFieldChange(servicio.id, 'duracion', e.target.value)}
                                            placeholder="ej: 50 min"
                                            className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-xs text-text-light focus:outline-none focus:border-btn-light transition-colors"
                                        />
                                    </div>

                                    {/* Precios: 2 columnas (ARS y USD) */}
                                    <div className="grid grid-cols-2 gap-2.5">
                                        <div className="space-y-1">
                                            <label className="block text-[11px] font-serif uppercase tracking-wider text-text-light/80">
                                                Precio ARS ($)
                                            </label>
                                            <input
                                                type="number"
                                                min="0"
                                                step="500"
                                                value={edit.precio_ars}
                                                onChange={(e) => handleFieldChange(servicio.id, 'precio_ars', e.target.value)}
                                                className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-xs text-text-light focus:outline-none focus:border-btn-light transition-colors"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="block text-[11px] font-serif uppercase tracking-wider text-text-light/80">
                                                Precio USD ($)
                                            </label>
                                            <input
                                                type="number"
                                                min="0"
                                                step="5"
                                                value={edit.precio_usd}
                                                onChange={(e) => handleFieldChange(servicio.id, 'precio_usd', e.target.value)}
                                                className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-xs text-text-light focus:outline-none focus:border-btn-light transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Vista previa en tiempo real */}
                                    <div className="p-2 rounded-lg bg-black/20 border border-white/5 text-[11px] font-serif text-text-light/90">
                                        <span className="text-[10px] uppercase font-sans text-text-light/50 block mb-0.5">
                                            Vista previa:
                                        </span>
                                        <span className="font-semibold text-btn-light">{previewText}</span>
                                    </div>
                                </div>

                                {/* Botón Guardar */}
                                <div className="pt-2">
                                    <button
                                        type="button"
                                        disabled={!changed || isSaving}
                                        onClick={() => handleSaveSingle(servicio)}
                                        className={`w-full py-2 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                                            changed
                                                ? 'bg-amber-400 text-black hover:bg-amber-300 shadow-md font-extrabold'
                                                : 'bg-white/5 text-text-light/40 border border-white/10 cursor-not-allowed'
                                        }`}
                                    >
                                        {isSaving ? (
                                            <>
                                                <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                                <span>Guardando...</span>
                                            </>
                                        ) : changed ? (
                                            <span>Guardar Cambios</span>
                                        ) : (
                                            <span>Sin cambios</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredList.length === 0 && (
                    <div className="text-center py-16 border border-white/10 rounded-2xl bg-bg-card p-8">
                        <p className="text-sm font-serif text-text-light/60">
                            No se encontraron servicios que coincidan con la búsqueda.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}

