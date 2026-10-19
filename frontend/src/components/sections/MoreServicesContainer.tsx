'use client';

import { MoreEnergyContent } from '@/components/sections/MoreEnergyContent';
import { MoreReikiContent } from '@/components/sections/MoreReikiContent';

export const MoreServicesContainer = () => {
    return (
        <section id="more-services" className="w-full bg-bg-main p-4 sm:p-6 lg:p-8 flex flex-col">
            {/* Contenedor principal que divide el espacio en 50 y 50 */}
            <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                {/* Columna Izquierda (50%): Servicios Energéticos */}
                <div className="w-full h-full flex flex-col">
                    <MoreEnergyContent />
                </div>

                {/* Columna Derecha (50%): Sistema Reiki */}
                <div className="w-full h-full flex flex-col">
                    <MoreReikiContent />
                </div>
            </div>
        </section>
    );
};

export default MoreServicesContainer;
