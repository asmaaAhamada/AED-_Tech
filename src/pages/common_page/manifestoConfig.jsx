// src/pages/common_page/manifestoConfig.js
import logo from "../../assets/logo.jpeg";

export const getManifestoConfig = (t) => ({
  logo,
  eyebrow: t("manifesto.eyebrow"),
  tagline: t("manifesto.tagline"),
  quote: t("manifesto.quote"),
  pillars: t("manifesto.pillars", { returnObjects: true }),
});

export default getManifestoConfig;