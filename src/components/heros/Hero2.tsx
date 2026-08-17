"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, PhoneCall, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero2() {
  return (
    <section className="relative w-full min-h-[calc(100dvh-4.5rem)] lg:h-[calc(100dvh-4.5rem)] lg:max-h-240 flex flex-col justify-between overflow-hidden bg-brand-blue text-white py-4 sm:py-6 px-4 sm:px-6 lg:px-8 select-none">
      {/* 1. Fondo Cinemático con Gradientes y Luces de Marca */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,rgba(6,54,165,0.95)_75%)] pointer-events-none" />
      <div className="absolute -top-36 -left-36 w-80 sm:w-96 h-80 sm:h-96 bg-brand-yellow/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-36 -right-36 w-80 sm:w-96 h-80 sm:h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Anillos concéntricos sutiles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 sm:w-175 lg:w-215 aspect-square rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-95 sm:w-125 lg:w-155 aspect-square rounded-full border border-white/5 pointer-events-none" />

      {/* 2. Texto Gigante de Fondo (Escala con ancho de pantalla) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-headline text-[15vw] lg:text-[12vw] uppercase tracking-tighter text-white/4.5 leading-[0.85] text-center whitespace-nowrap">
          ENVÍOS
        </span>
        <span className="font-headline text-[15vw] lg:text-[12vw] uppercase tracking-tighter text-white/4.5 leading-[0.85] text-center whitespace-nowrap">
          DOS RUEDAS
        </span>
      </div>

      {/* 3. Sub-Barra Superior (Status & Localidad) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between pt-1 pb-2">
        <div className="flex items-center gap-2 sm:gap-3 tracking-widest font-subheading text-sm sm:text-base font-bold">
          <span className="inline-block w-2 h-4 bg-brand-yellow" />
          <span className="text-white/90">MENSAJERÍA &bull; MAR DEL PLATA</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-white/90">Servicio Disponible</span>
          </span>
        </div>
      </div>

      {/* 4. Escenario Central Adaptable (Mobile -> Desktop Grid) */}
      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 my-auto py-2 sm:py-4">
        {/* Bloque Izquierdo: Titular Envíos */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left z-20 space-y-1.5"
        >
          <span className="font-headline text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-brand-yellow -rotate-2 lg:-rotate-6 drop-shadow-[0_6px_16px_rgba(0,0,0,0.5)] select-none uppercase tracking-tight leading-none">
            Envíos
          </span>
          <span className="font-body italic font-light text-lg sm:text-2xl lg:text-3xl text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Rápidos y seguros.
          </span>
          <p className="font-body text-xs sm:text-sm text-white/75 max-w-xs leading-relaxed pt-1 hidden sm:block">
            Llegamos a cada rincón de la ciudad con la agilidad y el cuidado que necesitás.
          </p>
        </motion.div>

        {/* Imagen Central con Floating Motion */}
        <motion.div
          animate={{ y: [-7, 7, -7] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-56 sm:w-72 md:w-88 lg:w-105 xl:w-115 aspect-square z-10 drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)] shrink-0"
        >
          <div className="absolute inset-4 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <Image
            src="/logo_envios.webp"
            alt="Envíos DosRuedas"
            fill
            priority
            className="object-contain relative z-10"
          />
        </motion.div>

        {/* Bloque Derecho: MDQ / Destacado */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 flex flex-col items-center lg:items-end text-center lg:text-right z-20 space-y-1.5"
        >
          <span className="font-headline text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-brand-yellow rotate-1 lg:rotate-[-4deg] drop-shadow-[0_6px_16px_rgba(0,0,0,0.5)] select-none uppercase tracking-tight leading-none">
            MDQ
          </span>
          <span className="font-subheading text-base sm:text-xl lg:text-2xl text-white/90 uppercase tracking-widest">
            Toda la Ciudad
          </span>
          <div className="pt-2 flex flex-wrap justify-center lg:justify-end gap-2 text-xs">
            <span className="inline-flex items-center gap-1 bg-white/10 border border-white/15 px-2.5 py-1 rounded-md text-white/90">
              <Clock className="w-3.5 h-3.5 text-brand-yellow" /> Inmediato
            </span>
            <span className="inline-flex items-center gap-1 bg-white/10 border border-white/15 px-2.5 py-1 rounded-md text-white/90">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" /> Garantizado
            </span>
          </div>
        </motion.div>
      </div>

      {/* 5. Bloque de Información Inferior Dock */}
      <div className="relative z-20 w-full max-w-7xl mx-auto pt-3 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="max-w-md space-y-1 text-center md:text-left">
          <h3 className="font-subheading text-sm sm:text-base tracking-wider uppercase text-brand-yellow">
            Cadetería &amp; Distribución Express
          </h3>
          <p className="text-white/70 font-body text-xs leading-relaxed">
            Coordiná tus retiros, compras o cobranzas al instante por WhatsApp o Instagram.
          </p>
        </div>

        {/* Acciones Rápidas */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
          <a
            href="https://wa.me/5492236602699"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-subheading text-sm sm:text-base tracking-wider uppercase rounded-xl border border-white/15 backdrop-blur-md transition-all"
          >
            <PhoneCall className="w-4 h-4 text-brand-yellow" />
            223 660-2699
          </a>

          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-yellow hover:bg-[#ffe200] text-brand-blue font-subheading text-sm sm:text-base tracking-wider uppercase rounded-xl font-bold transition-all shadow-[0_4px_20px_rgba(255,236,1,0.25)] hover:shadow-[0_6px_25px_rgba(255,236,1,0.4)]"
          >
            Consultar Tarifas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
