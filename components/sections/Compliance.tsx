import { Button } from "@/components/ui/Button";
import { ShieldCheck, Lock, FileCheck } from "lucide-react";
import { MotionDiv } from "@/components/ui/MotionDiv";

export function Compliance() {
    return (
        <section id="compliance" className="py-24 bg-secondary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <MotionDiv direction="right">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-6">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Garantía Legal 100%</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                                Preparados para la <br />
                                <span className="text-primary">Inspección de Trabajo Instantánea</span>
                            </h2>

                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Dormir tranquilo es posible. Bregalia genera informes automáticos con sello de autenticidad digital,
                                asegurando que los datos son inmutables y válidos ante cualquier auditoría.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Lock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Cumplimiento LGPD</h3>
                                        <p className="text-slate-600">
                                            Tus datos y los de tus empleados están encriptados y protegidos bajo los más estrictos estándares de seguridad europeos.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <FileCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Sello de Autenticidad</h3>
                                        <p className="text-slate-600">
                                            Cada registro queda sellado digitalmente para garantizar su integridad y validez legal.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MotionDiv>

                    <MotionDiv direction="left" delay={0.2}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl rounded-full" />
                            <div className="relative bg-white/50 border border-black/5 rounded-2xl p-8 backdrop-blur-xl shadow-xl">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-black/5 pb-4">
                                        <span className="text-slate-600">Estado Normativo</span>
                                        <span className="text-green-600 font-medium flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            En Regla
                                        </span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-foreground">Registro Diario</span>
                                            <span className="text-slate-500 text-sm">Completado 100%</span>
                                        </div>
                                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-primary rounded-full" />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-foreground">Política de Privacidad</span>
                                            <span className="text-slate-500 text-sm">Aceptada</span>
                                        </div>
                                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-primary rounded-full" />
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <Button className="w-full bg-white hover:bg-slate-50 text-primary border border-primary/20 shadow-sm">
                                            Descargar Informe de Ejemplo
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}
