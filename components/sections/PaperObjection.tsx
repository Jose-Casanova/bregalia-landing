import Link from "next/link";
import { Hourglass, ShieldAlert, EyeOff, Archive, ArrowRight } from "lucide-react";
import { MotionDiv } from "@/components/ui/MotionDiv";

const reasons = [
    {
        title: "No es gratis: lo pagas en tiempo",
        description:
            "Rellenar hojas, recoger firmas, archivar y sumar horas extra a mano ocupa horas cada mes. Horas tuyas o de tu encargado.",
        icon: Hourglass,
    },
    {
        title: "No te protege: te expone",
        description:
            "Una hoja que se rellena a final de semana “más o menos” no es un registro fiable. Ante la Inspección o ante una reclamación de horas extra, juega en tu contra.",
        icon: ShieldAlert,
    },
    {
        title: "No te dice nada",
        description:
            "El papel no te avisa de las horas extra acumuladas, de quién tiene vacaciones pendientes ni de quién falta más. Es un archivo, no una herramienta.",
        icon: EyeOff,
    },
    {
        title: "Hay que guardarlo cuatro años",
        description:
            "Carpetas, cajas, humedad, mudanzas. Y el día que te lo piden, a buscar hoja por hoja.",
        icon: Archive,
    },
];

export function PaperObjection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <MotionDiv>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                            ¿Y por qué no en papel?
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Porque <span className="font-semibold text-slate-900">el papel es gratis hasta el día que lo necesitas.</span>
                        </p>
                    </div>
                </MotionDiv>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {reasons.map(({ title, description, icon: Icon }, index) => (
                        <MotionDiv
                            key={title}
                            delay={index * 0.1}
                            className="flex gap-5 rounded-2xl bg-white border border-black/5 p-6 md:p-8 shadow-sm"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                                <p className="text-slate-600 leading-relaxed">{description}</p>
                            </div>
                        </MotionDiv>
                    ))}
                </div>

                <MotionDiv delay={0.4}>
                    <div className="text-center mt-10">
                        <Link
                            href="/blog/registro-de-jornada-en-papel"
                            className="inline-flex items-center gap-1 text-primary font-medium hover:underline underline-offset-4"
                        >
                            ¿Sigue siendo válido el registro en papel? Lee la guía <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
}
