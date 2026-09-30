import Link from "next/link";
import { MotionDiv } from "@/components/ui/MotionDiv";

export function Footer() {
    return (
        <footer className="bg-white border-t border-black/5 py-12">
            <MotionDiv className="container mx-auto px-4 text-center text-slate-500">
                <p className="mb-3 text-lg font-heading text-primary font-bold">Bregalia</p>
                <div className="flex items-center justify-center gap-6 mb-4 text-sm">
                    <Link
                        href="/blog"
                        className="text-slate-600 hover:text-primary transition-colors underline-offset-4 hover:underline"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/politica-de-privacidad"
                        className="text-slate-600 hover:text-primary transition-colors underline-offset-4 hover:underline"
                    >
                        Política de Protección de Datos
                    </Link>
                </div>
                <p className="text-sm">
                    © {new Date().getFullYear()} Bregalia. Todos los derechos reservados.
                </p>
            </MotionDiv>
        </footer>
    );
}
