import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroContact } from "@/components/sections/HeroContact";
import { Hero } from "@/components/heros/Hero";
import { Hero2 } from "@/components/heros/Hero2";
import { HeroSynthEra } from "@/components/heros/HeroSynthEra";
import HeroCotizar from "@/components/heros/HeroCotizar";
import { Badge } from "@/components/ui/badge";

export default function VariosHeroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container px-4 md:px-6 mx-auto space-y-32">
          
          {/* Header de la Galería */}
          <div className="max-w-3xl space-y-4">
            <Badge variant="secondary" className="px-4 py-1 font-subheading uppercase tracking-widest">
              Showcase de Componentes
            </Badge>
            <h1 className="text-6xl md:text-8xl font-display text-brand-blue uppercase leading-[0.85] tracking-tighter">
              Variantes de <br />
              <span className="text-brand-yellow bg-brand-blue px-4 inline-block transform -rotate-1">Hero Sections</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-xl pt-4">
              Exploración de interfaces disruptivas para la marca Envios Dosruedas. 
              Enfoque en tipografía monumental, animaciones fluidas y legibilidad premium.
            </p>
          </div>

          {/* Opción 01: Hub de Contacto Disruptivo */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-brand-blue/10 pb-4">
              <span className="text-5xl font-display text-brand-blue/20">01</span>
              <h2 className="text-2xl font-subheading text-brand-blue uppercase tracking-widest">Hub de Contacto - Rejouice Style</h2>
            </div>
            <div className="bg-slate-50 p-4 md:p-12 rounded-[3rem] border shadow-inner">
              <HeroContact />
            </div>
          </div>

          {/* Opción 02: Cotizador al Instante */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-brand-blue/10 pb-4">
              <span className="text-5xl font-display text-brand-blue/20">02</span>
              <h2 className="text-2xl font-subheading text-brand-blue uppercase tracking-widest">Cotizador al Instante - Blue Dark</h2>
            </div>
            <div className="rounded-[3rem] overflow-hidden border-8 border-brand-blue/5 shadow-2xl">
              <HeroCotizar />
            </div>
          </div>

          {/* Opción 03: Synth Era - Cinematic */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-brand-blue/10 pb-4">
              <span className="text-5xl font-display text-brand-blue/20">03</span>
              <h2 className="text-2xl font-subheading text-brand-blue uppercase tracking-widest">Synth Era - Cinematic Blue</h2>
            </div>
            <div className="rounded-[3rem] overflow-hidden border-8 border-brand-blue/5 shadow-2xl">
              <HeroSynthEra />
            </div>
          </div>

          {/* Opción 04: Dynamic MDQ - Hero 2 */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-brand-blue/10 pb-4">
              <span className="text-5xl font-display text-brand-blue/20">04</span>
              <h2 className="text-2xl font-subheading text-brand-blue uppercase tracking-widest">Dynamic MDQ - Hero 2</h2>
            </div>
            <div className="rounded-[3rem] overflow-hidden border-8 border-brand-blue/5 shadow-2xl">
              <Hero2 />
            </div>
          </div>

          {/* Opción 05: Estándar Corporativo - Hero Clásico */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-brand-blue/10 pb-4">
              <span className="text-5xl font-display text-brand-blue/20">05</span>
              <h2 className="text-2xl font-subheading text-brand-blue uppercase tracking-widest">Estándar Corporativo - Hero Clásico</h2>
            </div>
            <div className="rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl bg-slate-50/50">
              <Hero />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}