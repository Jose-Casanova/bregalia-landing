import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionDiv } from "@/components/ui/MotionDiv";

const included = [
    "Fichaje desde móvil, ordenador o kiosco",
    "Turnos, calendarios, vacaciones y ausencias",
    "Horas extra, bolsa de horas y absentismo",
    "Informes para la Inspección de Trabajo",
    "Fichajes sellados con blockchain",
    "Soporte personal sin esperas",
];

export function Pricing() {
    return (
        <section id="precios" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <MotionDiv>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                            Un solo plan. <span className="text-primary">Todo incluido.</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Sin versiones básicas ni premium: todas las funciones, para todos, desde el primer día.
                        </p>
                    </div>
                </MotionDiv>

                <MotionDiv delay={0.1}>
                    <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-primary/20 shadow-xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                                    Un precio que crece contigo
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    La cuota de entrada ya cubre equipos de hasta 6 o 7 personas. Si tu empresa crece,
                                    pasas al siguiente tramo sin cambiar de producto.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    Pago mensual y sin permanencia.
                                </p>
                                <a href="#contact" className="contents">
                                    <Button size="lg" className="rounded-full w-full md:w-auto">
                                        Pide tu precio
                                    </Button>
                                </a>
                            </div>

                            <ul className="space-y-4">
                                {included.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-slate-700">
                                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
}
