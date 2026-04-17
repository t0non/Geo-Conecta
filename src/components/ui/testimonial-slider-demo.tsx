import * as React from "react";
import { TestimonialSlider } from "@/components/ui/testimonial-slider-1";

// Define the review data for Geo Conecta team members
const reviews = [
  {
    id: 1,
    name: "Deisimara Ramos",
    affiliation: "Geóloga | CREA - MG 422462/D",
    quote:
      "Com mais de 15 anos de experiência em geologia aplicada, tenho dedicado minha carreira a transformar desafios complexos em soluções inovadoras para mineração e meio ambiente.",
    imageSrc: "/imagens/Deisimara.webp",
    thumbnailSrc: "/imagens/Deisimara.webp",
  },
  {
    id: 2,
    name: "Joyce Ávila Nascimento",
    affiliation: "Engenheira Geóloga | CREA - MG 247354/D",
    quote:
      "Minha especialidade em engenharia geológica permite integrar conhecimento técnico com práticas sustentáveis, garantindo a viabilidade de projetos de grande escala.",
    imageSrc: "/imagens/Joyce.webp",
    thumbnailSrc: "/imagens/Joyce.webp",
  },
  {
    id: 3,
    name: "Lysson Cley De Souza Ferreira",
    affiliation: "Engenheiro Geólogo | CREA - MG 71811/D",
    quote:
      "A geotecnia é a base da segurança em mineração. Desenvolvo soluções que garantem estabilidade operacional e conformidade com as mais rigorosas normas técnicas.",
    imageSrc: "/imagens/Alyson.webp",
    thumbnailSrc: "/imagens/Alyson.webp",
  },
  {
    id: 4,
    name: "Tâmia Neves",
    affiliation: "Engenheira Sanitarista e Ambiental | CREA - MG 168001/D",
    quote:
      "Unindo expertise ambiental e segurança do trabalho, desenvolvo projetos que protegem tanto pessoas quanto o meio ambiente, criando valor sustentável para nossos clientes.",
    imageSrc: "/imagens/Tamia.webp",
    thumbnailSrc: "/imagens/Tamia.webp",
  },
];

// Render the component with the data
export default function TestimonialSliderDemo() {
  return (
    <div className="w-full">
      <TestimonialSlider reviews={reviews} />
    </div>
  );
}
