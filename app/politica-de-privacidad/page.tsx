import type { Metadata } from "next";
import { ArrowLeft, Shield, Lock, CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Política de Protección de Datos y Privacidad | Bregalia",
    description:
        "Información sobre la política de protección de datos personales y privacidad de Bregalia, conforme al RGPD (UE 2016/679) y la LOPDGDD 3/2018.",
    alternates: {
        canonical: "/politica-de-privacidad",
    },
};

export default function PoliticaPrivacidadPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
            {/* Shared Navbar */}
            <Navbar />

            {/* Main Content — pt accounts for fixed navbar height */}
            <main className="container mx-auto px-4 md:px-6 pt-32 pb-12 md:pt-36 md:pb-16 max-w-4xl flex-1">
                {/* Hero / Title */}
                <div className="mb-10 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                        <Shield className="w-4 h-4" />
                        Privacidad y Cumplimiento Legal
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mb-4">
                        Política de Protección de Datos y Privacidad
                    </h1>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Última actualización: Septiembre de {new Date().getFullYear()}. En cumplimiento del Reglamento General de Protección de Datos (RGPD UE 2016/679) y de la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
                    </p>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10 space-y-10 text-slate-700 leading-relaxed text-sm md:text-base">
                    
                    {/* 1. Responsable */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2.5 text-slate-900 font-bold font-heading text-lg md:text-xl">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-semibold">1</span>
                            <h2>Responsable del Tratamiento</h2>
                        </div>
                        <p>
                            De conformidad con la normativa vigente en materia de protección de datos de carácter personal, le informamos de que los datos personales recogidos a través de este sitio web serán tratados bajo la responsabilidad de:
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2 text-sm text-slate-800">
                            <p><strong>Titular:</strong> Jose Casanova Ruiz</p>
                            <p><strong>Nombre comercial:</strong> Bregalia</p>
                            <p><strong>Sitio web:</strong> <a href="https://bregalia.es" className="text-primary hover:underline">https://bregalia.es</a></p>
                            <p><strong>Correo electrónico de contacto y ejercicio de derechos:</strong> <a href="mailto:gestion@bregalia.es" className="text-primary hover:underline">gestion@bregalia.es</a></p>
                            <p><strong>Finalidad del sitio web:</strong> Información y presentación comercial de soluciones para el registro horario, gestión de turnos y cumplimiento normativo laboral para empresas y profesionales.</p>
                        </div>
                    </section>

                    {/* 2. Marco Legal */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2.5 text-slate-900 font-bold font-heading text-lg md:text-xl">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-semibold">2</span>
                            <h2>Marco Legal y Principios Aplicables</h2>
                        </div>
                        <p>
                            El tratamiento de sus datos personales se regirá por la legislación europea y española aplicable:
                        </p>
                        <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
                            <li><strong>RGPD (UE) 2016/679:</strong> Reglamento relativo a la protección de las personas físicas en lo que respecta al tratamiento de sus datos personales y a la libre circulación de estos datos.</li>
                            <li><strong>LOPDGDD 3/2018:</strong> Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales.</li>
                            <li><strong>LSSI-CE 34/2002:</strong> Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico.</li>
                        </ul>
                        <p className="pt-2">
                            En todo momento se aplicarán los principios de <strong>licitud, lealtad, transparencia, limitación de la finalidad, minimización de datos, exactitud e integridad y confidencialidad</strong>.
                        </p>
                    </section>

                    {/* 3. Datos Recopilados y Finalidad */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2.5 text-slate-900 font-bold font-heading text-lg md:text-xl">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-semibold">3</span>
                            <h2>Datos Recopilados y Finalidades del Tratamiento</h2>
                        </div>
                        <p>
                            Recogemos únicamente los datos estrictamente necesarios para atender sus peticiones. A través del formulario de contacto disponible en la página web, se recogen los siguientes datos:
                        </p>
                        <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
                            <li><strong>Nombre:</strong> Para identificar al interlocutor y dirigirnos a usted de manera personalizada.</li>
                            <li><strong>Dirección de correo electrónico:</strong> Para responder a la consulta, solicitud de información, presupuesto o demo planteada.</li>
                            <li><strong>Empresa (opcional):</strong> Para contextualizar las necesidades organizativas y de control de jornada de su equipo.</li>
                            <li><strong>Mensaje:</strong> La información o consulta detallada que libremente decida facilitarnos.</li>
                        </ul>
                        <p className="pt-2">
                            <strong>Finalidad:</strong> Los datos se utilizarán exclusivamente para gestionar y resolver las dudas, solicitudes de contacto o requerimientos comerciales formulados. En ningún caso se utilizarán sus datos para remitir publicidad o comunicaciones comerciales no solicitadas (spam), ni se elaborarán perfiles automatizados.
                        </p>
                    </section>

                    {/* 4. Base Jurídica */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2.5 text-slate-900 font-bold font-heading text-lg md:text-xl">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-semibold">4</span>
                            <h2>Base Jurídica (Legitimación)</h2>
                        </div>
                        <p>
                            La base legal para el tratamiento de sus datos personales es:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 pt-2">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    <span>Consentimiento Expreso (Art. 6.1.a RGPD)</span>
                                </div>
                                <p className="text-xs text-slate-600">
                                    Otorgado de forma libre, inequívoca y voluntaria al marcar la casilla de aceptación de la política de privacidad y pulsar el botón de envío del formulario.
                                </p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1.5">
                                    <Shield className="w-4 h-4 text-primary" />
                                    <span>Interés Legítimo de Seguridad (Art. 6.1.f RGPD)</span>
                                </div>
                                <p className="text-xs text-slate-600">
                                    Para la protección contra ataques automatizados, fraudes e inyecciones de spam en los formularios mediante el servicio de verificación Cloudflare Turnstile.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 5. Conservación */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2.5 text-slate-900 font-bold font-heading text-lg md:text-xl">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-semibold">5</span>
                            <h2>Plazo de Conservación de los Datos</h2>
                        </div>
                        <p>
                            Los datos facilitados a través de las consultas se conservarán durante el tiempo estrictamente necesario para atender, resolver y gestionar adecuadamente la solicitud efectuada.
                        </p>
                        <p>
                            Una vez resuelta la consulta, y salvo que se derive una relación contractual o precontractual, los datos se mantendrán debidamente bloqueados durante los plazos legalmente exigibles para la atención de posibles responsabilidades, procediéndose con posterioridad a su completa supresión o anonimización.
                        </p>
                    </section>

                    {/* 6. Destinatarios y Proveedores */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2.5 text-slate-900 font-bold font-heading text-lg md:text-xl">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-semibold">6</span>
                            <h2>Destinatarios y Encargados del Tratamiento</h2>
                        </div>
                        <p>
                            No se comunicarán ni cederán datos personales a terceros, salvo obligación legal expresa o requerimiento judicial.
                        </p>
                        <p>
                            Para poder ofrecer y mantener operativo el sitio web, se cuenta con proveedores de servicios de confianza en calidad de <strong>Encargados del Tratamiento</strong>, debidamente contratados y sujetos a estrictas obligaciones de confidencialidad y seguridad:
                        </p>
                        <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
                            <li><strong>Alojamiento e infraestructura web:</strong> Vercel Inc., con sede en EE.UU., sujeto al Marco de Privacidad de Datos UE-EE.UU. (Data Privacy Framework) y Cláusulas Contractuales Tipo de la Comisión Europea.</li>
                            <li><strong>Seguridad perimetral y verificación anti-spam:</strong> Cloudflare Inc., para mitigar amenazas y verificar interacciones de bots mediante Cloudflare Turnstile de forma respetuosa con la privacidad del usuario.</li>
                            <li><strong>Envío de correo electrónico y gestión de servidores SMTP:</strong> Proveedores con servidores en la Unión Europea o adheridos a acuerdos de transferencia segura de datos.</li>
                        </ul>
                    </section>

                    {/* 7. Derechos del Usuario */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2.5 text-slate-900 font-bold font-heading text-lg md:text-xl">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-semibold">7</span>
                            <h2>Derechos del Usuario (Derechos ARSULIPO)</h2>
                        </div>
                        <p>
                            En cualquier momento, usted como titular de los datos puede ejercer de forma gratuita sus derechos reconocidos por el RGPD y la LOPDGDD:
                        </p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                                <h4 className="font-semibold text-slate-900 text-sm mb-1">Acceso</h4>
                                <p className="text-xs text-slate-600">Conocer qué datos personales suyos están siendo tratados y las finalidades del tratamiento.</p>
                            </div>
                            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                                <h4 className="font-semibold text-slate-900 text-sm mb-1">Rectificación</h4>
                                <p className="text-xs text-slate-600">Solicitar la modificación o corrección de datos inexactos o incompletos.</p>
                            </div>
                            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                                <h4 className="font-semibold text-slate-900 text-sm mb-1">Supresión («Olvido»)</h4>
                                <p className="text-xs text-slate-600">Solicitar que sus datos sean eliminados cuando ya no sean necesarios para los fines recogidos.</p>
                            </div>
                            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                                <h4 className="font-semibold text-slate-900 text-sm mb-1">Limitación</h4>
                                <p className="text-xs text-slate-600">Solicitar que se suspenda el tratamiento de sus datos en determinados supuestos.</p>
                            </div>
                            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                                <h4 className="font-semibold text-slate-900 text-sm mb-1">Portabilidad</h4>
                                <p className="text-xs text-slate-600">Recibir sus datos personales en un formato estructurado y de lectura mecánica común.</p>
                            </div>
                            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                                <h4 className="font-semibold text-slate-900 text-sm mb-1">Oposición</h4>
                                <p className="text-xs text-slate-600">Oponerse al tratamiento de sus datos o revocar el consentimiento prestado en cualquier momento.</p>
                            </div>
                        </div>
                        
                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-4 space-y-2">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm md:text-base">
                                <Mail className="w-4 h-4 text-primary" />
                                ¿Cómo ejercer sus derechos?
                            </h4>
                            <p className="text-xs md:text-sm text-slate-700">
                                Para ejercer cualquiera de estos derechos, basta con remitir una comunicación por escrito al correo electrónico:
                            </p>
                            <p className="text-sm font-semibold text-primary">
                                <a href="mailto:gestion@bregalia.es" className="underline underline-offset-2">gestion@bregalia.es</a>
                            </p>
                            <p className="text-xs text-slate-600">
                                Indicando en el asunto <em>«Ejercicio de Derechos de Protección de Datos»</em> y acreditando su identidad (mediante copia de DNI o documento equivalente) para asegurar que no se facilite información a terceros no autorizados.
                            </p>
                            <p className="text-xs text-slate-500 pt-1">
                                Si considera que el tratamiento de sus datos infringe la normativa aplicable, tiene derecho a presentar una reclamación ante la autoridad de control: la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline text-primary">www.aepd.es</a>.
                            </p>
                        </div>
                    </section>

                    {/* 8. Medidas de Seguridad */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2.5 text-slate-900 font-bold font-heading text-lg md:text-xl">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-semibold">8</span>
                            <h2>Medidas de Seguridad Técnicas y Organizativas</h2>
                        </div>
                        <p>
                            Bregalia adopta todas las medidas de índole técnica y organizativa necesarias para garantizar la seguridad de los datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
                        </p>
                        <p>
                            Este sitio web cuenta con un <strong>certificado SSL/TLS</strong> que garantiza que la navegación y la transmisión de información entre su navegador y nuestros servidores se efectúa mediante canales cifrados y seguros (protocolo HTTPS).
                        </p>
                    </section>

                    {/* 9. Actualizaciones */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2.5 text-slate-900 font-bold font-heading text-lg md:text-xl">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-semibold">9</span>
                            <h2>Modificaciones y Actualizaciones</h2>
                        </div>
                        <p>
                            Jose Casanova Ruiz se reserva el derecho de modificar la presente Política de Protección de Datos para adaptarla a futuras novedades legislativas, jurisprudenciales o prácticas del sector. Se recomienda a los usuarios consultar periódicamente esta página.
                        </p>
                    </section>

                </div>

                {/* Annex I: Cloudflare Turnstile */}
                <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10 space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
                    <div className="flex items-start gap-3 pb-2 border-b border-slate-100">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 border border-orange-100">
                            <Lock className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Anexo I</p>
                            <h2 className="text-xl md:text-2xl font-extrabold font-heading text-slate-900 leading-tight">
                                Política de Privacidad de Cloudflare Turnstile
                            </h2>
                            <p className="text-xs text-slate-500 mt-1">
                                Fuente oficial:{" "}
                                <a
                                    href="https://www.cloudflare.com/es-es/turnstile-privacy-policy/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary underline underline-offset-2"
                                >
                                    cloudflare.com/es-es/turnstile-privacy-policy/
                                </a>
                            </p>
                        </div>
                    </div>

                    <section className="space-y-3">
                        <h3 className="font-bold text-slate-900 text-base md:text-lg">¿Qué es Cloudflare Turnstile?</h3>
                        <p>
                            Bregalia utiliza <strong>Cloudflare Turnstile</strong>, un servicio de verificación anti-bot proporcionado por <strong>Cloudflare, Inc.</strong> (101 Townsend St, San Francisco, CA 94107, EE. UU.), como alternativa a los CAPTCHA tradicionales. Su finalidad es distinguir, de forma automática y respetando la privacidad del usuario, entre personas humanas y bots automatizados, protegiendo así los formularios de contacto de la web de envíos fraudulentos, spam y ataques automatizados.
                        </p>
                        <p>
                            A diferencia de otros servicios de verificación como Google reCAPTCHA, Cloudflare Turnstile <strong>no recopila datos con fines publicitarios ni para elaborar perfiles de usuarios</strong>.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="font-bold text-slate-900 text-base md:text-lg">Datos que procesa Cloudflare Turnstile</h3>
                        <p>
                            Para realizar su función de detección de bots, Cloudflare Turnstile procesa las siguientes señales técnicas del lado del cliente del visitante:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>Dirección IP:</strong> La dirección IP del visitante es procesada con la finalidad exclusiva de evaluar si el comportamiento de la conexión corresponde a un usuario humano o a un bot automatizado. Cloudflare afirma que no puede identificar directamente a ninguna persona a través de esta señal.</li>
                            <li><strong>Huella digital TLS (TLS Fingerprint):</strong> Información técnica sobre el protocolo de seguridad utilizado en la conexión entre el navegador y los servidores, usada para evaluar la legitimidad de la sesión.</li>
                            <li><strong>Cabecera del agente de usuario (User-Agent Header):</strong> Información sobre el navegador web y el sistema operativo del dispositivo del visitante.</li>
                            <li><strong>Clave del sitio (Sitekey) y dominio de origen:</strong> El identificador del widget de Turnstile configurado para este sitio web y la URL desde la que se realiza la verificación.</li>
                        </ul>
                        <p>
                            Cloudflare declara expresamente que el procesamiento de estas señales está <strong>limitado estrictamente a la seguridad y detección de bots</strong>, y que <strong>no tiene capacidad para identificar directamente a ninguna persona</strong> a través de las mismas.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="font-bold text-slate-900 text-base md:text-lg">Finalidad y base jurídica del tratamiento</h3>
                        <p>
                            La finalidad del tratamiento de datos realizado por Cloudflare Turnstile es la <strong>protección de la seguridad del sitio web</strong> mediante la detección y bloqueo de bots y ataques automatizados.
                        </p>
                        <p>
                            La base jurídica para este tratamiento es el <strong>interés legítimo del responsable</strong> (Art. 6.1.f RGPD), concretamente el interés de Bregalia en garantizar la seguridad de sus sistemas de información y formularios web, y el de sus visitantes en que sus datos no sean utilizados de forma fraudulenta.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="font-bold text-slate-900 text-base md:text-lg">Roles de las partes y transferencia internacional de datos</h3>
                        <p>
                            En el marco de este servicio, <strong>Cloudflare actúa como encargado del tratamiento</strong> de datos por cuenta de Bregalia (responsable del tratamiento), procesando las señales indicadas con el único fin de proveer el servicio de detección de bots.
                        </p>
                        <p>
                            Dado que Cloudflare, Inc. es una empresa con sede en <strong>Estados Unidos</strong>, el uso de Turnstile puede implicar una <strong>transferencia internacional de datos</strong> fuera del Espacio Económico Europeo (EEE). Cloudflare se encuentra adherido al <strong>Marco de Privacidad de Datos UE-EE.UU. (Data Privacy Framework)</strong> y opera bajo <strong>Cláusulas Contractuales Tipo (CCT)</strong> aprobadas por la Comisión Europea, lo que garantiza un nivel adecuado de protección para los datos transferidos.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="font-bold text-slate-900 text-base md:text-lg">Conservación de datos por parte de Cloudflare</h3>
                        <p>
                            Según la política de privacidad de Cloudflare, los datos de registro (logs) asociados a las solicitudes procesadas por sus servicios, incluido Turnstile, se conservan de forma general durante un período no superior a <strong>25 meses</strong>, salvo obligación legal que exija un período distinto.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="font-bold text-slate-900 text-base md:text-lg">Información adicional y política de privacidad de Cloudflare</h3>
                        <p>
                            Para obtener información completa y actualizada sobre las prácticas de privacidad de Cloudflare y su política específica para Turnstile, puede consultar:
                        </p>
                        <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
                            <li>
                                <strong>Política de privacidad de Cloudflare Turnstile (ES):</strong>{" "}
                                <a
                                    href="https://www.cloudflare.com/es-es/turnstile-privacy-policy/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary underline underline-offset-2 break-all"
                                >
                                    https://www.cloudflare.com/es-es/turnstile-privacy-policy/
                                </a>
                            </li>
                            <li>
                                <strong>Política de privacidad general de Cloudflare:</strong>{" "}
                                <a
                                    href="https://www.cloudflare.com/es-es/privacypolicy/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary underline underline-offset-2 break-all"
                                >
                                    https://www.cloudflare.com/es-es/privacypolicy/
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Back to top button or link */}
                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Volver a la página principal de Bregalia</span>
                    </Link>
                </div>
            </main>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
