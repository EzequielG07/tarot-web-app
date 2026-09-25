// MiSeccionPadre.tsx
import { BlogMainContent } from '../sections/BlogMainContent';
import { BlogSidebar } from '../sections/BlogSidebar';

export const BlogContainer = () => {
    return (
        <section className="w-full min-h-[470px] bg-bg-main p-2 flex border-8 border-red-900">
            {/* Grilla principal de 12 columnas */}
            <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Contenido Principal (~70% -> 8 de 12 cols) */}
                <div className="lg:col-span-8 w-full h-full flex flex-col">
                    <BlogMainContent />
                </div>

                {/* Sidebar / Contenido Secundario (~30% -> 4 de 12 cols) */}
                <div className="lg:col-span-4 w-full h-full flex flex-col">
                    <BlogSidebar />
                </div>
            </div>
        </section>
    );
};
