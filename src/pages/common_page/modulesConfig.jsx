// src/pages/common_page/modulesConfig.js
import StorefrontIcon from "@mui/icons-material/Storefront";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import HubIcon from "@mui/icons-material/Hub";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ForumIcon from "@mui/icons-material/Forum";

const modulesConfig = {
  eyebrow: "SYSTEM ARCHITECTURE // FULL SUITE",
  title: "One Platform. Every Client Touchpoint.",
  subtitle:
    "Twelve interconnected modules designed to deploy independently or form a complete operating system across any service-based business.",

  modules: [
    {
      code: "MOD_01",
      icon: <StorefrontIcon fontSize="small" />,
      title: "Digital Service Catalog",
      description: "Sub-second rendering of your services or products, with instant updates, multi-language support, and rich imagery.",
      badge: { label: "LOAD TIME", value: "< 320ms" },
    },
    {
      code: "MOD_02",
      icon: <QrCodeScannerIcon fontSize="small" />,
      title: "Contactless Access Gateway",
      description: "Zero-app instant access via link or QR code. Secure, location-aware tokens prevent misuse.",
      badge: { label: "INSTALL REQ", value: "ZERO APP" },
    },
    {
      code: "MOD_03",
      icon: <BadgeIcon fontSize="small" />,
      title: "Unified Client Profile",
      description: "Consent-first client records across every visit. Tracks preferences, history, and engagement seamlessly.",
      badge: { label: "COMPLIANCE", value: "GDPR READY" },
    },
    {
      code: "MOD_04",
      icon: <LocalOfferIcon fontSize="small" />,
      title: "Smart Offers Engine",
      description: "Dynamic perks and promotions that trigger based on client behavior, timing, and engagement level.",
      badge: { label: "UPLIFT", value: "+20.0%" },
    },
    {
      code: "MOD_05",
      icon: <ConfirmationNumberIcon fontSize="small" />,
      title: "Virtual Queue & Booking Flow",
      description: "Wait-time prediction with automated alerts, pre-booking, and cancellation handling.",
      badge: { label: "ACCURACY", value: "95.0%" },
    },
    {
      code: "MOD_06",
      icon: <EventAvailableIcon fontSize="small" />,
      title: "Appointment Manager",
      description: "Scheduling controller with pacing, confirmations, special notes, and capacity optimization.",
      badge: { label: "NO-SHOW DROP", value: "-60%" },
    },
    {
      code: "MOD_07",
      icon: <AutorenewIcon fontSize="small" />,
      title: "Automated Re-engagement",
      description: "Automated trigger system for inactive clients. Sends timed, personalized outreach without manual effort.",
      badge: { label: "RETURN RATE", value: "3.0x AVG" },
    },
    {
      code: "MOD_08",
      icon: <InsertChartIcon fontSize="small" />,
      title: "Business Intelligence Dashboard",
      description: "Real-time performance analysis, activity patterns, and client behavior trends.",
      badge: { label: "REFRESH", value: "LIVE" },
    },
    {
      code: "MOD_09",
      icon: <HubIcon fontSize="small" />,
      title: "Systems & Software Connectors",
      description: "Bi-directional sync with the tools you already use — booking systems, payment platforms, and internal databases.",
      badge: { label: "CONNECTORS", value: "50+ READY" },
    },
    {
      code: "MOD_10",
      icon: <AdminPanelSettingsIcon fontSize="small" />,
      title: "Executive Command Center",
      description: "Multi-location live overview for owners, managers, and stakeholders across every site.",
      badge: { label: "AGGREGATION", value: "GLOBAL" },
    },
    {
      code: "MOD_11",
      icon: <RateReviewIcon fontSize="small" />,
      title: "Feedback & Reputation Hub",
      description: "Automated post-service survey dispatch with intelligent sentiment analysis and instant review routing.",
      badge: { label: "SATISFACTION", value: "98.4%" },
    },
    {
      code: "MOD_12",
      icon: <ForumIcon fontSize="small" />,
      title: "Omnichannel Communication Gateway",
      description: "Centralized messaging matrix syncing WhatsApp, SMS, and email touchpoints into a unified thread.",
      badge: { label: "DELIVERY RATE", value: "99.9%" },
    },
  ],
};

export default modulesConfig;