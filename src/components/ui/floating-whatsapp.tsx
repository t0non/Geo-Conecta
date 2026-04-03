"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Configuração do Widget
const WIDGET_CONFIG = {
  buttonAvatar: '/imagens/Eduardo.webp',
  agentAvatar: '/imagens/Eduardo.webp',
  agentName: 'Eduardo',
  notificationAvatar: '/imagens/Eduardo.webp',
  notificationName: 'Eduardo',
  whatsappNumber: '553197922538',
  initialMessage: 'Olá! Gostaria de receber um orçamento para minha empresa.',
  messages: [
    { text: 'Olá! Tudo bem?', delay: 8000 },
    { text: 'Gostaria de colocar sua empresa no topo do Google?', delay: 12000 }
  ]
};

// Fallback image if Eduardo.webp is missing (Using Alyson as template)
const DEFAULT_AVATAR = '/imagens/Alyson.png';
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

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_AVATAR;
  };

  return (
    <>
      {/* BOTÃO E JANELA DE CHAT */}
      <div className="fixed bottom-8 right-8 z-[100] flex items-end">
        <div className="flex flex-col items-end mr-4 mb-2 pointer-events-none gap-3">
          <AnimatePresence>
            {!isOpen && messagesShown.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                onClick={() => setIsOpen(true)}
                className="pointer-events-auto cursor-pointer max-w-[280px] bg-white rounded-2xl rounded-br-none shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-zinc-100 p-4 relative group"
              >
                {msg.isTyping ? (
                  <div className="flex gap-1 py-1">
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-zinc-300 rounded-full" />
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-zinc-300 rounded-full" />
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-zinc-300 rounded-full" />
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] font-bold text-zinc-900">{WIDGET_CONFIG.notificationName}</span>
                    <p className="text-[14px] text-zinc-700 leading-tight">{msg.text}</p>
                  </div>
                )}
                {/* Seta do balão (apontada para a direita, para o widget) */}
                <div className="absolute bottom-4 -right-1.5 w-3 h-3 bg-white border-r border-b border-zinc-100 rotate-[-45deg]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-end-gap-5">
          <AnimatePresence>
              className="w-[360px] bg-white rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.2)] overflow-hidden border border-zinc-100"
            >
              <div className="bg-[#0f172a] p-6 flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <img 
                      src={WIDGET_CONFIG.agentAvatar} 
                      alt="Eduardo" 
                      className="w-full h-full rounded-full object-cover" 
                      onError={handleImageError}
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f172a]" />
                  </div>
                  <div>
                    <div className="font-bold text-[16px] leading-tight">Eduardo</div>
                    <div className="text-[11px] text-zinc-400 font-medium tracking-wide uppercase">Consultor Geo-Conecta</div>
                  </div>
                </div>
                <X className="cursor-pointer text-zinc-400 hover:text-white transition-colors" onClick={() => setIsOpen(false)} />
              </div>
              
              <div className="p-6 h-[320px] bg-[#f8fafc] overflow-y-auto space-y-4 flex flex-col relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />
                
                <div className="relative z-10 self-start max-w-[85%] bg-white p-4 rounded-[1.2rem] rounded-tl-none shadow-sm border border-zinc-100">
                  <p className="text-[14px] text-zinc-800 leading-relaxed font-medium">
                    Olá! Sou o Eduardo. 👋
                  </p>
                </div>
                
                <div className="relative z-10 self-start max-w-[85%] bg-white p-4 rounded-[1.2rem] rounded-tl-none shadow-sm border border-zinc-100">
                  <p className="text-[14px] text-zinc-800 leading-relaxed">
                    Percebi que você está interessado em nossas soluções minerais. Como posso ajudar seu projeto hoje?
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-white border-t border-zinc-100">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-center py-5 rounded-[1.2rem] font-bold text-[14px] tracking-wide transition-all duration-300 shadow-lg shadow-green-500/20 active:scale-[0.98] items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Iniciar Conversa no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`h-16 w-16 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.3)] flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-zinc-800 rotate-90 shadow-zinc-800/30' : 'bg-white'}`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }}>
                <X className="text-white w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full rounded-full overflow-hidden p-1">
                <img 
                  src={WIDGET_CONFIG.buttonAvatar} 
                  alt="WhatsApp" 
                  className="w-full h-full rounded-full object-cover" 
                  onError={handleImageError}
                />
                <div className="absolute bottom-1 right-1 h-3.5 w-3.5 bg-green-500 rounded-full border-2 border-white animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
