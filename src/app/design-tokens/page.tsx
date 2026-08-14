
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Paintbrush, Layout, Type } from "lucide-react";

export default function DesignTokensPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container px-4 md:px-6 py-12 mx-auto">
        <div className="space-y-4 mb-12">
          <h1 className="text-6xl font-headline text-primary uppercase tracking-tighter">Design Tokens</h1>
          <p className="text-muted-foreground font-body max-w-2xl">
            Ajusta los valores globales de diseño para mantener la consistencia de marca a través de toda la aplicación.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 font-headline text-2xl uppercase text-primary">
                <Paintbrush className="h-5 w-5" /> Colores
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Primario (Blue)</span>
                  <div className="w-12 h-6 rounded border bg-[#0636A5]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Secundario (Yellow)</span>
                  <div className="w-12 h-6 rounded border bg-[#FFF12E]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Fondo</span>
                  <div className="w-12 h-6 rounded border bg-white" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="flex items-center gap-2 font-headline text-2xl uppercase text-primary">
                <Layout className="h-5 w-5" /> Espaciado & Bordes
              </h3>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Radius (Esquinas)</span>
                    <span className="font-bold">12px</span>
                  </div>
                  <Slider defaultValue={[12]} max={24} step={2} />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Padding Base</span>
                    <span className="font-bold">24px</span>
                  </div>
                  <Slider defaultValue={[24]} max={48} step={4} />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="flex items-center gap-2 font-headline text-2xl uppercase text-primary">
                <Type className="h-5 w-5" /> Tipografía
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted border border-dashed text-center">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-tighter">Font Family Heading</p>
                  <p className="font-headline text-xl">Anton SC</p>
                </div>
                <div className="p-4 rounded-lg bg-muted border border-dashed text-center">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-tighter">Font Family Body</p>
                  <p className="font-body text-xl">Outfit</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full h-12 font-bold uppercase tracking-wider">Guardar Cambios</Button>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-2 bg-muted/50 rounded-3xl p-8 border">
             <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 bg-secondary text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
                    Vista Previa
                  </div>
                  <h2 className="text-5xl font-headline text-primary uppercase leading-tight">Ejemplo de Escala <br/> Visual</h2>
                  <p className="max-w-md text-muted-foreground">Este es un ejemplo de cómo se verán tus componentes con los tokens actuales aplicados.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  <Button size="lg" className="rounded-xl shadow-lg">Confirmar</Button>
                  <Button variant="outline" size="lg" className="rounded-xl">Cancelar</Button>
                </div>

                <div className="w-full max-w-md p-6 bg-card rounded-2xl shadow-xl text-left space-y-4">
                  <div className="w-12 h-2 bg-primary/20 rounded-full" />
                  <div className="space-y-2">
                    <div className="h-4 bg-muted w-3/4 rounded" />
                    <div className="h-4 bg-muted w-1/2 rounded" />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
