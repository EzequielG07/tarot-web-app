// src/components/ui/DynamicPrice.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePrecios } from '@/context/PreciosContext';
import { getWhatsAppUrl } from '@/utils/whatsapp';

interface DynamicPriceTagProps {
    id: string;
    className?: string;
    fallback?: string;
}

export const DynamicPriceTag: React.FC<DynamicPriceTagProps> = ({ id, className = '', fallback }) => {
    const { getPrecio } = usePrecios();
    const precio = getPrecio(id);
    return <span className={className}>{precio?.labelText || fallback}</span>;
};

interface DynamicWhatsAppButtonProps {
    id: string;
    servicioNombre: string;
    buttonText: string;
    className?: string;
    customTemplate?: (precioInfo: { duracion: string; precio_ars: number; precio_usd: number; labelText: string }) => string;
}

export const DynamicWhatsAppButton: React.FC<DynamicWhatsAppButtonProps> = ({
    id,
    servicioNombre,
    buttonText,
    className = '',
    customTemplate,
}) => {
    const { getPrecio } = usePrecios();
    const precio = getPrecio(id);

    const message = customTemplate
        ? customTemplate(precio)
        : `¡Hola Anita! Me gustaría agendar "${servicioNombre}" (${precio.labelText}). ¿Cómo podemos coordinar?`;

    return (
        <Link
            href={getWhatsAppUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {buttonText}
        </Link>
    );
};

