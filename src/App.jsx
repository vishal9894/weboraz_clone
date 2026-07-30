import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeLayout from "./home/HomeLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";
import InsightsPage from "./pages/InsightsPage";
import AIAutomationPage from "./pages/AIAutomationPage";
import AIConsulting from "./pages/ai/AIConsulting";
import AIChatbots from "./pages/ai/AIChatbots";
import AIAgentDevelopment from "./pages/ai/AIAgentDevelopment";
import AIGPTIntegration from "./pages/ai/AIGPTIntegration";
import WorkflowAutomation from "./pages/ai/WorkflowAutomation";
import BusinessProcessAutomation from "./pages/ai/BusinessProcessAutomation";
import CustomWebsiteDevelopment from "./pages/services/CustomWebsiteDevelopment";
import ECommerceDevelopment from "./pages/services/ECommerceDevelopment";
import WordPressDevelopment from "./pages/services/WordPressDevelopment";
import WebApplicationDevelopment from "./pages/services/WebApplicationDevelopment";
import WebsiteRedesign from "./pages/services/WebsiteRedesign";
import WebsiteMaintenance from "./pages/services/WebsiteMaintenance";
import AndroidAppDevelopment from "./pages/services/AndroidAppDevelopment";
import IOSAppDevelopment from "./pages/services/IOSAppDevelopment";
import EnterpriseMobileApplications from "./pages/services/EnterpriseMobileApplications";
import ECommerceMobileSolutions from "./pages/services/ECommerceMobileSolutions";
import BusinessProcessAutomationApps from "./pages/services/BusinessProcessAutomationApps";
import AppUIUXDesign from "./pages/services/AppUIUXDesign";
import UIUXDesigning from "./pages/services/UIUXDesigning";
import ProductDesign from "./pages/services/ProductDesign";
import GraphicsDesigning from "./pages/services/GraphicsDesigning";
import LogoDesigning from "./pages/services/LogoDesigning";
import BrandIdentity from "./pages/services/BrandIdentity";
import MotionVideoDesign from "./pages/services/MotionVideoDesign";
import TechnicalSEO from "./pages/services/TechnicalSEO";
import LocalSEO from "./pages/services/LocalSEO";
import EnterpriseSEO from "./pages/services/EnterpriseSEO";
import GoogleAds from "./pages/services/GoogleAds";
import FBIGAds from "./pages/services/FBIGAds";
import YouTubeAds from "./pages/services/YouTubeAds";
import WhatsAppAds from "./pages/services/WhatsAppAds";
import LeadGeneration from "./pages/services/LeadGeneration";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import CustomSoftwareDevelopment from "./pages/services/CustomSoftwareDevelopment";
import CRMDevelopment from "./pages/services/CRMDevelopment";
import ERPSolutions from "./pages/services/ERPSolutions";
import SaaSProductDevelopment from "./pages/services/SaaSProductDevelopment";
import APIIntegration from "./pages/services/APIIntegration";
import Healthcare from "./pages/industries/Healthcare";
import ECommerceIndustry from "./pages/industries/ECommerceIndustry";
import RealEstate from "./pages/industries/RealEstate";
import Education from "./pages/industries/Education";
import FinTech from "./pages/industries/FinTech";
import StartupsSaaS from "./pages/industries/StartupsSaaS";
import ProfessionalServices from "./pages/industries/ProfessionalServices";
import RetailEcommerce from "./pages/industries/RetailEcommerce";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/custom-website-development" element={<CustomWebsiteDevelopment />} />
        <Route path="services/e-commerce-development" element={<ECommerceDevelopment />} />
        <Route path="services/wordpress-development" element={<WordPressDevelopment />} />
        <Route path="services/web-application-development" element={<WebApplicationDevelopment />} />
        <Route path="services/website-redesign" element={<WebsiteRedesign />} />
        <Route path="services/website-maintenance" element={<WebsiteMaintenance />} />
        <Route path="services/android-app-development" element={<AndroidAppDevelopment />} />
        <Route path="services/ios-app-development" element={<IOSAppDevelopment />} />
        <Route path="services/enterprise-mobile-applications" element={<EnterpriseMobileApplications />} />
        <Route path="services/e-commerce-mobile-solutions" element={<ECommerceMobileSolutions />} />
        <Route path="services/business-process-automation-apps" element={<BusinessProcessAutomationApps />} />
        <Route path="services/app-ui-ux-design" element={<AppUIUXDesign />} />
        <Route path="services/ui-ux-designing" element={<UIUXDesigning />} />
        <Route path="services/product-design" element={<ProductDesign />} />
        <Route path="services/graphics-designing" element={<GraphicsDesigning />} />
        <Route path="services/logo-designing" element={<LogoDesigning />} />
        <Route path="services/brand-identity" element={<BrandIdentity />} />
        <Route path="services/motion-video-design" element={<MotionVideoDesign />} />
        <Route path="services/technical-seo" element={<TechnicalSEO />} />
        <Route path="services/local-seo" element={<LocalSEO />} />
        <Route path="services/enterprise-seo" element={<EnterpriseSEO />} />
        <Route path="services/google-ads" element={<GoogleAds />} />
        <Route path="services/fb-ig-ads" element={<FBIGAds />} />
        <Route path="services/youtube-ads" element={<YouTubeAds />} />
        <Route path="services/whatsapp-ads" element={<WhatsAppAds />} />
        <Route path="services/lead-generation" element={<LeadGeneration />} />
        <Route path="services/software-development" element={<SoftwareDevelopment />} />
        <Route path="services/custom-software-development" element={<CustomSoftwareDevelopment />} />
        <Route path="services/crm-development" element={<CRMDevelopment />} />
        <Route path="services/erp-solutions" element={<ERPSolutions />} />
        <Route path="services/saas-product-development" element={<SaaSProductDevelopment />} />
        <Route path="services/api-integration" element={<APIIntegration />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="industries/healthcare" element={<Healthcare />} />
        <Route path="industries/e-commerce" element={<ECommerceIndustry />} />
        <Route path="industries/real-estate" element={<RealEstate />} />
        <Route path="industries/education" element={<Education />} />
        <Route path="industries/fintech" element={<FinTech />} />
        <Route path="industries/startups-saas" element={<StartupsSaaS />} />
        <Route path="industries/professional-services" element={<ProfessionalServices />} />
        <Route path="industries/retail-ecommerce" element={<RetailEcommerce />} />
        <Route path="ai" element={<AIAutomationPage />} />
        <Route path="ai/consulting" element={<AIConsulting />} />
        <Route path="ai/chatbots" element={<AIChatbots />} />
        <Route path="ai/agent-development" element={<AIAgentDevelopment />} />
        <Route path="ai/gpt-integration" element={<AIGPTIntegration />} />
        <Route path="ai/workflow-automation" element={<WorkflowAutomation />} />
        <Route path="ai/business-process-automation" element={<BusinessProcessAutomation />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;