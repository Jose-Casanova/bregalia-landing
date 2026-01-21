import { FeatureCard } from "@/components/ui/FeatureCard";
import {
    Clock,
    CalendarDays,
    Fingerprint,
    Scale,
    FileSignature,
    ChartBar,
    MapPin,
    Smartphone,
    ShieldCheck
} from "lucide-react";
import { MotionDiv } from "@/components/ui/MotionDiv";

export function Features() {
    const features = [
        {
            title: "Fichaje Avanzado",
            description:
                "Registro seguro mediante datos biométricos, códigos QR o PIN. Flexibilidad total para tu equipo.",
            icon: Fingerprint,
        },
        {
            title: "Gestión de Tiempo",
            description:
                "Control detallado de horas extras, pausas y compensación horaria.",
            icon: Clock,
        },
        {
            title: "Turnos y Calendarios",
            description:
                "Planificación simple de turnos y calendarios laborales personalizados.",
            icon: CalendarDays,
        },
        {
            title: "Cumplimiento Legal",
            description:
                "Siempre al día. Adaptación automática a cambios de normativa y actualizaciones incluidas.",
            icon: Scale,
        },
        {
            title: "Auditoría Digital",
            description:
                "Seguridad jurídica total. Registro de modificaciones con firma digitalizada inalterable.",
            icon: FileSignature,
        },
        {
            title: "Informes y KPIs",
            description:
                "Visualiza el rendimiento de tu equipo y exporta informes oficiales para inspecciones en un clic.",
            icon: ChartBar,
        },
        {
            title: "Geolocalización",
            description:
                "Registro de ubicación en tiempo real para control de ausencias y ausencias justificadas.",
            icon: MapPin,
        },
        {
            title: "Multi-dispositivo",
            description:
                "Compatible con PCs, Tablets, Móviles y modo Kiosco. Ficha desde cualquier dispositivo.",
            icon: Smartphone,
        },
        {
            title: "Seguridad Blindada",
            description:
                "Protección total con sistemas anti-hack, encriptación avanzada y copias de seguridad automáticas.",
            icon: ShieldCheck,
        },
    ];

    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <MotionDiv>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                            Todo lo que necesitas para tu equipo
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Una suite completa de herramientas diseñadas para ahorrar tiempo y
                            garantizar el cumplimiento normativo.
                        </p>
                    </div>
                </MotionDiv>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <MotionDiv
                            key={index}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <FeatureCard
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                            />
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
}
