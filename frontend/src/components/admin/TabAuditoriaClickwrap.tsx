// src/components/admin/TabAuditoriaClickwrap.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { RegistroClickwrap } from '@/types/legal';
import { getWhatsAppUrl } from '@/utils/whatsapp';

interface TabAuditoriaClickwrapProps {
    onShowToast: (text: string, type: 'success' | 'error') => void;
}

export const TabAuditoriaClickwrap: React.FC<TabAuditoriaClickwrapProps> = ({ onShowToast }) => {
    const [clickwraps, setClickwraps] = useState<RegistroClickwrap[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [eliminandoId, setEliminandoId] = useState<string | null>(null);

    const fetchClickwraps = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('registros_clickwrap')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.warn('Error al cargar clickwraps:', error.message);
                onShowToast('Error al conectar con registros clickwrap', 'error');
                return;
            }
            if (data) {
                setClickwraps(data as RegistroClickwrap[]);
            }
        } catch (err: unknown) {
            console.error('Error fetching clickwraps:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClickwraps();
    }, []);

    const handleDelete = async (id: string, nombre: string) => {
        if (!window.confirm(`¿Estás segura de eliminar la constancia de Clickwrap ${id} de ${nombre}?`)) {
            return;
        }

        try {
            setEliminandoId(id);
            const { error } = await supabase.from('registros_clickwrap').delete().eq('id', id);

            if (error) {
                onShowToast('Error al eliminar: ' + error.message, 'error');
                return;
            }

            setClickwraps((prev) => prev.filter((item) => item.id !== id));
            onShowToast(`Constancia ${id} eliminada`, 'success');
        } catch {
            onShowToast('Error al eliminar registro', 'error');
        } finally {
            setEliminandoId(null);
        }
    };

    // Exportar Excel CSV con UTF-8 BOM
    const exportarExcel = () => {
        if (clickwraps.length === 0) {
            onShowToast('No hay datos para exportar', 'error');
            return;
        }

        const headers = [
            'Código Reserva / ID',
            'Nombre y Apellido',
            'Email',
            'Celular / WhatsApp',
            'Servicio Contratado',
            'Tarifa / Precio',
            'Versión Términos',
            'Términos Aceptados',
            'Privacidad Aceptada',
            'Navegador / User Agent',
            'Fecha y Hora UTC',
        ];

        const escapeCSV = (str: string | undefined | null) => {
            if (!str) return '""';
            const clean = String(str).replace(/"/g, '""');
            return `"${clean}"`;
        };

        const rows = clickwraps.map((c) => [
            escapeCSV(c.id),
            escapeCSV(c.nombre),
            escapeCSV(c.email),
            escapeCSV(c.celular),
            escapeCSV(c.servicio_nombre),
            escapeCSV(c.precio_texto),
            escapeCSV(c.version_terminos),
            escapeCSV(c.terminos_aceptados ? 'SI (Aceptado)' : 'NO'),
            escapeCSV(c.privacidad_aceptada ? 'SI (Aceptado)' : 'NO'),
            escapeCSV(c.user_agent || 'N/D'),
            escapeCSV(new Date(c.created_at).toLocaleString('es-AR')),
        ]);

        const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map((r) => r.join(';'))].join('\r\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const fecha = new Date().toISOString().split('T')[0];
        link.href = url;
        link.setAttribute('download', `auditoria_clickwrap_anita_tarot_${fecha}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        onShowToast('Auditoría Clickwrap descargada en Excel (.csv)', 'success');
    };

    const filteredClickwraps = clickwraps.filter((c) => {
        const q = search.toLowerCase();
        return (
            c.id.toLowerCase().includes(q) ||
            c.nombre.toLowerCase().includes(q) ||
            c.email.toLowerCase().includes(q) ||
            c.celular.toLowerCase().includes(q) ||
            c.servicio_nombre.toLowerCase().includes(q)
        );
    });

    return (
        <div className="space-y-6">
            {/* Tarjetas métricas superiores */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-bg-card border border-white/10 rounded-2xl p-4 shadow-sm">
                    <span className="text-[11px] font-serif uppercase tracking-wider text-text-light/60">
                        Total Aceptaciones Clickwrap
                    </span>
                    <div className="text-2xl font-bodoni font-bold text-text-light mt-1">
                        {clickwraps.length}
                    </div>
                </div>

                <div className="bg-bg-card border border-white/10 rounded-2xl p-4 shadow-sm">
                    <span className="text-[11px] font-serif uppercase tracking-wider text-emerald-300">
                        Blindaje Legal Activo
                    </span>
                    <div className="text-sm font-serif font-bold text-emerald-300 mt-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span>Versión Términos v1.0 (2026)</span>
                    </div>
                </div>

                <div className="bg-bg-card border border-white/10 rounded-2xl p-4 shadow-sm">
                    <span className="text-[11px] font-serif uppercase tracking-wider text-amber-300">
                        Ley Aplicable
                    </span>
                    <div className="text-sm font-serif font-bold text-text-light mt-2">
                        Ley 24.240 & Ley 25.326 (Protección Datos)
                    </div>
                </div>
            </div>

            {/* Controles de Búsqueda y Exportación */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-bg-card p-4 rounded-2xl border border-white/10">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar por código de reserva, cliente, email, servicio..."
                    className="flex-1 max-w-md bg-black/40 border border-white/20 focus:border-amber-400 rounded-xl px-3.5 py-1.5 text-xs font-serif text-text-light placeholder:text-text-light/40 focus:outline-none"
                />

                <button
                    type="button"
                    onClick={exportarExcel}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    title="Exportar archivo .csv con UTF-8 BOM para Microsoft Excel"
                >
                    <span>📥 Descargar Auditoría (.csv)</span>
                </button>
            </div>

            {/* TABLA DE AUDITORÍA */}
            <div className="bg-bg-card rounded-2xl border border-white/10 shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs font-serif text-text-light">
                        <thead>
                            <tr className="border-b border-white/10 bg-black/40 text-[11px] uppercase tracking-wider text-text-light/70">
                                <th className="p-3.5">Código Reserva</th>
                                <th className="p-3.5">Fecha y Hora</th>
                                <th className="p-3.5">Cliente</th>
                                <th className="p-3.5">Servicio y Tarifa</th>
                                <th className="p-3.5">Constancias Aceptadas</th>
                                <th className="p-3.5">Dispositivo / User Agent</th>
                                <th className="p-3.5 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredClickwraps.map((c) => {
                                const isDeleting = eliminandoId === c.id;

                                return (
                                    <tr key={c.id} className="hover:bg-white/[0.02] transition-colors">
                                        {/* Código Reserva */}
                                        <td className="p-3.5 align-top font-mono font-bold text-amber-300">
                                            {c.id}
                                        </td>

                                        {/* Fecha */}
                                        <td className="p-3.5 align-top text-text-light/70">
                                            <div>{new Date(c.created_at).toLocaleDateString('es-AR')}</div>
                                            <div className="text-[10px] text-text-light/50">
                                                {new Date(c.created_at).toLocaleTimeString('es-AR')}
                                            </div>
                                        </td>

                                        {/* Cliente */}
                                        <td className="p-3.5 align-top space-y-0.5">
                                            <div className="font-bold text-text-light">{c.nombre}</div>
                                            <div className="text-[11px] text-text-light/70">{c.email}</div>
                                            <div className="text-[11px] text-text-light/60 flex items-center gap-1">
                                                <span>{c.celular}</span>
                                                <a
                                                    href={getWhatsAppUrl(`¡Hola ${c.nombre}! Te escribo de Anita Tarot en relación a tu reserva #${c.id} (${c.servicio_nombre}).`)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-emerald-400 hover:underline text-[10px]"
                                                >
                                                    [WhatsApp]
                                                </a>
                                            </div>
                                        </td>

                                        {/* Servicio */}
                                        <td className="p-3.5 align-top space-y-0.5">
                                            <div className="font-semibold text-text-light">{c.servicio_nombre}</div>
                                            <div className="text-[11px] text-btn-light font-bold">{c.precio_texto}</div>
                                        </td>

                                        {/* Casillas */}
                                        <td className="p-3.5 align-top space-y-1">
                                            <div className="inline-flex items-center gap-1 text-[10px] bg-emerald-950/60 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                                                <span>✓ Términos ({c.version_terminos})</span>
                                            </div>
                                            <div className="inline-flex items-center gap-1 text-[10px] bg-emerald-950/60 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30 ml-1">
                                                <span>✓ Privacidad</span>
                                            </div>
                                        </td>

                                        {/* User Agent */}
                                        <td className="p-3.5 align-top max-w-xs text-[10px] text-text-light/60 truncate" title={c.user_agent}>
                                            {c.user_agent || 'N/D'}
                                        </td>

                                        {/* Acciones */}
                                        <td className="p-3.5 align-top text-center">
                                            <button
                                                type="button"
                                                disabled={isDeleting}
                                                onClick={() => handleDelete(c.id, c.nombre)}
                                                className="p-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-all cursor-pointer disabled:opacity-50"
                                                title={`Eliminar constancia ${c.id}`}
                                            >
                                                {isDeleting ? (
                                                    <div className="w-3.5 h-3.5 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
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

                {filteredClickwraps.length === 0 && (
                    <div className="text-center py-12 p-6">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 text-xl">
                            📋
                        </div>
                        <p className="text-sm font-serif text-text-light/70 font-semibold">
                            {clickwraps.length === 0
                                ? 'Aún no hay aceptaciones de Clickwrap registradas.'
                                : 'No se encontraron constancias con ese criterio de búsqueda.'}
                        </p>
                        <p className="text-xs font-serif text-text-light/50 mt-1">
                            {clickwraps.length === 0
                                ? 'Cada vez que un cliente complete el formulario antes de ir a WhatsApp para contratar un servicio con costo, su comprobante legal quedará archivado aquí.'
                                : 'Probá buscando con otro código, nombre o correo.'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

