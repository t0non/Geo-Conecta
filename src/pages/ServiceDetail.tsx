import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services, LOGO_URL } from "../constants";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { useEffect } from "react";
import { Logos3 } from "../components/ui/logos3";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Serviço não encontrado</h1>
          <Link to="/" className="text-zinc-500 hover:text-zinc-900 transition-colors">Voltar para a Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest font-display">Voltar</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-zinc-900" />
              <span className="text-zinc-400 text-[11px] font-light uppercase tracking-[0.3em] font-sans">
                GEO CONECTA A EMPRESA QUE CONECTA COM VOCÊ
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-light mb-10 leading-tight">
              {service.title.split(" & ").map((part, i) => (
                <span key={i}>
                  {i > 0 && <span className="italic text-zinc-400"> & </span>}
                  {part}
                </span>
              ))}
            </h1>
            <p className="text-xl text-zinc-600 mb-12 leading-relaxed font-light">
              {service.fullDescription}
            </p>

            <div className="space-y-6 mb-12">
              <h3 className="text-sm font-bold uppercase tracking-widest font-display text-zinc-900">O que entregamos:</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc-900 mt-0.5" />
                    <span className="text-zinc-600 font-light">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <HoverBorderGradient 
              as="a" 
              href="/#contato" 
              className="px-10 py-5 font-bold text-[13px] uppercase tracking-[0.15em] font-display"
            >
              Solicitar Orçamento para este Serviço
            </HoverBorderGradient>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-zinc-900 rounded-[2rem] flex items-center justify-center p-8 shadow-2xl">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">{service.icon}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Expertise Técnica</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-24">
        <Logos3 />
      </div>
    </div>
  );
}
