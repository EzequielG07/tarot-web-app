'use client';

import { useState } from 'react';
import { BlogMainContent } from '../sections/BlogMainContent';
import { BlogSidebar } from '../sections/BlogSidebar';
import { BlogSidebarExpandido } from '../sections/BlogSidebarExpandido';

export const BlogContainer = () => {
    const [estaAbierto, setEstaAbierto] = useState(false);

    const handleToggle = () => {
        setEstaAbierto((prev) => !prev);
    };

    return (
        <section className="w-full min-h-[470px] bg-bg-main p-2 flex flex-col">
            {/* Grilla principal de 12 columnas */}
            <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Contenido Principal (~70% -> 8 de 12 cols) */}
                <div className="lg:col-span-8 w-full h-full flex flex-col">
                    <BlogMainContent />
                </div>

                {/* Sidebar / Contenido Secundario (~30% -> 4 de 12 cols) */}
                <div className="lg:col-span-4 w-full h-full flex flex-col">
                    <BlogSidebar
                        estaAbierto={estaAbierto}
                        onToggle={handleToggle}
                    />
                </div>
            </div>

            {/* Contenedor expandible Frecuencia Sacerdotisa a lo ancho completo debajo de ambos bloques */}
            <BlogSidebarExpandido
                estaAbierto={estaAbierto}
                onCerrar={() => setEstaAbierto(false)}
            />
        </section>
    );
};

