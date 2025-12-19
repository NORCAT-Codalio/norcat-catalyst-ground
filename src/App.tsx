import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import MiningInnovation from "./pages/MiningInnovation";
import Ecosystem from "./pages/Ecosystem";
import Impact from "./pages/Impact";
import Events from "./pages/Events";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";
// Portal pages
import Auth from "./pages/portal/Auth";
import PendingApproval from "./pages/portal/PendingApproval";
import Dashboard from "./pages/portal/Dashboard";
import Resources from "./pages/portal/Resources";
import Mentors from "./pages/portal/Mentors";
import PortalEvents from "./pages/portal/Events";
import Reports from "./pages/portal/Reports";
import Company from "./pages/portal/Company";
import Notifications from "./pages/portal/Notifications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/mining-innovation" element={<MiningInnovation />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/apply" element={<Apply />} />
            {/* Portal Routes */}
            <Route path="/portal/auth" element={<Auth />} />
            <Route path="/portal/pending" element={<PendingApproval />} />
            <Route path="/portal" element={<Dashboard />} />
            <Route path="/portal/resources" element={<Resources />} />
            <Route path="/portal/mentors" element={<Mentors />} />
            <Route path="/portal/events" element={<PortalEvents />} />
            <Route path="/portal/reports" element={<Reports />} />
            <Route path="/portal/company" element={<Company />} />
            <Route path="/portal/notifications" element={<Notifications />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
