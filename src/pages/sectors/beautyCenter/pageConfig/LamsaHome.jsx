// src/pages/sectors/beautyCenter/LamsaHome.jsx
import { useTranslation } from "react-i18next";
import Hero ,{RevealSection} from "../../../common_page/Hero"; // نفس Hero الأصلي — ولا سطر تغيير فيه
import { getLamsaHomeConfig } from "./lamsaHomeConfig";
import getLamsaGridConfig from "./lamsaGridConfig";
import GridSection from "../../../common_page/GridSection";
import { Box } from "@mui/material";
import ModulesSection from "../../../common_page/ModuleCard";
import getLamsaModulesConfig from "./lamsaModulesConfig";
import getLamsaAutomationFlowConfig from "./lamsaAutomationFlowConfig";
import LamsaAutomationFlowSection from "./LamsaAutomationFlowSection";
import getLamsaPracticeAreasConfig from "./lamsaPracticeAreasConfig";
import PracticeAreasSection from "../../../common_page/PracticeAreasSection";
import ManifestoSection from "../../../common_page/ManifestoSection";
import getLamsaManifestoConfig from "./lamsaManifestoConfig";
import ContactSection from "../../../common_page/ContactSection";
import { getLamsaContactConfig } from "./lamsaContactConfig";
import FooterSection from "../../../common_page/FooterSection";
import getLamsaFooterConfig from "./lamsaFooterConfig";
export default function LamsaHome() {
  const { t } = useTranslation();
  const currentConfig = getLamsaHomeConfig(t);
  const currentGridConfig = getLamsaGridConfig(t);
  const currentModulesConfig = getLamsaModulesConfig(t);
const currentAutomationConfig = getLamsaAutomationFlowConfig(t);
const currentPracticeAreasConfig =
  getLamsaPracticeAreasConfig(t);
  const currentManifestoConfig =
  getLamsaManifestoConfig(t);
  const contactConfig = getLamsaContactConfig(t);
  const footerConfig = getLamsaFooterConfig(t);
  return (
  // داخل LamsaHome.jsx
<main>
  <Hero config={currentConfig} />
  
  <RevealSection delay={100}>
    <Box id="architecture-section">
      <GridSection config={currentGridConfig} />
    </Box>
  </RevealSection>

  <RevealSection delay={100}>
    <ModulesSection config={currentModulesConfig} />
  </RevealSection>

  <RevealSection delay={100}>
    <LamsaAutomationFlowSection config={currentAutomationConfig} />
  </RevealSection>

  <RevealSection delay={100}>
    <Box id="practice-areas">
      <PracticeAreasSection config={currentPracticeAreasConfig} />
    </Box>
  </RevealSection>

  <RevealSection delay={100}>
    <Box id="manifesto">
      <ManifestoSection config={currentManifestoConfig} />
    </Box>
  </RevealSection>

  <Box id="contact">
    <ContactSection config={contactConfig} />
  </Box>
</main>
  );
}