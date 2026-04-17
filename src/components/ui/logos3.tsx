"use client";

import * as React from "react";
import { motion } from "framer-motion";

/**
 * A responsive section component to display partner logos.
 * Features smooth continuous scrolling for infinite loop.
 */
const Logos3 = () => {
  const logos = [
    { name: "Agrominas", src: "/imagens/AGROMINAS.webp" },
    { name: "Bioma", src: "/imagens/BIOMA.webp" },
    { name: "Brandt", src: "/imagens/BRANDT.webp" },
    { name: "Captura", src: "/imagens/CAPTURA.webp" },
    { name: "Jazida", src: "/imagens/JAZIDA.webp" },
    { name: "Sada", src: "/imagens/SADA.webp" },
    { name: "Samenco", src: "/imagens/SAMENCO.webp" },
  ];

  // Duplicating for infinite effect
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-700 font-instrumental-sans">
          Empresas que <span className="font-bold text-zinc-900">confiam</span>
        </h2>
      </div>

      <div className="relative w-full">
        {/* Gradient overlays for smooth fading at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Marquee Container with Framer Motion for smooth infinite scroll */}
        <div className="flex overflow-hidden relative">
          <motion.div
            className="flex"
            animate={{
              x: [0, -1540], // Move exactly the width of one set (220px * 7 logos)
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 w-[220px] flex items-center justify-center px-4"
              >
                <img
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  className="h-20 md:h-28 max-w-[160px] md:max-w-[180px] w-auto object-contain hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  src={logo.src}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
