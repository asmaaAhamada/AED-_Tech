// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import navConfig from "./config";


export default function MainLayout() {
  return (
    <>
      <Navbar config={navConfig} />
      <Outlet />
    </>
  );
}