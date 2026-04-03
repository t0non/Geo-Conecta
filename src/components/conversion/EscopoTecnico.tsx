import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

import { HoverBorderGradient } from '../ui/hover-border-gradient';

interface EscopoTecnicoProps {
  items: string[];
  title?: string;
}

const EscopoTecnico: React.FC<EscopoTecnicoProps> = ({ 
  items, 
  title = "Projetos Seguros e Viáveis" 
}) => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-zinc-900 leading-tight mb-8"
          >
            {title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-24 bg-zinc-200 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center items-stretch">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <HoverBorderGradient
                as="div"
                containerClassName="w-full h-full rounded-[2.5rem]"
                className="w-full h-full min-h-[130px] md:min-h-[150px] bg-zinc-50 p-8 md:p-10 flex items-center gap-6 transition-all duration-500 group-hover:bg-white border border-zinc-100/50"
                duration={3}
              >
                <div className="flex-shrink-0 bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-zinc-900 group-hover:text-white group-hover:shadow-xl transition-all duration-500">
                  <CheckCircle className="w-6 h-6 text-zinc-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-zinc-800 text-lg md:text-xl font-medium leading-tight group-hover:text-zinc-900 transition-colors duration-300">
                  {item}
                </p>
              </HoverBorderGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EscopoTecnico;
