import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { MotionDiv } from "@/components/ui/MotionDiv";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <MotionDiv delay={0.1}>
                    <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
                        <Badge variant="default" className="px-3 py-1 rounded-full">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Nueva version 2.0 disponible
                        </Badge>
                    </div>
                </MotionDiv>

                <MotionDiv delay={0.2}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
                        Tu equipo, tus horarios, <br />
                        <span className="text-gradient">bajo control.</span>
                    </h1>
                </MotionDiv>

                <MotionDiv delay={0.3}>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-20 mb-20 leading-relaxed">
                        Bregalia simplifica el registro de jornadas, turnos y vacaciones.
                        Cumple con la normativa vigente y evita sanciones con una plataforma
                        moderna y fácil de usar.
                    </p>
                </MotionDiv>

                <MotionDiv delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        {/* <Button size="lg" className="h-14 px-8 text-lg rounded-full">
                            Empieza Gratis <ArrowRight className="ml-2 h-5 w-5" />
                        </Button> */}
                        <a href="#contact" className="contents">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="h-14 px-8 text-lg rounded-full hover:bg-black/5"
                            >
                                Solicita una demo sin compromiso
                            </Button>
                        </a>
                    </div>
                </MotionDiv>

                <MotionDiv delay={0.5}>
                    <div className="flex items-center justify-center gap-6 text-lg text-slate-600 mb-20 flex-wrap">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-10 w-10 text-primary" />
                            <span>Sin inversión inicial</span>
                        </div>
                        {/*  <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span>Cumple normativa LGPD</span>
                        </div> */}
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-10 w-10 text-primary" />
                            <span>Pago mensual sin permanencia</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-10 w-10 text-primary" />
                            <span>Soporte personal sin esperas</span>
                        </div>
                    </div>
                </MotionDiv>

                <MotionDiv delay={0.6} className="relative mx-auto max-w-5xl rounded-2xl border border-black/10 bg-white/50 p-2 backdrop-blur-sm shadow-2xl lg:rounded-3xl lg:p-4">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-900/50">
                        <Image
                            src="/app_dashboard_mockup.png"
                            alt="Bregalia Dashboard"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
}
