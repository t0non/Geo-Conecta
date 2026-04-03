import { TestimonialSlider, type Review } from "../ui/testimonial-slider-1";
import { Award, ShieldCheck, Users, Briefcase } from "lucide-react";

export interface AuthorityProps {
  title?: string;
  supportText?: string;
}

const teamReviews: Review[] = [
  { id: 1,
    name: "Joyce Ávila Nascimento",
    affiliation: "Engenheira Geóloga | CREA - MG 247354/D",
    quote: "Nosso mapeamento geológico não é apenas descritivo, é desenhado para anular riscos operacionais e garantir a conformidade ambiental irrefutável.",
    imageSrc: "/imagens/Joyce.png",
    thumbnailSrc: "/imagens/Joyce.png",
  },
  {
    id: 2,
    name: "Alysson Cley De Souza Ferreira",
    affiliation: "Engenheiro Geólogo | CREA - MG 71811/D",
    quote: "Transformamos dados brutos de campo em inteligência de negócios. Nossa execução cirúrgica minimiza custos de exploração e acelera aprovações regulatórias.",
    imageSrc: "/imagens/Alyson.png",
    thumbnailSrc: "/imagens/Alyson.png",
  },
  {
    id: 3,
    name: "Deisimara Ramos",
    affiliation: "Geóloga | CREA - MG 422462/D",
    quote: "A precisão técnica é o nosso alicerce. Garantimos que cada projeto esteja em total conformidade com as normas vigentes, trazendo segurança jurídica e técnica.",
    imageSrc: "/imagens/Deisimara.png",
    thumbnailSrc: "/imagens/Deisimara.png",
  },
  {
    id: 4,
    name: "Tâmia Neves",
    affiliation: "Eng. Sanitarista, Ambiental e de Segurança do Trabalho | CREA - MG 168001/D",
    quote: "Sustentabilidade e segurança caminham juntas. Nossa abordagem integrada garante projetos eficientes, seguros e ambientalmente responsáveis.",
    imageSrc: "/imagens/Tamia.png",
    thumbnailSrc: "/imagens/Tamia.png",
  }
];

const stats = [
  { icon: Briefcase, label: "Projetos Ativos", value: "150+" },
  { icon: ShieldCheck, label: "Aprovação ANM", value: "98%" },
  { icon: Users, label: "Especialistas", value: "12" },
  { icon: Award, label: "Anos de Mercado", value: "15+" },
];

export default function Authority({
  title = "Quem assina a excelência do seu projeto.",
  supportText = "Não terceirizamos responsabilidade. Seu projeto é liderado por especialistas com profundo trânsito regulatório e rigor técnico irrefutável.",
}: AuthorityProps) {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-zinc-900 text-white overflow-hidden relative">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 xl:gap-32 items-center">
          <div className="w-full lg:w-[45%]">
            <div className="max-w-xl mx-auto lg:mx-0">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-6 block font-display text-center lg:text-left">Respaldo Técnico de Elite</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-8 leading-tight tracking-tight text-center lg:text-left">
                {title}
              </h2>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12 lg:mb-16 text-center lg:text-left">
                {supportText}
              </p>

              {/* Trust Stats Row/Flex */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-8 md:gap-x-12 lg:gap-x-16">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-3 min-w-[130px] md:min-w-[140px] text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-zinc-500">
                      <stat.icon className="w-4 h-4 text-red-600" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
                    </div>
                    <div className="text-2xl md:text-3xl font-display font-light text-white tracking-tight">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end overflow-visible">
            <div className="relative z-10 w-full max-w-4xl lg:max-w-none">
              <TestimonialSlider 
                reviews={teamReviews} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
