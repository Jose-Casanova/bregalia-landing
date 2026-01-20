import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Compliance } from "@/components/sections/Compliance";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Features />
      <Compliance />

      {/* Simple Footer */}
      <footer className="bg-slate-900 border-t border-white/10 py-12">
        <div className="container mx-auto px-4 text-center text-slate-500">
          <p className="mb-4 text-lg font-heading text-slate-300">Bregalia</p>
          <p className="text-sm">
            © {new Date().getFullYear()} Bregalia. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
