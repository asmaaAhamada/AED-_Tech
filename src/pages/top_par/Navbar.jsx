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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

export default function Navbar({ config }) {
  const {
    brandName = "AED TECH",
    brandTag = "AUTOMATE. GROW. RETAIN.",
    logo = null,
    navItems = [],
    cta = { label: "START A PROJECT", path: "/contact" },
    showStatusBar = true,
    statusText = "SYSTEM ACTIVE // LATENCY 12MS",
    locales = [
      { code: "en", label: "EN" },
      { code: "ar", label: "AR" },
    ],
    activeLocale = "en",
    onLocaleChange = () => {},
  } = config || {};

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:960px)");
  const location = useLocation();

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
        <Toolbar sx={{ minHeight: 72, px: { xs: 2, md: 4 } }}>
          {/* Brand Name & Tagline */}
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
            <Box>
              {/* تكبير كلمة AED TECH */}
              <Typography
                sx={{
                  color: palette.text,
                  fontWeight: 900,
                  fontSize: { xs: "1.3rem", md: "1.5rem" }, // تم تكبير حجم الخط هنا
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
                    letterSpacing: "0.14em",
                    lineHeight: 1.2,
                    mt: 0.5,
                  }}
                >
                  {brandTag}
                </Typography>
              )}
            </Box>
          </Box>

          {/* Desktop Navigation Links */}
          {isDesktop && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3.5, mr: 3 }}>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  style={{ textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <Box
                      sx={{
                        position: "relative",
                        color: isActive ? palette.accent : palette.text,
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        fontFamily: fontMono,
                        py: 1,
                        transition: "color 0.2s ease",
                        "&:hover": {
                          color: palette.accent,
                        },
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
                        "&:hover::after": {
                          width: "100%",
                        },
                      }}
                    >
                      {item.label}
                    </Box>
                  )}
                </NavLink>
              ))}
            </Box>
          )}

          {/* Status Bar Badge */}
          {/* {showStatusBar && statusText && isDesktop && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                border: `1px solid ${palette.border}`,
                bgcolor: "rgba(8, 14, 24, 0.6)",
                px: 2,
                py: 0.7,
                mr: 2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: palette.accent,
                  boxShadow: `0 0 8px ${palette.accent}`,
                }}
              />
              <Typography
                sx={{
                  color: palette.accent,
                  fontFamily: fontMono,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                {statusText}
              </Typography>
            </Box>
          )} */}

          {/* Language Switcher - مطابق للتصميم المطلوب */}
          {locales.length > 0 && isDesktop && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: `1px solid ${palette.border}`,
                bgcolor: palette.bg,
                mr: 2,
              }}
            >
              {locales.map((loc) => {
                const isActive = activeLocale === loc.code;
                return (
                  <Box
                    key={loc.code}
                    onClick={() => onLocaleChange(loc.code)}
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
                      "&:hover": {
                        color: isActive ? "#0B1626" : palette.text,
                      },
                    }}
                  >
                    {loc.label}
                  </Box>
                );
              })}
            </Box>
          )}

          {/* CTA Button */}
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
    letterSpacing: "0.08em",
    transition: "all 0.2s ease",

    "&:hover": {
      borderColor: palette.accent,
      color: palette.accent,
      bgcolor: "rgba(227, 177, 86, 0.08)",
    },
  }}
>
  {cta.label}
</Button>
          )}

          {/* Mobile Menu Button */}
          {!isDesktop && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ color: palette.text }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { bgcolor: palette.bg, width: 280, borderLeft: `1px solid ${palette.border}` },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: palette.text }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
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
                  borderLeft: `3px solid ${palette.accent}`,
                  bgcolor: "rgba(227, 177, 86, 0.05)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 700, fontFamily: fontMono }}
              />
            </ListItemButton>
          ))}
        </List>
        <Divider sx={{ borderColor: palette.border, my: 1 }} />
        {cta && (
          <Box sx={{ px: 2, mt: 2 }}>
            <Button
              component={NavLink}
              to={cta.path}
              fullWidth
              variant="outlined"
              sx={{ borderColor: palette.accent, color: palette.accent, borderRadius: 0, py: 1 }}
            >
              {cta.label}
            </Button>
          </Box>
        )}
      </Drawer>
    </>
  );
}