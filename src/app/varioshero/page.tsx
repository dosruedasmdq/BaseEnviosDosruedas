
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroContact } from "@/components/sections/HeroContact";
import { Badge } from "@/components/ui/badge";

export default function VariosHeroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container px-4 md:px-6 mx-auto space-y-24">
          
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
              Enfoque en tipografía monumental y legibilidad premium.
            </p>
          </div>

          {/* Opción 1: Hero Contacto Disruptivo */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b border-brand-blue/10 pb-4">
              <span className="text-5xl font-display text-brand-blue/20">01</span>
              <h2 className="text-2xl font-subheading text-brand-blue uppercase tracking-widest">Hub de Contacto - Blue Minimal</h2>
            </div>
            <HeroContact />
          </div>

          {/* Aquí se pueden añadir más opciones de Hero siguiendo el mismo patrón */}
          <div className="space-y-8 opacity-40 grayscale pointer-events-none">
             <div className="flex items-center gap-4 border-b border-brand-blue/10 pb-4">
              <span className="text-5xl font-display text-brand-blue/20">02</span>
              <h2 className="text-2xl font-subheading text-brand-blue uppercase tracking-widest">Próxima Variante - En desarrollo</h2>
            </div>
            <div className="h-[400px] w-full rounded-[2.5rem] bg-muted flex items-center justify-center border-2 border-dashed">
              <p className="font-subheading text-muted-foreground">Nueva propuesta próximamente</p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
