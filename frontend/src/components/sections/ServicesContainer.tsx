import { ServicesMyWork } from '../sections/ServicesMyWork';
import { ServicesCards } from '../sections/ServicesCards';

export const ServicesContainer = () => {
    return (
        <section className="w-full bg-bg-main p-4">
            {/* Grilla principal con alineación superior independiente */}
            <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Columna Izquierda: MyWork (~40%) */}
                <div className="lg:col-span-5 w-full flex flex-col">
                    <ServicesMyWork />
                </div>

                {/* Columna Derecha: Cards + Título (~60%) */}
                <div className="lg:col-span-7 w-full flex flex-col">
                    <ServicesCards />
                </div>
            </div>
        </section>
    );
};
