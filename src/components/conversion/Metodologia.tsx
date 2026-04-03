import { motion } from "motion/react";
import { ShieldCheck, Search, FileText } from "lucide-react";
import { GeoIcon } from "../ui/geo-icon";

export interface MetodologiaStep {
  title: string;
  description: string;
}

export interface MetodologiaProps {
  title?: string;
  subtitle?: string;
  steps: MetodologiaStep[];
}

const icons = [Search, GeoIcon, FileText, ShieldCheck];

export default function Metodologia({
  title = "Nosso Protocolo de Execução.",
  subtitle = "Metodologia proprietária que integra inteligência regulatória e rigor técnico para anular riscos e acelerar resultados.",
  steps
}: MetodologiaProps) {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-32">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-6 block font-display">A Engenharia da Conformidade</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-zinc-900 leading-tight mb-8">
            {title}
          </h2>
          <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Animated Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-zinc-100 -z-10 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-zinc-400 to-transparent"
            />
          </div>

          {steps.map((step, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Step Number Badge */}
                <div className="mb-10 relative inline-block">
                  <div className="w-20 h-20 bg-transparent border-none rounded-none flex items-center justify-center text-zinc-900 group-hover:bg-transparent group-hover:text-zinc-900 transition-all duration-700 shadow-none group-hover:shadow-none group-hover:-translate-y-2">
                    <Icon className="w-14 h-14" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border border-zinc-100 rounded-full flex items-center justify-center text-[10px] font-bold text-zinc-400 font-display group-hover:border-zinc-900 group-hover:text-zinc-900 transition-colors duration-700">
                    0{i + 1}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-display font-semibold text-zinc-900 tracking-tight">
                    {step.title}
                  </h3>
                  <div className="h-px w-8 bg-zinc-100 group-hover:w-16 transition-all duration-700" />
                  <p className="text-zinc-500 font-light leading-relaxed text-[15px]">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile/tablet */}
                {i < steps.length - 1 && (
                  <div className="sm:hidden flex justify-center py-8">
                    <div className="h-8 w-px bg-zinc-100" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
