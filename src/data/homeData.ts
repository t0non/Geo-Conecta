import { Testimonial } from "../components/ui/animated-testimonials";

export const testimonialsData: Testimonial[] = [
  {
    name: "Joyce Ávila Nascimento",
    designation: "Engenheira Geóloga | CREA - MG 247354/D",
    quote: "Mapeamento de precisão para anular riscos operacionais e blindar sua conformidade ambiental.",
    src: "/imagens/Joyce.webp"
  },
  {
    name: "Alysson Cley De Souza Ferreira",
    designation: "Engenheiro Geólogo | CREA - MG 71811/D",
    quote: "Dados transformados em inteligência para reduzir custos e acelerar prazos junto à ANM.",
    src: "/imagens/Alyson.webp"
  },
  {
    name: "Deisimara Ramos",
    designation: "Geóloga | CREA - MG 422462/D",
    quote: "Cuidado técnico minucioso para assegurar conformidade total e proteção jurídica ao projeto.",
    src: "/imagens/Deisimara.webp"
  },
  {
    name: "Tâmia Neves",
    designation: "Eng. Sanitarista, Ambiental e de Segurança do Trabalho | CREA - MG 168001/D",
    quote: "Abordagem integrada para garantir operações licenciadas, seguras e sustentáveis.",
    src: "/imagens/Tamia.webp"
  }
];

export const faqData = [
  { question: "Como vocês conseguem agilizar o cumprimento de prazos na ANM?", answer: "Através de monitoramento diário do Diário Oficial da União e softwares proprietários, nossa equipe de analistas regulatórios responde a exigências em tempo real, evitando a caducidade de títulos e garantindo a manutenção da prioridade mineral." },
  { question: "Qual a importância da modelagem geológica 3D para o valor de mercado do meu ativo?", answer: "A modelagem 3D reduz significativamente as incertezas geológicas, permitindo um planejamento de lavra otimizado e elevando o valor percebido do ativo frente a investidores nacionais e estrangeiros (Padrões NI 43-101 e JORC)." },
  { question: "Vocês realizam auditorias técnicas para captação de investimento estrangeiro?", answer: "Sim. Nossos consultores (mestres e doutores) elaboram laudos e relatórios segundo normas internacionais de auditoria mineral, essenciais para IPOs, fusões, aquisções e aportes de capital de risco." },
  { question: "Como o licenciamento ambiental integrado pode reduzir custos operacionais?", answer: "Ao tratar geologia e meio ambiente em uma estratégia unificada, antecipamos riscos de restrições de lavra, reduzimos retrabalho em estudos de impacto e aceleramos a obtenção de Licenças Prévias e de Instalação." },
  { question: "O que acontece se meu Relatório Final de Pesquisa for indeferido pela ANM?", answer: "O indeferimento pode levar à perda definitiva da área. Por isso, trabalhamos com rigor científico e revisão técnica dupla em nossos relatórios, assegurando que os dados apresentados sejam irrefutáveis e tecnicamente consistentes." }
];

export const casesData = [
  { 
    metric: "48h",
    metricLabel: "Tempo de Reação",
    title: "Resgate de Prioridade Mineral",
    challenge: "Área com risco de embargo por atraso no envio do RAL e exigências não respondidas.", 
    impact: "Auditoria emergencial e protocolo em tempo recorde. Multas anuladas e título preservado." 
  },
  { 
    metric: "100%",
    metricLabel: "Aprovação em LP",
    title: "Licenciamento de Alta Complexidade",
    challenge: "Necessidade de LP/LI em área sensível sem dados estruturais consistentes.", 
    impact: "Mapeamento 3D irrefutável e EIA/RIMA aprovado sem ressalvas no conselho ambiental." 
  },
  { 
    metric: "R$ 12M",
    metricLabel: "Capital Assegurado",
    title: "Auditoria Padrão NI 43-101",
    challenge: "Indefinição de geometria de corpo de minério para aporte de capital estrangeiro.", 
    impact: "Otimização de sondagem e laudo auditado garantindo a confiança dos investidores." 
  }
];
