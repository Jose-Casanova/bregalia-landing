import { Button } from "@/components/ui/Button";
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
                <MotionDiv delay={0.2}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
                        Todo incluido. Para todos. <br />
                        <span className="text-gradient">Del primer empleado al último.</span>
                    </h1>
                </MotionDiv>

                <MotionDiv delay={0.3}>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-20 mb-20 leading-relaxed">
                        El control horario completo y sencillo para pequeñas y medianas empresas:
                        un único plan con todas las funciones, fichajes protegidos con blockchain
                        y un precio que crece al ritmo de tu equipo.
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
                            <span>Un solo plan, todo incluido</span>
                        </div>
                        {/*  <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span>Cumple normativa LGPD</span>
                        </div> */}
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-10 w-10 text-primary" />
                            <span>Fichajes sellados con blockchain</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-10 w-10 text-primary" />
                            <span>Sin permanencia</span>
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
