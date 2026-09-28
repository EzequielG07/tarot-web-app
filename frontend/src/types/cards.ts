import { ReactNode } from 'react';

export interface CardData {
    id: string;
    logoSrc: string;
    logoAlt: string;
    titulo: string;
    descripcionCorta: string;
    contenidoExpandido: ReactNode;
    bgClass?: string; // 👈 Prop opcional para personalizar el fondo
}
