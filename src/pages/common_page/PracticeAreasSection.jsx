import { useRef, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const palette = {
  bg: "#0E1B2E",
  surface: "#0B1626",
  border: "#1E2D42",
  accent: "#E3B156",
  text: "#F5F7FA",
  muted: "#9AA5B1",
};

const fontMono = "'IBM Plex Mono', 'Courier New', monospace";

function Tag({ label, highlighted }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        border: `1px solid ${highlighted ? palette.accent : palette.border}`,
        borderRadius: 1,
        px: 1.4,
        py: 0.5,
        mr: 1,
        mb: 1,
      }}
    >
      <Typography sx={{ fontSize: "0.7rem", fontFamily: fontMono, color: highlighted ? palette.accent : palette.muted, letterSpacing: "0.02em" }}>
        {label}
      </Typography>
    </Box>
  );
}

function PracticeCard({ practice, index, isRtl }) {
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
        "--delay": `${(index % 3) * 100}ms`,
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.5s ease var(--delay), transform 0.5s ease var(--delay), border-color 0.25s ease, box-shadow 0.25s ease",
        "&.is-visible": { opacity: 1, transform: "translateY(0)" },
        border: `1px solid ${palette.border}`,
        borderRadius: 2,
        p: 3.5,
        height: "100%",
        bgcolor: palette.surface,
        textAlign: isRtl ? "right" : "left",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: palette.accent,
          boxShadow: "0 16px 30px rgba(0,0,0,0.35)",
        },
      }}
    >
      {practice.icon && (
        <Box
          sx={{
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${palette.border}`,
            bgcolor: "rgba(255,255,255,0.02)",
            borderRadius: 1.5,
            color: palette.accent,
            mb: 2,
          }}
        >
          {practice.icon}
        </Box>
      )}

      <Typography sx={{ color: palette.accent, fontFamily: fontMono, fontSize: "0.68rem", letterSpacing: "0.06em", mb: 1.5, direction: "ltr", textAlign: isRtl ? "right" : "left" }}>
        {practice.eyebrow}
      </Typography>
      <Typography sx={{ color: palette.text, fontWeight: 700, fontSize: "1.15rem", mb: 1.5, lineHeight: 1.3 }}>
        {practice.title}
      </Typography>
      <Typography sx={{ color: palette.muted, fontSize: "0.85rem", lineHeight: 1.7, mb: 3 }}>
        {practice.description}
      </Typography>

      {/* صف الـ Tags — direction:"ltr" حتى ترتيبها يضل ثابت (بادج تقنية قصيرة) */}
      <Box sx={{ direction: "ltr" }}>
        {practice.tags?.map((tag, i) => (
          <Tag key={i} label={tag} highlighted={i === practice.tags.length - 1} />
        ))}
      </Box>
    </Box>
  );
}

export default function PracticeAreasSection({ config }) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const { eyebrow = "", title = "", description = "", practices = [] } = config || {};

  return (
    <Box sx={{ bgcolor: palette.bg, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* direction:"ltr" ثابت على صف الهيدر بعمودين، وتexAlign حسب اللغة لكل عمود */}
        <Grid container spacing={4} alignItems="flex-end" sx={{ mb: 6, direction: "ltr" }}>
          <Grid item xs={12} md={7} sx={{ textAlign: isRtl ? "right" : "left" }}>
            <Typography sx={{ color: palette.accent, fontFamily: fontMono, fontSize: "0.75rem", letterSpacing: "0.08em", mb: 1.5 }}>
              {eyebrow}
            </Typography>
            <Typography sx={{ color: palette.text, fontWeight: 800, fontSize: { xs: "1.6rem", md: "2.1rem" }, lineHeight: 1.3 }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ textAlign: isRtl ? "right" : "left" }}>
            <Typography sx={{ color: palette.muted, fontSize: "0.9rem", lineHeight: 1.7 }}>
              {description}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2.5}>
          {practices.map((practice, i) => (
            <Grid item xs={12} md={4} key={i}>
              <PracticeCard practice={practice} index={i} isRtl={isRtl} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}