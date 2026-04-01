import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopScroll from './pages/TopScrollProps';
import { Layout } from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import { PrivacyPage, TermsPage, RefundPage } from "./pages/PolicyPages";
import NotFound from "./pages/NotFound";
import FitnessAssessmentForm from "./pages/Register";
import BlogPage from "./pages/BlogPage";
import ProgramsPage from "./pages/ProgramsPage";
import Testimonials from "./pages/Testimonials";
import Transformation from "./pages/Transformation";
import Community from "./pages/Community";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <TopScroll>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/programs" element={<ProgramsPage/>} />
            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund" element={<RefundPage />} />
             <Route path="/register" element={<FitnessAssessmentForm/>} />
             <Route path="/Testimonials" element={<Testimonials />} />
             <Route path="/Community" element={<Community />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/transformation" element={<Transformation />} />
          </Routes>
        </Layout>
        </TopScroll>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
