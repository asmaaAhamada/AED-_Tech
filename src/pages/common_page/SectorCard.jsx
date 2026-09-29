// src/pages/common_page/SectorsSection.jsx
import { useRef, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

const palette = {
  bg: "#0E1B2E",
  surface: "#0B1626",
  border: "#1E2D42",
  accent: "#E3B156",
  text: "#F5F7FA",
  muted: "#9AA5B1",
};

const fontMono = "'IBM Plex Mono', 'Courier New', monospace";

function SectorCard({ sector, index }) {
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
      sx={{
        "--delay": `${(index % 4) * 90}ms`,
        opacity: 0,
        transform: "translateY(24px)",
        transition:
          "opacity 0.5s ease var(--delay), transform 0.5s ease var(--delay), border-color 0.25s ease, box-shadow 0.25s ease",
        "&.is-visible": { opacity: 1, transform: "translateY(0)" },
        border: `1px solid ${palette.border}`,
        borderRadius: 2,
        p: 3,
        height: "100%",
        bgcolor: palette.surface,
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: palette.accent,
          boxShadow: "0 16px 30px rgba(0,0,0,0.35)",
        },
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${palette.accent}`,
          borderRadius: 1.5,
          color: palette.accent,
          bgcolor: "rgba(227,177,86,0.06)",
          mb: 2.5,
          fontSize: "1.2rem",
        }}
      >
        {sector.icon}
      </Box>

      <Typography sx={{ color: palette.text, fontWeight: 700, fontSize: "1.05rem", mb: 1.2 }}>
        {sector.title}
      </Typography>
      <Typography sx={{ color: palette.muted, fontSize: "0.82rem", lineHeight: 1.7, mb: 2.5 }}>
        {sector.description}
      </Typography>

      {sector.result && (
        <Box sx={{ borderTop: `1px solid ${palette.border}`, pt: 1.5 }}>
          <Typography sx={{ color: palette.accent, fontFamily: fontMono, fontSize: "0.68rem", letterSpacing: "0.04em" }}>
            RESULT: {sector.result}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

/**
 * SectorsSection — قسم عام لعرض "نماذج الأعمال/الشرائح" اللي المنصة بتخدمها.
 * eyebrow / title / subtitle / sectors[] من config، بلا ربط بقطاع معين.
 */
export default function SectorsSection({ config }) {
  const { eyebrow = "", title = "", subtitle = "", sectors = [] } = config || {};

  return (
    <Box sx={{ bgcolor: palette.bg, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {eyebrow && (
          <Typography sx={{ color: palette.accent, fontFamily: fontMono, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", mb: 2 }}>
            {eyebrow}
          </Typography>
        )}
        {title && (
          <Typography sx={{ color: palette.text, fontWeight: 800, fontSize: { xs: "1.8rem", md: "2.3rem" }, mb: 2.5, lineHeight: 1.3 }}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography sx={{ color: palette.muted, fontSize: "0.95rem", maxWidth: 620, mx: "auto", mb: 7, lineHeight: 1.7 }}>
            {subtitle}
          </Typography>
        )}

        <Grid container spacing={2.5} sx={{ textAlign: "left" }}>
          {sectors.map((sector, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <SectorCard sector={sector} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}