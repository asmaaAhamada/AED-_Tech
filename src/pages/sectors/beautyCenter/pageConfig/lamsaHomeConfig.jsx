// src/pages/sectors/beautyCenter/lamsaHomeConfig.js

import heroImage from "../../../../assets/image_Beautey_center/photo_2026-10-01_18-05-15.jpg";

export const getLamsaHomeConfig = (t) => ({
  badgeText: t("lamsa.home.badgeText"),

  headlineStart: t("lamsa.home.headlineStart"),

  headlineHighlight: t("lamsa.home.headlineHighlight"),

  subtitle: t("lamsa.home.subtitle"),

  backgroundImage: heroImage,

  primaryCta: {
    label: t("lamsa.home.primaryCta"),
    href: "#architecture-section",
  },

  secondaryCta: {
    label: t("lamsa.home.secondaryCta"),
    href: "#gallery",
  },
});

export default getLamsaHomeConfig;