import {
    Scale,
    FileText,
    Smartphone,
    Archive,
    Eye,
    Users,
    AlertTriangle,
    CheckCircle2
} from "lucide-react";
import { MotionDiv } from "@/components/ui/MotionDiv";

interface RegulationItem {
    title: string;
    description: string;
    icon: React.ElementType;
    highlight?: boolean;
}

export function Regulations() {
    const regulations: RegulationItem[] = [
        {
            title: "Obligatoriedad",
            description: "Aplica a todos los sectores y tamaños de empresa, incluyendo teletrabajadores y contratos a tiempo completo o parcial.",
            icon: Scale,
        },
        {
            title: "Contenido del registro",
            description: "Debe incluir el horario concreto de inicio y finalización, la fecha, y la identificación de la empresa y trabajador.",
            icon: FileText,
        },
        {
            title: "Digitalización y Novedades",
            description: "Aunque el papel se ha permitido, se tiende hacia sistemas digitales homologados que aseguren la inalterabilidad. Se prevé que la normativa exija registros detallados de pausas, horas extras y adaptaciones de jornada.",
            icon: Smartphone,
        },
        {
            title: "Conservación",
            description: "Las empresas deben conservar los registros durante un período de 4 años.",
            icon: Archive,
        },
        {
            title: "Acceso",
            description: "Los registros deben estar accesibles para los trabajadores, sus representantes legales y la Inspección de Trabajo y Seguridad Social.",
            icon: Eye,
        },
        {
            title: "Organización",
            description: "Se establece mediante negociación colectiva, acuerdo de empresa o, en su defecto, decisión del empresario tras consulta previa.",
            icon: Users,
        },
        /*  {
             title: "Incumplimientos",
             description: "No registrar la jornada diaria es una infracción que puede conllevar sanciones graves por parte de la Inspección de Trabajo.",
             icon: AlertTriangle,
             highlight: true,
         }, */
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <MotionDiv>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mb-6">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Normativa Vigente</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                            Aspectos Clave de la Normativa <br />
                            <span className="text-blue-600">(2025-2026)</span>
                        </h2>
                    </div>
                </MotionDiv>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regulations.map((item, index) => (
                        <MotionDiv
                            key={index}
                            delay={index * 0.1}
                            className={`group p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${item.highlight
                                ? "bg-red-50 border-red-100 hover:border-red-200"
                                : "bg-white border-black/5 hover:border-blue-500/20"
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${item.highlight
                                ? "bg-red-100 text-red-600 group-hover:bg-red-200"
                                : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                                }`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className={`text-xl font-bold mb-3 ${item.highlight ? "text-red-900" : "text-slate-900"
                                }`}>
                                {item.title}
                            </h3>
                            <p className={`${item.highlight ? "text-red-700" : "text-slate-600"
                                } leading-relaxed`}>
                                {item.description}
                            </p>
                        </MotionDiv>
                    ))}
                </div>

                <MotionDiv delay={0.4}>
                    <div className="mt-16 max-w-4xl mx-auto">
                        <div className="bg-red-50 border border-red-100 rounded-2xl p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <AlertTriangle className="w-64 h-64 text-red-900" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-red-900 mb-6 flex items-center gap-3">
                                    <AlertTriangle className="w-8 h-8 text-red-600" />
                                    Sanciones por incumplimiento
                                </h3>

                                <p className="text-red-800 text-lg mb-8 max-w-2xl">
                                    Las multas por no llevar el registro o por falsificarlo se han endurecido significativamente:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-red-200">
                                        <div className="font-bold text-red-900 text-lg mb-2">Infracciones Leves</div>
                                        <div className="text-3xl font-bold text-red-600 mb-2">60 € - 625 €</div>
                                        <p className="text-red-800/80 text-sm">Por errores formales en el registro o documentación.</p>
                                    </div>

                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-red-200">
                                        <div className="font-bold text-red-900 text-lg mb-2">Infracciones Graves</div>
                                        <div className="text-3xl font-bold text-red-600 mb-2">Hasta 10.000 €</div>
                                        <p className="text-red-800/80 text-sm">Por trabajador en casos de falta de registro o falsificación.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
}
