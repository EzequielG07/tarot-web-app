// src/components/admin/TabBajasArrepentimientos.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { SolicitudBajaArrepentimiento } from '@/types/legal';
import { getWhatsAppUrl } from '@/utils/whatsapp';

interface TabBajasArrepentimientosProps {
    onShowToast: (text: string, type: 'success' | 'error') => void;
}

export const TabBajasArrepentimientos: React.FC<TabBajasArrepentimientosProps> = ({ onShowToast }) => {
    const [solicitudes, setSolicitudes] = useState<SolicitudBajaArrepentimiento[]>([]);
    const [loading, setLoading] = useState(true);
    const [filtroTipo, setFiltroTipo] = useState<'todos' | 'arrepentimiento' | 'baja' | 'pendientes'>('todos');
    const [search, setSearch] = useState('');
    const [actualizandoId, setActualizandoId] = useState<string | null>(null);
    const [eliminandoId, setEliminandoId] = useState<string | null>(null);

    // Estado para edición de notas
    const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
    const [noteDraft, setNoteDraft] = useState<string>('');

    const fetchSolicitudes = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('solicitudes_arrepentimiento_baja')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.warn('Error al cargar solicitudes:', error.message);
                onShowToast('Error al conectar con la base de datos', 'error');
                return;
            }
            if (data) {
                setSolicitudes(data as SolicitudBajaArrepentimiento[]);
            }
        } catch (err: unknown) {
            console.error('Error fetching solicitudes:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSolicitudes();
    }, []);

    const handleUpdateEstado = async (id: string, nuevoEstado: SolicitudBajaArrepentimiento['estado']) => {
        try {
            setActualizandoId(id);
            const { error } = await supabase
                .from('solicitudes_arrepentimiento_baja')
                .update({ estado: nuevoEstado, updated_at: new Date().toISOString() })
                .eq('id', id);

            if (error) {
                onShowToast('Error al actualizar estado: ' + error.message, 'error');
                return;
            }

            setSolicitudes((prev) =>
                prev.map((item) => (item.id === id ? { ...item, estado: nuevoEstado, updated_at: new Date().toISOString() } : item))
            );
            onShowToast(`Estado actualizado a "${nuevoEstado}"`, 'success');
        } catch {
            onShowToast('Error al procesar solicitud', 'error');
        } finally {
            setActualizandoId(null);
        }
    };

    const handleSaveNote = async (id: string) => {
        try {
            setActualizandoId(id);
            const { error } = await supabase
                .from('solicitudes_arrepentimiento_baja')
                .update({ resolucion_nota: noteDraft.trim(), updated_at: new Date().toISOString() })
                .eq('id', id);

            if (error) {
                onShowToast('Error al guardar nota: ' + error.message, 'error');
                return;
            }

            setSolicitudes((prev) =>
                prev.map((item) => (item.id === id ? { ...item, resolucion_nota: noteDraft.trim(), updated_at: new Date().toISOString() } : item))
            );
            setEditingNoteId(null);
            onShowToast('Nota de resolución guardada', 'success');
        } catch {
            onShowToast('Error al guardar nota', 'error');
        } finally {
            setActualizandoId(null);
        }
    };

    const handleDelete = async (id: string, nombre: string) => {
        if (!window.confirm(`¿Estás segura de eliminar la solicitud ${id} correspondiente a ${nombre}?`)) {
            return;
        }

        try {
            setEliminandoId(id);
            const { error } = await supabase.from('solicitudes_arrepentimiento_baja').delete().eq('id', id);

            if (error) {
                onShowToast('Error al eliminar: ' + error.message, 'error');
                return;
            }

            setSolicitudes((prev) => prev.filter((item) => item.id !== id));
            onShowToast(`Solicitud ${id} eliminada correctamente`, 'success');
        } catch {
            onShowToast('Error al eliminar solicitud', 'error');
        } finally {
            setEliminandoId(null);
        }
    };

    // Descarga a Excel (CSV con UTF-8 BOM)
    const exportarExcel = () => {
        if (solicitudes.length === 0) {
            onShowToast('No hay datos para exportar', 'error');
            return;
        }

        const headers = [
            'Código / ID',
            'Tipo Solicitud',
            'Nombre y Apellido',
            'Email',
            'Celular / WhatsApp',
            'Servicio Contratado',
            'Fecha Contratación',
            'Motivo',
            'Estado',
            'Resolución / Notas',
            'Fecha Registro (UTC)',
        ];

        const escapeCSV = (str: string | undefined | null) => {
            if (!str) return '""';
            const clean = String(str).replace(/"/g, '""');
            return `"${clean}"`;
        };

        const rows = solicitudes.map((s) => [
            escapeCSV(s.id),
            escapeCSV(s.tipo === 'arrepentimiento' ? 'Arrepentimiento (Ley 24.240)' : 'Baja de Servicio (Disp 954/2025)'),
            escapeCSV(s.nombre),
            escapeCSV(s.email),
            escapeCSV(s.celular),
            escapeCSV(s.servicio_nombre),
            escapeCSV(s.fecha_contratacion || 'No especificada'),
            escapeCSV(s.motivo || 'Sin motivo'),
            escapeCSV(s.estado),
            escapeCSV(s.resolucion_nota || ''),
            escapeCSV(new Date(s.created_at).toLocaleString('es-AR')),
        ]);

        const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map((r) => r.join(';'))].join('\r\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const fecha = new Date().toISOString().split('T')[0];
        link.href = url;
        link.setAttribute('download', `solicitudes_arrepentimiento_baja_${fecha}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        onShowToast('Archivo Excel descargado con éxito', 'success');
    };

    // Imprimir o Guardar PDF
    const handleImprimirPDF = () => {
        window.print();
    };

    // Filtrado
    const filteredSolicitudes = solicitudes.filter((item) => {
        const matchesFiltro =
            filtroTipo === 'todos' ||
            (filtroTipo === 'pendientes' ? item.estado === 'Pendiente' : item.tipo === filtroTipo);

        const q = search.toLowerCase();
        const matchesSearch =
            item.id.toLowerCase().includes(q) ||
            item.nombre.toLowerCase().includes(q) ||
            item.email.toLowerCase().includes(q) ||
            item.celular.toLowerCase().includes(q) ||
            (item.servicio_nombre && item.servicio_nombre.toLowerCase().includes(q));

        return matchesFiltro && matchesSearch;
    });

    const totalArrepentimiento = solicitudes.filter((s) => s.tipo === 'arrepentimiento').length;
    const totalBaja = solicitudes.filter((s) => s.tipo === 'baja').length;
    const totalPendientes = solicitudes.filter((s) => s.estado === 'Pendiente').length;

    return (
        <div className="space-y-6">
            {/* ESTILO EXCLUSIVO PARA IMPRESIÓN PDF */}
            <style jsx global>{`
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    #seccion-imprimible-pdf,
                    #seccion-imprimible-pdf * {
                        visibility: visible;
                    }
                    #seccion-imprimible-pdf {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        background: white !important;
                        color: black !important;
                        padding: 20px;
                    }
                    .no-print {
                        display: none !important;
                    }
                }
            `}</style>

            {/* Tarjetas métricas superiores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 no-print">
                <div className="bg-bg-card border border-white/10 rounded-2xl p-4 shadow-sm">
                    <span className="text-[11px] font-serif uppercase tracking-wider text-text-light/60">
                        Total Solicitudes
                    </span>
                    <div className="text-2xl font-bodoni font-bold text-text-light mt-1">
                        {solicitudes.length}
                    </div>
                </div>

                <div className="bg-bg-card border border-white/10 rounded-2xl p-4 shadow-sm">
                    <span className="text-[11px] font-serif uppercase tracking-wider text-amber-300">
                        Arrepentimientos (10 días)
                    </span>
                    <div className="text-2xl font-bodoni font-bold text-amber-300 mt-1">
                        {totalArrepentimiento}
                    </div>
                </div>

                <div className="bg-bg-card border border-white/10 rounded-2xl p-4 shadow-sm">
                    <span className="text-[11px] font-serif uppercase tracking-wider text-blue-300">
                        Bajas de Servicio
                    </span>
                    <div className="text-2xl font-bodoni font-bold text-blue-300 mt-1">
                        {totalBaja}
                    </div>
                </div>

                <div className="bg-bg-card border border-white/10 rounded-2xl p-4 shadow-sm">
                    <span className="text-[11px] font-serif uppercase tracking-wider text-rose-300">
                        Pendientes de Gestión
                    </span>
                    <div className="text-2xl font-bodoni font-bold text-rose-400 mt-1 flex items-center gap-2">
                        <span>{totalPendientes}</span>
                        {totalPendientes > 0 && (
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                        )}
                    </div>
                </div>
            </div>

            {/* Barra de Controles: Filtros, Búsqueda y Botones de Exportación */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-bg-card p-4 rounded-2xl border border-white/10 no-print">
                {/* Filtro por tipo de trámite */}
                <div className="flex flex-wrap items-center gap-1.5">
                    <button
                        type="button"
                        onClick={() => setFiltroTipo('todos')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                            filtroTipo === 'todos' ? 'bg-amber-400 text-stone-950' : 'bg-white/5 text-text-light/70 hover:bg-white/10'
                        }`}
                    >
                        Todos ({solicitudes.length})
                    </button>
                    <button
                        type="button"
                        onClick={() => setFiltroTipo('arrepentimiento')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                            filtroTipo === 'arrepentimiento' ? 'bg-amber-400 text-stone-950' : 'bg-white/5 text-text-light/70 hover:bg-white/10'
                        }`}
                    >
                        Arrepentimientos ({totalArrepentimiento})
                    </button>
                    <button
                        type="button"
                        onClick={() => setFiltroTipo('baja')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                            filtroTipo === 'baja' ? 'bg-amber-400 text-stone-950' : 'bg-white/5 text-text-light/70 hover:bg-white/10'
                        }`}
                    >
                        Bajas ({totalBaja})
                    </button>
                    <button
                        type="button"
                        onClick={() => setFiltroTipo('pendientes')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                            filtroTipo === 'pendientes' ? 'bg-rose-500 text-white' : 'bg-white/5 text-rose-300 hover:bg-white/10'
                        }`}
                    >
                        Pendientes ({totalPendientes})
                    </button>
                </div>

                {/* Buscador y Exportaciones */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Buscar por código, cliente, email..."
                        className="bg-black/40 border border-white/20 focus:border-amber-400 rounded-xl px-3.5 py-1.5 text-xs font-serif text-text-light placeholder:text-text-light/40 focus:outline-none"
                    />

                    {/* Botón Descargar Excel */}
                    <button
                        type="button"
                        onClick={exportarExcel}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                        title="Exportar a Microsoft Excel / CSV UTF-8"
                    >
                        <span>📥 Bajar Excel</span>
                    </button>

                    {/* Botón Imprimir / PDF */}
                    <button
                        type="button"
                        onClick={handleImprimirPDF}
                        className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-text-light font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer border border-white/20"
                        title="Imprimir informe oficial para defensa legal"
                    >
                        <span>🖨️ Bajar PDF</span>
                    </button>
                </div>
            </div>

            {/* TABLA PRINCIPAL (VISIBLE EN PANTALLA Y EN MODO IMPRESIÓN) */}
            <div id="seccion-imprimible-pdf" className="bg-bg-card rounded-2xl border border-white/10 shadow-lg overflow-hidden">
                {/* Cabecera formal para la impresión PDF */}
                <div className="hidden print:block mb-6 p-4 border-b border-black text-black">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-xl font-bold uppercase tracking-wider">
                                ANITA TAROT · INFORME OFICIAL DE GESTIÓN LEGAL
                            </h1>
                            <p className="text-xs text-gray-700">
                                Registro de Solicitudes de Arrepentimiento y Bajas de Servicios conforme Disposición 954/2025 y Ley 24.240
                            </p>
                            <p className="text-[11px] text-gray-500 mt-1">
                                Generado el: {new Date().toLocaleString('es-AR')} · Titular: Anita Tarotista (Psíquica & Parapsicóloga)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs font-serif text-text-light">
                        <thead>
                            <tr className="border-b border-white/10 bg-black/40 text-[11px] uppercase tracking-wider text-text-light/70 print:bg-gray-100 print:text-black">
                                <th className="p-3.5">Código / Trámite</th>
                                <th className="p-3.5">Tipo</th>
                                <th className="p-3.5">Cliente</th>
                                <th className="p-3.5">Servicio y Fecha</th>
                                <th className="p-3.5">Motivo declarado</th>
                                <th className="p-3.5">Estado</th>
                                <th className="p-3.5">Resolución / Nota</th>
                                <th className="p-3.5 text-center no-print">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 print:divide-black">
                            {filteredSolicitudes.map((s) => {
                                const isArrepentimiento = s.tipo === 'arrepentimiento';
                                const isUpdating = actualizandoId === s.id;
                                const isDeleting = eliminandoId === s.id;

                                return (
                                    <tr key={s.id} className="hover:bg-white/[0.02] transition-colors print:text-black">
                                        {/* Código */}
                                        <td className="p-3.5 align-top font-mono font-bold text-amber-300 print:text-black">
                                            {s.id}
                                            <div className="text-[10px] text-text-light/50 font-serif mt-0.5 print:text-gray-500">
                                                {new Date(s.created_at).toLocaleDateString('es-AR')}
                                            </div>
                                        </td>

                                        {/* Tipo */}
                                        <td className="p-3.5 align-top">
                                            <span
                                                className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider ${
                                                    isArrepentimiento
                                                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30 print:border-black print:text-black'
                                                        : 'bg-blue-400/20 text-blue-300 border border-blue-400/30 print:border-black print:text-black'
                                                }`}
                                            >
                                                {isArrepentimiento ? 'Arrepentimiento' : 'Baja Servicio'}
                                            </span>
                                        </td>

                                        {/* Cliente */}
                                        <td className="p-3.5 align-top space-y-0.5">
                                            <div className="font-bold text-text-light print:text-black">{s.nombre}</div>
                                            <div className="text-text-light/70 text-[11px] print:text-gray-700">{s.email}</div>
                                            <div className="text-[11px] text-text-light/60 flex items-center gap-1">
                                                <span>{s.celular}</span>
                                                <a
                                                    href={getWhatsAppUrl(`¡Hola ${s.nombre}! Te escribo de Anita Tarot respecto a tu solicitud #${s.id} (${s.servicio_nombre}).`)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="no-print text-emerald-400 hover:underline text-[10px]"
                                                >
                                                    [WhatsApp]
                                                </a>
                                            </div>
                                        </td>

                                        {/* Servicio */}
                                        <td className="p-3.5 align-top space-y-0.5">
                                            <div className="font-semibold text-text-light print:text-black">{s.servicio_nombre}</div>
                                            <div className="text-[11px] text-text-light/60">
                                                Fecha contr.: {s.fecha_contratacion || 'N/D'}
                                            </div>
                                        </td>

                                        {/* Motivo */}
                                        <td className="p-3.5 align-top max-w-xs text-text-light/80 print:text-black">
                                            <p className="line-clamp-2 hover:line-clamp-none transition-all">{s.motivo || 'Sin detalle'}</p>
                                        </td>

                                        {/* Estado */}
                                        <td className="p-3.5 align-top">
                                            <div className="no-print">
                                                <select
                                                    value={s.estado}
                                                    disabled={isUpdating}
                                                    onChange={(e) =>
                                                        handleUpdateEstado(
                                                            s.id,
                                                            e.target.value as SolicitudBajaArrepentimiento['estado']
                                                        )
                                                    }
                                                    className={`px-2 py-1 rounded-lg text-xs font-serif font-bold border transition-colors cursor-pointer bg-black/60 focus:outline-none ${
                                                        s.estado === 'Pendiente'
                                                            ? 'border-rose-400 text-rose-300'
                                                            : s.estado === 'En Proceso'
                                                            ? 'border-amber-400 text-amber-300'
                                                            : s.estado === 'Procesado'
                                                            ? 'border-emerald-400 text-emerald-300'
                                                            : 'border-stone-500 text-stone-300'
                                                    }`}
                                                >
                                                    <option value="Pendiente" className="bg-stone-900 text-rose-300">
                                                        Pendiente
                                                    </option>
                                                    <option value="En Proceso" className="bg-stone-900 text-amber-300">
                                                        En Proceso
                                                    </option>
                                                    <option value="Procesado" className="bg-stone-900 text-emerald-300">
                                                        Procesado
                                                    </option>
                                                    <option value="Rechazado" className="bg-stone-900 text-stone-300">
                                                        Rechazado
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="hidden print:block font-bold">
                                                {s.estado}
                                            </div>
                                        </td>

                                        {/* Resolución / Nota */}
                                        <td className="p-3.5 align-top max-w-xs">
                                            {editingNoteId === s.id ? (
                                                <div className="space-y-1.5 no-print">
                                                    <textarea
                                                        value={noteDraft}
                                                        onChange={(e) => setNoteDraft(e.target.value)}
                                                        rows={2}
                                                        className="w-full bg-black/50 border border-amber-400/50 rounded-lg p-1.5 text-xs text-text-light focus:outline-none"
                                                        placeholder="Escribí la resolución (ej: Reembolsado)..."
                                                    />
                                                    <div className="flex gap-1.5">
                                                        <button
                                                            type="button"
                                                            onClick={() => handleSaveNote(s.id)}
                                                            className="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold"
                                                        >
                                                            Guardar
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setEditingNoteId(null)}
                                                            className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-text-light text-[10px]"
                                                        >
                                                            Cancelar
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex items-start justify-between gap-1">
                                                    <span className="text-[11px] text-text-light/75 italic print:text-black">
                                                        {s.resolucion_nota || 'Sin nota de resolución'}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setEditingNoteId(s.id);
                                                            setNoteDraft(s.resolucion_nota || '');
                                                        }}
                                                        className="no-print text-btn-light hover:underline text-[10px] cursor-pointer shrink-0"
                                                        title="Editar nota"
                                                    >
                                                        ✏️
                                                    </button>
                                                </div>
                                            )}
                                        </td>

                                        {/* Acciones */}
                                        <td className="p-3.5 align-top text-center no-print">
                                            <button
                                                type="button"
                                                disabled={isDeleting}
                                                onClick={() => handleDelete(s.id, s.nombre)}
                                                className="p-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-all cursor-pointer disabled:opacity-50"
                                                title={`Eliminar solicitud ${s.id}`}
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

                {/* Pie formal para reporte impreso */}
                <div className="hidden print:block mt-12 pt-6 border-t border-black text-black text-xs">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <p className="font-bold">Constancia de Veracidad y Validez Legal</p>
                            <p className="text-[10px] text-gray-700 mt-1">
                                Las solicitudes precedentes han sido registradas y procesadas a través del sitio web oficial de Anita Tarotista, emitiendo constancia fehaciente en tiempo real a cada consumidor en conformidad con el art. 34 de la Ley 24.240 y Disposición 954/2025.
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="border-b border-black w-48 ml-auto mb-1"></div>
                            <p className="font-bold">Firma / Aprobación Prestador</p>
                            <p className="text-[10px] text-gray-700">Anita Tarotista · Parapsicóloga & Psíquica</p>
                        </div>
                    </div>
                </div>

                {filteredSolicitudes.length === 0 && (
                    <div className="text-center py-12 p-6">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 text-xl">
                            ⚖️
                        </div>
                        <p className="text-sm font-serif text-text-light/70 font-semibold">
                            {solicitudes.length === 0
                                ? 'No hay solicitudes de arrepentimiento o baja registradas.'
                                : 'No se encontraron solicitudes con el filtro o búsqueda actual.'}
                        </p>
                        <p className="text-xs font-serif text-text-light/50 mt-1">
                            {solicitudes.length === 0
                                ? 'Cuando un usuario presione el "Botón de Arrepentimiento" o "Botón de Baja" en el sitio web, aparecerá aquí al instante.'
                                : 'Probá buscando con otro nombre, correo o código.'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

