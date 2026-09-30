import Link from "next/link";
import { Button } from "@/components/ui/Button";

type CallToActionProps = {
    title?: string;
    text?: string;
};

export function CallToAction({
    title = "Cumple con el registro de jornada sin papeleo",
    text = "Bregalia registra los fichajes de tu equipo desde el móvil y genera los informes que pide la Inspección de Trabajo.",
}: CallToActionProps) {
    return (
        <div className="not-prose my-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 text-center">
            <p className="text-xl md:text-2xl font-bold font-heading text-slate-900 mb-3">{title}</p>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">{text}</p>
            <Link href="/#contact">
                <Button size="lg" className="rounded-full">
                    Solicita una demo sin compromiso
                </Button>
            </Link>
        </div>
    );
}
