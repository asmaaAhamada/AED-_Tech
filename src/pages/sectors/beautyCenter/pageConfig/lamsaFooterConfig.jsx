// src/pages/sectors/beautyCenter/lamsaFooterConfig.js

export const getLamsaFooterConfig = (t) => {
  const columns = t("lamsa.footer.columns", {
    returnObjects: true,
    defaultValue: [],
  });

  return {
    logoText: t("lamsa.footer.logoText"),
    subLogoText: t("lamsa.footer.subLogoText"),
    brandDescription: t("lamsa.footer.brandDescription"),
    copyright: t("lamsa.footer.copyright"),

    social: {
      instagram: {
        label: t("lamsa.footer.social.instagram"),
        url: "https://www.instagram.com/",
      },

      whatsapp: {
        label: t("lamsa.footer.social.whatsapp"),
        number: "+963705672",
      },
    },

    linksColumns: Array.isArray(columns)
      ? columns.map((col) => ({
          title: col.title,
          links: Array.isArray(col.links)
            ? col.links.map((label) => ({
                label,
              }))
            : [],
        }))
      : [],
  };
};

export default getLamsaFooterConfig;