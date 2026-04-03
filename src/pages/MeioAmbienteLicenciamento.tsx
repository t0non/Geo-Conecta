import { GeoIcon } from "../components/ui/geo-icon";
import ServiceTemplate from "../components/ServiceTemplate";

const meioAmbienteData = {
  hero: {
    badge: "Licenciamento Ambiental e Consultoria",
    title: "Sua Operação em",
    titleHighlight: "Total Conformidade",
    description: "Não deixe burocracia e exigências ambientais travarem seu crescimento. Garantimos o cumprimento rigoroso de todas as normas para que você opere com segurança jurídica e respeito ao meio ambiente.",
    image: "/imagens/MeioAmbiete.mp4",
    bgColor: "bg-zinc-900",
    gradientColor: "from-zinc-900/80 via-zinc-900/60 to-zinc-900",
    accentColor: "text-emerald-500"
  },
  problem: {
    title: "Conformidade ambiental não é",
    titleHighlight: "opcional.",
    content: [
      "Processos mal conduzidos resultam em <strong>multas pesadas, embargos imediatos e danos à imagem</strong>. O custo da irregularidade é sempre maior que o da gestão preventiva.",
      "Na Geo-Conecta, simplificamos o complexo. Atuamos na linha de frente para garantir que sua <strong>licença saia no prazo</strong> e sua operação permaneça blindada contra riscos legais."
    ],
    solutions: [
      { title: "LICENCIAMENTO ÁGIL", desc: "Condução estratégica para aprovação rápida de LP, LI e LO." },
      { title: "GESTÃO DE CONDICIONANTES", desc: "Monitoramento rigoroso para evitar multas e suspensões." },
      { title: "SEGURANÇA JURÍDICA", desc: "Estudos de impacto (EIA/RIMA) tecnicamente inquestionáveis." }
    ]
  },
  solutions: {
    title: "Gestão Ambiental Estratégica",
    subtitle: "Soluções Ambientais",
    cards: [
      {
        id: "licenciamento-ambiental",
        icon: <GeoIcon />,
        title: "Licenciamento Ambiental Integrado",
        desc: "Gestão completa das etapas de Licença Prévia (LP), de Instalação (LI) e de Operação (LO) junto aos órgãos competentes."
      },
      {
        id: "gestao-residuos",
        icon: <GeoIcon />,
        title: "Gestão de Resíduos (PGRS)",
        desc: "Planos de Gerenciamento de Resíduos Sólidos eficientes que otimizam custos e garantem a destinação correta."
      },
      {
        id: "recuperacao-areas",
        icon: <GeoIcon />,
        title: "Recuperação de Áreas (PRAD)",
        desc: "Projetos de Reabilitação de Áreas Degradadas com foco em sustentabilidade e atendimento às exigências legais."
      },
      {
        id: "estudos-impacto",
        icon: <GeoIcon />,
        title: "Estudos de Impacto e Diagnóstico",
        desc: "Levantamentos detalhados de fauna, flora e meio físico para embasar tomadas de decisão e licenciamentos complexos."
      }
    ]
  },
  authority: {
    title: "Autoridade Ambiental que Constrói Confiança",
    content: [
      "Nossa equipe possui vasta experiência em licenciamentos de grande porte, desde pequenos empreendimentos até complexos industriais e mineração. Conhecemos profundamente os procedimentos de todos os órgãos ambientais brasileiros.",
      "Com centenas de licenças obtidas, oferecemos a segurança técnica e jurídica que seu projeto precisa para operar em total conformidade ambiental."
    ],
    image: "/imagens/MeioAmbiete2.mp4"
  },
  alertSignals: [
    "Risco de multa por vencimento de condicionantes",
    "Embargo imediato de obra por falta de LP/LI",
    "Notificações do IBAMA ou órgãos estaduais",
    "Inconsistências críticas no PGRS ou PRAD",
    "Acidentes ambientais com necessidade de perícia"
  ],
  technicalScope: [
    "Elaboração de EIA/RIMA e RCA/PCA",
    "Gestão Integral de Condicionantes Ambientais",
    "Inventário Florestal e Levantamento de Biomassa",
    "Plano de Recuperação de Áreas Degradadas (PRAD)",
    "Inventário de Fauna e Flora",
    "Emissão de ART para Laudos Ambientais"
  ],
  contact: {
    title: "Agende sua",
    subtitle: "análise ambiental.",
    buttonText: "Agendar Análise Ambiental Gratuita",
    fields: {
      name: "Nome Completo",
      email: "E-mail Corporativo", 
      subject: "Tipo de Licença",
      message: "Mensagem"
    },
    options: [
      "LP (Licença Prévia)",
      "LI (Licença de Instalação)",
      "LO (Licença de Operação)",
      "PGRS / PRAD",
      "Outros"
    ]
  }
};

export default function MeioAmbienteLicenciamento() {
  return <ServiceTemplate data={meioAmbienteData} />;
}
