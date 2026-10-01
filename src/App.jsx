// src/App.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/top_par/MainLayout";
import Home from "./pages/common_page/Home";
import SolutionsPage from "./pages/tabs/SolutionsPage";
import PlatformPage from "./pages/tabs/PlatformPage";
import EcosystemPage from "./pages/tabs/EcosystemPage";
import ServicesPage from "./pages/tabs/ServicesPage";
import VisionPage from "./pages/tabs/VisionPage";
import ContactPage from "./pages/tabs/ContactPage";
import LamsaLayout from "./pages/sectors/beautyCenter/pageConfig/LamsaLayout";
import LamsaHome from "./pages/sectors/beautyCenter/pageConfig/LamsaHome";
import SolutionsPageLamsa from "./pages/sectors/beautyCenter/LamsaTab/SolutionsPage";
import PlatformPageLamsa from "./pages/sectors/beautyCenter/LamsaTab/PlatformPage";
import EcosystemPageLamsa from "./pages/sectors/beautyCenter/LamsaTab/EcosystemPage";
import ServicesPageLamsa from "./pages/sectors/beautyCenter/LamsaTab/ServicesPage";
import ContactPageLamsa from "./pages/sectors/beautyCenter/LamsaTab/ContactPage";
import VisionPageLamsa from "./pages/sectors/beautyCenter/LamsaTab/VisionPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/ecosystem" element={<EcosystemPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route element={<LamsaLayout />}>
              <Route path="/sectors/beautycenter" element={<LamsaHome />} />

        <Route path="/sectors/beautycenter/services" element={<SolutionsPageLamsa />} />
                <Route path="/sectors/beautycenter/platform" element={<PlatformPageLamsa />} />
        <Route path="/sectors/beautycenter/ecosystem" element={<EcosystemPageLamsa />} />
        <Route path="/sectors/beautycenter/services" element={<ServicesPageLamsa />} />
                <Route path="/sectors/beautycenter/vision" element={<VisionPageLamsa />} />

        <Route path="/sectors/beautycenter/contact" element={<ContactPageLamsa />} />

      </Route>
    </Routes>
  );
}