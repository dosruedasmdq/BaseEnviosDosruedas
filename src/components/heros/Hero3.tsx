"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero3() {
  return (
    <section className="relative w-full bg-brand-blue text-white py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-headline mb-6 uppercase">
          Contacto <span className="text-brand-yellow">Express</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-10 font-body font-light opacity-80">
          ¿Necesitás logística en Mar del Plata? Escribí. Resolvemos en el día.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
          <div className="flex flex-col items-center bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <MapPin className="text-brand-yellow w-10 h-10 mb-4" />
            <h3 className="font-subheading text-xl mb-2 tracking-wide uppercase">Hub MDQ</h3>
            <p className="text-sm opacity-70">Friuli 1972, Mar del Plata</p>
          </div>
          <div className="flex flex-col items-center bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <Phone className="text-brand-yellow w-10 h-10 mb-4" />
            <h3 className="font-subheading text-xl mb-2 tracking-wide uppercase">WhatsApp</h3>
            <p className="text-sm opacity-70">223 660 2699</p>
          </div>
          <div className="flex flex-col items-center bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <Mail className="text-brand-yellow w-10 h-10 mb-4" />
            <h3 className="font-subheading text-xl mb-2 tracking-wide uppercase">Email</h3>
            <p className="text-sm opacity-70">Soporte Express</p>
          </div>
        </div>

        <Button size="lg" className="bg-brand-yellow text-brand-blue hover:brightness-110 h-14 px-10 text-lg font-bold uppercase tracking-widest transition-all">
          Iniciar Chat
        </Button>
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
}
