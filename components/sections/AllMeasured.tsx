import Image from "next/image";
import { Clock, TrendingUp, Hourglass, Palmtree, UserX, ChartBar, FileText } from "lucide-react";
import { MotionDiv } from "@/components/ui/MotionDiv";

const metrics = [
    { label: "Horas trabajadas", icon: Clock },
    { label: "Horas extra", icon: TrendingUp },
    { label: "Bolsa de horas", icon: Hourglass },
    { label: "Vacaciones", icon: Palmtree },
    { label: "Ausencias y absentismo", icon: UserX },
    { label: "Informes completos", icon: ChartBar },
];

export function AllMeasured() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <MotionDiv direction="right">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-slate-900">
                            Todo medido,<br />
                            <span className="text-primary">sin hojas de cálculo.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Cumplir la ley es solo el principio. Con Bregalia sabes en todo momento cómo va tu equipo,
                            desde un panel claro y sin hacer cuentas.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {metrics.map(({ label, icon: Icon }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-3 rounded-xl bg-white border border-black/5 p-4 shadow-sm"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-slate-800">{label}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="/informe-ejemplo-bregalia.pdf"
                            target="_blank"
                            rel="noopener"
                            className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-5 py-3 font-medium text-primary transition-colors hover:bg-primary/10"
                        >
                            <FileText className="w-5 h-5" />
                            Ver un informe de ejemplo (PDF)
                        </a>
                    </MotionDiv>

                    <MotionDiv direction="left" delay={0.2}>
                        <div className="relative rounded-2xl border border-black/10 bg-white/50 p-2 shadow-2xl lg:p-3">
                            <div className="relative rounded-xl overflow-hidden aspect-square">
                                <Image
                                    src="/app_dashboard_mockup.png"
                                    alt="Panel de Bregalia con horas trabajadas, horas extra y ausencias"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}
