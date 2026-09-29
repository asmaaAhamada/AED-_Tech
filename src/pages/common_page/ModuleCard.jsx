// src/pages/common_page/ModulesSection.jsx
import { useRef, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

const palette = {
  bg: "#0E1B2E",
  border: "#1E2D42",
  accent: "#E3B156",
  text: "#F5F7FA",
  muted: "#9AA5B1",
  teal: "#4FD1A5",
};

const fontMono = "'IBM Plex Mono', 'Courier New', monospace";

function ModuleCard({ mod, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={cardRef}
      className="module-card"
      sx={{
        "--delay": `${(index % 4) * 90}ms`,
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.5s ease var(--delay), transform 0.5s ease var(--delay), border-color 0.25s ease, box-shadow 0.25s ease",
        "&.is-visible": { opacity: 1, transform: "translateY(0)" },
        border: `1px solid ${palette.border}`,
        borderRadius: 2,
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "rgba(255,255,255,0.02)",
        cursor: "default",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: palette.accent,
          boxShadow: "0 16px 30px rgba(0,0,0,0.35)",
        },
        "&:hover .module-title": { color: palette.accent },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
        <Typography sx={{ color: palette.muted, fontFamily: fontMono, fontSize: "0.68rem", letterSpacing: "0.06em" }}>
          {mod.code}
        </Typography>
        {mod.icon && <Box sx={{ color: palette.accent, display: "flex" }}>{mod.icon}</Box>}
      </Box>

      <Typography
        className="module-title"
        sx={{ color: palette.text, fontWeight: 700, fontSize: "1rem", mb: 1.2, lineHeight: 1.3, transition: "color 0.25s ease" }}
      >
        {mod.title}
      </Typography>

      <Typography sx={{ color: palette.muted, fontSize: "0.8rem", lineHeight: 1.7, flexGrow: 1, mb: 2.5 }}>
        {mod.description}
      </Typography>

      {mod.badge && (
        <Box sx={{ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${palette.border}`, pt: 1.5 }}>
          <Typography sx={{ color: palette.muted, fontSize: "0.68rem", letterSpacing: "0.04em" }}>
            {mod.badge.label}
          </Typography>
          <Typography sx={{ color: palette.teal, fontWeight: 700, fontSize: "0.72rem" }}>
            {mod.badge.value}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default function ModulesSection({ config }) {
  const { eyebrow = "", title = "", subtitle = "", modules = [] } = config || {};

  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;
    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.background = `radial-gradient(circle 320px at ${x}px ${y}px, rgba(227,177,86,0.08), transparent 70%)`;
    };
    section.addEventListener("mousemove", onMove);
    return () => section.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <Box ref={sectionRef} sx={{ position: "relative", bgcolor: palette.bg, py: { xs: 8, md: 12 }, overflow: "hidden" }}>
      <Box ref={glowRef} sx={{ position: "absolute", inset: 0, pointerEvents: "none", transition: "background 0.05s linear" }} />

      <Container maxWidth="xl" sx={{ position: "relative", textAlign: "center" }}>
        {eyebrow && (
          <Typography sx={{ color: palette.accent, fontFamily: fontMono, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", mb: 2 }}>
            {eyebrow}
          </Typography>
        )}
        {title && (
          <Typography sx={{ color: palette.text, fontWeight: 800, fontSize: { xs: "1.8rem", md: "2.4rem" }, mb: 2.5, lineHeight: 1.25 }}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography sx={{ color: palette.muted, fontSize: "0.95rem", maxWidth: 680, mx: "auto", mb: 7, lineHeight: 1.7 }}>
            {subtitle}
          </Typography>
        )}

        <Grid container spacing={2.5} sx={{ textAlign: "left" }}>
          {modules.map((mod, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={mod.code}>
              <ModuleCard mod={mod} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}