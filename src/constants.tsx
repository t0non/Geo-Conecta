import { GeoIcon } from "./components/ui/geo-icon";
import { Service, Stat } from "./types";

export const services: Service[] = [
  {
    id: "mineracao-anm",
    title: "Mineração & ANM",
    description: "Gestão estratégica de processos minerários, desde o requerimento até a lavra, garantindo conformidade total com a ANM.",
    icon: <GeoIcon />,
    details: ["Requerimento de Pesquisa", "Relatórios Finais (RFP)", "Plano de Aproveitamento Econômico (PAE)", "Gestão de Royalties e CFEM"],
    fullDescription: "Nossa consultoria em Mineração & ANM oferece um suporte completo para empresas que buscam regularizar e otimizar suas operações minerais. Atuamos em todas as fases do processo minerário, desde a pesquisa inicial até o fechamento da mina, garantindo que sua empresa esteja sempre em conformidade com as normas da Agência Nacional de Mineração.",
    image: "/imagens/Mineração & ANM.mp4"
  },
  {
    id: "geologia-aplicada",
    title: "Geologia Aplicada",
    description: "Mapeamento geológico de precisão e sondagem técnica para viabilização de grandes empreendimentos.",
    icon: <GeoIcon />,
    details: ["Mapeamento Estrutural", "Modelagem 3D de Jazidas", "Campanhas de Sondagem", "Avaliação de Reservas"],
    fullDescription: "A Geologia Aplicada é o alicerce de qualquer projeto de engenharia ou mineração bem-sucedido. Utilizamos as tecnologias mais avançadas de mapeamento e sondagem para fornecer dados precisos sobre o subsolo, permitindo uma tomada de decisão estratégica e segura para o seu empreendimento.",
    image: "/imagens/GeologiaAplicada2.mp4"
  },
  {
    id: "meio-ambiente-licenciamento",
    title: "Meio Ambiente & Licenciamento",
    description: "Soluções ambientais integradas para licenciamento de alta complexidade em órgãos estaduais e federais.",
    icon: <GeoIcon />,
    details: ["EIA/RIMA", "PCA/RCA", "Outorgas de Água", "Gestão de Resíduos e PRAD"],
    fullDescription: "Navegar pela complexidade das leis ambientais exige expertise e compromisso. Nossa equipe de meio ambiente desenvolve estudos de impacto e planos de controle que garantem a viabilidade ambiental do seu projeto, facilitando a obtenção de licenças junto aos órgãos competentes.",
    image: "/imagens/MeioAmbiete.mp4"
  },
  {
    id: "hidrogeologia",
    title: "Hidrogeologia",
    description: "Estudos avançados de aquíferos e modelagem de fluxo para gestão sustentável da água.",
    icon: <GeoIcon />,
    details: ["Teste de Bombeamento", "Monitoramento de Lençol Freático", "Projetos de Rebaixamento", "Modelagem Numérica"],
    fullDescription: "A água é um recurso vital e sua gestão requer precisão técnica. Realizamos estudos hidrogeológicos completos, desde a caracterização de aquíferos até a modelagem numérica de fluxo, garantindo o uso sustentável e eficiente dos recursos hídricos em seu projeto.",
    image: "/imagens/Hidrogeologia.mp4"
  },
  {
    id: "estudos-meio-fisico",
    title: "Estudos do Meio Físico",
    description: "Diagnóstico geológico-geotécnico detalhado para infraestrutura e planejamento urbano.",
    icon: <GeoIcon />,
    details: ["Cartografia Geotécnica", "Análise de Riscos Geológicos", "Estudos de Erosão", "Caracterização de Solos"],
    fullDescription: "Compreender o meio físico é essencial para a segurança de qualquer obra de infraestrutura. Nossos diagnósticos geológico-geotécnicos fornecem as informações necessárias para prevenir riscos, otimizar fundações e garantir a estabilidade de longo prazo das construções.",
    image: "/imagens/MeioFisico.mp4"
  },
  {
    id: "geotecnia",
    title: "Geotecnia & Estabilidade",
    description: "Engenharia geotécnica aplicada à estabilidade de taludes, barragens e pilhas de estéril.",
    icon: <GeoIcon />,
    details: ["Estabilidade de Taludes", "Monitoramento Geotécnico", "Projetos de Contenção", "Inspeção de Segurança"],
    fullDescription: "A segurança operacional em mineração e grandes obras depende da estabilidade geotécnica. Desenvolvemos projetos de contenção e sistemas de monitoramento em tempo real para garantir a integridade de taludes, barragens e pilhas, minimizando riscos e garantindo a continuidade das operações.",
    image: "/imagens/Geotecnica.mp4"
  },
];

export const stats: Stat[] = [
  { label: "Projetos Atendidos", value: "300+" },
  { label: "Clientes & Parcerias", value: "150+" },
  { label: "Anos de Atuação", value: "7+" },
  { label: "Responsabilidade Técnica", value: "100%" },
];

export const LOGO_URL = "/imagens/logo_main.webp";
