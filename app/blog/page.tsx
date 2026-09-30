import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
    title: "Guía de Control Horario y Registro de Jornada | Blog de Bregalia",
    description:
        "Guías prácticas sobre el registro de jornada obligatorio, sanciones de la Inspección de Trabajo, conservación de registros y gestión de turnos para empresas.",
    alternates: {
        canonical: "/blog",
    },
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-32 pb-12 md:pt-36 md:pb-16 max-w-4xl flex-1">
                <div className="mb-10 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                        <BookOpen className="w-4 h-4" />
                        Guía legal
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mb-4">
                        Control horario y registro de jornada
                    </h1>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                        Todo lo que una empresa necesita saber para cumplir con la normativa laboral de registro horario.
                    </p>
                </div>

                <div className="space-y-6">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 hover:border-primary/30 hover:shadow-md transition-all"
                        >
                            <p className="text-sm text-slate-500 mb-2">{formatDate(post.date)}</p>
                            <h2 className="text-xl md:text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-4">{post.description}</p>
                            <span className="inline-flex items-center gap-1 text-primary font-medium text-sm">
                                Leer artículo <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
