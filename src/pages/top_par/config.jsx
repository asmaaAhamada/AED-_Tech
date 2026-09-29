// src/config/navConfig.js
import logo from '../../assets/logo.jpeg'
const navConfig = {
  // اسم العلامة التجارية بطريقة منسقة (AED باللون الذهبي و Tech بالأبيض)
  brandName: (
    <span>
      <span style={{ color: "#E3B156" }}>AED</span> TECH
    </span>
  ),
  brandTag: "AUTOMATE. GROW. SCALE.",

  // مكان اللوغو
  logo: (
    <img
      src={logo}
      alt="logo"
      style={{ height: 28, width: "auto" }}
    />
  ),

  navItems: [
    { label: "Home", path: "/" },
    { label: "Solutions", path: "/solutions" },
    { label: "Platform", path: "/platform" },
    { label: "Ecosystem", path: "/ecosystem" },
    { label: "Services", path: "/services" },
    { label: "Vision", path: "/vision" },
    { label: "Contact", path: "/contact" },
  ],

  cta: { label: "START A PROJECT", path: "/contact" },

  showStatusBar: true,

  // خيارات اللغة المضافة لاستخدامها في النافبار
  locales: [
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ],
  activeLocale: "en",
  onLocaleChange: (localeCode) => {
    console.log("Locale changed to:", localeCode);
  },
};

export default navConfig;