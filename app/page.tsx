import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Compliance } from "@/components/sections/Compliance";
import { EmployeeSimplicity } from "@/components/sections/EmployeeSimplicity";
import { Regulations } from "@/components/sections/Regulations";
import { Contact } from "@/components/sections/Contact";
import { SmallBusiness } from "@/components/sections/SmallBusiness";
import { AllMeasured } from "@/components/sections/AllMeasured";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <SmallBusiness />
      <Features />
      <AllMeasured />
      <EmployeeSimplicity />
      <Compliance />
      <Regulations />
      <Pricing />
      <Contact />

      {/* Simple Footer */}
      <Footer />
    </main>
  );
}
