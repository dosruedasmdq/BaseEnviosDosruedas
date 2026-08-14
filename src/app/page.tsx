
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, PackageOpen, CreditCard, Headphones } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="max-w-3xl space-y-8">
              <h2 className="text-5xl md:text-7xl font-headline tracking-tighter uppercase leading-none">
                ¿Listo para enviar <br />
                con <span className="text-secondary">Los Mejores?</span>
              </h2>
              <p className="text-xl text-primary-foreground/80 font-body font-light">
                Empieza hoy mismo y descubre por qué miles de empresas confían en Envios Dosruedas para su logística diaria.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="secondary" size="lg" className="h-16 px-10 text-xl font-bold uppercase tracking-widest group">
                  Crear Cuenta <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-10 text-xl font-bold uppercase tracking-widest border-2 hover:bg-white/10">
                  Ver Tarifas
                </Button>
              </div>
            </div>
          </div>
          {/* Background Decorative */}
          <div className="absolute top-0 right-0 h-full w-1/3 bg-secondary/10 -skew-x-12 transform translate-x-1/2" />
        </section>

        {/* Mini Stats/Features */}
        <section className="py-12 border-b">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Sin Contrato", icon: PackageOpen },
                { label: "Pago Contra Entrega", icon: CreditCard },
                { label: "App móvil", icon: ArrowRight },
                { label: "Soporte 24/7", icon: Headphones },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-2">
                  <div className="p-3 bg-muted rounded-full">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
