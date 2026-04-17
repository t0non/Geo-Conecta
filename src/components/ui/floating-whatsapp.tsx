"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './whatsapp-icon';

// Configuração do Widget
const WIDGET_CONFIG = {
  buttonAvatar: '/imagens/Atendente.webp',
  agentAvatar: '/imagens/Atendente.webp',
  agentName: 'Lívia',
  notificationAvatar: '/imagens/Atendente.webp',
  notificationName: 'Lívia',
  whatsappNumber: '553173516826',
  initialMessage: 'Olá! Gostaria de falar com um especialista da Geo-Conecta.',
  messages: [
    { text: 'Olá! Tudo bem?', delay: 8000 },
    { text: 'Em que podemos ajudar seu projeto hoje?', delay: 12000 }
  ]
};

// Fallback image if Eduardo.webp is missing (Using Alyson as template)
const DEFAULT_AVATAR = '/imagens/Alyson.webp';
const IPHONE_SOUND_URL = '/imagens/notificação iphone.mp3';

export default function FloatingWhatsappButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messagesShown, setMessagesShown] = useState<{ id: number; text: string; isTyping: boolean }[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Lógica de Som e Notificação
  useEffect(() => {
    audioRef.current = new Audio(IPHONE_SOUND_URL);
    const unlockAudio = () => {
      if (audioRef.current && !audioUnlocked) {
        audioRef.current.play().then(() => {
          audioRef.current?.pause();
          audioRef.current!.currentTime = 0;
          setAudioUnlocked(true);
        }).catch(() => {});
      }
    };
    window.addEventListener('click', unlockAudio);
    return () => window.removeEventListener('click', unlockAudio);
  }, [audioUnlocked]);

  const playSound = () => {
    if (audioRef.current && audioUnlocked) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log('Bloqueado:', e));
    }
  };

  const addMessageSequence = (id: number, text: string) => {
    if (isOpenRef.current) return;

    // Adiciona a mensagem em estado de "digitando"
    setMessagesShown(prev => [...prev.filter(m => m.id !== id), { id, text, isTyping: true }]);
    
    // Após 1.5s, revela o texto
    const typingTimer = setTimeout(() => {
      setMessagesShown(prev => prev.map(m => m.id === id ? { ...m, isTyping: false } : m));
      if (audioUnlocked) playSound();
    }, 1500);
    
    timersRef.current.push(typingTimer);
  };

  useEffect(() => {
    // Sequência de mensagens solicitada pelo usuário
    WIDGET_CONFIG.messages.forEach((msg, index) => {
      const mainTimer = setTimeout(() => {
        addMessageSequence(index, msg.text);
      }, msg.delay);
      timersRef.current.push(mainTimer);
    });

    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, [audioUnlocked]);

  const whatsappUrl = `https://wa.me/${WIDGET_CONFIG.whatsappNumber}?text=${encodeURIComponent(WIDGET_CONFIG.initialMessage)}`;

  const handleImageError = (e: any) => {
    e.currentTarget.src = DEFAULT_AVATAR;
  };

  return (
    <>
      {/* BOTÃO E JANELA DE CHAT */}
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-[100] flex items-end">
        <div className="flex flex-col items-end mr-2 sm:mr-4 mb-1 sm:mb-2 pointer-events-none gap-3">
          <AnimatePresence>
            {!isOpen && messagesShown.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                onClick={() => setIsOpen(true)}
                className="pointer-events-auto cursor-pointer max-w-[150px] sm:max-w-[190px] bg-white rounded-[14px] rounded-br-[2px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-2.5 sm:p-3 relative group border border-zinc-100/50 overflow-visible"
              >
                {msg.isTyping ? (
                  <div className="flex gap-1.5 py-1.5 px-1 justify-center">
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-[11px] font-bold text-zinc-900 mb-0.5 block">{WIDGET_CONFIG.agentName}</span>
                    <p className="text-[12px] sm:text-[13px] text-zinc-600 leading-tight tracking-tight">{msg.text}</p>
                  </div>
                )}
                {/* Seta do balão (apontada para a direita, para o avatar) */}
                <div className="absolute bottom-3 -right-1 w-3.5 h-3.5 bg-white rotate-[-45deg] rounded-sm shadow-[2px_2px_2px_rgba(0,0,0,0.02)]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-end gap-5">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="w-[280px] sm:w-[350px] bg-white rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.15)] overflow-hidden mb-4"
              >
                <div className="bg-[#0f172a] p-5 sm:p-6 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-[#0f172a] border-none ring-0">
                      <img 
                        src={WIDGET_CONFIG.agentAvatar} 
                        alt={WIDGET_CONFIG.agentName} 
                        className="w-full h-full object-cover border-none" 
                        onError={handleImageError}
                      />
                    </div>
                    <div>
                      <div className="font-bold text-[15px] sm:text-[16px] leading-tight">{WIDGET_CONFIG.agentName}</div>
                      <div className="text-[10px] text-zinc-400 font-medium tracking-wide uppercase">Consultora Geo-Conecta</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 sm:p-6 h-[220px] sm:h-[300px] bg-[#efeae2] overflow-y-auto space-y-3 sm:space-y-4 flex flex-col relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />
                  
                  <div className="relative z-10 self-start max-w-[85%] bg-white p-3 rounded-[18px] rounded-tl-[4px] shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                    <p className="text-[12px] sm:text-[13px] text-zinc-800 leading-relaxed font-medium">
                      Olá! Sou a {WIDGET_CONFIG.agentName}. 👋
                    </p>
                  </div>
                  
                  <div className="relative z-10 self-start max-w-[85%] bg-white p-3 rounded-[18px] rounded-tl-[4px] shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                    <p className="text-[12px] sm:text-[13px] text-zinc-800 leading-relaxed">
                      Como posso ajudar seu projeto hoje?
                    </p>
                  </div>
                </div>
                
                <div className="p-5 sm:p-6 bg-white">
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    className="group w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 sm:py-5 rounded-[1.2rem] transition-all duration-300 shadow-sm active:scale-[0.98] block"
                  >
                    <div className="flex items-center justify-center gap-2 w-full">
                      <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform fill-white flex-shrink-0" />
                      <span className="font-bold text-[13px] sm:text-[14px] tracking-wide text-center">Iniciar Conversa</span>
                    </div>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`h-12 w-12 sm:h-16 sm:w-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 p-0 overflow-visible border-none ring-0 ${isOpen ? 'bg-zinc-800 rotate-90 shadow-zinc-800/30' : 'bg-transparent'}`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }}>
                <X className="text-white w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full p-0 m-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-transparent border-none ring-0 ring-offset-0">
                  <img 
                     src={WIDGET_CONFIG.buttonAvatar} 
                     alt="WhatsApp" 
                     className="w-full h-full object-cover border-none" 
                     onError={handleImageError}
                  />
                </div>
                
                {/* Status Dot "Pra Fora" (Stable central dot + Pulsing ring) */}
                <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 flex items-center justify-center z-20">
                  {/* Pulsing ring behind (more subtle) */}
                  <div className="absolute w-full h-full bg-[#22C55E] rounded-full animate-ping opacity-25" />
                  {/* Static central dot (no border) */}
                  <div className="relative w-3 h-3 bg-gradient-to-br from-[#4ADE80] to-[#22C55E] rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  </>
);
}
