import type { Metadata } from 'next';
import { Cormorant_Garamond, Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

export const metadata: Metadata = {
    title: 'Tarot Místico',
    description: 'Lecturas de Tarot y Recursos Espirituales',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body
                className={`${cormorant.variable} ${roboto.variable} font-sans bg-bg-main text-text-dark flex flex-col min-h-screen antialiased`}
            >
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
