"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroContactoNuevo() {
  return (
    <section className="relative w-full bg-[#0636a5] text-white py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-headline mb-6 uppercase">
          Contacto <span className="text-[#ffec01]">Express</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-10 font-body">
          ¿Necesitas logística en Mar del Plata? Escribe. Resolvemos en el día.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
            <MapPin className="text-[#ffec01] w-10 h-10 mb-4" />
            <h3 className="font-bold text-xl mb-2 font-subheading tracking-wide">Hub MDQ</h3>
            <p>Friuli 1972, Mar del Plata</p>
          </div>
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
            <Phone className="text-[#ffec01] w-10 h-10 mb-4" />
            <h3 className="font-bold text-xl mb-2 font-subheading tracking-wide">WhatsApp</h3>
            <p>223 660 2699</p>
          </div>
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
            <Mail className="text-[#ffec01] w-10 h-10 mb-4" />
            <h3 className="font-bold text-xl mb-2 font-subheading tracking-wide">Email</h3>
            <p>Soporte express</p>
          </div>
        </div>

        <Button size="lg" className="bg-[#ffec01] text-[#0636a5] hover:bg-white text-lg font-bold">
          Iniciar Chat
        </Button>
      </motion.div>

      <div className="absolute inset-0 bg-[url('/img/fondo_express.webp')] opacity-10 bg-cover bg-center mix-blend-overlay" />
    </section>
  );
}