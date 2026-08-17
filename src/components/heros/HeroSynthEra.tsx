"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin, PhoneCall, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSynthEra() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] lg:max-h-240 bg-[#071F5C] text-white overflow-hidden flex flex-col justify-between select-none py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
      {/* 1. Fondo Cinemático con Gradientes y Luces de Marca */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,54,165,0.9)_0%,rgba(7,31,92,1)_80%)]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-yellow/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-blue/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Ondas / Anillos Concéntricos de Radar Logístico */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150w-[750px] lg:w-225 aspect-square rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-112.5 sm:w-145 lg:w-170 aspect-square rounded-full border border-white/5 pointer-events-none" />

      {/* 2. Tipografía Monumental de Fondo "ENVÍOS DOS RUEDAS" */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-headline text-[16vw] lg:text-[12.5vw] uppercase tracking-tighter text-white/4.5 leading-[0.85] text-center whitespace-nowrap">
          ENVÍOS
        </span>
        <span className="font-headline text-[16vw] lg:text-[12.5vw] uppercase tracking-tighter text-white/4.5 leading-[0.85] text-center whitespace-nowrap">
          DOS RUEDAS
        </span>
      </div>

      {/* 3. Sub-Barra Superior (Status & Localidad) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between pt-1 pb-2">
        <div className="flex items-center gap-2 sm:gap-3 tracking-widest font-subheading text-sm sm:text-base font-bold">
          <span className="inline-block w-2 h-4 bg-brand-yellow" />
          <span className="text-white/90">LOGÍSTICA URBANA &bull; MAR DEL PLATA</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
            <span className="text-white/90">Cadetería Activa</span>
          </span>
        </div>
      </div>

      {/* 4. Escenario Central Equilibrado (3 Columnas en PC) */}
      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 my-auto py-4">
        {/* Bloque Izquierdo: Velocidad & Retiro Inmediato */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-blue/80 border border-white/15 text-brand-yellow text-xs font-semibold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" /> Envíos en el día
          </div>

          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-brand-yellow tracking-tight uppercase leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
            VELOCIDAD <br className="hidden lg:block" />
            <span className="text-white">TOTAL</span>
          </h2>

          <p className="font-body text-xs sm:text-sm text-white/75 max-w-xs leading-relaxed">
            Retiro y entrega punto a punto para particulares y comercios. Llegamos antes de lo que imaginas.
          </p>

          <div className="pt-1 flex items-center gap-2 text-xs font-medium text-white/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
            <Clock className="w-4 h-4 text-brand-yellow shrink-0" />
            <span>Tiempo promedio de entrega: <strong>45-60 min</strong></span>
          </div>
        </motion.div>

        {/* Centro: Logotipo Central Flotante */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 w-60 sm:w-80 md:w-96 lg:w-115 aspect-square flex items-center justify-center shrink-0 filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          {/* Halo de luz decorativo */}
          <div className="absolute inset-4 rounded-full bg-brand-blue/50 blur-2xl pointer-events-none" />
          <Image
            src="/logo_envios.webp"
            alt="Envíos DosRuedas"
            fill
            priority
            className="object-contain relative z-10"
          />
        </motion.div>

        {/* Bloque Derecho: Seguridad & Cobertura */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3 flex flex-col items-center lg:items-end text-center lg:text-right space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-blue/80 border border-white/15 text-brand-yellow text-xs font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" /> Toda la ciudad
          </div>

          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-brand-yellow tracking-tight uppercase leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
            100% <br className="hidden lg:block" />
            <span className="text-white">SEGURO</span>
          </h2>

          <p className="font-body text-xs sm:text-sm text-white/75 max-w-xs leading-relaxed">
            Repartidores calificados y seguimiento constante de tus paquetes, sobres y mercaderías.
          </p>

          <div className="pt-1 flex items-center gap-2 text-xs font-medium text-white/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
            <ShieldCheck className="w-4 h-4 text-brand-yellow shrink-0" />
            <span>Paquetes y trámites <strong>asegurados</strong></span>
          </div>
        </motion.div>
      </div>

      {/* 5. Barra Inferior Dock Glassmorphism (Features & CTA) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto pt-3 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Info del servicio */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <h3 className="font-subheading text-base tracking-wider uppercase text-brand-yellow">
              Mensajería &amp; Paquetería Express
            </h3>
            <p className="font-body text-xs text-white/70">
              Servicio para empresas, e-commerce y trámites personales en Mar del Plata.
            </p>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="https://wa.me/5492236602699"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-subheading text-base tracking-wider uppercase rounded-xl border border-white/15 backdrop-blur-md transition-all"
          >
            <PhoneCall className="w-4 h-4 text-brand-yellow" />
            223 660-2699
          </a>

          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-yellow hover:bg-[#ffe200] text-brand-blue font-subheading text-base sm:text-lg tracking-wider uppercase rounded-xl font-bold transition-all shadow-[0_4px_20px_rgba(255,236,1,0.25)] hover:shadow-[0_6px_25px_rgba(255,236,1,0.4)]"
          >
            Solicitar Envío <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSynthEra;
