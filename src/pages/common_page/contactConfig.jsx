// src/pages/common_page/contactConfig.js
const contactConfig = {
  badgeLabel: "CONFIDENTIAL CONSULTATION",
  title: "Ready to Build Smarter Client Infrastructure?",
  description:
    "Schedule a session with our systems team. We review how your business runs today and map out the right setup for your goals.",
  primaryCta: { label: "Start a Project" },
  secondaryCta: { label: "Schedule Demo" },
  trustNotes: ["2-Hour Response Time", "NDA Available on Request"],

  formTitle: "Direct Priority Contact",
  formSubtitle: "Connect directly with our team",

  fields: {
    name: { label: "YOUR NAME", placeholder: "e.g. Jordan Smith" },
    email: { label: "WORK EMAIL", placeholder: "you@company.com" },
    businessType: {
      label: "BUSINESS TYPE & LOCATIONS",
      options: [
        "Single Location Business",
        "Multi-Location Business (2-4 sites)",
        "Multi-Location Business (5+ sites)",
        "Not Sure Yet",
      ],
    },
  },

  submitLabel: "Request Consultation",
  formTrustBadges: ["ISO 27001", "GDPR Compliant", "Secure by Design"],
};

export default contactConfig;