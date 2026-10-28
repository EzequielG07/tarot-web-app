// src/utils/whatsapp.ts

export const WHATSAPP_PHONE = '5491161658521';

/**
 * Genera el enlace directo a WhatsApp con un mensaje pre-cargado.
 */
export function getWhatsAppUrl(message: string, phone: string = WHATSAPP_PHONE): string {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message.trim())}`;
}

