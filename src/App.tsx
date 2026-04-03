import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Code splitting para reduzir bundle inicial
const Home = lazy(() => import("./pages/Home"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const MineracaoANM = lazy(() => import("./pages/MineracaoANM"));
const GeologiaAplicada = lazy(() => import("./pages/GeologiaAplicada"));
const MeioAmbienteLicenciamento = lazy(() => import("./pages/MeioAmbienteLicenciamento"));
const Hidrogeologia = lazy(() => import("./pages/Hidrogeologia"));
const EstudosMeioFisico = lazy(() => import("./pages/EstudosMeioFisico"));
const Geotecnia = lazy(() => import("./pages/Geotecnia"));

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<div className="h-screen w-screen bg-zinc-950 flex items-center justify-center"><div className="w-10 h-10 border-4 border-zinc-800 border-t-zinc-200 rounded-full animate-spin" /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servico/mineracao-anm" element={<MineracaoANM />} />
          <Route path="/servico/geologia-aplicada" element={<GeologiaAplicada />} />
          <Route path="/servico/meio-ambiente-licenciamento" element={<MeioAmbienteLicenciamento />} />
          <Route path="/servico/hidrogeologia" element={<Hidrogeologia />} />
          <Route path="/servico/estudos-meio-fisico" element={<EstudosMeioFisico />} />
          <Route path="/servico/geotecnia" element={<Geotecnia />} />
          <Route path="/servico/:id" element={<ServiceDetail />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
