import type { Metadata } from 'next';
import { Cormorant_Garamond, Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PreciosProvider } from '@/context/PreciosContext';
import { ClickwrapProvider } from '@/context/ClickwrapContext';

// Configuración de fuente Serif para Títulos (representa Capricho / Serif mística)
const cormorant = Cormorant_Garamond({
    weight: ['600', '700'],
    subsets: ['latin'],
    variable: '--font-capricho',
    display: 'swap',
});

// Configuración de Roboto para UI general, botones, lectura, navbar y footer
const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap',
});

const bodoniSmallcaps = localFont({
    src: './fonts/Bodoni 72 Smallcaps Book.ttf',
    variable: '--font-bodoni-smallcaps',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://anitatarotista.com'),
    title: 'Anita Tarotista · Videncia Natural, Tarot y Terapias Holísticas',
    description: 'Consultas personalizadas de Tarot, Videncia Natural, Parapsicología y Armonización Energética con Anita Tarotista. Más de 20 años de experiencia.',
    applicationName: 'Anita Tarotista',
    authors: [{ name: 'Anita Tarotista', url: 'https://anitatarotista.com' }],
    creator: 'Anita Tarotista',
    publisher: 'Anita Tarotista',
    keywords: [
        'Anita Tarotista',
        'Tarot',
        'Lectura de Tarot online',
        'Videncia Natural',
        'Parapsicóloga',
        'Reiki Usui',
        'Alineación de Chakras',
        'Armonización energética',
        'Limpieza energética',
        'Destrabe de caminos',
        'Terapias holísticas',
        'Tarot Salta',
        'Tarotista Salta',
        'Virgen del Cerro Salta',
        'Tarot Argentina',
    ],
    referrer: 'strict-origin-when-cross-origin',
    alternates: {
        canonical: 'https://anitatarotista.com',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'es_AR',
        url: 'https://anitatarotista.com',
        siteName: 'Anita Tarotista',
        title: 'Anita Tarotista · Videncia Natural, Tarot y Terapias Holísticas',
        description: 'Consultas personalizadas de Tarot, Videncia Natural, Parapsicología y Armonización Energética con Anita Tarotista. Más de 20 años de experiencia.',
        images: [
            {
                url: 'https://anitatarotista.com/images/about/tarotista-example.webp',
                width: 1200,
                height: 630,
                alt: 'Anita Tarotista - Consultas de Tarot y Terapias Holísticas',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Anita Tarotista · Videncia Natural, Tarot y Terapias Holísticas',
        description: 'Consultas personalizadas de Tarot, Videncia Natural, Parapsicología y Armonización Energética con Anita Tarotista.',
        images: ['https://anitatarotista.com/images/about/tarotista-example.webp'],
    },
    other: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Anita Tarotista',
    image: 'https://anitatarotista.com/images/about/tarotista-example.webp',
    url: 'https://anitatarotista.com',
    priceRange: '$$',
    description:
        'Consultas de Tarot, Videncia Natural, Parapsicología Integral y Sesiones de Reiki. Más de 20 años de trayectoria acompañando procesos de claridad y evolución energética.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Salta Capital',
        addressRegion: 'Salta',
        addressCountry: 'AR',
    },
    sameAs: [
        'https://www.instagram.com/anitatarotista',
        'https://www.facebook.com/anitatarotista',
        'https://www.tiktok.com/@anitatarotista',
    ],
    knowsAbout: [
        'Tarot',
        'Videncia Natural',
        'Parapsicología',
        'Reiki Usui',
        'Alineación de Chakras',
        'Armonización Energética',
        'Limpieza de Espacios',
        'Destrabe y Apertura de Caminos',
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="es"
            className={`${bodoniSmallcaps.variable} ${cormorant.variable} ${roboto.variable}`}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="bg-bg-main text-text-light antialiased min-h-screen flex flex-col">
                <PreciosProvider>
                    <ClickwrapProvider>
                        <Navbar />
                        <main className="flex-1">
                            {children}
                        </main>
                        <Footer />
                    </ClickwrapProvider>
                </PreciosProvider>
            </body>
        </html>
    );
}
