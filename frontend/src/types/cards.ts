import { ReactNode } from 'react';

export interface ServicioModalidad {
    id?: string;
    nombre: string;
    duracion?: string;
    precioDuracion: string;
    descripcion?: string;
    link?: string;
    tag?: string;
}

export interface CardData {
    id: string;
    logoSrc: string;
    logoAlt: string;
    titulo: string;
    descripcionCorta: string;
    contenidoExpandido: ReactNode;
    bgClass?: string; // Prop opcional para personalizar el fondo
    modalidades?: ServicioModalidad[];
    notaFinal?: string;
}
