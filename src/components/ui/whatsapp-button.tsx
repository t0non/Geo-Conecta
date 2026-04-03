"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "./whatsapp-icon";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "floating" | "inline" | "card";
  label?: string;
}

const WhatsAppButton = ({ 
  message = "Olá! Gostaria de saber mais sobre os serviços da Geo-Conecta.", 
  className = "",
  variant = "floating",
  label
}: WhatsAppButtonProps) => {
  const phoneNumber = "5531999999999"; // Substituir pelo número real
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (variant === "floating") {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-8 right-8 z-50 ${className}`}
      >
        <button
          onClick={handleClick}
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 group border-2 border-white/20"
          aria-label="Contato via WhatsApp"
        >
          {/* WhatsApp Icon - Centered */}
          <WhatsAppIcon className="relative z-10 w-6 h-6" />
          
          {/* Tooltip - Aligned */}
          <span className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-lg">
            Fale conosco
            <span className="absolute top-full right-3 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-gray-900"></span>
          </span>
        </button>
      </motion.div>
    );
  }

  if (variant === "inline") {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg ${className}`}
      >
        {/* WhatsApp Icon - Proportional */}
        <WhatsAppIcon className="flex-shrink-0 w-[18px] h-[18px]" />
        <span>{label ?? "WhatsApp"}</span>
      </motion.button>
    );
  }

  if (variant === "card") {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
        className={`w-full bg-[#25D366]/5 hover:bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-4 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md ${className}`}
      >
        {/* WhatsApp Icon - Centered */}
        <WhatsAppIcon className="flex-shrink-0 w-[18px] h-[18px]" />
        <span>{label ?? "Solicitar"}</span>
      </motion.button>
    );
  }

  return null;
};

export { WhatsAppButton };
