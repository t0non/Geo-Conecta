import { motion, useScroll, useTransform, animate, useInView, useSpring } from "motion/react";
import { 
  ArrowRight,
  ShieldCheck,
  Globe,
  Award,
  Users,
  ChevronRight,
  Mail,
  Phone
} from "lucide-react";
import { WhatsAppIcon } from "../components/ui/whatsapp-icon";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { services, stats, LOGO_URL } from "../constants";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Logos3 } from "../components/ui/logos3";
import { WhatsAppButton } from "../components/ui/whatsapp-button";

import { RadialOrbitalTimelineDemo } from "../components/ui/radial-orbital-timeline-demo";

import React, { Suspense, useMemo } from "react";
import { testimonialsData, faqData, casesData } from "../data/homeData";

// [PERFORMANCE] Lazy Loading: Carregamento sob demanda (Code Splitting).
// Retarda o download, parseamento e execução de JS de componentes que estão "abaixo da dobra" (below the fold).
// Impacto: Reduz drásticamente o TBT (Total Blocking Time) na renderização inicial e melhora o TTI (Time to Interactive).
const CasosSucesso = React.lazy(() => import("../components/conversion/CasosSucesso"));
const FaqTecnico = React.lazy(() => import("../components/conversion/FaqTecnico"));
const CampoEmAcao = React.lazy(() => import("../components/conversion/CampoEmAcao"));
// Extraindo de uma named export exigiria wrap, então aqui criamos um alias default on-the-fly para o React.lazy:
const AnimatedTestimonials = React.lazy(() => import("../components/ui/animated-testimonials").then(module => ({ default: module.AnimatedTestimonials })));

function AnimatedStat({ value, delay }: { value: string, delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        springValue.set(target);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, target, delay, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest).toString());
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] }); // [PERFORMANCE] Limitar scroll observation
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); 
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // [CLEAN CODE] Removidos transforms (ex: scale) não utilizados.

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", area: "Mineração & ANM", message: "" });
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

    const messageContent = `Olá! Vim pelo site da Geo-Conecta.\n\nNome: ${formData.name}\nUnidade de Negócio: ${formData.area}\n\n${formData.message}\n\nEmail: ${formData.email}`;
    window.open(`https://wa.me/553193408908?text=${encodeURIComponent(messageContent)}`, "_blank");
    setFormData({ name: "", email: "", area: "Mineração & ANM", message: "" });
  };

  // [PERFORMANCE] Memoização de dados estáticos para evitar recriação de arrays/objetos complexos a cada renderização do componente Home.
  // Impacto: Reduz acionamentos desnecessários do Garbage Collector e poupa CPU se o estado do componente pai sofrer mutação.
  const coreFeatures = useMemo(() => [
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Segurança Jurídica", text: "Conformidade total com ANM, IBAMA e demais órgãos ambientais, blindando seu projeto contra riscos regulatórios." },
    { icon: <Globe className="w-5 h-5" />, title: "Visão Global", text: "Relatórios e laudos segundo padrões internacionais (NI 43-101, JORC), atraindo investidores e parceiros globais." },
    { icon: <Users className="w-5 h-5" />, title: "Corpo Técnico", text: "Equipe multidisciplinar com mestres e doutores em geociências, engenharia e ciências ambientais." },
    { icon: <ArrowRight className="w-5 h-5" />, title: "Agilidade", text: "Metodologia ágil e monitoramento contínuo para cumprimento de prazos críticos e respostas rápidas a exigências." },
  ], []);

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, -50, 0], 
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          // [PERFORMANCE / CSS] 'will-change-transform' instrui o navegador a isolar este elemento em sua própria layer de GPU antes que a animação inicie.
          // Impacto: Evita gargalos de renderização (Repaints/Reflows) no Main Thread ao delegar a opacidade e transforms diretamente para a placa gráfica.
          className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-zinc-900/5 rounded-full blur-[100px] will-change-transform"
        />

      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-zinc-900">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            // [PERFORMANCE / LCP] Utilizar 'preload="none"' e 'poster'. O browser não precisará fazer download pesado do vídeo no carregamento primário bloqueando scripts.
            preload="none"
            poster="/imagens/background_placeholder.jpg" // Fallback imediato do LCP
            className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none will-change-transform"
          >
            <source src="https://files.catbox.moe/i4rfkh.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay for Video */}
          <div className="absolute inset-0 bg-zinc-900/30" />
          
          {/* Global Overlays */}
          <div className="absolute inset-0 bg-zinc-900/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-zinc-900" />
        </motion.div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="h-px w-8 md:w-12 bg-zinc-500" />
                <span className="text-zinc-400 text-[9px] md:text-[11px] font-light uppercase tracking-[0.2em] md:tracking-[0.3em] font-sans">
                  GEO CONECTA A EMPRESA QUE CONECTA COM VOCÊ
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-white leading-[1.1] mb-8 md:mb-10 tracking-tight">
                Consultoria Mineral, Geologia e Meio Ambiente
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 mb-10 md:mb-12 leading-relaxed max-w-2xl font-light">
                Processos ANM, estudos técnicos e licenciamento ambiental com rigor e cumprimento de prazos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <HoverBorderGradient 
                  as="a" 
                  href={`https://wa.me/553193408908?text=${encodeURIComponent("Olá! Vim pelo site da Geo-Conecta e gostaria de falar com um geólogo especialista.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-10 py-4 sm:py-5 font-bold text-[11px] sm:text-[13px] uppercase tracking-[0.15em] font-display flex items-center justify-center sm:justify-start group w-full sm:w-auto"
                >
                  Falar com um Geólogo Especialista
                  <ArrowRight className="ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </HoverBorderGradient>
                <HoverBorderGradient 
                  as="a" 
                  href="#servicos" 
                  className="px-6 sm:px-10 py-4 sm:py-5 font-bold text-[11px] sm:text-[13px] uppercase tracking-[0.15em] font-display flex items-center justify-center w-full sm:w-auto"
                >
                  Nossos Serviços
                </HoverBorderGradient>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Logos3 />
      
      {/* Stats Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 items-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group text-center lg:text-left"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-zinc-900 mb-3 group-hover:translate-x-1 transition-transform duration-500">
                  <AnimatedStat value={stat.value} delay={0.2} />
                </div>
                <div className="text-[10px] md:text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] font-display">
                  {stat.label}
                </div>
                {i > 0 && <div className="absolute -left-6 top-0 bottom-0 w-px bg-zinc-100 hidden lg:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="sobre" className="py-24 md:py-32 lg:py-40 overflow-hidden bg-white">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
          
          {/* Título centralizado acima do conteúdo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-4 block font-display">
              Quem somos
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light leading-[1.1] text-zinc-900">
              Sobre a Geo-Conecta
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-1 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/5] min-h-[400px] sm:min-h-0 rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-100"
              >
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  preload="metadata"
                  className="w-full h-full object-cover transition-all duration-1000"
                >
                  <source src="/imagens/Sessao2.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
            
            <div className="order-2 lg:order-2">
              <p className="text-xl text-zinc-600 mb-6 leading-relaxed font-light">
                Fundada com a missão de unir ciência, tecnologia e gestão regulatória, a <strong className="font-semibold text-zinc-900">Geo-Conecta</strong> é uma consultoria geológica especializada que atua em todo o território nacional, conectando empresas e empreendedores às melhores soluções em mineração, meio ambiente e geotecnia.
              </p>
              <p className="text-lg text-zinc-500 mb-6 leading-relaxed font-light">
                Ao longo de mais de sete anos de atuação, já atendemos mais de <span className="font-semibold text-zinc-700">300 projetos</span> e <span className="font-semibold text-zinc-700">150 clientes</span> por meio de projetos diretos e parcerias técnicas. Nossa equipe é composta por geólogos, engenheiros e consultores com formação em nível de mestrado e doutorado, garantindo um olhar técnico apurado em cada etapa do trabalho.
              </p>
              <p className="text-lg text-zinc-500 mb-12 leading-relaxed font-light">
                Acreditamos que cada projeto merece atenção individualizada. Por isso, desenvolvemos soluções personalizadas — do licenciamento ambiental à modelagem de depósitos minerais — sempre com rigor científico, responsabilidade técnica e compromisso com prazos. Nossa abordagem integrada e o relacionamento transparente com clientes e órgãos regulatórios são os pilares que sustentam nossa reputação no mercado.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                {coreFeatures.map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="font-bold text-[12px] uppercase tracking-wider font-display text-zinc-900">{item.title}</span>
                    </div>
                    <p className="text-[13px] text-zinc-500 leading-relaxed font-light pl-12">{item.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-14 pt-10">
                <WhatsAppButton 
                  variant="inline" 
                  message="Olá! Gostaria de uma avaliação técnica gratuita do meu projeto pela Geo-Conecta."
                  label="Falar com um Especialista Agora"
                  className="w-full min-h-[64px] px-10 text-[13px] font-bold uppercase tracking-[0.2em] font-display shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-shadow duration-500 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Bento Grid */}
      <section id="servicos" className="py-24 md:py-32 lg:py-40 bg-zinc-50">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light mb-8 text-zinc-900">O que fazemos?</h2>
            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-light">
              Da geologia à mineração, dominamos cada etapa do processo com <span className="font-medium text-zinc-900">precisão técnica</span> e <span className="font-medium text-zinc-900">excelência regulatória</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full group hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 overflow-hidden relative"
              >
                {/* Accent Color Line on Top */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-700" />
                
                {/* Image/Video Container */}
                <div className="relative h-56 overflow-hidden">
                  {service.image.includes('.mp4') ? (
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    >
                      <source src={service.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={service.image} 
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="mb-8 p-0 m-0 bg-transparent border-none shadow-none outline-none">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-4 text-zinc-900">{service.title}</h3>
                  <p className="text-[15px] text-zinc-500 leading-relaxed mb-8 flex-grow font-light">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-zinc-100">
                    <HoverBorderGradient 
                      as={Link}
                      to={`/servico/${service.id}`}
                      containerClassName="w-full"
                      className="w-full text-[12px] font-bold uppercase tracking-[0.25em] flex items-center justify-center py-5 font-display gap-2 group"
                    >
                      Saiba Mais <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </HoverBorderGradient>
                  </div>
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
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-8 leading-tight">
              Não achou o que precisa?
            </h3>
            <p className="text-xl text-zinc-500 mb-12 font-light max-w-2xl mx-auto">
              Se o seu projeto exige uma abordagem técnica específica ou alta complexidade regulatória, nossos especialistas estão prontos para desenhar a estratégia ideal.
            </p>
            <div className="flex justify-center">
              <a
                href={`https://wa.me/553193408908?text=${encodeURIComponent("Olá! Vim pelo site da Geo-Conecta e gostaria de solicitar uma consultoria personalizada.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 sm:px-16 py-5 sm:py-6 rounded-2xl font-bold text-[13px] sm:text-[14px] uppercase tracking-[0.25em] font-display shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 transition-all duration-500"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Solicitar Consultoria Personalizada
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* [PERFORMANCE] Envolvendo os componentes pesados que não são críticos para visualização imediata em um Suspense Boundary. */}
      {/* Isso faz com que seus bytes respectivos na rede não impeçam a formação do LCP da tela inicial. */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center opacity-30"><div className="animate-spin w-8 h-8 border-4 border-zinc-900 border-t-transparent rounded-full" /></div>}>
        {/* Componente: Campo em Ação - Cinemático & Premium */}
        <CampoEmAcao />

        {/* Componente 3: Casos de Sucesso */}
        <CasosSucesso cases={casesData} />

        {/* Section: Testimonials */}
        <section className="py-24 md:py-32 lg:py-40 bg-zinc-900 border-y border-zinc-800">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="text-center mb-20 lg:mb-28">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-white mb-6">
                Equipe Geo-Conecta.
              </h2>
              <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto">
                Sua demanda é liderada por especialistas com profundo trânsito regulatório e rigor técnico para blindar o seu investimento.
              </p>
            </div>
            <AnimatedTestimonials testimonials={testimonialsData} />
          </div>
        </section>

        {/* Componente 5: FAQ B2B */}
        <FaqTecnico items={faqData} title="Perguntas Frequentes" />
      </Suspense>

      {/* Contact Section - Premium Form */}
      <section id="contato" className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light leading-tight text-zinc-900">
              Fale com um especialista
            </h2>
            <p className="text-xl text-zinc-500 mt-8 mb-16 leading-relaxed font-light">
              Estamos prontos para atender demandas de alta complexidade. Agende uma reunião com nossos especialistas.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20">
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
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1 font-display">Central de Atendimento</div>
                    <div className="text-lg font-medium">+55 (31) 93408-9088</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-zinc-50 p-6 lg:p-8 xl:p-12 rounded-[2rem] lg:rounded-[3rem] shadow-sm">
                <form ref={formRef} className="space-y-6 sm:space-y-8" onSubmit={handleFormSubmit}>
                  {Object.values(formErrors).some(Boolean) && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-3">
                      Por favor, preencha os campos destacados para continuar.
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-display">Nome Completo</label>
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
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-display">E-mail Corporativo</label>
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
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-display">Área de Interesse</label>
                    <select 
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full bg-transparent border-b border-zinc-200 py-4 focus:border-zinc-900 outline-none transition-colors font-light text-lg appearance-none"
                    >
                      <option>Mineração & ANM</option>
                      <option>Geologia Estratégica</option>
                      <option>Licenciamento Ambiental</option>
                      <option>Hidrogeologia Avançada</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-display">Mensagem</label>
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
                  <div className="flex justify-center pt-4">
                    <button type="submit" className="w-full sm:w-auto h-full outline-none focus:outline-none">
                      <HoverBorderGradient 
                        as="div"
                        containerClassName="w-full"
                        className="w-full sm:w-auto sm:px-12 py-6 font-bold text-[12px] uppercase tracking-[0.3em] font-display"
                      >
                        Enviar Solicitação
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
