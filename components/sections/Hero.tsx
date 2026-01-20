import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
                    <Badge variant="default" className="px-3 py-1 rounded-full">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Nueva version 2.0 disponible
                    </Badge>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
                    Tu equipo, tus horarios, <br />
                    <span className="text-gradient">bajo control.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Bregalia simplifica el registro de jornadas, turnos y vacaciones.
                    Cumple con la normativa vigente y evita sanciones con una plataforma
                    moderna y fácil de usar.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full">
                        Empezar Gratis <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        className="h-14 px-8 text-lg rounded-full hover:bg-white/5"
                    >
                        Ver Demo en Vivo
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-8 text-sm text-slate-500 mb-20 flex-wrap">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                        <span>Cumple normativa LGPD</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                        <span>Sin tarjeta de crédito</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                        <span>Soporte prioritario</span>
                    </div>
                </div>

                <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl lg:rounded-3xl lg:p-4">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-900/50">
                        <Image
                            src="/app_dashboard_mockup.png"
                            alt="Bregalia Dashboard"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
