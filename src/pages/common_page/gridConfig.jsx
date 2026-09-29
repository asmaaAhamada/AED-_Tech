// src/pages/common_page/gridConfig.js

export const getGridConfig = (t) => ({
  header: {
    label: t('grid.header.label'),
    description: t('grid.header.description'),
    metrics: t('grid.header.metrics', { returnObjects: true }),
  },
  centerNode: {
    title: t('grid.centerNode.title'),
    subtitle: t('grid.centerNode.subtitle'),
    idLabel: "ID: 0xA1B2...9F3", // معرّف تقني ثابت — ما بينترجم بأي لغة
  },
  topNodes: t('grid.topNodes', { returnObjects: true }),
  bottomNodes: t('grid.bottomNodes', { returnObjects: true }),
  stats: t('grid.stats', { returnObjects: true }),
});

export default getGridConfig;