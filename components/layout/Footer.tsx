import { MotionDiv } from "@/components/ui/MotionDiv";

export function Footer() {
    return (
        <footer className="bg-white border-t border-black/5 py-12">
            <MotionDiv className="container mx-auto px-4 text-center text-slate-500">
                <p className="mb-4 text-lg font-heading text-primary font-bold">Bregalia</p>
                <p className="text-sm">
                    © {new Date().getFullYear()} Bregalia. Todos los derechos reservados.
                </p>
            </MotionDiv>
        </footer>
    );
}
