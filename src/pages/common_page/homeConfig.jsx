export const getHomeConfig = (t) => ({
  badgeText: t('home.badgeText'),
  headlineStart: t('home.headlineStart'),
  headlineHighlight: t('home.headlineHighlight'),
  subtitle: t('home.subtitle'),
  primaryCta: {
    label: t('home.primaryCta'),
    href: "#architecture-section",
  },
  secondaryCta: {
    label: t('home.secondaryCta'),
    href: "#demo",
  },
});

export default getHomeConfig;