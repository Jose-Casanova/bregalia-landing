"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Mail, Building2, User, MessageSquare, Send } from "lucide-react";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { Turnstile } from "@marsidev/react-turnstile";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [turnstileToken, setTurnstileToken] = useState<string>("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "El nombre es obligatorio";
        }

        if (!formData.email.trim()) {
            newErrors.email = "El email es obligatorio";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "El email no es válido";
        }

        if (!formData.message.trim()) {
            newErrors.message = "El mensaje es obligatorio";
        }

        if (!turnstileToken) {
            newErrors.turnstile = "Por favor, completa la verificación de seguridad";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    turnstileToken,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error al enviar el formulario");
            }

            // Success
            setSubmitSuccess(true);
            setFormData({
                name: "",
                email: "",
                company: "",
                message: "",
            });
            setTurnstileToken("");

            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrors({
                message: error instanceof Error ? error.message : "Error al enviar el formulario. Por favor, inténtalo de nuevo.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <MotionDiv>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Mail className="w-4 h-4" />
                            <span>Estamos aquí para ayudarte</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                            ¿Tienes alguna pregunta?
                            <br />
                            <span className="text-primary">Contáctanos</span>
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Nuestro equipo está listo para responder todas tus dudas sobre
                            Bregalia y ayudarte a encontrar la mejor solución para tu empresa.
                        </p>
                    </div>
                </MotionDiv>

                <MotionDiv delay={0.2}>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-2xl border border-black/5 p-8 md:p-10 shadow-xl">
                            {submitSuccess ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        ¡Mensaje enviado!
                                    </h3>
                                    <p className="text-slate-600">
                                        Gracias por contactarnos. Te responderemos lo antes posible.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Field */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-slate-700 mb-2"
                                        >
                                            Nombre *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.name
                                                    ? "border-red-300 bg-red-50"
                                                    : "border-slate-200"
                                                    }`}
                                                placeholder="Tu nombre completo"
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-slate-700 mb-2"
                                        >
                                            Email *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.email
                                                    ? "border-red-300 bg-red-50"
                                                    : "border-slate-200"
                                                    }`}
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Company Field (Optional) */}
                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="block text-sm font-medium text-slate-700 mb-2"
                                        >
                                            Empresa (opcional)
                                        </label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                                placeholder="Nombre de tu empresa"
                                            />
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-slate-700 mb-2"
                                        >
                                            Mensaje *
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none ${errors.message
                                                    ? "border-red-300 bg-red-50"
                                                    : "border-slate-200"
                                                    }`}
                                                placeholder="Cuéntanos cómo podemos ayudarte..."
                                            />
                                        </div>
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Cloudflare Turnstile */}
                                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                        <label className="block text-sm font-medium text-slate-700 mb-3">
                                            Verificación de seguridad *
                                        </label>
                                        <Turnstile
                                            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                                            onSuccess={(token) => {
                                                setTurnstileToken(token);
                                                setErrors((prev) => ({ ...prev, turnstile: "" }));
                                            }}
                                            onError={() => {
                                                setTurnstileToken("");
                                                setErrors((prev) => ({
                                                    ...prev,
                                                    turnstile: "Error en la verificación. Por favor, recarga la página.",
                                                }));
                                            }}
                                            onExpire={() => {
                                                setTurnstileToken("");
                                            }}
                                        />
                                        {errors.turnstile && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.turnstile}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full h-14 text-lg"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="animate-pulse">Enviando...</span>
                                            </>
                                        ) : (
                                            <>
                                                Enviar mensaje
                                                <Send className="ml-2 w-5 h-5" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
}
