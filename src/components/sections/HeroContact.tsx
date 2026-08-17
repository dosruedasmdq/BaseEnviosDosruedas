
"use client";

import { MessageSquare, Phone, Mail, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const contactChannels = [
  {
    title: "WhatsApp Comercial",
    description: "Respuestas y cotizaciones de envíos en tiempo real.",
    href: "https://wa.me/542236602699",
    icon: MessageSquare,
    delay: "delay-100"
  },
  {
    title: "Llamada de Coordinación",
    description: "Para hablar directamente con un coordinador logístico.",
    href: "tel:+542236602699",
    icon: Phone,
    delay: "delay-200"
  },
  {
    title: "Solicitar Cotización B2B",
    description: "Envianos tu base de envíos para un plan personalizado.",
    href: "mailto:matiascejas@enviosdosruedas.com",
    icon: Mail,
    delay: "delay-300"
  }
];

export function HeroContact() {
  return (
    <section className="relative w-full max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden p-8 md:p-16 bg-[#F0F4FF] border border-brand-blue/5 shadow-[0_32px_120px_-20px_rgba(6,54,165,0.15)]">
      
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-40 blur-[100px] bg-brand-yellow"></div>
      <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 blur-[130px] bg-brand-blue"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Lado Izquierdo: Tipografía Monumental */}
        <div className="lg:col-span-7 space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/10 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/50 backdrop-blur-sm text-brand-blue">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow animate-pulse shadow-[0_0_10px_rgba(255,236,1,0.8)]"></span>
            Conexión Directa Mar del Plata
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-display italic uppercase leading-[0.8] tracking-tighter text-brand-blue">
            ¿HABLAMOS<br />
            <span className="text-transparent stroke-brand-blue" style={{ WebkitTextStroke: '2px #0636A5' }}>AHORA?</span>
          </h1>

          <p className="text-brand-blue/70 text-lg md:text-xl max-w-md leading-tight font-body font-normal">
            Sin formularios complejos ni esperas. Elegí el canal que mejor se adapte al ritmo de tu e-commerce.
          </p>

          <div className="pt-8 border-t border-brand-blue/10 flex flex-wrap gap-8">
            <div className="space-y-1">
              <span className="block uppercase text-[10px] tracking-widest font-subheading text-brand-blue/40">Oficina Central</span>
              <span className="font-bold text-brand-blue text-sm">Friuli 1972, Mar del Plata</span>
            </div>
            <div className="space-y-1">
              <span className="block uppercase text-[10px] tracking-widest font-subheading text-brand-blue/40">Operación</span>
              <span className="font-bold text-brand-blue text-sm">Lunes a Sábado</span>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Hub de Canales */}
        <div className="lg:col-span-5 space-y-5">
          {contactChannels.map((channel, idx) => (
            <a
              key={idx}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex items-center justify-between p-7 rounded-3xl border border-brand-blue/5 bg-white/60 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:bg-white hover:shadow-2xl hover:border-brand-yellow",
                channel.delay
              )}
            >
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors duration-500">
                  <channel.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display uppercase tracking-wide text-brand-blue leading-none mb-2">{channel.title}</h3>
                  <p className="text-xs text-brand-blue/50 font-body">{channel.description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-brand-blue/20 group-hover:text-brand-blue group-hover:translate-x-2 transition-all duration-500" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
