
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { WhatsAppIcon } from "./ui/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "#sobre", label: "SOBRE NÓS" },
    { href: "#atuacao", label: "ÁREAS DE ATUAÇÃO" },
    { href: "#produtos", label: "PRODUTOS" },
    { href: "/dashboard", label: "CONTATO" },
  ];

  const logoUrl = "https://files.catbox.moe/73bf5a.png";

  return (
    <div className="fixed top-0 z-50 w-full px-4 md:px-8 pt-6">
      <nav className={cn(
        "container mx-auto h-24 transition-all duration-700 flex items-center justify-between px-10 rounded-full border",
        scrolled 
          ? "bg-white/5 border-black/10 backdrop-blur-xl" 
          : "bg-white/0 border-white/20 backdrop-blur-none shadow-none"
      )}>
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative h-20 w-72">
            <Image 
              src={logoUrl} 
              alt="MineRight Legal Logo" 
              fill
              className={cn(
                "object-contain transition-all duration-700",
                scrolled ? "" : "brightness-0 invert"
              )}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500",
                scrolled ? "text-black hover:text-accent" : "text-white hover:text-white/70"
              )}
            >
              {link.label}
            </Link>
          ))}
          
          <Link href="https://wa.me/553100000000" target="_blank" className={cn(
            "transition-all duration-500 ml-2 p-3 rounded-full border",
            scrolled ? "text-black border-black/10 hover:border-black/30" : "text-white border-white/10 hover:border-white/40"
          )}>
            <WhatsAppIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(
                "hover:bg-transparent",
                scrolled ? "text-black" : "text-white"
              )}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-none w-full flex flex-col justify-center items-center p-0">
              <div className="flex flex-col gap-10 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold tracking-tighter uppercase text-white hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
