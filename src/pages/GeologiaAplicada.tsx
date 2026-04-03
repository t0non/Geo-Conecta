import { GeoIcon } from "../components/ui/geo-icon";
import ServiceTemplate from "../components/ServiceTemplate";

const geologiaData = {
  hero: {
    badge: "Geologia de Engenharia e Recursos Minerais",
    title: "Geologia Estratégica para",
    titleHighlight: "Ativos de Valor",
    description: "Transformamos incerteza geológica em lucro operacional. Nossa inteligência estrutural e modelagem 3D garantem que você perfure no lugar certo e extraia o máximo valor do seu ativo mineral.",
    image: "https://files.catbox.moe/vjrdea.mp4",
    bgColor: "bg-zinc-900",
    gradientColor: "from-zinc-900/80 via-zinc-900/60 to-zinc-900",
    accentColor: "text-blue-400"
  },
  problem: {
    title: "Geologia imprecisa é um",
    titleHighlight: "ralo de dinheiro.",
    content: [
      "Decisões baseadas em <strong>mapeamentos superficiais</strong> e modelos 3D mal executados levam a <strong>investimentos de milhões</strong> em furos estéreis e lavra ineficiente. Sem inteligência geológica, você opera no escuro.",
      "A Geo-Conecta transforma dados brutos em ativos estratégicos. Nossa <strong>geologia aplicada</strong> entrega modelos estruturais e reservas auditáveis, garantindo lucratividade máxima."
    ],
    solutions: [
      { title: "INTELIGÊNCIA ESTRUTURAL", desc: "Mapeamento cirúrgico de falhas e continuidades minerais." },
      { title: "MODELAGEM DE PRECISÃO", desc: "Modelos 3D integrados para otimização radical do sequenciamento." },
      { title: "RESERVAS SEGURAS", desc: "Cálculos auditáveis sob padrões internacionais para valor do ativo." }
    ]
  },
  solutions: {
    title: "Inteligência que Gera Valor",
    subtitle: "Soluções Geológicas",
    cards: [
      {
        id: "mapeamento-estrutural",
        icon: <GeoIcon />,
        title: "Mapeamento Estrutural",
        desc: "Identificação precisa de controles geológicos que ditam a mineralização e a estabilidade do maciço."
      },
      {
        id: "modelagem-geologica-3d",
        icon: <GeoIcon />,
        title: "Modelagem Geológica 3D",
        desc: "Visualização tridimensional do corpo mineral para planejamento de lavra otimizado e redução de incertezas."
      },
      {
        id: "estimativa-reservas",
        icon: <GeoIcon />,
        title: "Estimativa de Recursos e Reservas",
        desc: "Cálculos matemáticos e estatísticos rigorosos para quantificar o valor real do seu depósito mineral."
      },
      {
        id: "descriçao-testemunhos",
        icon: <GeoIcon />,
        title: "Descrição de Testemunhos",
        desc: "Logagem geológica e geotécnica de alta fidelidade para garantir a qualidade do banco de dados do projeto."
      }
    ]
  },
  authority: {
    title: "Autoridade Geológica para Decisões Críticas",
    content: [
      "Nossa equipe integra mapeamento estrutural, interpretação geológica e modelagem tridimensional para transformar dados dispersos em diagnósticos confiáveis para mineração e obras complexas.",
      "Com atuação em campanhas de sondagem, cálculos de reservas e auditorias técnicas, entregamos a segurança necessária para reduzir incertezas e maximizar o valor do seu ativo mineral."
    ],
    image: "/imagens/GeologiaAplicada2.mp4"
  },
  alertSignals: [
    "Incerteza na volumetria de reservas minerais",
    "Falhas estruturais não mapeadas em taludes",
    "Atrasos em furos de sondagem por má gestão",
    "Laudos geológicos sem padrão CPGM/ANM",
    "Áreas sem título minerário regularizado"
  ],
  technicalScope: [
    "Mapeamento Estrutural Detalhado",
    "Modelagem Geológica 3D",
    "Cálculo de Recursos e Reservas",
    "Fiscalização de Campanhas de Sondagem",
    "Descrição Geológica de Testemunhos",
    "Interpretação de Seções Transversais"
  ],
  contact: {
    title: "Fale com um",
    subtitle: "geólogo especialista.",
    buttonText: "Falar com um Geólogo Especialista",
    fields: {
      name: "Nome Completo",
      email: "E-mail Corporativo", 
      subject: "Tipo de Demanda",
      message: "Mensagem"
    },
    options: [
      "Sondagem",
      "Modelagem 3D",
      "Mapeamento",
      "Avaliação de Reservas",
      "Outros"
    ]
  }
};

export default function GeologiaAplicada() {
  return <ServiceTemplate data={geologiaData} />;
}

