import { FeatureCard } from "@/components/ui/FeatureCard";
import {
    CalendarDays,
    Clock,
    MapPin,
    Smartphone,
    FileText,
    UserCheck,
    ShieldCheck,
    Zap
} from "lucide-react";

export function Features() {
    const features = [
        {
            title: "Registro de Jornada",
            description:
                "Fichaje simple desde web, móvil o tablet. Inicia, pausa y finaliza la jornada con un solo clic.",
            icon: Clock,
        },
        {
            title: "Gestión de Turnos",
            description:
                "Planifica cuadrantes rotativos, turnos fijos y cambios de horario. Notificaciones automáticas al equipo.",
            icon: CalendarDays,
        },
        {
            title: "Geolocalización",
            description:
                "Registra la ubicación exacta de cada fichaje para equipos en movilidad. Visualización en mapa.",
            icon: MapPin,
        },
        {
            title: "App Móvil Nativa",
            description:
                "Toda la potencia de Bregalia en el bolsillo de tus empleados. Disponible para iOS y Android.",
            icon: Smartphone,
        },
        {
            title: "Informes Oficiales",
            description:
                "Genera reportes con validez legal listos para la Inspección de Trabajo en formato PDF y Excel.",
            icon: FileText,
        },
        {
            title: "Gestión de Vacaciones",
            description:
                "Solicitud y aprobación de días libres, bajas y asuntos propios. Calendario unificado de ausencias.",
            icon: UserCheck,
        },
    ];

    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Todo lo que necesitas para tu equipo
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Una suite completa de herramientas diseñadas para ahorrar tiempo y
                        garantizar el cumplimiento normativo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
