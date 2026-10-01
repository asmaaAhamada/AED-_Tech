import {
  Box,
  Container,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";

export default function ManifestoSection({ config }) {
  const theme = useTheme();

  const fontMono = theme.typography.mono;

  const colors = {
    bg: theme.palette.surface.main,
    border: theme.palette.border.main,
    accent: theme.palette.accent.main,
    text: theme.palette.text.primary,
    muted: theme.palette.text.secondary,
  };

  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const {
    logo = "",
    badgeLabel = "",
    eyebrow = "",
    tagline = "",
    quote = "",
    pillars = [],
    backgroundImage = "",
  } = config || {};

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;

    if (!section || !glow) return;

    const onMove = (e) => {
      const rect = section.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.background = `radial-gradient(
        circle 350px at ${x}px ${y}px,
        ${theme.palette.effects.mouseGlow},
        transparent 80%
      )`;
    };

    section.addEventListener("mousemove", onMove);

    return () => {
      section.removeEventListener("mousemove", onMove);
    };
  }, [theme]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        bgcolor: colors.bg,
        py: { xs: 8, md: 12 },
        textAlign: "center",
        overflow: "hidden",

        ...(backgroundImage && {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }),
      }}
    >
      {/* Background overlay */}
      {backgroundImage && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,

            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(180deg, rgba(21, 11, 20, 0.86), rgba(21, 11, 20, 0.94))"
                : "linear-gradient(180deg, rgba(251, 244, 247, 0.88), rgba(251, 244, 247, 0.95))",

            backdropFilter: "blur(1px)",

            zIndex: 0,
          }}
        />
      )}

      {/* Mouse glow */}
      <Box
        ref={glowRef}
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          transition: "background 0.05s linear",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Logo */}
        {logo && (
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              maxHeight: {
                xs: 48,
                md: 64,
              },
              maxWidth: "100%",
              objectFit: "contain",
              mx: "auto",
              mb: 3,
            }}
          />
        )}

        {/* Badge */}
        {badgeLabel && (
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${colors.border}`,
              borderRadius: 1.5,
              px: 2,
              py: 1,
              mb: 4,

              bgcolor:
                theme.palette.effects.surfaceGlass,
              
              backdropFilter: "blur(8px)",
            }}
          >
            <Typography
              sx={{
                color: colors.text,
                fontSize: "0.75rem",
                fontWeight: 700,
              }}
            >
              {badgeLabel}
            </Typography>
          </Box>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <Typography
            sx={{
              color: colors.accent,
              fontFamily: fontMono,
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              mb: 2,
            }}
          >
            {eyebrow}
          </Typography>
        )}

        {/* Tagline */}
        {tagline && (
          <Typography
            sx={{
              color: colors.text,
              fontWeight: 800,
              fontSize: {
                xs: "1.9rem",
                md: "2.6rem",
              },
              mb: 4,
            }}
          >
            {tagline}
          </Typography>
        )}

        {/* Quote */}
        {quote && (
          <Typography
            sx={{
              color: colors.text,
              fontSize: {
                xs: "1.05rem",
                md: "1.3rem",
              },
              lineHeight: 1.7,
              fontStyle: isRtl ? "normal" : "italic",
              maxWidth: 780,
              mx: "auto",
              mb: 5,
            }}
          >
            “{quote}”
          </Typography>
        )}

        {/* Pillars */}
        {pillars.length > 0 && (
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={{
              xs: 1,
              sm: 2,
            }}
            divider={
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                  alignItems: "center",
                  color: colors.muted,
                }}
              >
                •
              </Box>
            }
            justifyContent="center"
            sx={{
              direction: "ltr",
            }}
          >
            {pillars.map((pillar, index) => (
              <Typography
                key={index}
                sx={{
                  color: colors.muted,
                  fontFamily: fontMono,
                  fontSize: "0.72rem",
                  letterSpacing: "0.06em",
                }}
              >
                {pillar}
              </Typography>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
}