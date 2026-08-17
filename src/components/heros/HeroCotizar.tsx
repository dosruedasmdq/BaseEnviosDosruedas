"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Rutas sugeridas predefinidas de Mar del Plata
const PRESET_ROUTES = [
  { id: "ruta1", origen: "Centro", destino: "Terminal Ferroautomotora", distancia: "3.7 km", tarifa: "$4.600", tipo: "Express" },
  { id: "ruta2", origen: "Plaza Mitre", destino: "Av. Constitución 5500", distancia: "5.8 km", tarifa: "$5.300", tipo: "LowCost" },
  { id: "ruta3", origen: "Puerto", destino: "Los Troncos", distancia: "4.2 km", tarifa: "$4.800", tipo: "Express" }
];

export default function HeroCotizar() {
  // Corregido: Inicializar con un solo objeto, no con el array completo
  const [selectedRoute, setSelectedRoute] = useState(PRESET_ROUTES[0]);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-brand-blue px-6 py-16 md:px-12 border-t border-white/10">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-brand-yellow">
            ⚡ Cotizador de Entregas al Instante
          </span>

          <h2 className="text-5xl md:text-7xl font-display italic uppercase leading-[0.9] text-white">
            COTIZÁ TU ENVÍO <br />
            <span className="text-brand-yellow">SIN REGISTRO</span>
          </h2>

          <p className="font-body text-white/60 text-sm md:text-base leading-relaxed font-light">
            Elegí una de nuestras rutas más solicitadas para calcular la distancia y la tarifa final en el acto. Rápido, transparente y sin sorpresas.
          </p>

          <div className="space-y-3">
            {PRESET_ROUTES.map((ruta) => (
              <button
                key={ruta.id}
                onClick={() => setSelectedRoute(ruta)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group bg-white/5 backdrop-blur-sm ${
                  selectedRoute.id === ruta.id 
                    ? "border-brand-yellow ring-1 ring-brand-yellow" 
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <span className="text-xs uppercase font-display tracking-wider text-white block">
                    {ruta.origen} ➜ {ruta.destino}
                  </span>
                  <span className="text-[11px] text-white/40 font-body">
                    Servicio {ruta.tipo} optimizado de última milla.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-brand-yellow">{ruta.distancia}</span>
                  <span className="text-lg opacity-40 group-hover:opacity-100 transition-opacity text-brand-yellow">➜</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="w-full max-w-md mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden">
            
            {/* Decoración de fondo de la tarjeta */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <div>
                <h3 className="font-subheading text-lg tracking-wide text-white uppercase">Cálculo Automático</h3>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">SISTEMA DOSRUEDAS MAPS [12]</p>
              </div>
              <span className="text-2xl">📟</span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 block">Origen</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={selectedRoute.origen}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-sm font-subheading text-white block mt-0.5"
                  >
                    {selectedRoute.origen}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 block">Destino</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={selectedRoute.destino}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-sm font-subheading text-white block mt-0.5"
                  >
                    {selectedRoute.destino}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 block">Distancia</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={selectedRoute.distancia}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-sm font-bold text-white block mt-0.5"
                    >
                      {selectedRoute.distancia}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 block">Tipo de Envío</span>
                  <span className="text-sm font-bold text-white block mt-0.5 uppercase">{selectedRoute.tipo}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 block">Tarifa Final</span>
                  <span className="text-[9px] text-brand-yellow block font-light">Precios con IVA incluido</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={selectedRoute.tarifa}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-4xl font-display italic tracking-tight text-white block"
                  >
                    {selectedRoute.tarifa} <span className="text-xs font-subheading font-bold text-white/40">ARS</span>
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <a 
              href={`https://wa.me/542236602699?text=Hola,%20quiero%20coordinar%20el%20envío%20de%20${selectedRoute.origen}%20a%20${selectedRoute.destino}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-yellow text-brand-blue font-subheading font-bold uppercase tracking-[0.1em] py-4 px-6 rounded-2xl transition-all duration-300 transform active:scale-[0.98] shadow-[0_12px_40px_-6px_rgba(255,236,1,0.3)] flex items-center justify-center gap-2 mt-6 hover:brightness-110"
            >
              Confirmar por WhatsApp ➜
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}