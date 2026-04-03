import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileCheck, Pickaxe, BrainCircuit, ArrowUpRight } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-mining");
  const logoUrl = "https://files.catbox.moe/73bf5a.png";

  return (
    <div className="flex flex-col min-h-screen selection:bg-accent selection:text-white bg-white">
      <Navigation />

      {/* Hero Section - Full Screen Image with Premium Reveal */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImage && (
          <>
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover animate-slow-pan"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            </div>
            {/* Darker Overlay for High Contrast */}
            <div className="absolute inset-0 bg-black/50 backdrop-grayscale-[0.2]" />
          </>
        )}
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-8 text-[10px] font-bold tracking-[0.5em] uppercase text-white/60 animate-premium-reveal opacity-0 fill-mode-forwards">
            <span className="w-12 h-[1px] bg-accent/50"></span>
            Direito Mineral Estratégico
          </div>
          <h1 className="text-6xl md:text-[10rem] font-bold mb-8 leading-[0.85] tracking-tighter text-white uppercase animate-premium-reveal animate-delay-200 opacity-0 fill-mode-forwards">
            SIMPLICIDADE.<br />
            <span className="gradient-text">
              SEGURANÇA.
            </span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto mb-12 font-light text-xl leading-relaxed animate-premium-reveal animate-delay-300 opacity-0 fill-mode-forwards">
            Gestão inteligente de ativos minerários com foco em conformidade absoluta e resultados precisos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-premium-reveal animate-delay-500 opacity-0 fill-mode-forwards">
            <Button size="lg" className="bg-white text-black hover:bg-accent hover:text-white px-14 h-16 rounded-none transition-all duration-700 ease-premium font-bold uppercase text-[10px] tracking-[0.3em] border-none">
              Consultar Agora
            </Button>
            <Link href="#servicos">
              <Button size="lg" variant="ghost" className="px-14 h-16 rounded-none border border-white/20 text-white hover:border-white hover:bg-white/5 font-bold uppercase text-[10px] tracking-[0.3em] transition-all duration-700 ease-premium">
                Explorar
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Clean Minimalist Grid */}
      <section id="servicos" className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-32 animate-premium-reveal opacity-0 fill-mode-forwards">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-6">Expertise</div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <h3 className="text-5xl md:text-7xl font-bold max-w-2xl tracking-tighter leading-none">Inteligência aplicada à regulação.</h3>
              <p className="text-gray-400 font-light max-w-sm text-lg leading-relaxed">Abordagem técnica e jurídica integrada para operações de alta performance.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border bg-white overflow-hidden">
            {[
              {
                icon: ShieldCheck,
                title: "Compliance",
                desc: "Monitoramento contínuo de obrigações ANM e ambientais.",
                link: "/dashboard"
              },
              {
                icon: Pickaxe,
                title: "Ativos",
                desc: "Gestão estratégica de títulos e alvarás de pesquisa.",
                link: "/dashboard"
              },
              {
                icon: FileCheck,
                title: "Licenciamento",
                desc: "Processos céleres e seguros junto aos órgãos reguladores.",
                link: "/dashboard"
              }
            ].map((service, idx) => (
              <Link 
                key={idx} 
                href={service.link} 
                className="group relative p-16 border-r border-b border-border hover:bg-black transition-all duration-1000 ease-premium animate-premium-reveal opacity-0 fill-mode-forwards"
                style={{ animationDelay: `${(idx + 1) * 200 + 500}ms` }}
              >
                <div className="mb-16 text-accent group-hover:text-white transition-colors duration-700">
                  <service.icon className="h-10 w-10" strokeWidth={0.75} />
                </div>
                <h4 className="text-3xl font-bold mb-6 group-hover:text-white transition-colors tracking-tighter duration-700">{service.title}</h4>
                <p className="text-gray-400 font-light group-hover:text-gray-500 transition-colors mb-12 leading-relaxed text-lg duration-700">{service.desc}</p>
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-accent transition-colors duration-700">
                  Ver Mais <ArrowUpRight className="h-4 w-4" strokeWidth={1} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Intelligence Section */}
      <section className="py-48 bg-[#fafafa]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center animate-premium-reveal opacity-0 fill-mode-forwards">
            <div className="w-20 h-20 border border-accent/30 rounded-full flex items-center justify-center mb-16 hover:scale-110 hover:border-accent transition-all duration-1000 ease-premium">
              <BrainCircuit className="h-8 w-8 text-accent" strokeWidth={0.75} />
            </div>
            <h2 className="text-5xl md:text-8xl font-bold mb-10 leading-[0.9] tracking-tighter">Otimização impulsionada por IA.</h2>
            <p className="text-gray-400 font-light text-2xl mb-16 max-w-3xl leading-relaxed">
              Tecnologia de ponta para converter propostas técnicas em resultados estratégicos com precisão neural.
            </p>
            <Link href="/optimizer">
              <Button size="lg" className="bg-black text-white hover:bg-accent px-16 h-20 rounded-none font-bold uppercase text-[10px] tracking-[0.4em] transition-all duration-1000 ease-premium hover:scale-[1.05]">
                Testar Otimizador
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-32 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
            <div className="flex flex-col items-start gap-12">
              <div className="relative h-20 w-64 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                <Image 
                  src={logoUrl} 
                  alt="MineRight Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-500 font-light max-w-sm leading-relaxed text-lg">
                A excelência no direito mineral. Tecnologia e tradição em perfeita harmonia desde 2010.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-32">
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-10">Conectar</h5>
                <ul className="space-y-6 text-sm font-light text-gray-500">
                  <li><Link href="/dashboard" className="hover:text-white transition-all duration-500">Portal do Cliente</Link></li>
                  <li><Link href="/optimizer" className="hover:text-white transition-all duration-500">Marketing Intelligence</Link></li>
                  <li><Link href="#" className="hover:text-white transition-all duration-500">Contato Direto</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-10">Localização</h5>
                <p className="text-sm font-light text-gray-500 leading-loose">Belo Horizonte, MG<br />Brasil</p>
                <p className="text-sm font-light text-accent mt-6">+55 31 3000-0000</p>
              </div>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.5em] text-gray-600">
            <span>&copy; {new Date().getFullYear()} MineRight Legal Strategy</span>
            <div className="flex gap-12">
              <span>Termos</span>
              <span>Privacidade</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
