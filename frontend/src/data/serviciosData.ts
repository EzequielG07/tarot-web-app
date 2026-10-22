import { CardData } from '@/types/cards';

export const SERVICIOS_DATA: CardData[] = [
    {
        id: 'tarot-lecturas',
        logoSrc: '/images/logos/carta-lectura.png',
        logoAlt: 'Icono Tarot Lecturas',
        titulo: 'LECTURAS',
        descripcionCorta: 'Tarot · Videncia Natural · Oráculos · Péndulo de Luz · Bola de Cristal',
        contenidoExpandido: `¿Necesitás respuestas, claridad o una mirada diferente sobre lo que estás viviendo?
Cuando una situación te genera dudas, emociones o incertidumbre, una lectura puede ayudarte a ordenar la información, comprender el momento presente y explorar diferentes caminos posibles.
En mis consultas combino videncia natural, Tarot y herramientas de lectura complementarias, adaptando la sesión a la situación que quieras abordar.

Elegí tu modalidad:`,
        modalidades: [
            {
                id: 'orientacion-express',
                nombre: 'Orientación Express',
                tag: 'WhatsApp',
                duracion: '15 min',
                precioDuracion: '15 min · $ 19,900 · USD 15.',
                descripcion: 'Para una duda concreta o una decisión que necesitás ordenar rápidamente.',
                link: '/schedule',
            },
            {
                id: 'lectura-claridad',
                nombre: 'Lectura de Claridad',
                duracion: '30 min',
                precioDuracion: '30 min · $ 35,000 · USD 30.',
                descripcion: 'Una consulta más puntual para una situación específica.',
                link: '/schedule',
            },
            {
                id: 'sesion-integral-claridad',
                nombre: 'Sesión Integral de Claridad',
                duracion: '50 min',
                precioDuracion: '50 min · $ 50,000 · USD 50.',
                descripcion: 'La experiencia más completa. Combina Videncia + Tarot + Lectura de Manos + Péndulo de Luz. Aborda amor, vínculos, decisiones, trabajo o proyectos.',
                link: '/schedule',
            },
        ],
        notaFinal: 'Una vez abonada la sesión, nos pondremos en contacto para coordinar día, horario y modalidad: videollamada o WhatsApp.',
    },

    {
        id: 'tarot-energetico',
        logoSrc: '/images/logos/carta-claridad.png',
        logoAlt: 'Icono Tarot Claridad',
        titulo: 'DIAGNÓSTICO ENERGÉTICO Y LECTURA PROFUNDA',
        descripcionCorta: 'Comprendé qué está pasando y obtené una mirada integral sobre tu momento actual.',
        contenidoExpandido: `¿Sentís que algo cambió pero no lográs identificar qué? ¿Vivís situaciones repetitivas, cansancio energético o una etapa de estancamiento?

Esta sesión propone una mirada integral combinando diagnóstico energético, percepción intuitiva y herramientas de lectura integral del momento, tendencias y caminos posibles, para explorar tu estado energético y las circunstancias que estás atravesando.

¿Qué buscamos?
• Comprender tu momento actual.
• Detectar áreas que requieren atención energética.
• Explorar patrones y situaciones repetitivas.
• Obtener mayor claridad sobre tus próximos pasos.`,
        modalidades: [
            {
                id: 'sesion-diagnostico-profundo',
                nombre: 'Sesión Diagnóstico y Lectura Profunda',
                duracion: '50 min',
                precioDuracion: '50 min · $ 60,000 · USD 60.',
                descripcion: 'Una mirada integral combinando diagnóstico del campo sutil, percepción intuitiva y lectura integral de tendencias.',
                link: '/schedule',
            },
        ],
    },

    {
        id: 'tarot-reiki',
        logoSrc: '/images/logos/carta-limpieza.png',
        logoAlt: 'Icono Tarot Limpieza',
        titulo: 'REIKI · 6 LINAJES',
        descripcionCorta: 'Un espacio para detenerte, armonizarte y recuperar tu centro.',
        contenidoExpandido: `A veces no necesitás hacer más. Necesitás parar.
Las sesiones de Reiki están orientadas a generar un espacio de relajación, armonización y bienestar energético.

Disponible para:
Personas · Niños · Mascotas · Plantas · Hogares · Oficinas

Elegí tu sesión:`,
        modalidades: [
            {
                id: 'pausa-energetica',
                nombre: 'Pausa Energética',
                duracion: '30 min',
                precioDuracion: '30 min · $ 35,000 · USD 30.',
                descripcion: 'Una sesión breve para quienes necesitan regalarse un espacio de calma sin alterar demasiado su rutina.',
                link: '/schedule',
            },
            {
                id: 'reiki-profundo',
                nombre: 'Reiki Profundo',
                duracion: '50 min',
                precioDuracion: '50 min · $ 50,000 · USD 50.',
                descripcion: 'Una experiencia más extensa de armonización y relajación energética profunda.',
                link: '/schedule',
            },
        ],
    },

    {
        id: 'tarot-limpieza',
        logoSrc: '/images/logos/carta-destrabe.png',
        logoAlt: 'Icono Tarot Destrabe',
        titulo: 'LIMPIEZA · ARMONIZACIÓN Y PROTECCIÓN',
        descripcionCorta: 'Cuando sentís que necesitás limpiar, ordenar y recuperar tu equilibrio.',
        contenidoExpandido: `¿Sentís pesadez, agotamiento, tensión o que un espacio o situación necesita renovarse?

Esta experiencia está orientada a realizar un trabajo de limpieza y armonización energética, según las características de cada caso.

Esta propuesta trabaja sobre campo energético, chakras, protección y armonización. Volvé a sentir tu energía en equilibrio.

Elegí tu nivel de limpieza:`,
        modalidades: [
            {
                id: 'limpieza-armonizacion',
                nombre: 'Limpieza y Armonización',
                duracion: '30 min',
                precioDuracion: '30 min · $ 45,000 · USD 30.',
                descripcion: 'Trabajo sobre campo energético y chakras para recuperar la fluidez y ligereza.',
                link: '/schedule',
            },
            {
                id: 'limpieza-profunda-3en1',
                nombre: 'Limpieza y Armonización Profunda',
                tag: 'Limpieza 3 en 1',
                duracion: '50 min',
                precioDuracion: '50 min · $ 60,000 · USD 50.',
                descripcion: 'Experiencia integral de limpieza 3 en 1: desbloqueo áurico, armonización profunda y protección energética.',
                link: '/schedule',
            },
        ],
    },
];
