// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/top_par/Navbar";
import navConfig from "./pages/top_par/config";
import MainLayout from "./pages/top_par/MainLayout";
import PageStub from "./pages/common_page/PageStub";
import Home from "./pages/common_page/Home";
import SolutionsPage from "./pages/tabs/SolutionsPage";
import PlatformPage from "./pages/tabs/PlatformPage";
import EcosystemPage from "./pages/tabs/EcosystemPage";
import ServicesPage from "./pages/tabs/ServicesPage";
import VisionPage from "./pages/tabs/VisionPage";
import ContactPage from "./pages/tabs/ContactPage";



export default function App() {
  return (
    <>
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
    </Routes>
      </>
  );
}