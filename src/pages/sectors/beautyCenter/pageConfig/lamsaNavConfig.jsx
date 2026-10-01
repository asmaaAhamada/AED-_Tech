// src/pages/sectors/beautyCenter/lamsaNavConfig.js
import LamsaLogo from "../logo/LamsaLogo";

export const lamsaNavConfig = (t, theme) => {
  const accentColor = theme.palette.accent.main; // ← بياخد اللون الفعلي من الثيم الحالي (dark أو light)

  return {
    brandName: (
      <span>
        <span style={{ color: accentColor }}>LAMSA</span>
      </span>
    ),
    brandTag: t("lamsa.nav.brandTag"),
    logo: <LamsaLogo size={48} color={accentColor} />,
    navItems: [
      { label: t("lamsa.nav.home"), path: "/sectors/beautycenter" },
      { label: t("lamsa.nav.solutions"), path: "/sectors/beautycenter/services" },
      { label: t("lamsa.nav.platform"), path: "/sectors/beautycenter/platform" },
      { label: t("lamsa.nav.ecosystem"), path: "/sectors/beautycenter/ecosystem" },
      { label: t("lamsa.nav.services"), path: "/sectors/beautycenter/services" },
      { label: t("lamsa.nav.vision"), path: "/sectors/beautycenter/vision" },
    ],
    cta: { label: t("lamsa.nav.cta"), path: "/sectors/beautycenter/contact" },
    statusText: t("lamsa.nav.status"),
    showStatusBar: true,
    locales: [
      { code: "en", label: "EN" },
      { code: "ar", label: "AR" },
    ],
  };
};

export default lamsaNavConfig;