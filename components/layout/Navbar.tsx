"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
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
                    ? "bg-background/80 backdrop-blur-md border-b border-black/5 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-24 h-24">
                            <Image
                                src="/logo-land.svg"
                                alt="Bregalia"
                                fill
                                className="object-contain"
                            />
                        </div>
                        {/*    <span className="text-xl font-bold font-heading text-white">
                            Bregalia
                        </span> */}
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 uppercase">
                        <Link
                            href="#features"
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                        >
                            Funcionalidades
                        </Link>
                        <Link
                            href="#compliance"
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                        >
                            Cumplimiento
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                        >
                            Contacto
                        </Link>
                    </div>

                    {/*  <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost" size="sm" disabled className="opacity-50 cursor-not-allowed">
                            Iniciar Sesión
                        </Button>
                        <Link href="https://bregalia.app/register">
                            <Button size="sm">Empezar Ahora</Button>
                        </Link>
                    </div> */}

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 hover:text-primary"
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
                        className="text-sm font-medium text-slate-600 hover:text-primary p-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Funcionalidades
                    </Link>
                    <Link
                        href="#compliance"
                        className="text-sm font-medium text-slate-600 hover:text-white p-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Cumplimiento
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium text-slate-600 hover:text-primary p-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contacto
                    </Link>
                    <hr className="border-black/5" />
                    <Button variant="ghost" className="w-full justify-start opacity-50 cursor-not-allowed" disabled>
                        Iniciar Sesión
                    </Button>
                    <Link href="https://bregalia.app/register" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full">Empezar Ahora</Button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
