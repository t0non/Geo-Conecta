"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BrainCircuit, Loader2, Sparkles, Copy, TrendingUp, Sparkle } from "lucide-react";
import { getLandingPageOptimizationSuggestions, type LandingPageOptimizationOutput } from "@/ai/flows/landing-page-optimization-suggestions";
import { useToast } from "@/hooks/use-toast";

export default function OptimizerPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<LandingPageOptimizationOutput | null>(null);

  const [formData, setFormData] = useState({
    currentPageTitle: "Soluções Jurídicas para Mineração",
    currentPageValueProposition: "Ajudamos mineradoras a obterem licenças e evitarem multas com consultoria especializada.",
    currentPageCallToAction: "Agende sua consultoria",
    targetAudience: "Donos de mineradoras de pequeno e médio porte em Minas Gerais.",
    desiredOutcome: "Leads qualificados interessados em licenciamento ambiental.",
  });

  const handleOptimize = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await getLandingPageOptimizationSuggestions(formData);
      setResults(output);
      toast({
        title: "Otimização Concluída!",
        description: "A IA gerou novas sugestões estratégicas.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao otimizar",
        description: "Não foi possível gerar sugestões no momento.",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      description: "Copiado para a área de transferência!",
    });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col pt-24">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              <BrainCircuit className="h-3.5 w-3.5" />
              <span>Marketing Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-headline mb-6 tracking-tight">Otimizador de <span className="gradient-text">Conversão</span></h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Refine a comunicação da sua marca com o poder da GenAI. Transformamos dados brutos em propostas de valor irresistíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Input Form */}
            <div className="lg:col-span-5">
              <Card className="shadow-2xl shadow-gray-200/50 border-none rounded-[2.5rem] overflow-hidden">
                <CardHeader className="bg-black text-white p-10">
                  <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                    <Sparkles className="h-6 w-6 text-accent" />
                    Input Estratégico
                  </CardTitle>
                  <CardDescription className="text-gray-400 font-light">
                    Forneça o contexto atual para análise.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-10 space-y-8 bg-white">
                  <form onSubmit={handleOptimize} className="space-y-8">
                    <div className="space-y-3">
                      <Label htmlFor="title" className="text-xs font-bold uppercase tracking-widest text-gray-400">Título Atual</Label>
                      <Input 
                        id="title" 
                        value={formData.currentPageTitle}
                        onChange={(e) => setFormData({...formData, currentPageTitle: e.target.value})}
                        className="rounded-xl border-gray-100 h-12 focus:ring-accent bg-gray-50/30"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="valueProp" className="text-xs font-bold uppercase tracking-widest text-gray-400">Proposta de Valor</Label>
                      <Textarea 
                        id="valueProp"
                        rows={4}
                        value={formData.currentPageValueProposition}
                        onChange={(e) => setFormData({...formData, currentPageValueProposition: e.target.value})}
                        className="rounded-xl border-gray-100 focus:ring-accent bg-gray-50/30 resize-none"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="cta" className="text-xs font-bold uppercase tracking-widest text-gray-400">CTA</Label>
                      <Input 
                        id="cta"
                        value={formData.currentPageCallToAction}
                        onChange={(e) => setFormData({...formData, currentPageCallToAction: e.target.value})}
                        className="rounded-xl border-gray-100 h-12 bg-gray-50/30"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full accent-gradient hover:opacity-90 text-white font-bold h-16 rounded-full text-lg shadow-xl shadow-accent/20 transition-all hover:scale-[1.02] ease-premium"
                      disabled={loading}
                    >
                      {loading ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analisando Contexto...</>
                      ) : (
                        "Gerar Otimização Elite"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-7 space-y-10">
              {!results && !loading && (
                <div className="h-[600px] flex flex-col items-center justify-center p-20 bg-white rounded-[3rem] border border-dashed border-gray-200 text-center shadow-inner">
                  <div className="w-24 h-24 bg-gray-50 rounded-[2.5rem] flex items-center justify-center mb-8">
                    <TrendingUp className="h-10 w-10 text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-500 mb-2">Pronto para Análise</h3>
                  <p className="text-gray-400 font-light max-w-xs leading-relaxed">Clique no botão ao lado para iniciar o processamento de linguagem natural.</p>
                </div>
              )}

              {loading && (
                <div className="h-[600px] flex flex-col items-center justify-center p-20 bg-white rounded-[3rem] text-center">
                  <div className="relative mb-12">
                    <BrainCircuit className="h-20 w-20 text-accent animate-pulse relative z-10" />
                    <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Orquestrando Insights</h3>
                  <p className="text-gray-400 font-light text-lg">Processando gatilhos mentais e propostas de valor disruptivas...</p>
                </div>
              )}

              {results && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-premium">
                  <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] bg-white overflow-hidden">
                    <CardHeader className="p-8 pb-4 border-l-[6px] border-accent">
                      <CardTitle className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Headlines Recomendadas</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 space-y-4">
                      {results.optimizedTitleSuggestions.map((suggestion, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-6 p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-accent/10 transition-all group ease-premium">
                          <p className="text-lg font-bold">{suggestion}</p>
                          <Button variant="ghost" size="icon" onClick={() => copyToClipboard(suggestion)} className="h-10 w-10 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                            <Copy className="h-4 w-4 text-accent" />
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] bg-white overflow-hidden">
                    <CardHeader className="p-8 pb-4 border-l-[6px] border-accent">
                      <CardTitle className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Propostas de Valor</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 space-y-4">
                      {results.optimizedValuePropositionSuggestions.map((suggestion, idx) => (
                        <div key={idx} className="flex items-start justify-between gap-6 p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-accent/10 transition-all group ease-premium">
                          <p className="text-base text-gray-600 leading-relaxed italic">"{suggestion}"</p>
                          <Button variant="ghost" size="icon" onClick={() => copyToClipboard(suggestion)} className="h-10 w-10 shrink-0 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                            <Copy className="h-4 w-4 text-accent" />
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-2xl shadow-gray-200/50 rounded-[2.5rem] bg-black text-white p-10">
                    <CardHeader className="p-0 mb-8">
                       <CardTitle className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Checklist de Otimização</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {results.generalOptimizationTips?.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-4 text-sm font-light text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                            <Sparkle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
