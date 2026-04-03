import { GeoIcon } from "../components/ui/geo-icon";
import ServiceTemplate from "../components/ServiceTemplate";

const mineracaoData = {
  hero: {
    badge: "Gestão Estratégica na ANM",
    title: "Não coloque sua",
    titleHighlight: "Mineração em risco.",
    description: "Evite multas pesadas e a perda da sua área. Regularizamos seu processo na ANM com rigor técnico e agilidade estratégica para você focar no que importa: sua produção.",
    image: "/imagens/Mineração & ANM.mp4",
    bgColor: "bg-zinc-900",
    gradientColor: "from-zinc-900/80 via-zinc-900/60 to-zinc-900",
    accentColor: "text-red-500"
  },
  problem: {
    title: "Burocracia não precisa ser um",
    titleHighlight: "fim de linha para você.",
    content: [
      "<strong>Processos paralisados, exigências mal respondidas e prazos perdidos</strong> são os principais motivos de perda de áreas promissoras. Na Geo-Conecta, entendemos que seu tempo é dinheiro e sua área é o seu <strong>maior ativo</strong>.",
      "Atuamos como seu <strong>braço direito estratégico</strong> junto à ANM, garantindo que cada etapa legal seja cumprida com perfeição técnica para que sua operação nunca pare."
    ],
    solutions: [
      { title: "GESTÃO DE PRIORIDADE", desc: "Garanta a posse da sua área antes da concorrência." },
      { title: "ZERO MULTAS", desc: "Controle rigoroso de prazos e obrigações anuais (RAL/CFEM)." },
      { title: "SEGURANÇA JURÍDICA", desc: "Laudos e relatórios (PAE/RFP) que atendem 100% das normas." }
    ]
  },
  solutions: {
    title: "Soluções para sua Regularidade Mineral",
    subtitle: "Nosso Escopo",
    cards: [
      {
        id: "requerimento-pesquisa",
        icon: <GeoIcon />,
        title: "Requerimento e Pesquisa",
        desc: "Protocolo estratégico de requerimentos de área e gestão completa dos alvarás para garantir sua prioridade mineral."
      },
      {
        id: "relatorios-tecnicos",
        icon: <GeoIcon />,
        title: "Relatórios Técnicos (PAE/RFP)",
        desc: "Elaboração de Relatórios Finais de Pesquisa e Planos de Aproveitamento Econômico com alto rigor para aprovação rápida."
      },
      {
        id: "concessao-lavra",
        icon: <GeoIcon />,
        title: "Concessão de Lavra",
        desc: "Condução total das etapas para obtenção da Portaria de Lavra e licenciamentos específicos para operação."
      },
      {
        id: "gestao-processos",
        icon: <GeoIcon />,
        title: "Gestão de Processos",
        desc: "Monitoramento contínuo na ANM, cumprimento de exigências, controle de prazos e atualização de RAL/CFEM."
      }
    ]
  },
  authority: {
    title: "Especialistas em Direito Minerário e ANM",
    content: [
      "Com mais de 300 processos geridos em todo o território nacional, nossa equipe técnica possui o know-how necessário para destravar processos complexos e garantir a segurança jurídica do seu ativo mineral.",
      "Atuamos desde o requerimento inicial até a concessão de lavra, oferecendo uma consultoria 360º que anula riscos de caducidade e multas desnecessárias."
    ],
    image: "/imagens/MineraçãoANM2.mp4"
  },
  alertSignals: [
    "Processos paralisados há mais de 6 meses",
    "Prazos de RAL ou CFEM próximos ao vencimento",
    "Exigências da ANM não respondidas",
    "Risco de perda de prioridade por terceiros",
    "Necessidade de Guia de Utilização urgente"
  ],
  technicalScope: [
    "Requerimento de Áreas e Gestão de Prioridade",
    "Elaboração de Planos de Pesquisa Mineral",
    "Protocolo de Relatório Final de Pesquisa (RFP)",
    "Plano de Aproveitamento Econômico (PAE)",
    "Gestão e Monitoramento de Processos Digitais",
    "Cálculo e Gestão de Royalties (CFEM)",
    "Emissão de ARTs de Responsabilidade Técnica",
    "Guia de Utilização e Relatórios de Lavra"
  ],
  contact: {
    title: "Inicie sua",
    subtitle: "regularização mineral.",
    buttonText: "Solicitar Diagnóstico Mineral",
    fields: {
      name: "Nome Completo",
      email: "E-mail Corporativo", 
      subject: "Tipo de Demanda",
      message: "Mensagem"
    },
    options: [
      "Processo Paralisado na ANM",
      "Requerimento de Área",
      "Relatórios Técnicos (PAE/RFP)",
      "Regularização de Processo",
      "Consultoria Preventiva"
    ]
  }
};

export default function MineracaoANM() {
  return <ServiceTemplate data={mineracaoData} />;
}
