import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { WhatsAppIcon } from "./ui/whatsapp-icon";
import { Link } from "react-router-dom";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Logos3 } from "./ui/logos3";
import { WhatsAppButton } from "./ui/whatsapp-button";
import EscopoTecnico from "./conversion/EscopoTecnico";
import SinaisAlerta from "./conversion/SinaisAlerta";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { testimonialsData, faqData } from "../data/homeData";
import FaqTecnico from "./conversion/FaqTecnico";

interface ServiceData {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    image: string;
    bgColor: string;
    gradientColor: string;
    accentColor: string;
  };
  problem: {
    title: string;
    titleHighlight: string;
    content: string[];
    solutions: { title: string; desc: string }[];
  };
  solutions: {
    title: string;
    subtitle: string;
    cards: {
      id: string;
      icon: React.ReactNode;
      title: string;
      desc: string;
    }[];
  };
  technicalScope?: string[];
  alertSignals?: string[];
  authority: {
    title: string;
    content: string[];
    image: string;
  };
  contact: {
    title: string;
    subtitle: string;
    buttonText: string;
    fields: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    options: string[];
  };
}

interface ServiceTemplateProps {
  data: ServiceData;
}

export default function ServiceTemplate({ data }: ServiceTemplateProps) {
  const formRef = useRef<HTMLFormElement>(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", subject: data.contact.options[0] || "", message: "" });
  const [formErrors, setFormErrors] = useState({ name: false, email: false, message: false });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "" || !formData.email.includes("@"),
      message: formData.message.trim() === "",
    };
    
    setFormErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const messageContent = `Olá! Vim pela página de ${data.hero.title}.\n\nNome: ${formData.name}\nAssunto: ${formData.subject}\n\n${formData.message}\n\nEmail: ${formData.email}`;
    window.open(`https://wa.me/553193408908?text=${encodeURIComponent(messageContent)}`, "_blank");
    setFormData({ name: "", email: "", subject: data.contact.options[0] || "", message: "" });
  };
  return (
    <div className="bg-white">
      {/* Section 1: Hero - Following Home Style */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          {data.hero.image.includes('.mp4') ? (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
            >
              <source src={data.hero.image} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          ) : (
            <img 
              src={data.hero.image} 
              alt={data.hero.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              loading="eager"
              decoding="async"
            />
          )}
          {/* Overlays consistent with Home */}
          <div className="absolute inset-0 bg-zinc-900/30" />
          <div className="absolute inset-0 bg-zinc-900/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-zinc-900" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="h-px w-8 md:w-12 bg-zinc-500" />
                <span className="text-zinc-400 text-[9px] md:text-[11px] font-light uppercase tracking-[0.2em] md:tracking-[0.3em] font-sans">
                  {data.hero.badge}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-white leading-[1.1] mb-8 md:mb-10 tracking-tight">
                {data.hero.title} <br className="hidden md:block" />
                <span className={`italic ${data.hero.accentColor || 'text-zinc-400'}`}>{data.hero.titleHighlight}</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 mb-10 md:mb-12 leading-relaxed max-w-2xl font-light">
                {data.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
                <HoverBorderGradient 
                  as="a" 
                  href={`https://wa.me/553193408908?text=${encodeURIComponent("Olá! Gostaria de agendar uma reunião técnica sobre " + data.hero.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-10 py-4 sm:py-5 font-bold text-[11px] sm:text-[13px] uppercase tracking-[0.15em] font-display flex items-center justify-center sm:justify-start group w-full sm:w-auto"
                >
                  {data.contact.buttonText || "Solicitar Consultoria"}
                  <ArrowRight className="ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </HoverBorderGradient>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Logos3 />
      
      {/* New Section: Field in Action - Dynamic & Visual */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-zinc-50">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center">
          <p className="text-2xl font-instrumental-sans font-light text-zinc-700 mb-8">
            venha você também fazer parte!
          </p>
          <HoverBorderGradient 
            as="a" 
            href={`https://wa.me/553193408908?text=${encodeURIComponent("Olá! Vim pela página de " + data.hero.title + " e gostaria de falar sobre as oportunidades na Geo-Conecta.")}`}
            target="_blank"
            rel="noopener noreferrer"
            containerClassName="mx-auto"
            className="px-8 sm:px-12 py-5 sm:py-6 font-bold text-[12px] sm:text-[13px] uppercase tracking-[0.15em] font-instrumental-sans inline-flex items-center gap-3"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Junte-se a Nós
          </HoverBorderGradient>
        </div>
      </section>

      {/* Section 2: Reimagined Challenge/Solution Section - Centered Headline & Stacked Content */}
      <section className="py-24 md:py-32 lg:py-40 overflow-hidden bg-white relative">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50/50 -skew-x-12 translate-x-1/2 z-0" />
        
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <div className="flex flex-col items-center">
            
            {/* 1. Headline - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-light mb-10 leading-[1.05] tracking-tight text-zinc-900">
                {data.problem.title} <br />
                <span className="italic text-zinc-400" dangerouslySetInnerHTML={{ __html: data.problem.titleHighlight }} />
              </h2>
            </motion.div>

            {/* 2. Visual Side: Compelling Image/Video (Below Headline) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-5xl mx-auto mb-20 md:mb-32 relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] group"
            >
              {data.authority.image.includes('.mp4') ? (
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  preload="metadata"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                >
                  <source src={data.authority.image} type="video/mp4" />
                </video>
              ) : (
                <img 
                  src={data.authority.image} 
                  alt="Operação em campo" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* 3. Content: Description, Red Block and CTA (Below Video) */}
             <div className="max-w-4xl mx-auto w-full">
               <div className="space-y-12">
                 <div className="text-lg lg:text-xl text-zinc-800 leading-relaxed font-light text-center">
                   <p dangerouslySetInnerHTML={{ __html: data.problem.content[0] }} />
                 </div>

                 {/* Bloco de Solução - Linha Verde */}
                 <div className="border-l-4 border-green-600 pl-8 py-8 bg-zinc-50/50 rounded-r-3xl">
                   <h3 className="text-2xl md:text-3xl font-display font-medium text-zinc-900 mb-4 italic">Como resolvemos?</h3>
                   <p className="text-lg text-zinc-700 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: data.problem.content[1] }} />
                 </div>

                 {/* CTA Button */}
                  <div className="pt-4 flex flex-col items-center space-y-6">
                    <WhatsAppButton 
                      variant="inline" 
                      label="Falar com um Consultor ➔"
                      message={`Olá! Gostaria de falar com um consultor sobre ${data.hero.title}.`}
                      className="w-full sm:w-auto px-16 py-8 text-[14px] font-bold uppercase tracking-[0.2em] shadow-2xl shadow-green-500/20 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center gap-4 transition-all duration-500 hover:scale-[1.02]"
                    />
                  </div>
               </div>
             </div>

          </div>
        </div>
      </section>

      {/* Trust Trigger: Alert Signals */}
      {data.alertSignals && (
        <SinaisAlerta 
          alerts={data.alertSignals} 
        />
      )}

      {/* Section 3: Services - Bento Grid like Home */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <span className="text-[11px] font-bold text-zinc-600 uppercase tracking-[0.4em] mb-6 block font-instrumental-sans">Soluções</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-instrumental-sans font-light mb-8">{data.solutions.title}</h2>
            <div className="h-px w-24 bg-zinc-200 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {data.solutions.cards.map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-zinc-100 flex flex-col h-full group hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500"
              >
                <div className="mb-10 p-0 m-0 bg-transparent border-none shadow-none outline-none">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-instrumental-sans font-medium mb-6">{card.title}</h3>
                <p className="text-zinc-800 leading-relaxed mb-10 flex-grow font-montserrat-light">
                  {card.desc}
                </p>
                <div className="mt-auto">
                  <HoverBorderGradient 
                    as="a" 
                    href={`https://wa.me/553193408908?text=${encodeURIComponent("Olá! Estou interessado no seviço de " + card.title + " da Geo-Conecta.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center whitespace-nowrap group/btn font-instrumental-sans"
                  >
                    Contratar Serviço <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </HoverBorderGradient>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Custom Request */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-instrumental-sans font-light mb-8 leading-tight text-zinc-900">
              Precisa de algo <br />
              <span className="italic text-zinc-400">ainda mais específico?</span>
            </h3>
            <p className="text-xl text-zinc-800 mb-12 font-montserrat-light max-w-2xl mx-auto">
              Se as soluções acima não cobrem a totalidade do seu desafio, fale diretamente com nossa diretoria técnica para um atendimento consultivo de alta complexidade.
            </p>
            <div className="flex justify-center">
              <HoverBorderGradient 
                as="a" 
                href={`https://wa.me/553193408908?text=${encodeURIComponent("Olá! Estou no site na página de " + data.hero.title + " e gostaria de falar com a diretoria técnica sobre um projeto específico.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 sm:px-16 py-5 sm:py-8 font-bold text-[13px] sm:text-[15px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-instrumental-sans inline-flex items-center gap-4 hover:scale-105 transition-transform duration-500"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Falar com Especialista Técnico
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </section>

      {/* High Density: Technical Scope & Deliverables */}
      {data.technicalScope && (
        <EscopoTecnico 
          items={data.technicalScope} 
        />
      )}

      {/* Section 4: Team & Authority - Same as Home */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center mx-auto max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-light text-white leading-tight">
              Equipe <br />
              <span className="italic text-zinc-500">Geo-Conecta.</span>
            </h2>
          </motion.div>
          
          <AnimatedTestimonials testimonials={testimonialsData} />
        </div>
      </section>
      {/* FAQ Technical Section */}
      <FaqTecnico items={faqData} title="Perguntas Frequentes" />

      {/* Section 5: Contact - Premium Form */}
      <section id="contato" className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light leading-tight text-zinc-900">
              Entre em <br />
              <span className="italic text-zinc-400">contato</span>
            </h2>
            <p className="text-xl text-zinc-500 mt-8 mb-16 leading-relaxed font-light">
              Estamos prontos para atender demandas de alta complexidade. Agende uma reunião com nossos especialistas.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
            <div className="lg:col-span-5">
              <div className="space-y-12">
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1 font-display">E-mail Corporativo</div>
                    <div className="text-[14px] sm:text-lg font-medium break-all sm:break-normal">contato@conectageologia.com.br</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1 font-display">WhatsApp Especialista</div>
                    <div className="text-lg font-medium">+55 (31) 93408-9088</div>
                  </div>
                </div>

                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1 font-display">Unidade Operacional</div>
                    <div className="text-lg font-medium">Belo Horizonte, MG - Atendimento Nacional</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-zinc-50 p-6 lg:p-10 rounded-[2rem] lg:rounded-[3rem] border border-zinc-100">
                <form ref={formRef} className="space-y-8 sm:space-y-10" onSubmit={handleFormSubmit}>
                  {Object.values(formErrors).some(Boolean) && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-3">
                      Por favor, preencha os campos destacados para continuar.
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-display">{data.contact.fields.name}</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (formErrors.name) setFormErrors({ ...formErrors, name: false });
                        }}
                        className={`w-full bg-transparent border-b py-4 outline-none transition-colors font-light text-lg ${formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-200 focus:border-zinc-900'}`} 
                        placeholder="Ex: João Silva" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-display">{data.contact.fields.email}</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: false });
                        }}
                        className={`w-full bg-transparent border-b py-4 outline-none transition-colors font-light text-lg ${formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-zinc-200 focus:border-zinc-900'}`} 
                        placeholder="empresa@email.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-display">{data.contact.fields.subject}</label>
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-transparent border-b border-zinc-200 py-4 focus:border-zinc-900 outline-none transition-colors font-light text-lg appearance-none"
                    >
                      {data.contact.options.map((option, i) => (
                        <option key={i}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-display">{data.contact.fields.message}</label>
                    <textarea 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: false });
                      }}
                       className={`w-full bg-transparent border-b py-4 outline-none transition-colors font-light text-lg resize-none ${formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-zinc-200 focus:border-zinc-900'}`} 
                        placeholder="Descreva brevemente sua demanda..."
                    ></textarea>
                  </div>
                  <div className="flex pt-4">
                    <button type="submit" className="w-full sm:w-auto h-full outline-none focus:outline-none">
                      <HoverBorderGradient 
                        as="div"
                        containerClassName="w-full"
                        className="w-full py-6 font-bold text-[12px] uppercase tracking-[0.3em] font-display"
                      >
                        {data.contact.buttonText}
                      </HoverBorderGradient>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
