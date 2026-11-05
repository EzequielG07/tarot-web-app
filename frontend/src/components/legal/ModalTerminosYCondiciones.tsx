// src/components/legal/ModalTerminosYCondiciones.tsx
'use client';

import React, { useEffect } from 'react';

interface ModalTerminosYCondicionesProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalTerminosYCondiciones: React.FC<ModalTerminosYCondicionesProps> = ({
    isOpen,
    onClose,
}) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-modal-title"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl bg-bg-card border border-border-accent/90 text-text-light rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl space-y-6 max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar ✕ */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar términos y condiciones"
                    className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-text-light flex items-center justify-center text-sm transition-colors cursor-pointer"
                >
                    ✕
                </button>

                {/* Encabezado */}
                <div className="text-left space-y-1.5 shrink-0 pr-8">
                    <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-widest text-btn-light bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                        Marco Legal y Transparencia · Versión v1.0 - 2026
                    </span>
                    <h2
                        id="terms-modal-title"
                        className="text-xl sm:text-2xl md:text-3xl font-bodoni font-bold uppercase tracking-wide text-text-light"
                    >
                        Términos y Condiciones · Política de Privacidad
                    </h2>
                    <p className="text-xs font-serif text-text-light/70">
                        Anita Tarot · Servicios espirituales, holísticos y de autoconocimiento para mayores de 18 años.
                    </p>
                </div>

                {/* Contenido con scrollbar */}
                <div className="flex-1 overflow-y-auto pr-3 sm:pr-4 space-y-6 text-xs sm:text-sm font-serif text-text-light/85 leading-relaxed text-justify scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    {/* 1. ACEPTACIÓN DE LOS TÉRMINOS */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            1. ACEPTACIÓN DE LOS TÉRMINOS
                        </h3>
                        <p>
                            El acceso y la utilización de este sitio web implican la aceptación de los presentes Términos y Condiciones. Si el usuario no está de acuerdo con alguna de sus disposiciones, deberá abstenerse de utilizar los servicios ofrecidos.
                        </p>
                    </div>

                    {/* 2. RESTRICCIÓN DE EDAD */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            2. RESTRICCIÓN DE EDAD
                        </h3>
                        <p>
                            Los servicios ofrecidos están destinados exclusivamente a personas mayores de 18 años.
                        </p>
                        <p>
                            Al ingresar al sitio, solicitar una consulta o contratar cualquiera de nuestros servicios, el usuario declara ser mayor de edad y contar con capacidad legal para realizar la contratación.
                        </p>
                        <p>
                            No se admiten consultas, reservas ni contrataciones realizadas por menores de 18 años. El prestador podrá solicitar una confirmación de edad y rechazar o cancelar solicitudes cuando existan motivos razonables para considerar que el usuario es menor.
                        </p>
                    </div>

                    {/* 3. NATURALEZA DEL SERVICIO */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            3. NATURALEZA DEL SERVICIO
                        </h3>
                        <p>
                            Las lecturas de tarot, interpretaciones simbólicas, consultas y demás servicios ofrecidos tienen una finalidad exclusivamente espiritual, recreativa, reflexiva y de autoconocimiento.
                        </p>
                        <p>
                            El tarot se presenta como una herramienta de interpretación y exploración personal, de carácter subjetivo y simbólico y que no existe garantía de exactitud, efectividad o cumplimiento de las expectativas individuales. Sus lecturas no constituyen predicciones ciertas, resultados garantizados ni verdades absolutas sobre acontecimientos futuros.
                        </p>
                        <p>
                            El usuario reconoce que las interpretaciones pueden variar según las circunstancias, el contexto y la percepción individual, sin que ello implique una obligación de resultado por parte del prestador.
                        </p>
                        <p>
                            Las sesiones de Reiki, prácticas energéticas y demás actividades ofrecidas tienen carácter exclusivamente complementario, espiritual y de bienestar personal.
                        </p>
                        <p>
                            Estas prácticas no constituyen tratamientos médicos, psicológicos ni sanitarios, no tienen por finalidad diagnosticar, prevenir, tratar o curar enfermedades y no sustituyen la atención de profesionales de la salud habilitados.
                        </p>
                        <p>
                            Las interpretaciones, experiencias y percepciones que puedan surgir durante las sesiones son de carácter subjetivo y no implican la garantía de resultados determinados.
                        </p>
                        <p>
                            La contratación de estos servicios implica el conocimiento de su naturaleza y alcance, sin que ello signifique renunciar a los derechos que pudieran corresponder al consumidor conforme a la legislación vigente.
                        </p>
                    </div>

                    {/* 4. ALCANCE Y LIMITACIONES */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            4. ALCANCE Y LIMITACIONES
                        </h3>
                        <p>
                            El usuario reconoce que las lecturas de tarot y las sesiones de Reiki constituyen servicios de carácter espiritual y de bienestar personal, cuyos resultados y experiencias pueden variar según cada individuo.
                        </p>
                        <p>
                            Los servicios ofrecidos no sustituyen la atención ni el asesoramiento de profesionales matriculados en las áreas de salud, psicología, medicina, derecho o finanzas. No se realizan diagnósticos médicos o psicológicos, ni se ofrecen tratamientos, recomendaciones terapéuticas, asesoramiento jurídico o financiero.
                        </p>
                        <p>
                            Las lecturas y sesiones no constituyen instrucciones obligatorias ni recomendaciones profesionales para la toma de decisiones personales, sentimentales, familiares, laborales, económicas, jurídicas o de cualquier otra naturaleza.
                        </p>
                        <p>
                            El usuario conserva plena autonomía para evaluar las interpretaciones recibidas y decidir libremente sobre sus acciones. Las decisiones que el usuario tome a partir de una lectura son de su exclusiva elección y responsabilidad, tomadas libremente por este, sin perjuicio de las responsabilidades que legalmente pudieran corresponder al prestador por su propia actuación.
                        </p>
                        <p>
                            El prestador no garantiza resultados específicos ni asume obligaciones de resultado respecto de acontecimientos futuros o circunstancias ajenas a su control, ni resultados específicos, reconciliaciones, retornos amorosos, cambios laborales, económicos ni acontecimientos futuros ni modificaciones en la conducta o voluntad de terceras personas.
                        </p>
                    </div>

                    {/* 5. CONTRATACIÓN Y PAGOS */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            5. CONTRATACIÓN Y PAGOS
                        </h3>
                        <p>
                            Cada servicio contará con una descripción de sus características, modalidad, duración estimada, precio y condiciones particulares.
                        </p>
                        <p>
                            Las reservas estarán sujetas a disponibilidad de agenda y se considerarán la contratación confirmada una vez acreditado el pago correspondiente.
                        </p>
                        <p>
                            Los medios de pago disponibles serán informados a través del sitio web o los canales oficiales de contacto y las condiciones aplicables a cada servicio.
                        </p>
                        <p>
                            El usuario será responsable de proporcionar correctamente sus datos de contacto y la información necesaria para coordinar la prestación.
                        </p>
                        <p>
                            Cuando existan errores en los datos suministrados, falta de acreditación del pago o imposibilidad de establecer contacto por causas atribuibles al usuario, el prestador podrá solicitar su subsanación y, de corresponder, reprogramar la prestación de común acuerdo.
                        </p>
                        <p>
                            La contratación no implica la garantía de resultados espirituales, emocionales o materiales distintos de la prestación expresamente ofrecida.
                        </p>
                    </div>

                    {/* 6. CANCELACIONES Y REPROGRAMACIONES */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            6. CANCELACIONES Y REPROGRAMACIONES
                        </h3>
                        <p>
                            Las solicitudes de cancelación y reprogramación deberán comunicarse a través de los canales oficiales informados por el prestador.
                        </p>
                        <p>
                            Las condiciones particulares de cancelación, modificación de turnos y eventuales cargos por inasistencia serán informadas de manera clara antes de la contratación.
                        </p>
                        <p>
                            En caso de que el usuario no pueda asistir al turno reservado, deberá comunicarlo con la mayor anticipación posible, a efectos de evaluar la posibilidad de reprogramación conforme a las condiciones previamente informadas.
                        </p>
                        <p>
                            En caso de imposibilidad de prestación imputable al prestador, se ofrecerá al usuario la reprogramación del servicio o la restitución de los importes abonados, según corresponda.
                        </p>
                        <p>
                            Las políticas de cancelación y reprogramación no limitan ni sustituyen el derecho de arrepentimiento reconocido por la legislación vigente. Una vez que el servicio haya sido efectivamente utilizado o consumido, se aplicarán las disposiciones legales correspondientes.
                        </p>
                    </div>

                    {/* 7. PRIVACIDAD Y CONFIDENCIALIDAD */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            7. PRIVACIDAD Y CONFIDENCIALIDAD
                        </h3>
                        <p>
                            El prestador se compromete a mantener la confidencialidad de la información personal y de las situaciones privadas que los usuarios compartan durante las consultas, sesiones o intercambios relacionados con los servicios contratados.
                        </p>
                        <p>
                            La información será utilizada exclusivamente para gestionar las solicitudes, coordinar y prestar los servicios, administrar los pagos y mantener las comunicaciones necesarias con el usuario.
                        </p>
                        <p>
                            El prestador no divulgará conversaciones, consultas, fotografías, audios, videos ni información personal de los usuarios sin su consentimiento, salvo que exista una obligación legal o un requerimiento legítimo de autoridad competente.
                        </p>
                        <p>
                            El usuario se compromete a no proporcionar datos personales innecesarios de terceras personas durante las consultas.
                        </p>
                        <p>
                            Los datos personales serán tratados conforme a la Ley 25.326 y demás normativa aplicable. El usuario podrá ejercer los derechos de acceso, rectificación y supresión de sus datos en los términos legalmente previstos.
                        </p>
                    </div>

                    {/* 8. USO RESPONSABLE DEL SERVICIO */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            8. USO RESPONSABLE DEL SERVICIO
                        </h3>
                        <p>
                            El prestador podrá rechazar solicitudes de contratación cuando existan motivos objetivos que las hagan incompatibles con la naturaleza, modalidad o condiciones de los servicios ofrecidos.
                        </p>
                        <p>
                            Asimismo, podrá interrumpir una interacción cuando el usuario incurra en conductas abusivas, intimidatorias, amenazantes, fraudulentas o que impidan el normal desarrollo de la prestación.
                        </p>
                        <p>
                            El prestador procurará comunicar las circunstancias que motiven dicha decisión y resolverá las consecuencias económicas de la cancelación conforme a la legislación aplicable y a las circunstancias del caso.
                        </p>
                        <p>
                            El usuario se compromete a mantener un trato respetuoso durante las comunicaciones y sesiones.
                        </p>
                    </div>

                    {/* 9. PROPIEDAD INTELECTUAL */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            9. PROPIEDAD INTELECTUAL
                        </h3>
                        <p>
                            Todos los contenidos originales publicados en el sitio web, incluyendo textos, fotografías, diseños, materiales gráficos, documentos, audios, videos, metodologías de presentación y demás elementos creativos, se encuentran protegidos por la normativa de propiedad intelectual.
                        </p>
                        <p>
                            Queda prohibida su reproducción, distribución, comercialización, modificación o utilización con fines comerciales sin autorización previa y expresa de sus titulares.
                        </p>
                        <p>
                            La contratación de una consulta o sesión no implica la cesión de derechos de propiedad intelectual sobre los materiales, contenidos o recursos utilizados por el prestador.
                        </p>
                        <p>
                            El usuario podrá utilizar los materiales que reciba exclusivamente para fines personales y no comerciales, salvo autorización expresa en contrario.
                        </p>
                    </div>

                    {/* 10. MODIFICACIONES */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            10. MODIFICACIONES
                        </h3>
                        <p>
                            El prestador podrá actualizar estos Términos y Condiciones cuando resulte necesario, por razones operativas, comerciales o normativas. Las modificaciones serán publicadas en esta misma sección, indicando la fecha de actualización.
                        </p>
                        <p>
                            Las nuevas condiciones serán aplicables a las contrataciones realizadas con posterioridad a su entrada en vigencia, sin afectar los derechos adquiridos ni modificar retroactivamente las condiciones de contrataciones previamente confirmadas.
                        </p>
                    </div>

                    {/* 11. LEGISLACIÓN APLICABLE */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            11. LEGISLACIÓN APLICABLE
                        </h3>
                        <p>
                            Los presentes Términos y Condiciones se interpretarán conforme a las leyes vigentes de la República Argentina, sin perjuicio de los derechos irrenunciables que correspondan a los consumidores.
                        </p>
                        <p>
                            Cualquier controversia será resuelta conforme a las reglas de competencia y jurisdicción establecidas por la legislación vigente, respetando los derechos irrenunciables del consumidor.
                        </p>
                    </div>

                    {/* 12. CONTACTO */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            12. CONTACTO
                        </h3>
                        <p>
                            Para consultas, solicitudes o reclamos relacionados con los servicios o estos Términos y Condiciones, los usuarios podrán comunicarse a través de los canales oficiales publicados en el sitio web.
                        </p>
                    </div>

                    {/* 13. MODALIDAD DE PRESTACIÓN Y REQUISITOS TÉCNICOS */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            13. MODALIDAD DE PRESTACIÓN Y REQUISITOS TÉCNICOS
                        </h3>
                        <p>
                            Los servicios podrán prestarse mediante videollamada, llamada telefónica, mensajería, correo electrónico u otras plataformas digitales informadas al momento de la contratación.
                        </p>
                        <p>
                            El usuario será responsable de disponer de los medios tecnológicos y de conectividad necesarios para participar de la sesión.
                        </p>
                        <p>
                            En caso de interrupciones técnicas ajenas al control del prestador, las partes procurarán restablecer la comunicación o acordar una nueva modalidad o fecha de prestación.
                        </p>
                        <p>
                            Cuando la imposibilidad de prestar el servicio sea atribuible al prestador, se ofrecerá una solución adecuada conforme a las circunstancias y a la normativa aplicable.
                        </p>
                        <p>
                            Las sesiones no podrán ser grabadas, reproducidas, difundidas ni compartidas por ninguna de las partes sin el consentimiento previo y expreso de la otra, sin perjuicio de las obligaciones legales aplicables.
                        </p>
                    </div>

                    {/* 14. ALCANCE DE LAS COMUNICACIONES Y ATENCIÓN POSTERIOR */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <h3 className="font-bodoni font-bold text-btn-light text-sm sm:text-base uppercase tracking-wide">
                            14. ALCANCE DE LAS COMUNICACIONES Y ATENCIÓN POSTERIOR
                        </h3>
                        <p>
                            La prestación contratada comprende exclusivamente las actividades, modalidades y tiempos expresamente informados en la descripción del servicio.
                        </p>
                        <p>
                            Las consultas adicionales, nuevas lecturas, sesiones complementarias o actividades no incluidas en la contratación original podrán requerir una nueva contratación y el correspondiente pago.
                        </p>
                        <p>
                            La contratación de un servicio no implica la disponibilidad permanente del prestador ni genera una obligación de atención ilimitada mediante mensajería, llamadas o redes sociales.
                        </p>
                        <p>
                            Cualquier seguimiento posterior que forme parte de la prestación será informado previamente en las condiciones particulares del servicio.
                        </p>
                    </div>
                </div>

                {/* Pie del Modal */}
                <div className="pt-3 border-t border-white/10 flex justify-center shrink-0">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-2 rounded-full bg-btn-light text-text-dark hover:bg-btn-light-hover transition-colors uppercase font-bold text-xs cursor-pointer shadow-md"
                    >
                        Entendido / Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

