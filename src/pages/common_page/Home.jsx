import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { getHomeConfig } from "./homeConfig";

import { getAutomationFlowConfig } from "./automationFlowConfig";import AutomationFlowSection from "./AutomationFlowSection";
import { getContactConfig } from "./contactConfig";import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import { getGridConfig } from "./gridConfig";
import GridSection from "./GridSection";
import Hero from "./Hero";
import ManifestoSection from "./ManifestoSection";
import ModulesSection from "./ModuleCard";
import { getModulesConfig } from "./modulesConfig";
import PracticeAreasSection from "./PracticeAreasSection";
import SectorsSection from "./SectorCard";
import { getSectorsConfig } from "./sectorsConfig";
import { getPracticeAreasConfig } from "./practiceAreasConfig";
import { getManifestoConfig } from "./manifestoConfig";
import { getFooterConfig } from "./footerConfig";
export default function Home() {
  const { t } = useTranslation();
  const currentHomeConfig = getHomeConfig(t);
  const currentGridConfig = getGridConfig(t); // ← أضف هاد السطر
const currentModulesConfig = getModulesConfig(t);
const currentAutomationFlowConfig = getAutomationFlowConfig(t);
const currentSectorsConfig = getSectorsConfig(t);
const currentPracticeAreasConfig = getPracticeAreasConfig(t);
const currentManifestoConfig = getManifestoConfig(t);
const currentFooterConfig = getFooterConfig(t);
const currentContactConfig = getContactConfig(t);
  return (
    <>
      <style>{`
        .home-section {
          opacity: 0;
          transform: translateY(70px);
          animation-name: sectionReveal;
          animation-duration: 0.9s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          animation-fill-mode: forwards;
        }

        .home-section-1 { animation-delay: 0s; }
        .home-section-2 { animation-delay: 0.15s; }
        .home-section-3 { animation-delay: 0.3s; }
        .home-section-4 { animation-delay: 0.45s; }
        .home-section-5 { animation-delay: 0.6s; }
        .home-section-6 { animation-delay: 0.75s; }
        .home-section-7 { animation-delay: 0.9s; }
        .home-section-8 { animation-delay: 1.05s; }
        .home-section-9 { animation-delay: 1.2s; }

        @keyframes sectionReveal {
          from {
            opacity: 0;
            transform: translateY(70px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-section {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>

      <main>
        <section className="home-section home-section-1">
          <Hero config={currentHomeConfig} />
        </section>

        <section className="home-section home-section-2">
          <Box id="architecture-section">
            <GridSection config={currentGridConfig} />
          </Box>
        </section>

        <section className="home-section home-section-3">
          <ModulesSection  config={currentModulesConfig} />
        </section>

        <section className="home-section home-section-4">
<AutomationFlowSection config={currentAutomationFlowConfig} />        </section>

        <section className="home-section home-section-5">
          <PracticeAreasSection config={currentPracticeAreasConfig} />
        </section>

        <section className="home-section home-section-6">
          <SectorsSection config={currentSectorsConfig} />
        </section>

        <section className="home-section home-section-7">
          <ManifestoSection config={currentManifestoConfig} />
        </section>

        <section className="home-section home-section-8">
          <ContactSection config={currentContactConfig} />
        </section>

        <section className="home-section home-section-9">
          <FooterSection config={currentFooterConfig} />
        </section>
      </main>
    </>
  );
}