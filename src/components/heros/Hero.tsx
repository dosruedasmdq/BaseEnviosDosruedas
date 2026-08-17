"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Package, FastForward } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden bg-background">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline leading-none text-primary uppercase tracking-tighter">
                Tu Solución <br />
                <span className="text-secondary bg-primary px-2 inline-block -rotate-1">Confiable</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0 font-body font-light">
                Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. 
                Soluciones ágiles, seguras y competitivas para potenciar tu marca.
              </p>
            </div>

            <div className="max-w-md mx-auto lg:mx-0 bg-card border shadow-2xl rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2 font-subheading tracking-wider uppercase text-primary">
                <Search className="h-5 w-5" /> Rastrear Envío
              </h3>
              <div className="flex gap-2">
                <Input placeholder="Ingresa tu número de guía..." className="h-12 bg-muted/50 border-none font-body" />
                <Button className="h-12 px-6 font-subheading text-lg uppercase tracking-wide">Buscar</Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-70 grayscale">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5" /> <span className="text-sm font-subheading uppercase">+1M Envíos</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" /> <span className="text-sm font-subheading uppercase">Cobertura Total</span>
              </div>
              <div className="flex items-center gap-2">
                <FastForward className="h-5 w-5" /> <span className="text-sm font-subheading uppercase">Express 24h</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl rotate-2">
            <Image
              src="/card_mapa.webp"
              alt="Mapa de cobertura estratégica"
              fill
              className="object-cover"
              priority
              data-ai-hint="logistics map"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            <div className="absolute bottom-8 left-8 bg-secondary text-primary px-6 py-4 rounded-xl shadow-xl border-l-8 border-primary">
              <p className="font-headline text-3xl leading-none uppercase">Entregas en <br/> <span className="text-primary-foreground bg-primary px-1">Menos de 60m</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 z-0 opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-secondary blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      </div>
    </section>
  );
}