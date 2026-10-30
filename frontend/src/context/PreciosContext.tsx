// src/context/PreciosContext.tsx
'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { ServicioPrecio, PreciosMap } from '@/types/precios';

// Valores por defecto (fallback seguro si la base de datos tarda en responder o no hay conexión)
export const DEFAULT_PRECIOS: ServicioPrecio[] = [
    { id: 'orientacion-express', categoria: 'Lecturas & Orientación', servicio_nombre: 'Orientación Express', opcion_nombre: 'Consulta rápida puntual', duracion: '15 min', precio_ars: 19900, precio_usd: 15, orden: 1 },
    { id: 'lectura-claridad', categoria: 'Lecturas & Orientación', servicio_nombre: 'Lectura de Claridad', opcion_nombre: 'Sesión focalizada', duracion: '30 min', precio_ars: 35000, precio_usd: 30, orden: 2 },
    { id: 'sesion-integral-claridad', categoria: 'Lecturas & Orientación', servicio_nombre: 'Sesión Integral de Claridad', opcion_nombre: 'Consulta completa Videncia + Tarot', duracion: '50 min', precio_ars: 50000, precio_usd: 50, orden: 3 },
    { id: 'diagnostico-energetico-profundo', categoria: 'Lecturas & Orientación', servicio_nombre: 'Diagnóstico Energético y Lectura Profunda', opcion_nombre: 'Evaluación integral', duracion: '50 min', precio_ars: 60000, precio_usd: 60, orden: 4 },
    { id: 'diagnostico-sesion-armonizacion', categoria: 'Lecturas & Orientación', servicio_nombre: 'Diagnóstico + Sesión de Armonización', opcion_nombre: 'Experiencia Premium', duracion: '1 hr 30 min', precio_ars: 80000, precio_usd: 80, orden: 5 },

    { id: 'limpieza-armonizacion-30', categoria: 'Limpiezas & Magia', servicio_nombre: 'Limpieza, Armonización y Protección', opcion_nombre: 'Sesión corta 30 min', duracion: '30 min', precio_ars: 45000, precio_usd: 30, orden: 6 },
    { id: 'limpieza-armonizacion-50', categoria: 'Limpiezas & Magia', servicio_nombre: 'Limpieza, Armonización y Protección', opcion_nombre: 'Sesión profunda 50 min', duracion: '50 min', precio_ars: 60000, precio_usd: 50, orden: 7 },
    { id: 'limpieza-destrabe-caminos', categoria: 'Limpiezas & Magia', servicio_nombre: 'Limpieza, Destrabe y Apertura de Caminos', opcion_nombre: 'Apertura integral', duracion: '50 min', precio_ars: 60000, precio_usd: 55, orden: 8 },
    { id: 'limpieza-espacios', categoria: 'Limpiezas & Magia', servicio_nombre: 'Limpieza y Armonización de Espacios', opcion_nombre: 'Hogares y negocios', duracion: '50 min', precio_ars: 60000, precio_usd: 60, orden: 9 },
    { id: 'banos-limpias-desbloqueo', categoria: 'Limpiezas & Magia', servicio_nombre: 'Baños y Limpias de Desbloqueo', opcion_nombre: 'Descarga y protección', duracion: '50 min', precio_ars: 60000, precio_usd: 60, orden: 10 },
    { id: 'parapsicologia-integral', categoria: 'Limpiezas & Magia', servicio_nombre: 'Parapsicología Integral', opcion_nombre: 'Consulta personalizada', duracion: '50 min', precio_ars: 60000, precio_usd: 60, orden: 11 },
    { id: 'sanaciones-ancestrales', categoria: 'Limpiezas & Magia', servicio_nombre: 'Sanaciones Ancestrales', opcion_nombre: 'Linaje y corte de lazos', duracion: '50 min', precio_ars: 60000, precio_usd: 60, orden: 12 },
    { id: 'alta-magia-ritual', categoria: 'Limpiezas & Magia', servicio_nombre: 'Alta Magia Ritual y Psíquica', opcion_nombre: 'Trabajo a medida', duracion: '50 min', precio_ars: 60000, precio_usd: 60, orden: 13 },
    { id: 'clarividencia-activa', categoria: 'Limpiezas & Magia', servicio_nombre: 'Clarividencia Activa', opcion_nombre: 'Exploración intuitiva', duracion: '50 min', precio_ars: 60000, precio_usd: 60, orden: 14 },

    { id: 'reiki-usui-50', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Reiki Usui Tradicional', opcion_nombre: 'Sesión 50 min', duracion: '50 min', precio_ars: 50000, precio_usd: 50, orden: 15 },
    { id: 'reiki-usui-80', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Reiki Usui Tradicional', opcion_nombre: 'Sesión 1 hr 20 min', duracion: '1 hr 20 min', precio_ars: 65000, precio_usd: 70, orden: 16 },
    { id: 'alineacion-chakras-50', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Alineación de Chakras y Armonización Vital', opcion_nombre: 'Sesión 50 min', duracion: '50 min', precio_ars: 50000, precio_usd: 50, orden: 17 },
    { id: 'alineacion-chakras-80', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Alineación de Chakras y Armonización Vital', opcion_nombre: 'Sesión 1 hr 20 min', duracion: '1 hr 20 min', precio_ars: 65000, precio_usd: 70, orden: 18 },
    { id: 'karmic-reiki-50', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Karmic Reiki', opcion_nombre: 'Liberación de lazos (50 min)', duracion: '50 min', precio_ars: 50000, precio_usd: 50, orden: 19 },
    { id: 'karmic-reiki-80', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Karmic Reiki', opcion_nombre: 'Liberación de lazos (80 min)', duracion: '1 hr 20 min', precio_ars: 65000, precio_usd: 70, orden: 20 },
    { id: 'karuna-reiki-50', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Karuna Reiki', opcion_nombre: 'Sanación compasiva (50 min)', duracion: '50 min', precio_ars: 50000, precio_usd: 50, orden: 21 },
    { id: 'karuna-reiki-80', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Karuna Reiki', opcion_nombre: 'Sanación compasiva (80 min)', duracion: '1 hr 20 min', precio_ars: 65000, precio_usd: 70, orden: 22 },
    { id: 'reiki-jin-kei-do-50', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Reiki Jin Kei Do', opcion_nombre: 'Sabiduría en movimiento (50 min)', duracion: '50 min', precio_ars: 50000, precio_usd: 50, orden: 23 },
    { id: 'reiki-jin-kei-do-80', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Reiki Jin Kei Do', opcion_nombre: 'Sabiduría en movimiento (80 min)', duracion: '1 hr 20 min', precio_ars: 65000, precio_usd: 70, orden: 24 },
    { id: 'hara-reiki-50', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Hará Reiki', opcion_nombre: 'Centro de poder vital (50 min)', duracion: '50 min', precio_ars: 50000, precio_usd: 50, orden: 25 },
    { id: 'hara-reiki-80', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Hará Reiki', opcion_nombre: 'Centro de poder vital (80 min)', duracion: '1 hr 20 min', precio_ars: 65000, precio_usd: 70, orden: 26 },
    { id: 'reiki-arcangeles-50', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Reiki con Arcángeles', opcion_nombre: 'Sintonía de luz (50 min)', duracion: '50 min', precio_ars: 50000, precio_usd: 50, orden: 27 },
    { id: 'reiki-arcangeles-80', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Reiki con Arcángeles', opcion_nombre: 'Sintonía de luz (80 min)', duracion: '1 hr 20 min', precio_ars: 65000, precio_usd: 70, orden: 28 },
    { id: 'apertura-tercer-ojo', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Apertura del Tercer Ojo', opcion_nombre: 'Visión interior (50 min)', duracion: '50 min', precio_ars: 60000, precio_usd: 60, orden: 29 },
    { id: 'reiki-ninos-50', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Reiki para Niños y Adolescentes', opcion_nombre: 'Sesión 50 min', duracion: '50 min', precio_ars: 50000, precio_usd: 50, orden: 30 },
    { id: 'reiki-ninos-80', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Reiki para Niños y Adolescentes', opcion_nombre: 'Sesión 1 hr 20 min', duracion: '1 hr 20 min', precio_ars: 65000, precio_usd: 70, orden: 31 },
    { id: 'reiki-mascotas-30', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Reiki para Mascotas', opcion_nombre: 'Sesión 30 min', duracion: '30 min', precio_ars: 35000, precio_usd: 40, orden: 32 },
    { id: 'reiki-mascotas-50', categoria: 'Reiki & Terapias Holísticas', servicio_nombre: 'Reiki para Mascotas', opcion_nombre: 'Sesión 50 min', duracion: '50 min', precio_ars: 50000, precio_usd: 50, orden: 33 },

    { id: 'experiencia-cuantica', categoria: 'Experiencias Destacadas', servicio_nombre: 'Experiencia Cuántica de Armonización', opcion_nombre: 'Tarjeta expandida', duracion: '50 min', precio_ars: 60000, precio_usd: 60, orden: 34 },
    { id: 'blog-sesion-integral', categoria: 'Experiencias Destacadas', servicio_nombre: 'Sesión Integral de Claridad (Blog)', opcion_nombre: 'Tarjeta en Blog', duracion: '50 min', precio_ars: 50000, precio_usd: 50, orden: 35 }
];

export interface PrecioItemInfo {
    duracion: string;
    precio_ars: number;
    precio_usd: number;
    formattedArs: string;
    formattedUsd: string;
    labelText: string; // ej: "50 min · $ 50,000 · USD 50."
}

interface PreciosContextType {
    preciosList: ServicioPrecio[];
    preciosMap: PreciosMap;
    loading: boolean;
    error: string | null;
    getPrecio: (id: string) => PrecioItemInfo;
    updatePrecio: (id: string, updates: Partial<ServicioPrecio>) => Promise<{ success: boolean; error?: string }>;
    refreshPrecios: () => Promise<void>;
}

const PreciosContext = createContext<PreciosContextType | undefined>(undefined);

export const PreciosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [preciosList, setPreciosList] = useState<ServicioPrecio[]>(DEFAULT_PRECIOS);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const initialMap = useMemo(() => {
        const map: PreciosMap = {};
        DEFAULT_PRECIOS.forEach((p) => {
            map[p.id] = p;
        });
        return map;
    }, []);

    const [preciosMap, setPreciosMap] = useState<PreciosMap>(initialMap);

    const fetchPrecios = async () => {
        try {
            setLoading(true);
            const { data, error: err } = await supabase
                .from('servicios_precios')
                .select('*')
                .order('orden', { ascending: true });

            if (err) {
                console.warn('No se pudieron cargar precios de Supabase, usando valores por defecto:', err.message);
                setError(err.message);
                return;
            }

            if (data && data.length > 0) {
                const map: PreciosMap = {};
                data.forEach((p: ServicioPrecio) => {
                    map[p.id] = p;
                });
                setPreciosList(data);
                setPreciosMap(map);
                setError(null);
            }
        } catch (e: unknown) {
            const msg = e instanceof Error ? e.message : 'Error al conectar con la base de datos';
            console.warn('Error en fetchPrecios:', msg);
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPrecios();
    }, []);

    const getPrecio = (id: string): PrecioItemInfo => {
        const item = preciosMap[id] || DEFAULT_PRECIOS.find((p) => p.id === id);
        const duracion = item?.duracion || '50 min';
        const ars = Number(item?.precio_ars || 0);
        const usd = Number(item?.precio_usd || 0);

        const formattedArs = `$ ${ars.toLocaleString('es-AR')}`;
        const formattedUsd = `USD ${usd}`;
        const labelText = `${duracion} · ${formattedArs} · ${formattedUsd}.`;

        return {
            duracion,
            precio_ars: ars,
            precio_usd: usd,
            formattedArs,
            formattedUsd,
            labelText,
        };
    };

    const updatePrecio = async (id: string, updates: Partial<ServicioPrecio>): Promise<{ success: boolean; error?: string }> => {
        try {
            const { error: updateErr } = await supabase
                .from('servicios_precios')
                .update({
                    ...updates,
                    updated_at: new Date().toISOString(),
                })
                .eq('id', id);

            if (updateErr) {
                return { success: false, error: updateErr.message };
            }

            // Actualizar localmente el estado
            setPreciosList((prev) =>
                prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
            );
            setPreciosMap((prev) => ({
                ...prev,
                [id]: {
                    ...prev[id],
                    ...updates,
                },
            }));

            return { success: true };
        } catch (e: unknown) {
            const msg = e instanceof Error ? e.message : 'Error inesperado al guardar';
            return { success: false, error: msg };
        }
    };

    return (
        <PreciosContext.Provider
            value={{
                preciosList,
                preciosMap,
                loading,
                error,
                getPrecio,
                updatePrecio,
                refreshPrecios: fetchPrecios,
            }}
        >
            {children}
        </PreciosContext.Provider>
    );
};

export const usePrecios = () => {
    const context = useContext(PreciosContext);
    if (!context) {
        throw new Error('usePrecios debe ser utilizado dentro de un PreciosProvider');
    }
    return context;
};

