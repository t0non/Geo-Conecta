"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Planejamento",
    date: "Jan 2024",
    content: "Fase de planejamento do projeto e levantamento de requisitos.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design Técnico",
    date: "Fev 2024",
    content: "Design de UI/UX e arquitetura do sistema geológico.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Desenvolvimento",
    date: "Mar 2024",
    content: "Implementação de funcionalidades principais e testes de campo.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Testes & QA",
    date: "Abr 2024",
    content: "Testes de usuário e correções de bugs.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Lançamento",
    date: "Mai 2024",
    content: "Implantação final e lançamento do projeto.",
    category: "Release",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <div className="w-full h-[600px] rounded-[3rem] overflow-hidden border border-zinc-800">
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
}

export default RadialOrbitalTimelineDemo;
