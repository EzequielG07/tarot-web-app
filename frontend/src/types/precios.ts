// src/types/precios.ts

export interface ServicioPrecio {
    id: string;
    categoria: string;
    servicio_nombre: string;
    opcion_nombre?: string;
    duracion: string;
    precio_ars: number;
    precio_usd: number;
    orden: number;
    updated_at?: string;
}

export type PreciosMap = Record<string, ServicioPrecio>;

