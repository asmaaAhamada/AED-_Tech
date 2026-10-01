import lamsaBackground from "../../../../assets/image_Beautey_center/photo_2026-10-01_18-05-16.jpg";

export const getLamsaManifestoConfig = (t) => ({
  eyebrow: t("lamsa.manifesto.eyebrow"),

  tagline: t("lamsa.manifesto.tagline"),

  quote: t("lamsa.manifesto.quote"),

  pillars: t("lamsa.manifesto.pillars", {
    returnObjects: true,
  }),

  backgroundImage: lamsaBackground,
});

export default getLamsaManifestoConfig;