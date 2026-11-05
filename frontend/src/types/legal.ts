// src/types/legal.ts

export interface RegistroClickwrap {
    id: string; // ej: RES-849201
    nombre: string;
    email: string;
    celular: string;
    servicio_id: string;
    servicio_nombre: string;
    precio_texto: string;
    version_terminos: string;
    terminos_aceptados: boolean;
    privacidad_aceptada: boolean;
    user_agent?: string;
    created_at: string;
}

export interface SolicitudBajaArrepentimiento {
    id: string; // ej: ARR-849201 o BAJA-849201
    tipo: 'arrepentimiento' | 'baja';
    nombre: string;
    email: string;
    celular: string;
    servicio_nombre: string;
    fecha_contratacion?: string;
    motivo?: string;
    estado: 'Pendiente' | 'En Proceso' | 'Procesado' | 'Rechazado';
    resolucion_nota?: string;
    created_at: string;
    updated_at: string;
}

