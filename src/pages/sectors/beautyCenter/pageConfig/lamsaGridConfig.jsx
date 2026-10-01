// src/pages/sectors/beautyCenter/lamsaGridConfig.js

const safeArray = (value) => (Array.isArray(value) ? value : []);

export const getLamsaGridConfig = (t) => ({
  header: {
    label: t("lamsa.lamsaGrid.header.label"),
    description: t("lamsa.lamsaGrid.header.description"),
    metrics: safeArray(t("lamsa.lamsaGrid.header.metrics", { returnObjects: true })),
  },
  centerNode: {
    title: t("lamsa.lamsaGrid.centerNode.title"),
    subtitle: t("lamsa.lamsaGrid.centerNode.subtitle"),
    idLabel: "ID: LMS-204A",
  },
  topNodes: safeArray(t("lamsa.lamsaGrid.topNodes", { returnObjects: true })),
  bottomNodes: safeArray(t("lamsa.lamsaGrid.bottomNodes", { returnObjects: true })),
  stats: safeArray(t("lamsa.lamsaGrid.stats", { returnObjects: true })),
});

export default getLamsaGridConfig;