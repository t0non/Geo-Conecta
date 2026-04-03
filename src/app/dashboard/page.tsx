"use client";

import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  XCircle,
  Pickaxe,
  Download,
  BrainCircuit,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const complianceScore = 82;

  const activeProcesses = [
    { id: "ANM-2023-001", type: "Licença de Operação", status: "Em Análise", deadline: "15 Mai 2024", priority: "Alta" },
    { id: "ANM-2023-042", type: "Alvará de Pesquisa", status: "Concedido", deadline: "Expirado", priority: "N/A" },
    { id: "ENV-2024-009", type: "Monitoramento Ambiental", status: "Pendente", deadline: "02 Abr 2024", priority: "Média" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col pt-24 pb-32">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-4">Painel de Controle</div>
            <h1 className="text-5xl font-bold tracking-tighter">Compliance Digital</h1>
          </div>
          <Button variant="outline" className="rounded-none border-black hover:bg-black hover:text-white px-8 h-12 font-bold uppercase text-[10px] tracking-widest">
            <Download className="mr-2 h-3 w-3" /> Exportar Dados
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border mb-24">
          <div className="p-12 border-b md:border-b-0 md:border-r border-border">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Score de Conformidade</div>
            <div className="text-6xl font-bold mb-4">{complianceScore}%</div>
            <Progress value={complianceScore} className="h-[2px] rounded-none bg-gray-100" />
          </div>

          <div className="p-12 border-b md:border-b-0 md:border-r border-border">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Pendências Ativas</div>
            <div className="text-6xl font-bold mb-6">04</div>
            <div className="flex gap-2">
              <Badge variant="outline" className="rounded-none border-red-200 text-red-500 font-bold text-[9px] uppercase px-3 py-1">01 Crítico</Badge>
              <Badge variant="outline" className="rounded-none border-amber-200 text-amber-500 font-bold text-[9px] uppercase px-3 py-1">03 Alertas</Badge>
            </div>
          </div>

          <div className="p-12">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Ativos Monitorados</div>
            <div className="text-6xl font-bold mb-4">12</div>
            <div className="text-[10px] text-accent font-bold uppercase tracking-widest">Áreas Operacionais</div>
          </div>
        </div>

        <Tabs defaultValue="compliance" className="w-full">
          <TabsList className="bg-transparent border-b rounded-none p-0 h-auto mb-16 flex gap-12">
            <TabsTrigger value="compliance" className="bg-transparent border-b-2 border-transparent rounded-none px-0 py-4 text-[10px] font-bold uppercase tracking-widest data-[state=active]:border-black data-[state=active]:text-black text-gray-400 transition-all">Relatórios</TabsTrigger>
            <TabsTrigger value="risks" className="bg-transparent border-b-2 border-transparent rounded-none px-0 py-4 text-[10px] font-bold uppercase tracking-widest data-[state=active]:border-black data-[state=active]:text-black text-gray-400 transition-all">Análise IA</TabsTrigger>
            <TabsTrigger value="licenses" className="bg-transparent border-b-2 border-transparent rounded-none px-0 py-4 text-[10px] font-bold uppercase tracking-widest data-[state=active]:border-black data-[state=active]:text-black text-gray-400 transition-all">Processos</TabsTrigger>
          </TabsList>

          <TabsContent value="compliance">
            <div className="space-y-[1px] bg-border border border-border">
              {[
                { title: "RAL (Relatório Anual de Lavra)", status: "done", date: "Enviado em 15/03" },
                { title: "Taxa Anual por Hectare (TAH)", status: "pending", date: "Vence em 30 dias" },
                { title: "Estabilidade de Barragens", status: "critical", date: "Ação Imediata" },
                { title: "Renovação de LO", status: "done", date: "Protocolado" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-10 bg-white group hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-8">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      item.status === 'done' ? "bg-green-500" :
                      item.status === 'critical' ? "bg-red-500" : "bg-amber-500"
                    )}></div>
                    <div>
                      <p className="font-bold text-xl">{item.title}</p>
                      <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold mt-1">{item.date}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="rounded-none hover:bg-black hover:text-white font-bold text-[9px] uppercase tracking-widest">
                    Ver Protocolo <ArrowUpRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="risks">
            <div className="border border-border p-20 text-center flex flex-col items-center">
              <BrainCircuit className="h-12 w-12 text-accent mb-12" strokeWidth={1} />
              <h3 className="text-3xl font-bold mb-4 tracking-tighter">Processamento Neural Ativo</h3>
              <p className="text-gray-400 font-light max-w-sm mx-auto mb-12">
                Nossa IA está cruzando dados em tempo real para identificar riscos antes que eles se tornem multas.
              </p>
              <div className="flex gap-4">
                <Button className="bg-black text-white hover:bg-accent px-12 h-14 rounded-none font-bold uppercase text-[10px] tracking-widest">Acessar Insight</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="licenses">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border border border-border">
              {activeProcesses.map((proc) => (
                <div key={proc.id} className="p-12 bg-white flex flex-col justify-between h-80 hover:bg-gray-50 transition-colors">
                  <div>
                    <div className="flex justify-between items-start mb-12">
                      <div className="text-[9px] font-bold text-accent uppercase tracking-widest">Status: {proc.status}</div>
                      <div className="text-[9px] font-light text-gray-300 uppercase tracking-widest">{proc.id}</div>
                    </div>
                    <h4 className="text-2xl font-bold leading-tight">{proc.type}</h4>
                  </div>
                  <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Prazo: {proc.deadline}</span>
                    <ArrowUpRight className="h-4 w-4 text-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}