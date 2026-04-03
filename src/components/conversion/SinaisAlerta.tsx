import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight } from 'lucide-react';

interface SinaisAlertaProps {
  alerts: string[];
  title?: string;
  subtitle?: string;
}

const SinaisAlerta: React.FC<SinaisAlertaProps> = ({ 
  alerts, 
  title = "Quando acionar nossos especialistas?",
  subtitle = "Sinais de Alerta e Riscos Regulatórios"
}) => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center max-w-3xl mx-auto mb-20">

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-zinc-900 leading-tight mb-8"
          >
            {title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px w-24 bg-green-200 mx-auto"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {alerts.map((alert, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -30,
                  y: 32,
                  scale: 0.98,
                  boxShadow: "0 0 0 rgba(239, 68, 68, 0)"
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  boxShadow: "0 6px 24px rgba(15, 23, 42, 0.06)"
                },
                hover: {
                  y: -6,
                  boxShadow: "0 24px 48px rgba(239, 68, 68, 0.10)"
                }
              }}
              transition={{ 
                duration: 1.15, 
                delay: index * 0.22,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-6 md:p-8 rounded-[2rem] transition-all duration-500 group relative overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-10"
            >
              <motion.div
                variants={{
                  hidden: { scaleY: 0 },
                  visible: { scaleY: 0 },
                  hover: { scaleY: 1 }
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.22 + 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute top-0 left-0 w-1.5 h-full bg-red-500 origin-top"
              />
              
              <motion.div
                variants={{
                  hidden: {
                    backgroundColor: "#fef2f2",
                    color: "#ef4444",
                    rotate: 0,
                    scale: 0.92
                  },
                  visible: {
                    backgroundColor: "#fef2f2",
                    color: "#ef4444",
                    rotate: 0,
                    scale: 1
                  },
                  hover: {
                    backgroundColor: "#ef4444",
                    color: "#ffffff",
                    rotate: 12,
                    scale: 1.04
                  }
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.22 + 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              >
                <AlertTriangle className="w-7 h-7" />
              </motion.div>
              
              <div className="flex-grow text-center md:text-left">
                <motion.p
                  variants={{
                    hidden: { color: "#71717a" },
                  visible: { color: "#71717a" },
                  hover: { color: "#18181b" }
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.22 + 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="text-lg md:text-xl font-light leading-relaxed"
                >
                  {alert}
                </motion.p>
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 16 },
                  visible: { opacity: 0, x: 16 },
                  hover: { opacity: 1, x: 0 }
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.22 + 0.18,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex-shrink-0 hidden md:flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-red-500"
              >
                Ação Recomendada <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinaisAlerta;
