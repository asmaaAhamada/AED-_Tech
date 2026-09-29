// src/pages/top_par/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import { navConfig } from "./config";

export default function MainLayout() {
  const { t } = useTranslation();
  const currentNavConfig = navConfig(t);

  return (
    <>
      <Navbar config={currentNavConfig} />
      <Outlet />
    </>
  );
}