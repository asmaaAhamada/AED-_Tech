// src/pages/common_page/practiceAreasConfig.js
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PaletteIcon from "@mui/icons-material/Palette";
import HubIcon from "@mui/icons-material/Hub";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SecurityIcon from "@mui/icons-material/Security";

const practiceAreasConfig = {
  eyebrow: "ENGINEERING PRACTICE",
  title: "Enterprise Digital Architecture & Delivery",
  description:
    "We operate as both a proprietary platform and a digital engineering team delivering custom infrastructure for clients across every service industry.",

  practices: [
    {
      icon: <CloudQueueIcon fontSize="small" />,
      eyebrow: "PRACTICE 01 // ARCHITECTURE",
      title: "Backend & Cloud Systems",
      description: "Microservices built for scale, distributed across reliable cloud infrastructure with strong operational guarantees.",
      tags: ["Modern Stack", "Streaming Data", "Cloud Hosting"],
    },
    {
      icon: <PhoneIphoneIcon fontSize="small" />,
      eyebrow: "PRACTICE 02 // INTERFACE",
      title: "High-Speed Client Apps",
      description: "Interfaces that load fast without app downloads, with smooth interactions and responsive design across devices.",
      tags: ["Zero-Install Web App", "Fast Load Times", "Touch Optimized"],
    },
    {
      icon: <PaletteIcon fontSize="small" />,
      eyebrow: "PRACTICE 03 // HUMAN FACTORS",
      title: "Premium UI/UX Design",
      description: "Custom design systems tailored to AED Tech identity, built for clarity, trust, and a premium feel.",
      tags: ["Custom Design Systems", "Multi-Language Support", "Brand-First Aesthetic"],
    },
    {
      icon: <HubIcon fontSize="small" />,
      eyebrow: "PRACTICE 04 // CONNECTIVITY",
      title: "Systems & Hardware Bridge",
      description: "Universal middleware connecting your existing tools, hardware, and internal systems directly to the digital layer.",
      tags: ["Device Sync", "Payment Integration", "Hardware Agnostic"],
    },
    {
      icon: <AutoGraphIcon fontSize="small" />,
      eyebrow: "PRACTICE 05 // AUTOMATION",
      title: "Growth & CRM Pipelines",
      description: "Behavior-driven re-engagement flows orchestrated over messaging channels and personalized campaigns.",
      tags: ["Messaging APIs", "Dynamic Triggers", "Lifetime Value Focus"],
    },
    {
      icon: <SecurityIcon fontSize="small" />,
      eyebrow: "PRACTICE 06 // GOVERNANCE",
      title: "Data Security & Compliance",
      description: "Built to meet regional and international data protection standards, with end-to-end encrypted storage.",
      tags: ["Data Protection Standards", "Secure Storage", "Compliance Ready"],
    },
  ],
};

export default practiceAreasConfig;