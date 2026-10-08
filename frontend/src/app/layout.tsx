import type { Metadata } from 'next';
import { Cormorant_Garamond, Roboto } from 'next/font/google';
import localFont from 'next/font/local';
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
const bodoniSmallcaps = localFont({
    src: './fonts/Bodoni 72 Smallcaps Book.ttf',
    variable: '--font-bodoni-smallcaps',
    display: 'swap',
});
export const metadata: Metadata = {
    title: 'Tarot Místico',
    description: 'Lecturas de Tarot y Recursos Espirituales',
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
            <body className="bg-bg-main text-text-light antialiased min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
