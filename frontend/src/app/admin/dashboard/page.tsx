// src/app/admin/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { usePrecios } from '@/context/PreciosContext';
import { ServicioPrecio } from '@/types/precios';
import { Suscriptor } from '@/types/suscriptores';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export default function AdminDashboardPage() {
    const router = useRouter();
    const { preciosList, updatePrecio, refreshPrecios, loading: contextLoading } = usePrecios();

    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [authChecking, setAuthChecking] = useState(true);

    // Pestaña Principal activa ('servicios' | 'suscriptores')
    const [activeMainTab, setActiveMainTab] = useState<'servicios' | 'suscriptores'>('servicios');

    // Estado local para los valores editados de servicios
    const [editedValues, setEditedValues] = useState<Record<string, { duracion: string; precio_ars: number; precio_usd: number }>>({});
    const [savingId, setSavingId] = useState<string | null>(null);
    const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

    // Filtros de servicios
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Estado de suscriptores
    const [suscriptoresList, setSuscriptoresList] = useState<Suscriptor[]>([]);
    const [loadingSuscriptores, setLoadingSuscriptores] = useState(false);
    const [searchSuscriptor, setSearchSuscriptor] = useState('');
    const [deletingId, setDeletingId] = useState<string | null>(null);

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

    // 2. Inicializar valores editados de tarifas
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

    // 3. Cargar lista de suscriptores
    const fetchSuscriptores = async () => {
        try {
            setLoadingSuscriptores(true);
            const { data, error } = await supabase
                .from('suscriptores')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.warn('Error al cargar suscriptores:', error.message);
                return;
            }
            if (data) {
                setSuscriptoresList(data);
            }
        } catch (err: unknown) {
            console.warn('Error en fetchSuscriptores:', err);
        } finally {
            setLoadingSuscriptores(false);
        }
    };

    useEffect(() => {
        fetchSuscriptores();
    }, []);

    // Cerrar sesión
    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.replace('/admin/login');
    };

    // Manejar cambios en los inputs de tarifas
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

    // Eliminar suscriptor con confirmación
    const handleDeleteSuscriptor = async (item: Suscriptor) => {
        const confirmMsg = `¿Estás segura de que deseás eliminar a "${item.nombre}" (${item.email}) de la lista de suscriptores?\n\nEsta acción no se puede deshacer.`;
        if (!window.confirm(confirmMsg)) return;

        try {
            setDeletingId(item.id);
            const { error } = await supabase.from('suscriptores').delete().eq('id', item.id);
            if (error) {
                setToastMessage({ text: `Error al eliminar: ${error.message}`, type: 'error' });
                setTimeout(() => setToastMessage(null), 3500);
            } else {
                setSuscriptoresList((prev) => prev.filter((s) => s.id !== item.id));
                setToastMessage({ text: `Suscriptor "${item.nombre}" eliminado correctamente.`, type: 'success' });
                setTimeout(() => setToastMessage(null), 3500);
            }
        } catch {
            setToastMessage({ text: 'Error inesperado al intentar eliminar.', type: 'error' });
            setTimeout(() => setToastMessage(null), 3500);
        } finally {
            setDeletingId(null);
        }
    };

    // Exportar suscriptores a CSV / Excel con codificación UTF-8
    const handleExportCSV = () => {
        if (suscriptoresList.length === 0) {
            setToastMessage({ text: 'No hay suscriptores para exportar.', type: 'error' });
            setTimeout(() => setToastMessage(null), 3000);
            return;
        }

        const headers = ['Nombre', 'Celular / WhatsApp', 'Email', 'Fecha de Registro'];
        const rows = suscriptoresList.map((s) => [
            `"${(s.nombre || '').replace(/"/g, '""')}"`,
            `"${(s.celular || '').replace(/"/g, '""')}"`,
            `"${(s.email || '').replace(/"/g, '""')}"`,
            `"${new Date(s.created_at).toLocaleString('es-AR')}"`,
        ]);

        const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        const dateStr = new Date().toISOString().split('T')[0];
        link.setAttribute('download', `suscriptores-frecuencia-sacerdotisa-${dateStr}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        setToastMessage({ text: '¡Lista descargada con éxito en CSV / Excel!', type: 'success' });
        setTimeout(() => setToastMessage(null), 3500);
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

    // Filtrar lista de servicios
    const filteredList = preciosList.filter((item) => {
        const matchesCategory = selectedCategory === 'Todos' || item.categoria === selectedCategory;
        const matchesSearch =
            item.servicio_nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.opcion_nombre && item.opcion_nombre.toLowerCase().includes(searchQuery.toLowerCase())) ||
            item.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Filtrar lista de suscriptores
    const filteredSuscriptores = suscriptoresList.filter((s) => {
        const q = searchSuscriptor.toLowerCase();
        return (
            (s.nombre && s.nombre.toLowerCase().includes(q)) ||
            (s.celular && s.celular.toLowerCase().includes(q)) ||
            (s.email && s.email.toLowerCase().includes(q))
        );
    });

    if (authChecking || contextLoading) {
        return (
            <div className="min-h-screen bg-bg-main flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-2 border-btn-light border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm font-serif text-text-light/70 tracking-widest uppercase">
                        Cargando panel de administración...
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
                {/* Selector de Pestañas Principales */}
                <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-4">
                    <button
                        onClick={() => setActiveMainTab('servicios')}
                        className={`px-5 py-2.5 rounded-2xl font-serif text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2.5 cursor-pointer ${
                            activeMainTab === 'servicios'
                                ? 'bg-amber-400 text-stone-950 shadow-lg shadow-amber-400/20'
                                : 'bg-white/5 text-text-light/70 hover:bg-white/10 hover:text-text-light border border-white/10'
                        }`}
                    >
                        <span>🔮 Servicios y Tarifas</span>
                        <span
                            className={`text-[10px] px-2 py-0.5 rounded-full ${
                                activeMainTab === 'servicios' ? 'bg-black/20 text-stone-950 font-sans' : 'bg-white/10 text-text-light'
                            }`}
                        >
                            {preciosList.length}
                        </span>
                    </button>

                    <button
                        onClick={() => {
                            setActiveMainTab('suscriptores');
                            fetchSuscriptores();
                        }}
                        className={`px-5 py-2.5 rounded-2xl font-serif text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2.5 cursor-pointer ${
                            activeMainTab === 'suscriptores'
                                ? 'bg-amber-400 text-stone-950 shadow-lg shadow-amber-400/20'
                                : 'bg-white/5 text-text-light/70 hover:bg-white/10 hover:text-text-light border border-white/10'
                        }`}
                    >
                        <span>👥 Suscriptores / Comunidad</span>
                        <span
                            className={`text-[10px] px-2 py-0.5 rounded-full ${
                                activeMainTab === 'suscriptores' ? 'bg-black/20 text-stone-950 font-sans' : 'bg-white/10 text-text-light'
                            }`}
                        >
                            {suscriptoresList.length}
                        </span>
                    </button>
                </div>

                {/* ============================================================ */}
                {/* PESTAÑA 1: SERVICIOS Y TARIFAS                               */}
                {/* ============================================================ */}
                {activeMainTab === 'servicios' && (
                    <div className="space-y-6">
                        {/* Encabezado del Dashboard */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
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
                                <span>Sincronizar Tarifas</span>
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
                    </div>
                )}

                {/* ============================================================ */}
                {/* PESTAÑA 2: SUSCRIPTORES / COMUNIDAD                          */}
                {/* ============================================================ */}
                {activeMainTab === 'suscriptores' && (
                    <div className="space-y-6">
                        {/* Encabezado Suscriptores */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bodoni font-bold uppercase tracking-wide text-text-light">
                                    Comunidad Frecuencia Sacerdotisa
                                </h1>
                                <p className="text-xs sm:text-sm font-serif text-text-light/70 mt-1">
                                    Personas suscritas desde la web. Podés escribirles directamente por WhatsApp, añadirlas a tu grupo, descargar el archivo de Excel o eliminar registros basura.
                                </p>
                            </div>

                            <div className="flex items-center gap-2.5 flex-wrap">
                                <button
                                    onClick={() => fetchSuscriptores()}
                                    className="px-4 py-2 rounded-full text-xs font-serif font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 border border-white/15 text-text-light transition-colors flex items-center gap-2 cursor-pointer shrink-0"
                                    title="Actualizar lista"
                                >
                                    <svg
                                        className={`w-3.5 h-3.5 ${loadingSuscriptores ? 'animate-spin' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    <span>Actualizar</span>
                                </button>

                                <button
                                    onClick={handleExportCSV}
                                    className="px-4 py-2 rounded-full text-xs font-serif font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all flex items-center gap-2 cursor-pointer shrink-0"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    <span>Descargar Excel / CSV</span>
                                </button>
                            </div>
                        </div>

                        {/* Buscador de Suscriptores */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="relative w-full sm:w-80">
                                <svg className="w-4 h-4 text-text-light/40 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    value={searchSuscriptor}
                                    onChange={(e) => setSearchSuscriptor(e.target.value)}
                                    placeholder="Buscar por nombre, celular o email..."
                                    className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/15 text-xs text-text-light placeholder:text-text-light/40 focus:outline-none focus:border-btn-light transition-colors"
                                />
                            </div>

                            <div className="text-xs font-serif text-text-light/60 self-start sm:self-auto">
                                Mostrando <span className="font-bold text-btn-light">{filteredSuscriptores.length}</span> de {suscriptoresList.length} registrados
                            </div>
                        </div>

                        {/* Tabla de Suscriptores */}
                        <div className="bg-bg-card border border-border-accent/80 rounded-2xl overflow-hidden shadow-xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs">
                                    <thead className="bg-white/5 uppercase font-serif text-[11px] tracking-wider text-text-light/75 border-b border-white/10">
                                        <tr>
                                            <th className="py-3.5 px-4 font-semibold">Nombre y Apellido</th>
                                            <th className="py-3.5 px-4 font-semibold">Celular / WhatsApp</th>
                                            <th className="py-3.5 px-4 font-semibold">Correo Electrónico</th>
                                            <th className="py-3.5 px-4 font-semibold">Fecha de Registro</th>
                                            <th className="py-3.5 px-4 font-semibold text-center">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 font-sans">
                                        {filteredSuscriptores.map((s) => {
                                            const isDeleting = deletingId === s.id;
                                            const fecha = new Date(s.created_at).toLocaleString('es-AR', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            });

                                            // WhatsApp link limpio para que Anita le escriba
                                            const cleanPhone = (s.celular || '').replace(/\D/g, '');
                                            const waUserUrl = cleanPhone
                                                ? getWhatsAppUrl(`¡Hola ${s.nombre || ''}! Te contacto desde Frecuencia Sacerdotisa para darte la bienvenida al grupo de WhatsApp. ✨`, cleanPhone.length === 10 ? `549${cleanPhone}` : cleanPhone)
                                                : null;

                                            return (
                                                <tr key={s.id} className="hover:bg-white/5 transition-colors">
                                                    <td className="py-3.5 px-4 font-serif font-medium text-text-light">
                                                        {s.nombre || 'Sin nombre'}
                                                    </td>
                                                    <td className="py-3.5 px-4 font-mono text-text-light/90">
                                                        <div className="flex items-center gap-2">
                                                            <span>{s.celular || '-'}</span>
                                                            {waUserUrl && (
                                                                <Link
                                                                    href={waUserUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    title="Abrir chat de WhatsApp con esta persona"
                                                                    className="px-2 py-0.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-[10px] uppercase font-sans font-bold transition-all"
                                                                >
                                                                    Chat 💬
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="py-3.5 px-4 text-text-light/80">
                                                        <a
                                                            href={`mailto:${s.email}`}
                                                            className="hover:text-btn-light transition-colors underline decoration-white/20"
                                                        >
                                                            {s.email}
                                                        </a>
                                                    </td>
                                                    <td className="py-3.5 px-4 text-text-light/60 font-mono text-[11px]">
                                                        {fecha}
                                                    </td>
                                                    <td className="py-3.5 px-4 text-center">
                                                        <button
                                                            type="button"
                                                            disabled={isDeleting}
                                                            onClick={() => handleDeleteSuscriptor(s)}
                                                            className="p-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-all cursor-pointer disabled:opacity-50"
                                                            title={`Eliminar a ${s.nombre || s.email}`}
                                                        >
                                                            {isDeleting ? (
                                                                <div className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                                                            ) : (
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                            )}
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            {filteredSuscriptores.length === 0 && (
                                <div className="text-center py-14 p-6">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 text-xl">
                                        👥
                                    </div>
                                    <p className="text-sm font-serif text-text-light/70 font-semibold">
                                        {suscriptoresList.length === 0
                                            ? 'Aún no hay suscriptores registrados.'
                                            : 'No se encontraron suscriptores con ese criterio de búsqueda.'}
                                    </p>
                                    <p className="text-xs font-serif text-text-light/50 mt-1">
                                        {suscriptoresList.length === 0
                                            ? 'Los registros aparecerán aquí automáticamente en tiempo real a medida que la gente se suscriba en la web.'
                                            : 'Probá buscando con otro nombre, número de teléfono o correo.'}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
