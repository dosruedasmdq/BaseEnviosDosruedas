"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Paintbrush, Type, Layout } from "lucide-react";

export default function DesignTokensPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow container px-4 md:px-6 py-12 mx-auto">
        <div className="space-y-4 mb-16 border-l-8 border-brand-yellow pl-6">
          <h1 className="text-7xl font-display text-brand-blue uppercase leading-none">Design Tokens</h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl">
            Definición atómica de los elementos visuales de la marca Envios Dosruedas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Color Palette */}
          <section className="space-y-8">
            <h2 className="flex items-center gap-3 text-3xl font-display text-brand-blue uppercase">
              <Paintbrush className="h-6 w-6 text-brand-yellow" /> Paleta de Colores
            </h2>
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-6 bg-brand-blue rounded-2xl text-white shadow-xl">
                <div>
                  <p className="font-subheading text-sm opacity-70">PRIMARY BLUE</p>
                  <p className="font-display text-2xl uppercase">#0636A5</p>
                </div>
                <div className="text-right">
                  <p className="font-subheading text-xs">brand-blue</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-6 bg-brand-yellow rounded-2xl text-brand-blue shadow-xl">
                <div>
                  <p className="font-subheading text-sm opacity-70">ACCENT YELLOW</p>
                  <p className="font-display text-2xl uppercase">#FFEC01</p>
                </div>
                <div className="text-right">
                  <p className="font-subheading text-xs">brand-yellow</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-6 bg-white border-2 border-brand-blue/10 rounded-2xl shadow-sm text-brand-blue">
                <div>
                  <p className="font-subheading text-sm opacity-70">SURFACE WHITE</p>
                  <p className="font-display text-2xl uppercase">#FFFFFF</p>
                </div>
                <div className="text-right">
                  <p className="font-subheading text-xs">brand-white</p>
                </div>
              </div>
            </div>
          </section>

          {/* Typography Scale */}
          <section className="space-y-8">
            <h2 className="flex items-center gap-3 text-3xl font-display text-brand-blue uppercase">
              <Type className="h-6 w-6 text-brand-yellow" /> Jerarquía Visual
            </h2>
            <div className="space-y-10 bg-muted/30 p-8 rounded-3xl border border-dashed border-brand-blue/20">
              <div className="space-y-2">
                <span className="font-subheading text-[10px] text-muted-foreground uppercase tracking-widest">Headline Token</span>
                <p className="font-display text-5xl text-brand-blue uppercase leading-none">Anton SC Display</p>
              </div>
              <div className="space-y-2">
                <span className="font-subheading text-[10px] text-muted-foreground uppercase tracking-widest">Subheading Token</span>
                <p className="font-subheading text-3xl text-brand-blue uppercase">Bebas Neue Medium</p>
              </div>
              <div className="space-y-2">
                <span className="font-subheading text-[10px] text-muted-foreground uppercase tracking-widest">Body Text Token</span>
                <p className="font-body text-xl text-foreground">Outfit Sans Body Text 400</p>
              </div>
              
              <div className="pt-6 border-t border-brand-blue/10">
                <Button size="lg" className="w-full font-subheading text-lg h-14 uppercase tracking-[0.2em] shadow-2xl">
                  Aplicar Configuración
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}