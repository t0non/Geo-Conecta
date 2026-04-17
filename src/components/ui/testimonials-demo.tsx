import { TestimonialSection } from "@/components/ui/testimonials"; // Adjust the import path as needed 
  
 // Sample data for the Geo Conecta specialists testimonials 
 const testimonialsData = [ 
   { 
     id: 1, 
     quote: 
       "Nosso mapeamento geológico não é apenas descritivo, é desenhado para anular riscos operacionais e garantir a conformidade ambiental irrefutável.", 
     name: "Joyce Ávila Nascimento", 
     role: "Engenheira Geóloga | CREA - MG 247354/D", 
     imageSrc: "/imagens/Joyce.webp", 
   }, 
   { 
     id: 2, 
     quote: 
       "Transformamos dados brutos de campo em inteligência de negócios. Nossa execução cirúrgica minimiza custos de exploração e acelera aprovações regulatórias.", 
     name: "Alysson Cley De Souza Ferreira", 
     role: "Engenheiro Geólogo | CREA - MG 71811/D", 
     imageSrc: "/imagens/Alyson.webp", 
   }, 
   { 
     id: 3, 
     quote: 
       "A precisão técnica é o nosso alicerce. Garantimos que cada projeto esteja em total conformidade com as normas vigentes, trazendo segurança jurídica e técnica.", 
     name: "Deisimara Ramos", 
     role: "Geóloga | CREA - MG 422462/D", 
     imageSrc: "/imagens/Deisimara.webp", 
   }, 
   { 
     id: 4, 
     quote: 
       "Sustentabilidade e segurança caminham juntas. Nossa abordagem integrada garante projetos eficientes, seguros e ambientalmente responsáveis.", 
     name: "Tâmia Neves", 
     role: "Eng. Sanitarista, Ambiental e de Segurança do Trabalho | CREA - MG 168001/D", 
     imageSrc: "/imagens/Tamia.webp", 
   }, 
 ]; 
  
 const TestimonialSectionDemo = () => { 
   return ( 
     <TestimonialSection 
       title="See what all the talk is about!" 
       subtitle="Quem assina a excelência do seu projeto. Seu projeto é liderado por especialistas com profundo trânsito regulatório e rigor técnico irrefutável." 
       testimonials={testimonialsData} 
     /> 
   ); 
 }; 
  
 export default TestimonialSectionDemo; 
