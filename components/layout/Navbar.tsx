"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-blue-500 rounded-lg p-1.5 group-hover:bg-blue-600 transition-colors">
                            <Clock className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold font-heading text-white">
                            Bregalia
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="#features"
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            Funcionalidades
                        </Link>
                        <Link
                            href="#compliance"
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            Cumplimiento
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            Contacto
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Link href="https://bregalia.app/login">
                            <Button variant="ghost" size="sm">
                                Iniciar Sesión
                            </Button>
                        </Link>
                        <Link href="https://bregalia.app/register">
                            <Button size="sm">Empezar Ahora</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 p-4 flex flex-col gap-4 shadow-2xl">
                    <Link
                        href="#features"
                        className="text-sm font-medium text-slate-300 hover:text-white p-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Funcionalidades
                    </Link>
                    <Link
                        href="#compliance"
                        className="text-sm font-medium text-slate-300 hover:text-white p-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Cumplimiento
                    </Link>
                    <hr className="border-white/5" />
                    <Link href="https://bregalia.app/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                            Iniciar Sesión
                        </Button>
                    </Link>
                    <Link href="https://bregalia.app/register" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full">Empezar Ahora</Button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
