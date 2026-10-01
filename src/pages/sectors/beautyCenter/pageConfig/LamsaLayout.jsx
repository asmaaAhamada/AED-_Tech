import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { createAppTheme } from "../../../../theme/theme";
import LamsaNavbar from "./LamsaNavbar";
import FooterSection from "../../../common_page/FooterSection";

import { lamsaNavConfig } from "./lamsaNavConfig";
import getLamsaFooterConfig from "./lamsaFooterConfig";

export default function LamsaLayout() {
  const mode = useSelector(
    (state) => state.theme.mode
  );

  const { t } = useTranslation();

  const lamsaTheme = useMemo(
    () =>
      createAppTheme(
        mode === "dark"
          ? "lamsaDark"
          : "lamsaLight",
        mode
      ),
    [mode]
  );

  const navConfig = lamsaNavConfig(
    t,
    lamsaTheme
  );

  const footerConfig =
    getLamsaFooterConfig(t);

  return (
    <ThemeProvider theme={lamsaTheme}>
      <CssBaseline />

      <LamsaNavbar
        config={navConfig}
      />

      <Outlet />

      <FooterSection
        config={footerConfig}
      />
    </ThemeProvider>
  );
}