import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer,
  List, ListItemButton, ListItemText, Divider, useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { navConfig } from "./config";

const palette = {
  bg: "#0B1626",
  bgScrolled: "rgba(11, 22, 38, 0.95)",
  surface: "#080E18",
  border: "#1E2D42",
  accent: "#E3B156",
  text: "#F5F7FA",
  muted: "#9AA5B1",
  teal: "#4FD1A5",
};

const fontMono = "'IBM Plex Mono', 'Courier New', monospace";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const config = navConfig(t);
  const isRtl = i18n.language === "ar";

  const { brandName, brandTag, logo, navItems, cta, locales } = config;

  // ترتيب عناصر التنقل يعكس بالعربي فقط — اللوغو ثابت أقصى اليسار دايماً
  const displayNavItems = isRtl ? [...navItems].reverse() : navItems;

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:960px)");
  const location = useLocation();

  const handleLanguageChange = (code) => i18n.changeLanguage(code);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: scrolled ? palette.bgScrolled : palette.bg,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${palette.border}`,
          transition: "all 0.25s ease",
        }}
      >
        {/* direction: "ltr" هون بالضبط هو الحل — بيقفل ترتيب العناصر الفيزيائي
            بغض النظر عن اتجاه الصفحة (rtl/ltr)، فاللوغو يضل مثبت أقصى اليسار دايماً */}
        <Toolbar sx={{ minHeight: 72, px: { xs: 2, md: 4 }, direction: "ltr" }}>
          {/* Brand — ثابت أقصى اليسار دايماً، بدون أي شرط isRtl */}
          <Box
            component={NavLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              mr: "auto",
            }}
          >
            {logo}
            <Box sx={{ direction: isRtl ? "rtl" : "ltr", textAlign: isRtl ? "right" : "left" }}>
              <Typography
                sx={{
                  color: palette.text,
                  fontWeight: 900,
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                  letterSpacing: "0.06em",
                  lineHeight: 1,
                  fontFamily: fontMono,
                }}
              >
                {brandName}
              </Typography>
              {brandTag && (
                <Typography
                  sx={{
                    color: palette.muted,
                    fontFamily: fontMono,
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: isRtl ? "normal" : "0.14em",
                    lineHeight: 1.2,
                    mt: 0.5,
                  }}
                >
                  {brandTag}
                </Typography>
              )}
            </Box>
          </Box>

          {/* Desktop Nav — الترتيب معكوس بالعربي عبر displayNavItems */}
          {isDesktop && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3.5, mx: 3 }}>
              {displayNavItems.map((item) => (
                <NavLink key={item.path} to={item.path} end={item.path === "/"} style={{ textDecoration: "none" }}>
                  {({ isActive }) => (
                    <Box
                      sx={{
                        position: "relative",
                        color: isActive ? palette.accent : palette.text,
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        letterSpacing: isRtl ? "normal" : "0.06em",
                        textTransform: isRtl ? "none" : "uppercase",
                        fontFamily: fontMono,
                        py: 1,
                        transition: "color 0.2s ease",
                        "&:hover": { color: palette.accent },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: isActive ? "100%" : "0%",
                          height: "2px",
                          backgroundColor: palette.accent,
                          transition: "width 0.25s ease-in-out",
                        },
                        "&:hover::after": { width: "100%" },
                      }}
                    >
                      {item.label}
                    </Box>
                  )}
                </NavLink>
              ))}
            </Box>
          )}

          {/* Language Switcher */}
          {locales.length > 0 && isDesktop && (
            <Box sx={{ display: "flex", alignItems: "center", border: `1px solid ${palette.border}`, bgcolor: palette.bg, mx: 2 }}>
              {locales.map((loc) => {
                const isActive = i18n.language === loc.code;
                return (
                  <Box
                    key={loc.code}
                    onClick={() => handleLanguageChange(loc.code)}
                    sx={{
                      cursor: "pointer",
                      fontFamily: fontMono,
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      px: 1.8,
                      py: 0.7,
                      color: isActive ? "#0B1626" : palette.muted,
                      bgcolor: isActive ? palette.accent : "transparent",
                      transition: "all 0.2s ease",
                      "&:hover": { color: isActive ? "#0B1626" : palette.text },
                    }}
                  >
                    {loc.label}
                  </Box>
                );
              })}
            </Box>
          )}

          {/* CTA */}
          {cta && isDesktop && (
            <Button
              component={NavLink}
              to={cta.path}
              variant="outlined"
              sx={{
                borderColor: palette.accent,
                color: palette.accent,
                borderRadius: 0,
                px: 2.5,
                py: 0.8,
                fontSize: "0.78rem",
                fontWeight: 800,
                fontFamily: fontMono,
                letterSpacing: isRtl ? "normal" : "0.08em",
                transition: "all 0.2s ease",
                "&:hover": { borderColor: palette.accent, color: palette.accent, bgcolor: "rgba(227, 177, 86, 0.08)" },
              }}
            >
              {cta.label}
            </Button>
          )}

          {!isDesktop && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ color: palette.text }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor={isRtl ? "left" : "right"}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { bgcolor: palette.bg, width: 280, borderLeft: `1px solid ${palette.border}` } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: palette.text }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {displayNavItems.map((item) => (
            <ListItemButton
              key={item.path}
              component={NavLink}
              to={item.path}
              end={item.path === "/"}
              sx={{
                color: palette.text,
                py: 1.5,
                "&.active": {
                  color: palette.accent,
                  borderRight: isRtl ? `3px solid ${palette.accent}` : "none",
                  borderLeft: !isRtl ? `3px solid ${palette.accent}` : "none",
                  bgcolor: "rgba(227, 177, 86, 0.05)",
                },
              }}
            >
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 700, fontFamily: fontMono }} />
            </ListItemButton>
          ))}
        </List>
        <Divider sx={{ borderColor: palette.border, my: 1 }} />

        <Box sx={{ px: 2, py: 1, display: "flex", gap: 1 }}>
          {locales.map((loc) => (
            <Button
              key={loc.code}
              fullWidth
              size="small"
              onClick={() => handleLanguageChange(loc.code)}
              sx={{
                color: i18n.language === loc.code ? "#0B1626" : palette.text,
                bgcolor: i18n.language === loc.code ? palette.accent : "transparent",
                border: `1px solid ${palette.border}`,
                fontFamily: fontMono,
                "&:hover": { bgcolor: palette.accent, color: "#0B1626" },
              }}
            >
              {loc.label}
            </Button>
          ))}
        </Box>

        {cta && (
          <Box sx={{ px: 2, mt: 1 }}>
            <Button component={NavLink} to={cta.path} fullWidth variant="outlined" sx={{ borderColor: palette.accent, color: palette.accent, borderRadius: 0, py: 1 }}>
              {cta.label}
            </Button>
          </Box>
        )}
      </Drawer>
    </>
  );
}