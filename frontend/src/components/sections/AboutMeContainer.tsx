// MiSeccionPadre.tsx
import { AboutMeContent } from '@/components/sections/AboutMeContent';
import { AboutMeBook } from '@/components/sections/AboutMeBook';
import { AboutMeBlog } from '@/components/sections/AboutMeBlog';

export const AboutMeContainer = () => {
    return (
        <section className="w-full min-h-[470px] bg-bg-main p-2 flex">
            {/* Grilla principal de 12 columnas */}
            <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-5 w-full lg:h-0 lg:min-h-full flex flex-col min-h-0">
                    <AboutMeContent />
                </div>

                <div className="lg:col-span-3 w-full h-full flex flex-col">
                    <AboutMeBook />
                </div>

                <div className="lg:col-span-4 w-full h-full flex flex-col">
                    <AboutMeBlog />
                </div>
            </div>
        </section>
    );
};
