import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { InspectionRequestProvider } from "./contexts/InspectionRequestContext";
import { ChatProvider } from "./contexts/ChatContext";
import { CookieConsentProvider } from "./contexts/CookieConsentContext";
import InspectionRequestModal from "./components/InspectionRequestModal";
import RenovivoChat from "./components/chat/RenovivoChat";

// Critical path - loaded immediately
import Index from "./pages/Index";

// Lazy loaded routes - code split
const Services = lazy(() => import("./pages/Services"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PricingStart = lazy(() => import("./pages/PricingStart"));
const PricingComfort = lazy(() => import("./pages/PricingComfort"));
const PricingPremium = lazy(() => import("./pages/PricingPremium"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const InteriorDesign = lazy(() => import("./pages/InteriorDesign"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const InnovativeCoatings = lazy(() => import("./pages/InnovativeCoatings"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Admin = lazy(() => import("./pages/Admin"));
const Auth = lazy(() => import("./pages/Auth"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CookieConsentProvider>
          <InspectionRequestProvider>
            <ChatProvider>
              <Toaster />
              <Sonner />
              <InspectionRequestModal />
              <RenovivoChat />
              <BrowserRouter>
                <ScrollToTop />
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/interior-design" element={<InteriorDesign />} />
                    <Route path="/services/:id" element={<ServiceDetail />} />
                    <Route path="/innovative-coatings" element={<InnovativeCoatings />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/pricing/start" element={<PricingStart />} />
                    <Route path="/pricing/comfort" element={<PricingComfort />} />
                    <Route path="/pricing/premium" element={<PricingPremium />} />
                    <Route path="/portfolio/:id" element={<ProjectDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </ChatProvider>
          </InspectionRequestProvider>
        </CookieConsentProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
