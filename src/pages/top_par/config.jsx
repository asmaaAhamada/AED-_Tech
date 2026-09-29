// src/config/navConfig.js

import logo from '../../assets/logo.jpeg';

export const navConfig = (t) => ({
  brandName: (
    <span>
      <span style={{ color: "#E3B156" }}>AED</span> TECH
    </span>
  ),
  brandTag: t('nav.brandTag'),
  logo: (
    <img
      src={logo}
      alt="logo"
      style={{ height: 28, width: "auto" }}
    />
  ),
  navItems: [
    { label: t('nav.home'), path: "/" },
    { label: t('nav.solutions'), path: "/solutions" },
    { label: t('nav.platform'), path: "/platform" },
    { label: t('nav.ecosystem'), path: "/ecosystem" },
    { label: t('nav.services'), path: "/services" },
    { label: t('nav.vision'), path: "/vision" },
    { label: t('nav.contact'), path: "/contact" },
  ],
  cta: { label: t('nav.cta'), path: "/contact" },
  statusText: t('nav.status'),
  showStatusBar: true,
  locales: [
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ],
});