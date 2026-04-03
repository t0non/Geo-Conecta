import { GeoIcon } from "../components/ui/geo-icon";
import ServiceTemplate from "../components/ServiceTemplate";

const estudosData = {
  hero: {
    badge: "Investigação Geotécnica e Meio Físico",
    title: "Construa sobre",
    titleHighlight: "Terrenos Seguros",
    description: "Não deixe o desconhecido sob o solo destruir seu cronograma e seu lucro. Entregamos diagnósticos geotécnicos de alta precisão para blindar sua obra contra colapsos, trincas e gastos imprevistos.",
    image: "/imagens/MeioFisico.mp4",
    bgColor: "bg-zinc-900",
    gradientColor: "from-zinc-900/80 via-zinc-900/60 to-zinc-900",
    accentColor: "text-green-500"
  },
  problem: {
    title: "O que você não vê sob o terreno",
    titleHighlight: '<span class="text-zinc-900">pode</span> <span class="text-red-500">custar</span> <span class="text-zinc-900">o seu</span> <span class="text-green-500">lucro.</span>',
    content: [
      "<strong>Trincas, recalques e infiltrações</strong> não são apenas falhas estéticas. São sinais de um diagnóstico negligenciado que pode <strong>encarecer sua obra em até 40%</strong> ou levar ao <strong>embargo total</strong> por riscos estruturais.",
      "Na Geo-Conecta, eliminamos a incerteza. Entregamos uma investigação com precisão cirúrgica para garantir que cada centavo do seu investimento vá para uma base sólida e inquestionável."
    ],
    solutions: [
      { title: "INVESTIGAÇÃO BLINDADA", desc: "Mapeamento completo do solo para evitar surpresas custosas." },
      { title: "ZERO INCERTEZA", desc: "Identificação precoce de riscos antes da primeira estaca." },
      { title: "EFICIÊNCIA EXECUTIVA", desc: "Fundações dimensionadas sem desperdícios de material." }
    ]
  },
  solutions: {
    title: "Engenharia que Antecipa Problemas",
    subtitle: "Soluções Geotécnicas",
    cards: [
      {
        id: "sondagem-spt",
        icon: <GeoIcon />,
        title: "Sondagem SPT e Geotécnica",
        desc: "O ponto de partida de toda obra segura. Coleta de dados precisos sobre a resistência e composição de cada camada do solo."
      },
      {
        id: "caracterizacao-solos",
        icon: <GeoIcon />,
        title: "Caracterização de Solos",
        desc: "Ensaios laboratoriais rigorosos para entender o comportamento mecânico do terreno sob carga e umidade."
      },
      {
        id: "mapeamento-geologico",
        icon: <GeoIcon />,
        title: "Mapeamento Geológico-Geotécnico",
        desc: "Visão macro e micro das estruturas geológicas que podem impactar a estabilidade do seu empreendimento a longo prazo."
      },
      {
        id: "laudo-pericia",
        icon: <GeoIcon />,
        title: "Laudo de Vizinhança e Perícia",
        desc: "Blindagem jurídica e técnica para obras urbanas, garantindo a integridade de estruturas adjacentes e evitando conflitos."
      }
    ]
  },
  authority: {
    title: "Autoridade Geotécnica que Constrói Confiança",
    content: [
      "Nossa equipe possui vasta experiência em investigação geotécnica para os mais diversos tipos de empreendimentos, desde pequenas residências até grandes loteamentos e obras de infraestrutura.",
      "Com centenas de estudos executados e laudos aprovados, oferecemos a segurança técnica que seu projeto precisa para ser executado com tranquilidade e economia."
    ],
    image: "/imagens/Campo em Ação.mp4"
  },
  alertSignals: [
    "Trincas ou sinais de recalque em fundações",
    "Erosões avançadas em áreas de loteamento",
    "Suscetibilidade a deslizamentos não avaliada",
    "Multas por falta de laudo geológico de terreno",
    "Embargo de obra por instabilidade de solo"
  ],
  technicalScope: [
    "Caracterização de Solos e Maciços",
    "Análise de Estabilidade de Encostas",
    "Projetos de Drenagem e Controle Erosivo",
    "Investigação Geotécnica (Sondagem SPT)",
    "Cartografia Geotécnica",
    "Laudo de Vizinhança e Perícia Geológica"
  ],
  contact: {
    title: "Dimensione seu",
    subtitle: "estudo geotécnico.",
    buttonText: "Dimensionar Estudo para meu Terreno",
    fields: {
      name: "Nome Completo",
      email: "E-mail Corporativo", 
      subject: "Tipo de Projeto",
      message: "Mensagem"
    },
    options: [
      "Loteamento/Urbanismo",
      "Obras de Infraestrutura",
      "Contenção de Taludes/Riscos",
      "Outros"
    ]
  }
};

export default function EstudosMeioFisico() {
  return <ServiceTemplate data={estudosData} />;
}
