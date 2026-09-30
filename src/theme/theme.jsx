// src/theme/theme.js

import { createTheme } from "@mui/material/styles";
import { brandTokens, fontTokens } from "./brandToken";

export const createAppTheme = (mode = "dark") => {
  const colors = brandTokens[mode];

  return createTheme({
    palette: {
      mode,

      // Backgrounds
 background: {
  default: colors.background,
  paper: colors.surface,
  alt: colors.backgroundAlt,
  scrolled: colors.bgScrolled,
},

      // Main brand colors
      primary: {
        main: colors.accent,
        dark: colors.accentStrong,
        contrastText: colors.background,
      },

      // Text
      text: {
        primary: colors.text,
        secondary: colors.muted,
      },

      // Borders
      divider: colors.border,

      // Semantic custom colors
      surface: {
        main: colors.surface,
        alt: colors.surfaceAlt,
      },

      border: {
        main: colors.border,
      },

      accent: {
        main: colors.accent,
        strong: colors.accentStrong,
      },

      teal: {
        main: colors.teal,
      },

      // Effects
    effects: {
          mouseGlow: colors.mouseGlow,

        practiceIconBg: colors.practiceIconBg,
practiceCardShadow: colors.practiceCardShadow,
  accentGlow: colors.accentGlow,
  accentGlowStrong: colors.accentGlowStrong,
  accentHover: colors.accentHover,
  accentActive: colors.accentActive,
sectorIconBg: colors.sectorIconBg,
  accentButtonGlow: colors.accentButtonGlow,
  accentButtonGlowHover: colors.accentButtonGlowHover,
  accentShadow: colors.accentShadow,
moduleCardBg: colors.moduleCardBg,
moduleCardShadow: colors.moduleCardShadow,
themeIcon: colors.themeIcon,
moduleGlow: colors.moduleGlow,
  surfaceTranslucent: colors.surfaceTranslucent,
  surfaceGlass: colors.surfaceGlass,
sectorCardShadow: colors.sectorCardShadow,
  tealGlow: colors.tealGlow,
  surfaceOverlay: colors.surfaceOverlay,
  gridCardBg: colors.gridCardBg,
gridCardBgHover: colors.gridCardBgHover,
gridPanelBg: colors.gridPanelBg,
gridCenterBg: colors.gridCenterBg,
gridIdBg: colors.gridIdBg,
gridGlow: colors.gridGlow,
gridCardShadow: colors.gridCardShadow,
gridCenterShadow: colors.gridCenterShadow,
gridCenterShadowHover: colors.gridCenterShadowHover,
flowDefaultBg: colors.flowDefaultBg,
flowDecisionBg: colors.flowDecisionBg,
flowOutcomeBg: colors.flowOutcomeBg,
flowPillBg: colors.flowPillBg,
},
      // Legacy-friendly aliases
      brand: {
        main: colors.accent,
      },
    },

  typography: {
  fontFamily: fontTokens.sans,
  mono: fontTokens.mono,
},

    shape: {
      borderRadius: 8,
    },
  });
};