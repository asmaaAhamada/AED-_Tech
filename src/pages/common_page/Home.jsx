import { Box } from "@mui/material";
import automationFlowConfig from "./automationFlowConfig";
import AutomationFlowSection from "./AutomationFlowSection";
import contactConfig from "./contactConfig";
import ContactSection from "./ContactSection";
import footerConfig from "./footerConfig";
import FooterSection from "./FooterSection";
import gridConfig from "./gridConfig";
import GridSection from "./GridSection";
import Hero from "./Hero";
import homeConfig from "./homeConfig";
import manifestoConfig from "./manifestoConfig";
import ManifestoSection from "./ManifestoSection";
import ModulesSection from "./ModuleCard";
import modulesConfig from "./modulesConfig";
import practiceAreasConfig from "./practiceAreasConfig";
import PracticeAreasSection from "./PracticeAreasSection";
import SectorsSection from "./SectorCard";
import sectorsConfig from "./sectorsConfig";

export default function Home() {
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

        .home-section-1 {
          animation-delay: 0s;
        }

        .home-section-2 {
          animation-delay: 0.15s;
        }

        .home-section-3 {
          animation-delay: 0.3s;
        }

        .home-section-4 {
          animation-delay: 0.45s;
        }

        .home-section-5 {
          animation-delay: 0.6s;
        }

        .home-section-6 {
          animation-delay: 0.75s;
        }

        .home-section-7 {
          animation-delay: 0.9s;
        }

        .home-section-8 {
          animation-delay: 1.05s;
        }

        .home-section-9 {
          animation-delay: 1.2s;
        }

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
          <Hero config={homeConfig} />
        </section>

        <section className="home-section home-section-2">
          <Box id="architecture-section">
            <GridSection config={gridConfig} />
          </Box>
        </section>

        <section className="home-section home-section-3">
          <ModulesSection config={modulesConfig} />
        </section>

        <section className="home-section home-section-4">
          <AutomationFlowSection config={automationFlowConfig} />
        </section>

        <section className="home-section home-section-5">
          <PracticeAreasSection config={practiceAreasConfig} />
        </section>

        <section className="home-section home-section-6">
          <SectorsSection config={sectorsConfig} />
        </section>

        <section className="home-section home-section-7">
          <ManifestoSection config={manifestoConfig} />
        </section>

        <section className="home-section home-section-8">
          <ContactSection config={contactConfig} />
        </section>

        <section className="home-section home-section-9">
          <FooterSection config={footerConfig} />
        </section>
      </main>
    </>
  );
}