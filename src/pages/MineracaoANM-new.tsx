import { 
  MapPin, 
  FileText, 
  Pickaxe, 
  BarChart3
} from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";

const mineracaoData = {
  hero: {
    badge: "Assessoria Especializada em Direito Minerário e ANM",
    title: "Destrave seu Processo na ANM e",
    titleHighlight: "Garanta o seu Direito de Lavra",
    description: "Assumimos toda a complexidade técnica e burocrática – do requerimento de área à concessão final. Proteja seu investimento e não perca prazos com órgãos reguladores.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000",
    bgColor: "bg-zinc-900",
    gradientColor: "from-zinc-900/80 via-zinc-900/60 to-zinc-900",
    accentColor: "text-zinc-400"
  },
  problem: {
    title: "Um erro de prazo na ANM",
    titleHighlight: "pode custar a sua área.",
    content: [
      "O setor mineral não perdoa amadorismo. Processos travados, perda de prazos para relatórios, exigências não cumpridas e multas podem inviabilizar a sua operação ou fazer você perder o direito sobre o subsolo.",
      "Você não precisa lidar com esse risco. A equipe técnica da Geo-Conecta cuida de toda a gestão do seu processo minerário para que você tenha total segurança jurídica e operacional."
    ],
    solutions: [
      { title: "Prazos Críticos", desc: "Monitoramento 24/7 de todos os marcos regulatórios." },
      { title: "Exigências Técnicas", desc: "Resposta imediata a notificações da Agência." },
      { title: "Conformidade Legal", desc: "Blindagem contra multas e sanções administrativas." }
    ]
  },
  solutions: {
    title: "Tudo o que o seu empreendimento precisa para operar na legalidade",
    subtitle: "Soluções completas para mineração",
    cards: [
      {
        icon: <MapPin className="w-8 h-8" />,
        title: "Requerimento e Pesquisa Mineral",
        desc: "Estruturação e protocolo de requerimentos de área, elaboração de Plano de Pesquisa e gestão completa dos alvarás para garantir a prioridade do seu projeto."
      },
      {
        icon: <FileText className="w-8 h-8" />,
        title: "Relatórios Técnicos e PAE",
        desc: "Elaboração de Relatório Final de Pesquisa (RFP) e Plano de Aproveitamento Econômico (PAE) com alto rigor técnico para aprovação rápida na Agência."
      },
      {
        icon: <Pickaxe className="w-8 h-8" />,
        title: "Regularização e Concessão de Lavra",
        desc: "Condução de todas as etapas para a obtenção da Portaria de Lavra, Licenciamento de áreas e PLG (Permissão de Lavra Garimpeira)."
      },
      {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Gestão Total de Processos Minerários",
        desc: "Monitoramento contínuo dos seus processos na ANM, cumprimento de exigências, controle de prazos e atualização do RAL (Relatório Anual de Lavra)."
      }
    ]
  },
  authority: {
    title: "Autoridade Técnica que",
    content: [
      "Nossa equipe é formada por especialistas com vasta experiência em processos junto à ANM e outros órgãos reguladores. Conhecemos a fundo a legislação mineral e os procedimentos técnicos exigidos.",
      "Com mais de 300 processos aprovados, oferecemos a segurança jurídica que seu projeto precisa para prosperar no competitivo setor mineral brasileiro."
    ],
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a709475?auto=format&fit=crop&q=80&w=1000"
  },
  contact: {
    title: "Inicie sua",
    subtitle: "consultoria minerária.",
    buttonText: "Quero Regularizar minha Área Agora",
    fields: {
      name: "Nome Completo",
      email: "E-mail Corporativo", 
      subject: "Tipo de Demanda",
      message: "Mensagem"
    },
    options: [
      "Requerimento de Pesquisa",
      "Relatório Final de Pesquisa (RFP)",
      "Plano de Aproveitamento Econômico (PAE)",
      "Portaria de Lavra",
      "Processo Embargado/Parado",
      "Outros"
    ]
  }
};

export default function MineracaoANM() {
  return <ServiceTemplate data={mineracaoData} />;
}
