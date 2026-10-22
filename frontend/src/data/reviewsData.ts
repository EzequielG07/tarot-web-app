export interface GoogleReview {
    id: string;
    autor: string;
    iniciales: string;
    fecha?: string;
    calificacion: number;
    texto: string;
    tipo?: string;
}

export const GOOGLE_PROFILE_DATA = {
    nombre: 'Anita Tarot & Reiki Salta',
    calificacion: '5.0',
    estrellas: 5,
    totalResenas: '+50 opiniones',
    mapsUrl: 'https://share.google/Yx22JCeagJS4bTW93',
};

export const REVIEWS_DATA: GoogleReview[] = [
    {
        id: 'review-1',
        autor: 'Marilu Pilar',
        iniciales: 'MP',
        fecha: 'Google Reviews',
        calificacion: 5,
        texto: 'Es muy .. buena .. ahora se mucho mejor lo q me pasó y me pasa la verdad muy profesional la recomiendo .',
    },
    {
        id: 'review-2',
        autor: 'Adriana Feldman',
        iniciales: 'AF',
        fecha: 'Google Reviews',
        calificacion: 5,
        texto: 'Fui de Turismo y elegí ir a verla, excelente experiencia, muy confiable',
    },
    {
        id: 'review-3',
        autor: 'Rocío Barboza',
        iniciales: 'RB',
        fecha: 'Google Reviews',
        calificacion: 5,
        texto: 'GRACIAS POR SIEMPRE ESTAR, GENIA TOTAL!!! SE LA RECOMIENDO 💋💖🔥',
    },
    {
        id: 'review-4',
        autor: 'Carina Samchuk',
        iniciales: 'CS',
        fecha: 'Google Reviews',
        calificacion: 5,
        texto: 'Anita es una excelente profesional ..... Muy recomendable .... Muy responsable en su trabajo .... Muchas gracias Anita por estar siempre !!!',
    },
    {
        id: 'review-5',
        autor: 'Marina Perri',
        iniciales: 'MP',
        fecha: 'Google Reviews',
        calificacion: 5,
        texto: 'IMPOSIBLE DESCRIBIR LA PAZ QUE SIENTO DESPUÉS DE VER A ANITA. SÚPER RECOMENDADA! <3',
    },
];
