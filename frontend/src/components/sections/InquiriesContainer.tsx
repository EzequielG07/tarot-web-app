import { InquiriesMainContent } from '../sections/InquiriesMainContent';
import { InquiriesCards } from '../sections/InquiriesCards';

export const InquiriesContainer = () => {
    return (
        <section className="w-full bg-bg-main p-4">
            {/* Grilla principal con alineación superior independiente */}
            <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Columna Izquierda: MyWork (~30%) */}
                <div className="lg:col-span-4 w-full flex flex-col">
                    <InquiriesMainContent />
                </div>

                {/* Columna Derecha: Cards + Título (~70%) */}
                <div className="lg:col-span-8 w-full flex flex-col">
                    <InquiriesCards />
                </div>
            </div>
        </section>
    );
};
