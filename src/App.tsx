import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/site/Layout";
import Index from "./pages/Index";
import Solucoes from "./pages/Solucoes";
import Sobre from "./pages/Sobre";
import Cases from "./pages/Cases";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contato from "./pages/Contato";
import Duvidas from "./pages/Duvidas";
import Privacidade from "./pages/Privacidade";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/solucoes" element={<Solucoes />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/duvidas-frequentes" element={<Duvidas />} />
              <Route path="/politica-de-privacidade" element={<Privacidade />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
