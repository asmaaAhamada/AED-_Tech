import { useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function SectorCard({ sector, index, isRtl, resultLabel }) {
  const theme = useTheme();

  const fontMono = theme.typography.mono;

  const colors = {
    border: theme.palette.border.main,
    accent: theme.palette.accent.main,
    text: theme.palette.text.primary,
    muted: theme.palette.text.secondary,
    surface: theme.palette.surface.main,
  };

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

        "&.is-visible": {
          opacity: 1,
          transform: "translateY(0)",
        },

        border: `1px solid ${colors.border}`,
        borderRadius: 2,
        p: 3,
        height: "100%",
        bgcolor: colors.surface,
        textAlign: isRtl ? "right" : "left",

        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: colors.accent,
          boxShadow: `0 16px 30px ${theme.palette.effects.sectorCardShadow}`,
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
          border: `1px solid ${colors.accent}`,
          borderRadius: 1.5,
          color: colors.accent,
          bgcolor: theme.palette.effects.sectorIconBg,
          mb: 2.5,
          fontSize: "1.2rem",
        }}
      >
        {sector.icon}
      </Box>

      <Typography
        sx={{
          color: colors.text,
          fontWeight: 700,
          fontSize: "1.05rem",
          mb: 1.2,
        }}
      >
        {sector.title}
      </Typography>

      <Typography
        sx={{
          color: colors.muted,
          fontSize: "0.82rem",
          lineHeight: 1.7,
          mb: 2.5,
        }}
      >
        {sector.description}
      </Typography>

      {sector.result && (
        <Box
          sx={{
            borderTop: `1px solid ${colors.border}`,
            pt: 1.5,
          }}
        >
          <Typography
            sx={{
              color: colors.accent,
              fontFamily: fontMono,
              fontSize: "0.68rem",
              letterSpacing: "0.04em",
            }}
          >
            {resultLabel}: {sector.result}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default function SectorsSection({ config }) {
  const theme = useTheme();

  const fontMono = theme.typography.mono;

  const colors = {
    bg: theme.palette.background.default,
    accent: theme.palette.accent.main,
    text: theme.palette.text.primary,
    muted: theme.palette.text.secondary,
  };

  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const {
    eyebrow = "",
    title = "",
    subtitle = "",
    sectors = [],
    resultLabel = "RESULT",
  } = config || {};

  return (
    <Box
      sx={{
        bgcolor: colors.bg,
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {eyebrow && (
          <Typography
            sx={{
              color: colors.accent,
              fontFamily: fontMono,
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              mb: 2,
            }}
          >
            {eyebrow}
          </Typography>
        )}

        {title && (
          <Typography
            sx={{
              color: colors.text,
              fontWeight: 800,
              fontSize: { xs: "1.8rem", md: "2.3rem" },
              mb: 2.5,
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography
            sx={{
              color: colors.muted,
              fontSize: "0.95rem",
              maxWidth: 620,
              mx: "auto",
              mb: 7,
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </Typography>
        )}

        <Grid container spacing={2.5}>
          {sectors.map((sector, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <SectorCard
                sector={sector}
                index={i}
                isRtl={isRtl}
                resultLabel={resultLabel}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}