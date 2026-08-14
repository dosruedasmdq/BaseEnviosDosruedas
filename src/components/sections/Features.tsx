"use client";

import { Bike, ShieldCheck, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Mensajería Express",
    description: "Servicio premium de entrega inmediata en el área metropolitana. Tus documentos y paquetes en minutos.",
    icon: Bike,
    color: "bg-primary text-primary-foreground"
  },
  {
    title: "Seguridad Garantizada",
    description: "Cada envío cuenta con póliza de cumplimiento y rastreo satelital activo durante todo el trayecto.",
    icon: ShieldCheck,
    color: "bg-secondary text-secondary-foreground"
  },
  {
    title: "Compromiso de Tiempo",
    description: "Si no llegamos a la hora acordada, el costo de tu envío corre por nuestra cuenta. Sin excusas.",
    icon: Clock,
    color: "bg-primary text-primary-foreground"
  },
  {
    title: "Cobertura Nacional",
    description: "Llegamos a cada rincón del país gracias a nuestra red de aliados estratégicos y flota propia.",
    icon: Globe,
    color: "bg-secondary text-secondary-foreground"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-display tracking-tighter text-primary uppercase">
            Nuestros <span className="text-secondary-foreground underline decoration-secondary">Servicios</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg font-body">
            Diseñamos soluciones logísticas que se adaptan a las necesidades de tu empresa o envíos personales.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <Card key={idx} className="group border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-display uppercase tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}