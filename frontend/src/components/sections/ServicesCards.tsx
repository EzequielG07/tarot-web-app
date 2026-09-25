// src/components/sections/ServicesCards.tsx

import { CardExpandible } from '@/components/ui/CardExpandible';
import { SERVICIOS_DATA } from '@/data/serviciosData';

export const ServicesCards = () => {
    return (
        <div className="w-full min-h-[470px] flex flex-col justify-start">
            {/* Título arriba con margen inferior fijo */}
            <div className="m-6">
                <h2 className="text-2xl font-serif font-bold uppercase text-text-dark">
                    Nuestros Servicios Destacados
                </h2>
            </div>

            {/* Grilla con posición fija (items-start y sin mt-auto dinámico) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                {SERVICIOS_DATA.map((item) => (
                    <CardExpandible
                        key={item.id}
                        id={item.id}
                        logoSrc={item.logoSrc}
                        logoAlt={item.logoAlt}
                        titulo={item.titulo}
                        descripcionCorta={item.descripcionCorta}
                        contenidoExpandido={<p className="text-xs text-text-dark/90">{item.contenidoExpandido}</p>}
                    />
                ))}
            </div>
        </div>
    );
};
