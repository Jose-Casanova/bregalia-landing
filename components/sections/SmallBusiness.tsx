import { Coffee, Wrench, Stethoscope, Store, Sparkles } from "lucide-react";
import { MotionDiv } from "@/components/ui/MotionDiv";

const businesses = [
    { label: "Cafeterías y restaurantes", icon: Coffee },
    { label: "Talleres", icon: Wrench },
    { label: "Clínicas", icon: Stethoscope },
    { label: "Comercios", icon: Store },
    { label: "Empresas de limpieza", icon: Sparkles },
];

export function SmallBusiness() {
    return (
        <section id="pymes" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <MotionDiv>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                Hecho para pymes
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-slate-900">
                                Una pyme no es una versión <br className="hidden md:block" />
                                <span className="text-primary">recortada de una gran empresa.</span>
                            </h2>
                        </div>
                    </MotionDiv>

                    <MotionDiv delay={0.1}>
                        <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-6 md:p-10 space-y-5 text-lg text-slate-600 leading-relaxed">
                            <p>
                                Carmen tiene una cafetería en el barrio con seis personas en plantilla. Abre a las siete,
                                cuadra la caja a las once y, entre medias, hace de encargada, de gestora y de lo que haga falta.
                            </p>
                            <p>
                                Cuando su gestor le dijo que tenía que registrar la jornada de su equipo, empezó a buscar y
                                encontró siempre lo mismo: un plan básico que se quedaba corto y, para tener lo importante,
                                planes &ldquo;Pro&rdquo; o &ldquo;Enterprise&rdquo; pensados para empresas mucho más grandes que la suya.
                                Acabó con una hoja en la barra que se rellenaba a final de semana, &ldquo;más o menos&rdquo;.
                            </p>
                            <p className="text-slate-900 font-semibold">
                                Bregalia nace para Carmen. Y para cualquier negocio que necesita las mismas garantías
                                que una gran empresa, contadas de forma sencilla.
                            </p>
                        </div>
                    </MotionDiv>

                    <MotionDiv delay={0.2}>
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
