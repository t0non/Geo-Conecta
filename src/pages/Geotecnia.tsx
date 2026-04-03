import { GeoIcon } from "../components/ui/geo-icon";
import ServiceTemplate from "../components/ServiceTemplate";

const geotecniaData = {
  hero: {
    badge: "Engenharia Geotécnica e Estabilidade",
    title: "Proteja sua Operação com",
    titleHighlight: "Segurança Absoluta",
    description: "Rupturas não avisam, mas podem ser evitadas. Combinamos monitoramento de precisão e engenharia de ponta para garantir a estabilidade total de suas estruturas e a continuidade do seu negócio.",
    image: "/imagens/Geotecnica.mp4",
    bgColor: "bg-zinc-900",
    gradientColor: "from-zinc-900/80 via-zinc-900/60 to-zinc-900",
    accentColor: "text-yellow-400"
  },
  problem: {
    title: "Uma ruptura silenciosa",
    titleHighlight: "pode interromper sua operação.",
    content: [
      "<strong>Taludes instáveis e barragens sem monitoramento</strong> são bombas-relógio que colocam em risco <strong>vidas, o meio ambiente e a continuidade do seu negócio</strong>. O custo de um acidente geotécnico é infinitamente superior ao de uma gestão preventiva.",
      "Na Geo-Conecta, atuamos com precisão absoluta. Nossa engenharia combina monitoramento em tempo real com análises avançadas para <strong>blindar sua operação</strong> e garantir total conformidade legal."
    ],
    solutions: [
      { title: "MONITORAMENTO ATIVO", desc: "Sistemas de alerta precoce que antecipam movimentações do maciço." },
      { title: "ESTABILIDADE GARANTIDA", desc: "Cálculos rigorosos de fatores de segurança para cavas e barragens." },
      { title: "SEGURANÇA JURÍDICA", desc: "Laudos e DCEs tecnicamente inquestionáveis para fiscalização." }
    ]
  },
  solutions: {
    title: "Engenharia de Alta Performance",
    subtitle: "Soluções Geotécnicas",
    cards: [
      {
        id: "estabilidade-taludes",
        icon: <GeoIcon />,
        title: "Estabilidade de Taludes e Encostas",
        desc: "Análises de equilíbrio limite e métodos numéricos para garantir que sua cava ou encosta urbana permaneça estável."
      },
      {
        id: "seguranca-barragens",
        icon: <GeoIcon />,
        title: "Segurança de Barragens (PSB/PAE)",
        desc: "Gestão integral de segurança, com inspeções, relatórios e planos de ação para total conformidade regulatória."
      },
      {
        id: "instrumentacao-geotecnica",
        icon: <GeoIcon />,
        title: "Instrumentação e Monitoramento",
        desc: "Instalação e leitura de piezômetros, inclinômetros e marcos superficiais para controle em tempo real."
      },
      {
        id: "projeto-contencoes",
        icon: <GeoIcon />,
        title: "Projeto de Contenções e Reforço",
        desc: "Dimensionamento de muros de arrimo, solo grampeado e tirantes com foco em eficiência e segurança."
      }
    ]
  },
  authority: {
    title: "Autoridade Geotécnica que Constrói Confiança",
    content: [
      "Nossa equipe de geotécnicos possui vasta experiência em projetos de grande complexidade, desde pequenas contenções até grandes barragens de rejeito. Dominamos as técnicas mais modernas de análise e monitoramento geotécnico.",
      "Com centenas de laudos aprovados e estruturas monitoradas, oferecemos a segurança geotécnica que sua operação precisa para operar com tranquilidade e conformidade total."
    ],
    image: "/imagens/Geotecnica2.mp4"
  },
  alertSignals: [
    "Movimentação atípica em prismas de monitoramento",
    "Fator de segurança abaixo do limite normativo",
    "Exigências técnicas da ANM/Defesa Civil",
    "Necessidade imediata de DCE (Estabilidade)",
    "Vazamentos ou surgências em taludes de barragem"
  ],
  technicalScope: [
    "Dimensionamento de Obras de Contenção",
    "Análise de Estabilidade (Mina/Barragem)",
    "Auditoria e Segurança de Barragens (DCE)",
    "Instalação e Leitura de Instrumentação Geotécnica",
    "Projetos de Reforço de Solo e Tirantes",
    "Análise de Tensões e Deformações (FEM)"
  ],
  contact: {
    title: "Agende sua",
    subtitle: "inspeção de segurança.",
    buttonText: "Agendar Inspeção de Segurança",
    fields: {
      name: "Nome Completo",
      email: "E-mail Corporativo", 
      subject: "Tipo de Estrutura",
      message: "Mensagem"
    },
    options: [
      "Barragem de Rejeito/Água",
      "Pilha de Estéril",
      "Talude de Cava/Corte",
      "Contenção Urbana",
      "Outros"
    ]
  }
};

export default function Geotecnia() {
  return <ServiceTemplate data={geotecniaData} />;
}

