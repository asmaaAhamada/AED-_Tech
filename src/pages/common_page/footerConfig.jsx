export const getFooterConfig = (t) => {
  const columns = t("footer.columns", { returnObjects: true });

  return {
    logoText: t("footer.logoText"),
    subLogoText: t("footer.subLogoText"),
    brandDescription: t("footer.brandDescription"),
    copyright: t("footer.copyright"),

    whatsappNumber: "+963705672",

    linksColumns: columns.map((col) => ({
      title: col.title,
      links: col.links.map((label) => ({ label })),
    })),
  };
};

export default getFooterConfig;