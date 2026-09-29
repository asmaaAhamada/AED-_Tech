// src/pages/common_page/sectorsConfig.js
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const sectorsConfig = {
  eyebrow: "SPECIALIZATIONS",
  title: "Architected for High-Impact Service Businesses",
  subtitle: "Configurable workflow presets and client interaction models tuned to how each business actually operates.",

  sectors: [
    {
      icon: <BusinessIcon fontSize="small" />,
      title: "Single-Location Businesses",
      description: "Fast setup, simple management, and a clean digital presence for owner-operated businesses.",
      result: "+30% CLIENT RETENTION",
    },
    {
      icon: <LanguageIcon fontSize="small" />,
      title: "Multi-Location Brands",
      description: "Centralized control across every branch, with consistent branding and unified reporting.",
      result: "+45% OPERATIONAL VISIBILITY",
    },
    {
      icon: <AutoAwesomeIcon fontSize="small" />,
      title: "Premium & Boutique Services",
      description: "Refined, brand-first experiences for high-touch, appointment-based, or membership-style businesses.",
      result: "95% CLIENT SATISFACTION",
    },
    {
      icon: <Inventory2Icon fontSize="small" />,
      title: "Pop-Ups & Temporary Activations",
      description: "Fast deployment for short-term locations, events, and seasonal activations with instant lead capture.",
      result: "5x FASTER SETUP",
    },
  ],
};

export default sectorsConfig;