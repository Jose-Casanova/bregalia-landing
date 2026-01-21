import { MotionDiv } from "@/components/ui/MotionDiv";
import Image from "next/image";
import { Check } from "lucide-react";

export function EmployeeSimplicity() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <MotionDiv
                        direction="left"
                        delay={0.1}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-slate-900">
                            Para tus empleados,<br />
                            <span className="text-primary italic">solo es un clic.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Bregalia está diseñado pensando en la rapidez. Sin configuraciones complejas ni procesos lentos. Tus trabajadores podrán registrar su jornada en segundos desde cualquier lugar.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Fichaje instantáneo con un botón.",
                                "Sin necesidad de instalar apps pesadas.",
                                "Recordatorios automáticos para no olvidar fichar.",
                                "Acceso desde cualquier smartphone u ordenador."
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-700">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </MotionDiv>

                    <MotionDiv
                        direction="up"
                        delay={0.3}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-white p-3 lg:p-4">
                            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden">
                                <Image
                                    src="/employee_simplicity.png"
                                    alt="Empleado fichando con un clic en Bregalia"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <div className="text-sm font-medium opacity-80 mb-1">Interfaz Simplificada</div>
                                    <div className="text-xl font-bold">Registro en 1 segundo</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 blur-3xl rounded-full" />
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}
