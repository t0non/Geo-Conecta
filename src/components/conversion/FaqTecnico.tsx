import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export interface FaqItemData {
  question: string;
  answer: string;
}

export interface FaqTecnicoProps {
  title?: string;
  items: FaqItemData[];
}

export default function FaqTecnico({
  title = "Perguntas Frequentes de Nossos Clientes",
  items
}: FaqTecnicoProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-zinc-900">
            {title}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`border border-zinc-200 rounded-[1.5rem] overflow-hidden transition-colors ${isOpen ? 'bg-zinc-50' : 'bg-white hover:bg-zinc-50'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <h3 className="text-lg lg:text-xl font-display font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors pr-8">
                    {item.question}
                  </h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white border border-zinc-200 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-zinc-900 border-zinc-900 text-white' : 'text-zinc-400 group-hover:border-zinc-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 pt-2">
                        <p className="text-zinc-600 font-light leading-relaxed text-lg">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
