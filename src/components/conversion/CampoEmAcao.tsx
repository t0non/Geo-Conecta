import React from "react";
import { motion } from "framer-motion";

export default function CampoEmAcao() {
  return (
    <section className="relative py-32 md:py-48 lg:py-60 overflow-hidden bg-zinc-900">
      {/* Background Video with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata"
          className="w-full h-full object-cover opacity-40 pointer-events-none scale-105"
        >
          <source src="/imagens/Campo em Ação.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/60 to-zinc-900" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-light text-white leading-[1.05] mb-12 tracking-tight">
            Dados Precisos. <span className="block text-zinc-400 italic">Decisões Seguras.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-20 max-w-3xl mx-auto">
            Transformamos a complexidade do campo em relatórios claros e modelagens 3D de alta fidelidade para blindar o seu investimento contra imprevistos operacionais.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {/* Stat Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500"
            >
              <div className="text-6xl md:text-8xl font-display font-light text-white mb-4 group-hover:scale-105 transition-transform duration-500">
                Risco Zero
              </div>
              <div className="h-px w-12 bg-red-600 mb-6 mx-auto group-hover:w-24 transition-all duration-500" />
              <div className="text-[10px] md:text-[12px] font-bold text-zinc-400 uppercase tracking-[0.4em]">DE SURPRESAS OPERACIONAIS</div>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500"
            >
              <div className="text-6xl md:text-8xl font-display font-light text-white mb-4 group-hover:scale-105 transition-transform duration-500">
                Visão 360º
              </div>
              <div className="h-px w-12 bg-red-600 mb-6 mx-auto group-hover:w-24 transition-all duration-500" />
              <div className="text-[10px] md:text-[12px] font-bold text-zinc-400 uppercase tracking-[0.4em]">MODELAGEM 3D DE ALTA FIDELIDADE</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
