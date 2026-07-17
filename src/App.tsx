import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AccessibilityWidget } from "@/components/accessibility/AccessibilityWidget";
import Index from "./pages/Index";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import About from "./pages/About";
import OurTeam from "./pages/about/OurTeam";
import MiningInnovation from "./pages/MiningInnovation";
import Ecosystem from "./pages/Ecosystem";
import Impact from "./pages/Impact";
import Events from "./pages/Events";
import Apply from "./pages/Apply";
import ValidateIdea from "./pages/ValidateIdea";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Programs pages
import Programs from "./pages/programs/Programs";
import VentureGrowthServices from "./pages/programs/VentureGrowthServices";
import MentorshipServices from "./pages/programs/MentorshipServices";
import CapitalNavigation from "./pages/programs/CapitalNavigation";

// Funding pages
import Funding from "./pages/funding/Funding";
import SudburyCatalystFund from "./pages/funding/SudburyCatalystFund";
import InnovationAccelerationProgram from "./pages/funding/InnovationAccelerationProgram";
import RegionalAIProgram from "./pages/funding/RegionalAIProgram";
import InvestorHub from "./pages/funding/InvestorHub";

// Mining pages
import NorcatUnderground from "./pages/mining/NorcatUnderground";
import Core5 from "./pages/mining/Core5";
import CriticalIndustrialTech from "./pages/mining/CriticalIndustrialTech";
import Labs from "./pages/mining/Labs";

// Partner pages
import RogersCybersecure from "./pages/partners/RogersCybersecure";

// Ecosystem pages
import SudburyEcosystem from "./pages/ecosystem/SudburyEcosystem";

// Insights pages
import News from "./pages/insights/News";
import SuccessStories from "./pages/insights/SuccessStories";
import InsightsReports from "./pages/insights/Reports";

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

// Mentor Portal pages
import MentorDashboard from "./pages/mentor/Dashboard";
import MentorVentures from "./pages/mentor/Ventures";
import MentorVentureWorkspace from "./pages/mentor/VentureWorkspace";
import MentorMeetings from "./pages/mentor/Meetings";
import MentorResources from "./pages/mentor/Resources";
import MentorEthics from "./pages/mentor/Ethics";
import MentorEscalation from "./pages/mentor/Escalation";
import MentorNotifications from "./pages/mentor/Notifications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/home-original" element={<Index />} />
            <Route path="/home-2" element={<Home2 />} />
            <Route path="/home-3" element={<Home3 />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/our-team" element={<OurTeam />} />
            <Route path="/mining-innovation" element={<MiningInnovation />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/validate-idea" element={<ValidateIdea />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Programs Routes */}
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/venture-growth-services" element={<VentureGrowthServices />} />
            <Route path="/programs/mentorship-services" element={<MentorshipServices />} />
            <Route path="/programs/capital-navigation" element={<CapitalNavigation />} />
            
            {/* Funding Routes */}
            <Route path="/funding" element={<Funding />} />
            <Route path="/funding/sudbury-catalyst-fund" element={<SudburyCatalystFund />} />
            <Route path="/funding/innovation-acceleration-program" element={<InnovationAccelerationProgram />} />
            <Route path="/funding/regional-ai-program" element={<RegionalAIProgram />} />
            <Route path="/funding/investor-hub" element={<InvestorHub />} />
            
            {/* Mining Routes */}
            <Route path="/mining/norcat-underground" element={<NorcatUnderground />} />
            <Route path="/mining/core5" element={<Core5 />} />
            <Route path="/mining/critical-industrial-tech" element={<CriticalIndustrialTech />} />
            <Route path="/mining/labs" element={<Labs />} />
            
            {/* Partner Routes */}
            <Route path="/partners/rogers-cybersecure" element={<RogersCybersecure />} />
            
            {/* Ecosystem Routes */}
            <Route path="/ecosystem/sudbury" element={<SudburyEcosystem />} />
            
            {/* Insights Routes */}
            <Route path="/insights/news" element={<News />} />
            <Route path="/insights/success-stories" element={<SuccessStories />} />
            <Route path="/insights/reports" element={<InsightsReports />} />
            
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
            
            {/* Mentor Portal Routes */}
            <Route path="/mentor" element={<MentorDashboard />} />
            <Route path="/mentor/ventures" element={<MentorVentures />} />
            <Route path="/mentor/ventures/:id" element={<MentorVentureWorkspace />} />
            <Route path="/mentor/meetings" element={<MentorMeetings />} />
            <Route path="/mentor/resources" element={<MentorResources />} />
            <Route path="/mentor/ethics" element={<MentorEthics />} />
            <Route path="/mentor/escalation" element={<MentorEscalation />} />
            <Route path="/mentor/notifications" element={<MentorNotifications />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AccessibilityWidget />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
