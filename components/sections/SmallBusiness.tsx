import { Coffee, Wrench, Stethoscope, Store, Sparkles, Factory, Truck } from "lucide-react";
import { MotionDiv } from "@/components/ui/MotionDiv";

const businesses = [
    { label: "Cafeterías y restaurantes", icon: Coffee },
    { label: "Talleres", icon: Wrench },
    { label: "Clínicas", icon: Stethoscope },
    { label: "Comercios", icon: Store },
    { label: "Empresas de limpieza", icon: Sparkles },
    { label: "Industria", icon: Factory },
    { label: "Logística y reparto", icon: Truck },
];

export function SmallBusiness() {
    return (
        <section id="pymes" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <MotionDiv>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                Pequeñas y medianas empresas
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-slate-900">
                                Hecho a la medida de tu empresa, <br className="hidden md:block" />
                                <span className="text-primary">tenga el tamaño que tenga.</span>
                            </h2>
                        </div>
                    </MotionDiv>

                    <MotionDiv delay={0.1}>
                        <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-6 md:p-10 space-y-5 text-lg text-slate-600 leading-relaxed">
                            <p className="text-slate-900 font-medium">
                                Luis dirige una empresa de servicios con setenta trabajadores y Carmen tiene una cafetería
                                en el barrio con seis personas en plantilla.
                            </p>
                            <p>
                                Carmen abre a las siete, cuadra la caja a las once y, entre medias, hace de encargada, de
                                gestora y de lo que haga falta. Mientras, Luis gestiona setenta trabajadores, turnos de
                                mañana, tarde y noche, y parte del equipo fichando desde la calle.
                            </p>
                            <p>
                                Los dos tienen la misma obligación: registrar cada día la jornada de su equipo. Pero
                                mientras el problema de Carmen es una hoja en la barra que se rellena a final de semana,
                                &ldquo;más o menos&rdquo;, sin saber cuántas horas extra acumula su equipo ni quién tiene
                                vacaciones pendientes, Luis lucha por cuadrar turnos, ausencias y horas extra de setenta
                                personas con un Excel o un programa que le cobra aparte los informes, la geolocalización o los turnos,
                                y en el que cada módulo nuevo sube la factura.
                            </p>
                            <p>
                                <strong className="text-slate-900">Bregalia nace para los dos.</strong> Y para el taller,
                                la clínica, la tienda de barrio o la empresa de limpieza con personal repartido por la
                                ciudad. Porque una pyme no es una versión recortada de una gran empresa: necesita las
                                mismas garantías, contadas de forma sencilla. Todo incluido desde el primer día y, si la
                                empresa crece, basta con pasar al siguiente tramo sin incluir nuevos módulos.
                            </p>
                        </div>
                    </MotionDiv>

                    <MotionDiv delay={0.2}>
                        <p className="text-center text-xl md:text-2xl font-bold font-heading text-slate-900 mt-12">
                            Seis empleados o setenta: <span className="text-primary">las mismas funciones, las mismas garantías.</span>
                        </p>
                    </MotionDiv>

                    <MotionDiv delay={0.25}>
                        <div className="flex flex-wrap justify-center gap-3 mt-10">
                            {businesses.map(({ label, icon: Icon }) => (
                                <span
                                    key={label}
                                    className="inline-flex items-center gap-2 rounded-full bg-white border border-black/5 px-4 py-2 text-sm text-slate-700 shadow-sm"
                                >
                                    <Icon className="w-4 h-4 text-primary" />
                                    {label}
                                </span>
                            ))}
                        </div>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}
