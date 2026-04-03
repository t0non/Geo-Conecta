import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LOGO_URL } from "../constants";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { WhatsAppButton } from "./ui/whatsapp-button";
import FloatingWhatsappButton from "./ui/floating-whatsapp";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkHeader, setIsDarkHeader] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 50;
      const sections = document.querySelectorAll('section');
      
      let currentSectionIsDark = true;
      
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSectionIsDark = section.classList.contains('bg-zinc-900');
        }
      });
      
      setIsDarkHeader(!currentSectionIsDark);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { label: "A Consultoria", href: isHome ? "#sobre" : "/#sobre" },
    { label: "Soluções Técnicas", href: isHome ? "#servicos" : "/#servicos" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-6 w-full z-50 transition-all duration-500 font-display" aria-label="Navegação principal">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className={`flex justify-between items-center h-20 lg:h-24 border transition-all duration-500 backdrop-blur-xl rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ring-1 px-8 lg:px-12 ${
            isDarkHeader 
              ? "bg-zinc-900/90 border-white/10 ring-white/5" 
              : "bg-white/40 border-white/40 ring-white/30"
          }`}>
            <div className="flex-shrink-0 flex items-center gap-6">
              <Link to="/" className="flex items-center gap-4 group">
                <img 
                  src={LOGO_URL} 
                  alt="Geo-Conecta" 
                  loading="eager" 
                  decoding="async" 
                  className="h-12 lg:h-16 w-auto brightness-0 invert transition-all duration-300 group-hover:scale-105" 
                  referrerPolicy="no-referrer" 
                />
                <div className="hidden xl:flex flex-col border-l border-white/20 pl-6 py-2 leading-[1.2]">
                  <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em] font-display">Consultoria</span>
                  <span className="text-[9px] font-medium text-zinc-500 uppercase tracking-[0.2em] font-display">Mineral & Ambiental</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className={`text-[11px] font-medium uppercase tracking-[0.2em] transition-colors font-display ${
                    isDarkHeader ? "text-white/70 hover:text-white" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Consultative Quick Contact */}
              <div className="h-4 w-px bg-white/10 hidden xl:block mx-2" />
              <div className="hidden xl:flex items-center gap-4 group">
                <div className="flex flex-col items-end mr-1 leading-none">
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Atendimento Direto</span>
                  <span className="text-[11px] font-medium text-white tracking-widest">+55 31 99999-9999</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 group-hover:bg-zinc-700 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <HoverBorderGradient 
                as="a" 
                href={isHome ? "#contato" : "/#contato"} 
                className="px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] font-display"
              >
                Falar com Consultor
              </HoverBorderGradient>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mx-4 sm:mx-6 mt-4 bg-zinc-900/90 backdrop-blur-sm rounded-3xl border border-white/10 px-6 sm:px-8 pt-8 pb-12 space-y-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              link.href.startsWith("#") || link.href.includes("#") ? (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="block text-2xl font-display italic text-white/90 hover:text-white transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  key={link.label}
                  to={link.href} 
                  className="block text-2xl font-display italic text-white/90 hover:text-white transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <a 
              href={isHome ? "#contato" : "/#contato"} 
              className="block text-2xl font-display italic text-white/90 hover:text-white transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </motion.div>
        )}
      </nav>

      <main>{children}</main>

      {/* Footer - Premium Business Layout */}
      <footer className="pt-24 pb-12 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            {/* Col 1: Brand Info */}
            <div className="space-y-8">
              <Link to="/">
                <img 
                  src={LOGO_URL} 
                  alt="Geo-Conecta" 
                  loading="lazy"
                  decoding="async"
                  className="h-16 lg:h-20 w-auto brightness-0 invert opacity-90 transition-opacity hover:opacity-100" 
                />
              </Link>
              <p className="text-zinc-500 leading-relaxed font-light text-sm max-w-xs">
                Unindo ciência, tecnologia e gestão regulatória para viabilizar o futuro da mineração sustentável no Brasil.
              </p>
            </div>

            {/* Col 2: Expertise */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8 font-display">Expertise</h4>
              <ul className="space-y-4 text-zinc-500 text-sm font-light">
                {["Consultoria Mineral", "Geologia Aplicada", "Licenciamento Ambiental", "Estudos Geotécnicos", "Hidrogeologia"].map((item) => (
                  <li key={item}>
                    <a href="#servicos" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contato Direto */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8 font-display">Contato Direto</h4>
              <ul className="space-y-6 text-zinc-500 text-sm font-light">
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-zinc-600 mt-0.5" />
                  <span>contato@conectageologia.com.br</span>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-zinc-600 mt-0.5" />
                  <span>+55 (31) 99999-9999</span>
                </li>
                <li className="flex items-start gap-4 text-zinc-600">
                  <MapPin className="w-5 h-5 text-zinc-600 mt-0.5" />
                  <span className="text-zinc-500">Belo Horizonte, MG - Atendimento Nacional</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Social & Links */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8 font-display">Conecte-se</h4>
              <div className="flex gap-6 mb-10">
                {["LinkedIn", "Instagram", "YouTube"].map((social) => (
                  <a key={social} href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">{social}</a>
                ))}
              </div>
              <ul className="space-y-4 text-zinc-500 text-sm font-light">
                <li><a href={isHome ? "#sobre" : "/#sobre"} className="hover:text-white transition-colors">Quem Somos</a></li>
                <li><a href={isHome ? "#contato" : "/#contato"} className="hover:text-white transition-colors">Solicitar Proposta</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-zinc-700 uppercase tracking-[0.2em] font-bold font-display">
            <div>
              © 2026 GEO-CONECTA. SOLUÇÕES INTELIGENTES EM GEOCIÊNCIAS.
            </div>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Global WhatsApp Button */}
      <FloatingWhatsappButton />
    </div>
  );
}
