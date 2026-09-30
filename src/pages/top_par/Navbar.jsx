import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { navConfig } from "./config";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
 const dispatch = useDispatch();

const mode = useSelector((state) => state.theme.mode);

const fontMono = theme.typography.fontFamily;



const colors = {
  bg: theme.palette.background.default,
  bgScrolled: theme.palette.background.scrolled,
  surface: theme.palette.surface.main,
  border: theme.palette.border.main,
  accent: theme.palette.accent.main,
  text: theme.palette.text.primary,
  muted: theme.palette.text.secondary,
  teal: theme.palette.teal.main,}

const themeIconColor = theme.palette.effects.themeIcon;

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
          bgcolor: scrolled ? colors.bgScrolled : colors.bg,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${colors.border}`,
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
  {/* Premium Logo Box */}
  <Box
    sx={{
      width: { xs: 48, md: 54 },
      height: { xs: 48, md: 54 },

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      bgcolor: colors.surface,

      border: `1px solid ${colors.border}`,
      borderRadius: "14px",

      overflow: "hidden",

      boxShadow: theme.shadows[4],

      transition:
        "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",

      "&:hover": {
        transform: "translateY(-2px)",
        borderColor: colors.accent,
        boxShadow: theme.shadows[8],
      },

      flexShrink: 0,
    }}
  >
    {logo}
  </Box>

  

  <Box
    sx={{
      direction: isRtl ? "rtl" : "ltr",
      textAlign: isRtl ? "right" : "left",
    }}
  >
    <Typography
      sx={{
        color: colors.text,
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
          color: colors.muted,
          fontFamily: fontMono,
          fontSize: isRtl ? "0.92rem" : "0.72rem",
          fontWeight: 600,
          letterSpacing: isRtl ? "normal" : "0.11em",
          lineHeight: 1.2,
          mt: 0.5,
        }}
      >
        {brandTag}
      </Typography>
    )}
  </Box>

  {/* Theme icon */}
 {/* Theme icon */}
  <IconButton
  onClick={() => dispatch(toggleTheme())}
  aria-label={
    mode === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode"
  }
  sx={{
     color: themeIconColor,fontSize:'34px',
    "&:hover": {
      bgcolor: theme.palette.effects.accentGlow,
    },
  }}
>
{mode === "dark" ? (
  <WbSunnyIcon fontSize="large" />
) : (
  <DarkModeIcon  fontSize="large" />
)}</IconButton>
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
                        color: isActive ? colors.accent : colors.text,
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        letterSpacing: isRtl ? "normal" : "0.06em",
                        textTransform: isRtl ? "none" : "uppercase",
                        fontFamily: fontMono,
                        py: 1,
                        transition: "color 0.2s ease",
                        "&:hover": { color: colors.accent },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: isActive ? "100%" : "0%",
                          height: "2px",
                          backgroundColor: colors.accent,
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
            <Box sx={{ display: "flex", alignItems: "center", border: `1px solid ${colors.border}`, bgcolor: colors.bg, mx: 2 }}>
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
                      color: isActive ? colors.bg : colors.muted,
                      bgcolor: isActive ? colors.accent : "transparent",
                      transition: "all 0.2s ease",
                      "&:hover": { color: isActive ? colors.bg : colors.text },
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
    borderColor: colors.accent,
    color: colors.accent,
    borderRadius: 0,

    px: 2.5,
    py: 0.8,

    fontSize: "0.78rem",
    fontWeight: 800,
    fontFamily: fontMono,

    letterSpacing: isRtl ? "normal" : "0.08em",

    whiteSpace: "nowrap",

    minWidth: "max-content",

    transition: "all 0.2s ease",

    "&:hover": {
      borderColor: colors.accent,
      color: colors.accent,
      bgcolor: theme.palette.effects.accentHover,
    },
  }}
>
  {cta.label}
</Button>
          )}

          {!isDesktop && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ color: colors.text }}>
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
        PaperProps={{ sx: { bgcolor: colors.bg, width: 280, borderLeft: `1px solid ${colors.border}` } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: colors.text }}>
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
                color: colors.text,
                py: 1.5,
                "&.active": {
                  color: colors.accent,
                  borderRight: isRtl ? `3px solid ${colors.accent}` : "none",
                  borderLeft: !isRtl ? `3px solid ${colors.accent}` : "none",
                  bgcolor: theme.palette.effects.accentActive,
                },
              }}
            >
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 700, fontFamily: fontMono }} />
            </ListItemButton>
          ))}
        </List>
        <Divider sx={{ borderColor: colors.border, my: 1 }} />

        <Box sx={{ px: 2, py: 1, display: "flex", gap: 1 }}>
          {locales.map((loc) => (
            <Button
              key={loc.code}
              fullWidth
              size="small"
              onClick={() => handleLanguageChange(loc.code)}
              sx={{
                color: i18n.language === loc.code ? colors.bg : colors.text,
                bgcolor: i18n.language === loc.code ? colors.accent : "transparent",
                border: `1px solid ${colors.border}`,
                fontFamily: fontMono,
                "&:hover": { bgcolor: colors.accent, color: colors.bg },
              }}
            >
              {loc.label}
            </Button>
          ))}
        </Box>

        {cta && (
          <Box sx={{ px: 2, mt: 1 }}>
            <Button component={NavLink} to={cta.path} fullWidth variant="outlined" sx={{ borderColor: colors.accent, color: colors.accent, borderRadius: 0, py: 1 }}>
              {cta.label}
            </Button>
          </Box>
        )}
      </Drawer>
    </>
  );
}