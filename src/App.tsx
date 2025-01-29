import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shopping from "./pages/Shopping";
import Tasks from "./pages/Tasks";
import Goals from "./pages/Goals";
import Messages from "./pages/Messages";
import Events from "./pages/Events";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/events" element={<Events />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/budget" element={<NotFound />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;