import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Careers from "./components/Careers";
import About from "./components/About";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import SocialMediaMarketing from "./pages/digitalMarketing/SocialMediaMarketing";
import FacebookMarketing from "./pages/digitalMarketing/FacebookMarketing";
import InstagramMarketing from "./pages/digitalMarketing/InstagramMarketing";
import ContentMarketing from "./pages/digitalMarketing/ContentMarketing";
import SEO from "./pages/digitalMarketing/SEO";
import GoogleAds from "./pages/digitalMarketing/GoogleAds";
import LeadGeneration from "./pages/digitalMarketing/LeadGeneration";
import LocalSEO from "./pages/digitalMarketing/LocalSEO";
import WebDevelopment1 from "./pages/webDesign/WebDevelopment1";
import EcommerceDesign from "./pages/webDesign/EcommerceDesign";
import EcommerceDevelopment from "./pages/webDesign/EcommerceDevelopment";
import UI_UX_Design from "./pages/webDesign/UI_UX_Design";
import WebsiteAutomation from "./pages/webDesign/WebsiteAutomation";
import LandingPageFunnel from "./pages/webDesign/LandingPageFunnel";
import GraphicDesign from "./pages/branding/GraphicDesign";
import BrochureDesign from "./pages/branding/BrochureDesign";
import FlyerDesign from "./pages/branding/FlyerDesign";
import LogoDesign from "./pages/branding/LogoDesign";
import ConversationAdsDesign from "./pages/branding/ConversationAdsDesign";
import SocialMediaDesign from "./pages/branding/SocialMediaDesign";
import PackagingDesignAgency from "./pages/branding/PackagingDesignAgency";
import Flutter from "./pages/appDevelopment/Flutter";

import LogoTrends from "./blogPages/LogoTrends";
import DigitalVsTraditional from "./blogPages/DigitalVsTraditional";
import GoogleVsMeta from "./blogPages/GoogleVsMeta";
import SocialMistakes from "./blogPages/SocialMistakes";
import PowerBi from "./blogPages/PowerBi";
import MouseCircle from "./components/MouseCircle";
import AIinTrading from "./blogPages/AiInTrading";
import AIinEditing from "./blogPages/AiInEditing";
import WebDevelopment from "./blogPages/WebDevelopment";
import PromptEng from "./blogPages/PromptEng";
import GenerativeAiVideo from "./blogPages/GenerativeAiVideo";
import Gemini from "./blogPages/Gemini";
import ChatGpt from "./blogPages/ChatGpt";
import SocialMediaMonetion from "./blogPages/SocialMediaMonetion";
import GoogleVeo3 from "./blogPages/GoogleVeo3";
import ThreadsVsX from "./blogPages/ThreadsVsX";
import PythonPro from "./blogPages/PythonPro";
import JavaPro from "./blogPages/JavaPro";
import RiseOfAi from "./blogPages/RiseOfAi";
import TopWebDesign from "./blogPages/TopWebDesign";
import Etech from "./blogPages/Etech";
import Artificial from "./blogPages/Artificial";
import Greener from "./blogPages/Greener";
import EdgeComputing from "./blogPages/EdgeComputing";
import PostQuantum from "./blogPages/PostQuantum";
import CybersecurityStrategies from "./blogPages/CybersecurityStrategies";
import DigitalTransformation from "./blogPages/DigitalTransformation";
import PayPerClick from "./pages/digitalMarketing/PayPerClick";

// Business Team
import BusinessLogin from "./components/BusinessLogin";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import SuperuserDashboard from "./components/SuperuserDashboard"; // new
import ProtectedRoute from "./components/ProtectedRoute";

import WhatsappButton from "./components/WhatsappButton";
import { Analytics } from "@vercel/analytics/react";
import MobileApp from "./blogPages/MobileApp";
import NanoBanana from "./blogPages/NanoBanana";
import Grok from "./blogPages/Grok";
import GeminiAI2025 from "./blogPages/GeminiAI2025";
import ViralBananas from "./blogPages/ViralBananas";
import CowBoyAi from "./blogPages/CowBoyAi";
import GoogleTagManager from "./blogPages/GoogleTagManager";
// Zoro_Crest
import ZoroCrest from "./components/ZoroCrest";
import BlockChain from "./blogPages/BlockChain";
import CyberSecurity2025 from "./blogPages/CyberSecurity2025";
import SpatialComputing from "./blogPages/SpatialComputing";
import Remote from "./blogPages/Remote";
import NoCodeApp from "./blogPages/NoCodeApp";
import LLM from "./blogPages/LLM";
import SmartHomes from "./blogPages/SmartHomes";
import NotFoundPage from "./components/NotFoundPage";
import Clarity from "./blogPages/Clarity";
import Automation from "./blogPages/Automation";
import AIinMarketing from "./blogPages/AIinMarketing";
function App() {
const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1000);
  return () => clearTimeout(timer);
}, []);

return (
  <Router>
    <div className="flex flex-col min-h-screen">
      <MouseCircle />
      {!loading && <Navbar />}

      <div className="flex-grow">
        <Routes>
          {/* Public Pages */}
          
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/zoro-crest" element={<ZoroCrest />} />
          <Route path="/socialMediaMarketing" element={<SocialMediaMarketing />} />
          <Route path="/facebookMarketing" element={<FacebookMarketing />} />
          <Route path="/instagramMarketing" element={<InstagramMarketing />} />
          <Route path="/contentMarketing" element={<ContentMarketing />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/googleAds" element={<GoogleAds />} />
          <Route path="/leadGeneration" element={<LeadGeneration />} />
          <Route path="/localSEO" element={<LocalSEO />} />
          <Route path="/payPerClick" element={<PayPerClick />} />
          <Route path="/webdevelopment" element={<WebDevelopment1 />} />
          <Route path="/ecommerceDesign" element={<EcommerceDesign />} />
          <Route path="/ecommerceDevelopment" element={<EcommerceDevelopment />} />
          <Route path="/ui-ux-Design" element={<UI_UX_Design />} />
          <Route path="/websiteAutomation" element={<WebsiteAutomation/>} />
          <Route path="/landingPageFunnel" element={<LandingPageFunnel/>} />
          <Route path="/graphicDesign" element={<GraphicDesign/>} />
          <Route path="/brochureDesign" element={<BrochureDesign/>} />
          <Route path="/flyerDesign" element={<FlyerDesign/>} />
          <Route path="/logoDesign" element={<LogoDesign/>} />
          <Route path="/conversationAdsDesign" element={<ConversationAdsDesign/>} />
          <Route path="/socialMediaDesign" element={<SocialMediaDesign/>} />
          <Route path="/packagingDesignAgency" element={<PackagingDesignAgency/>} />
          <Route path="/flutter" element={<Flutter/>} />

          {/* Blog Pages */}

          <Route path="/blogs/logo-trends-2025" element={<LogoTrends />} />
          <Route path="/blogs/google-vs-meta" element={<GoogleVsMeta />} />
          <Route path="/blogs/digital-vs-traditional" element={<DigitalVsTraditional />} />
          <Route path="/blogs/social-mistakes" element={<SocialMistakes />} />
          <Route path="/blogs/power-bi" element={<PowerBi />} />
          <Route path="/blogs/ai-in-trading" element={<AIinTrading />} />
          <Route path="/blogs/ai-in-editing" element={<AIinEditing />} />
          <Route path="/blogs/web-development" element={<WebDevelopment />} />
          <Route path="/blogs/PromptEng" element={<PromptEng />} />
          <Route path="/blogs/GenerativeAiVideo" element={<GenerativeAiVideo />} />
          <Route path="/blogs/Gemini" element={<Gemini />} />
          <Route path="/blogs/ChatGpt" element={<ChatGpt />} />
          <Route path="/blogs/SocialMediaMonetion" element={<SocialMediaMonetion />} />
          <Route path="/blogs/GoogleVeo3" element={<GoogleVeo3 />} />
          <Route path="/blogs/ThreadsVsX" element={<ThreadsVsX />} />
          <Route path="/blogs/PythonPro" element={<PythonPro />} />
          <Route path="/blogs/JavaPro" element={<JavaPro />} />
          <Route path="/blogs/RiseOfAi" element={<RiseOfAi />} />
          <Route path="/blogs/TopWebDesign" element={<TopWebDesign />} />
          <Route path="/blogs/MobileApp" element={<MobileApp/>} />
          <Route path="/blogs/NanoBanana" element={<NanoBanana/>} />
          <Route path="/blogs/Grok" element={<Grok/>} />
          <Route path="/blogs/GeminiAI2025" element={<GeminiAI2025/>} />
          <Route path="/blogs/ViralBananas" element={<ViralBananas/>} />
          <Route path="/blogs/CowBoyAi" element={<CowBoyAi/>} />
          <Route path="/blogs/GoogleTagManager" element={<GoogleTagManager/>} />
          <Route path="/blogs/block-chain" element={<BlockChain/>} />
          <Route path="/blogs/cyber-security" element={<CyberSecurity2025/>} />
          <Route path="/blogs/Etech" element={<Etech/>} />
          <Route path="/blogs/Artificial" element={<Artificial/>} />
          <Route path="/blogs/Greener" element={<Greener/>} />
          <Route path="/blogs/EdgeComputing" element={<EdgeComputing/>} />
          <Route path="/blogs/PostQuantum" element={<PostQuantum/>} />
          <Route path="/blogs/CybersecurityStrategies" element={<CybersecurityStrategies/>} />
          <Route path="/blogs/DigitalTransformation" element={<DigitalTransformation/>} />
          <Route path="/blogs/SpatialComputing" element={<SpatialComputing/>} />
          <Route path="/blogs/Remote" element={<Remote/>} />
          <Route path="/blogs/NoCodeApp" element={<NoCodeApp/>} />
          <Route path="/blogs/LLM" element={<LLM/>} />
          <Route path="/blogs/SmartHomes" element={<SmartHomes/>} />
          <Route path="/blogs/Clarity" element={<Clarity/>} />
          <Route path="/blogs/Automation" element={<Automation/>} />
          <Route path="/blogs/AIinMarketing" element={<AIinMarketing/>} />
          <Route path="*" element={<NotFoundPage/>} />
          




          {/* Business Team Login + Dashboards */}
          <Route path="/login" element={<BusinessLogin />} />

          <Route
            path="/superuser"
            element={
              <ProtectedRoute requireSuperuser>
                <SuperuserDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAdmin>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <WhatsappButton/>
      </div>
      <Footer />
      <Analytics />
    </div>
  </Router>
);
}

export default App;