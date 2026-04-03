import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, ShieldAlert } from "lucide-react";
import { GeoIcon } from "../ui/geo-icon";
import { WhatsAppIcon } from "../ui/whatsapp-icon";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export interface CasoDeSucesso {
  metric: string;
  metricLabel: string;
  title: string;
  challenge: string;
  impact: string;
}

export interface CasosSucessoProps {
  title?: string;
  subtitle?: string;
  cases: CasoDeSucesso[];
}

export default function CasosSucesso({
  title = "Proteja seu solo. Acelere seu lucro.",
  subtitle = "Não entregamos apenas laudos, entregamos segurança jurídica e viabilidade econômica para o seu ativo mineral.",
  cases
}: CasosSucessoProps) {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header - More aggressive and direct */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20 lg:mb-24"
        >
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-6 block font-display">A Prova da nossa Excelência Técnica</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-zinc-900 leading-tight mb-8">
            {title}
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="h-px w-24 bg-zinc-200 mx-auto mt-12" />
        </motion.div>

        {/* Impact Board Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {cases.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-zinc-100 hover:shadow-2xl hover:border-zinc-200 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              {/* Metric Background Icon (Subtle) */}
              <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                <TrendingUp className="w-48 h-48" />
              </div>

              {/* Metric Header */}
              <div className="mb-10">
                <div className="text-5xl lg:text-6xl font-display font-light text-zinc-900 mb-2 group-hover:scale-105 transition-transform origin-left duration-500">
                  {item.metric}
                </div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] font-display">
                  {item.metricLabel}
                </div>
              </div>

              {/* Case Content */}
              <div className="flex-grow space-y-6">
                <div className="h-px w-12 bg-zinc-100 group-hover:w-full transition-all duration-700" />
                
                <h3 className="text-xl font-display font-medium text-zinc-800 leading-snug">
                  {item.title}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-zinc-500 text-sm leading-relaxed font-light italic">
                      {item.challenge}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <GeoIcon />
                    <p className="text-zinc-900 text-[15px] font-medium leading-relaxed">
                      {item.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verification Badge */}
              <div className="mt-10 pt-8 border-t border-zinc-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Protocolo Auditado</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner inside the section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left relative overflow-hidden"
        >
          {/* Subtle pattern or gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/50 to-transparent opacity-50" />
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl lg:text-4xl font-display text-white font-light mb-4">
              Seu ativo mineral está seguro?
            </h3>
            <p className="text-lg text-zinc-400 font-light">
              Nossa auditoria técnica já reverteu milhões em multas e prazos perdidos. 
              Não espere o embargo para agir.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <a
              href={`https://wa.me/553193408908?text=${encodeURIComponent("Olá! Gostaria de solicitar uma auditoria para meu ativo mineral conforme vi nos Casos de Sucesso da Geo-Conecta.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 sm:px-12 py-5 sm:py-6 rounded-2xl font-bold text-[13px] uppercase tracking-[0.2em] font-display shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 transition-all duration-500"
            >
              <WhatsAppIcon className="w-7 h-7 sm:w-5 sm:h-5" />
              Solicitar Auditoria Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
