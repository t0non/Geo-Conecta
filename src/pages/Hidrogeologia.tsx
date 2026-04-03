import { GeoIcon } from "../components/ui/geo-icon";
import ServiceTemplate from "../components/ServiceTemplate";

const hidrogeologiaData = {
  hero: {
    badge: "Estudos de Águas Subterrâneas",
    title: "Segurança Hídrica para seu",
    titleHighlight: "Empreendimento",
    description: "Água é o ativo mais crítico da sua operação. Garantimos disponibilidade hídrica e segurança jurídica através de estudos avançados, modelagem numérica e outorgas definitivas.",
    image: "/imagens/Hidrogeologia.mp4",
    bgColor: "bg-zinc-900",
    gradientColor: "from-zinc-900/80 via-zinc-900/60 to-zinc-900",
    accentColor: "text-blue-400"
  },
  problem: {
    title: "A água pode ser",
    titleHighlight: "o gargalo da sua produção.",
    content: [
      "<strong>Escassez hídrica, outorgas negadas ou contaminação</strong> são riscos invisíveis que podem <strong>paralisar operações</strong> e gerar multas pesadas. Sem gestão hídrica, seu futuro está em risco.",
      "Na Geo-Conecta, garantimos sua <strong>segurança hídrica</strong> com modelagem de fluxo e testes rigorosos para assegurar outorgas e otimizar cada gota da sua operação."
    ],
    solutions: [
      { title: "OUTORGAS SEGURAS", desc: "Estudos hidrogeológicos completos para aprovação imediata em órgãos ambientais." },
      { title: "DISPONIBILIDADE CRÍTICA", desc: "Identificação e gestão de reservas para suprimento hídrico ininterrupto." },
      { title: "INTELIGÊNCIA DE AQUÍFEROS", desc: "Modelagem numérica para prever impactos e garantir sustentabilidade do recurso." }
    ]
  },
  solutions: {
    title: "Gestão Inteligente de Recursos Hídricos",
    subtitle: "Soluções Hidrogeológicas",
    cards: [
      {
        id: "outorgas-agua",
        icon: <GeoIcon />,
        title: "Outorga de Direito de Uso",
        desc: "Regularização total para captação de água subterrânea e superficial junto aos órgãos gestores."
      },
      {
        id: "testes-bombeamento",
        icon: <GeoIcon />,
        title: "Testes de Bombeamento",
        desc: "Avaliação hidráulica de poços para determinar vazões máximas sustentáveis e parâmetros do aquífero."
      },
      {
        id: "rebaixamento-nivel",
        icon: <GeoIcon />,
        title: "Rebaixamento de Nível Freático",
        desc: "Projetos de engenharia para viabilizar escavações e minerações seguras em áreas com presença de água."
      },
      {
        id: "monitoramento-hidrogeologico",
        icon: <GeoIcon />,
        title: "Monitoramento e Qualidade",
        desc: "Controle contínuo de níveis e análises físico-químicas para garantir a sustentabilidade do recurso hídrico."
      }
    ]
  },
  authority: {
    title: "Autoridade Hidrogeológica que Constrói Confiança",
    content: [
      "Nossa equipe de hidrogeólogos possui experiência em projetos de grande complexidade, desde pequenas indústrias até grandes minerações. Dominamos as técnicas mais avançadas de investigação e modelagem de aquíferos.",
      "Com dezenas de outorgas obtidas e projetos executados, oferecemos a segurança hídrica que seu negócio precisa para operar com sustentabilidade e crescimento."
    ],
    image: "/imagens/Hidrogeologia (2).mp4"
  },
  alertSignals: [
    "Poços com redução drástica de vazão",
    "Contaminação detectada em águas subterrâneas",
    "Necessidade urgente de outorga de captação",
    "Rebaixamento insuficiente em cavas de mina",
    "Conflitos de uso d'água com vizinhos"
  ],
  technicalScope: [
    "Teste de Bombeamento e Vazão",
    "Estudos de Modelagem de Aquíferos",
    "Projetos de Rebaixamento de Lençol",
    "Regularização de Outorgas (Superficial/Subterrânea)",
    "Redes de Monitoramento Piezométrico",
    "Estudo de Autodepuração de Corpos D'água"
  ],
  contact: {
    title: "Garanta sua",
    subtitle: "segurança hídrica.",
    buttonText: "Agendar uma Avaliação Hidrogeológica",
    fields: {
      name: "Nome Completo",
      email: "E-mail Corporativo", 
      subject: "Objetivo Principal",
      message: "Mensagem"
    },
    options: [
      "Preciso captar água (Outorga)",
      "Preciso rebaixar o nível da água (Escavação/Mina)",
      "Estudo para licenciamento ambiental",
      "Monitoramento preventivo",
      "Outros"
    ]
  }
};

export default function Hidrogeologia() {
  return <ServiceTemplate data={hidrogeologiaData} />;
}
