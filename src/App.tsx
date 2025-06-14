
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import RobotVerification from "./components/RobotVerification";
import Portfolio from "./pages/Portfolio";
import Chatbot from "./components/Chatbot";
import { LanguageProvider } from "./contexts/LanguageContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import OurStory from "./pages/OurStory";

const queryClient = new QueryClient();

const App = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <DarkModeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {/* User Greeting - Fixed Position */}
            <div className="fixed top-3 right-5 z-50 animate-fade-in">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20 flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                <span className="text-sm font-medium">Hi Bechir</span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>
            </div>
            
            {!isVerified ? (
              <RobotVerification onVerified={() => setIsVerified(true)} />
            ) : (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/notre-histoire" element={<OurStory />} />
                  <Route path="/our-story" element={<OurStory />} />
                  <Route path="/contact" element={<NotFound />} />
                  <Route path="/blog" element={<NotFound />} />
                  <Route path="/faq" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Chatbot />
              </BrowserRouter>
            )}
          </TooltipProvider>
        </DarkModeProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
