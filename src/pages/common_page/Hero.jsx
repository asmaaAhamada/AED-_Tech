import { useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LanguageIcon from "@mui/icons-material/Language";

import { useTranslation } from "react-i18next";

/**
 * RevealSection — غلاف عام لأي قسم
 * بيضيف أنيميشن دخول Fade + Slide Up
 */
export function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("lamsa-reveal-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      className="lamsa-reveal"
      sx={{
        "--lamsa-reveal-delay": `${delay}ms`,
      }}
    >
      {children}
    </Box>
  );
}

const revealStyles = `
  .lamsa-reveal {
    opacity: 0;
    transform: translateY(50px);
    transition:
      opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) var(--lamsa-reveal-delay, 0ms),
      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) var(--lamsa-reveal-delay, 0ms);
  }

  .lamsa-reveal.lamsa-reveal-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .lamsa-reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
`;

export default function Hero({ config }) {
  const theme = useTheme();

  const colors = {
    bg: theme.palette.background.default,
    border: theme.palette.border.main,
    accent: theme.palette.accent.main,
    text: theme.palette.text.primary,
    muted: theme.palette.text.secondary,
  };

  const fontMono = theme.typography.mono;

  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const {
    badgeText = "",
    headlineStart = "",
    headlineHighlight = "",
    subtitle = "",
    backgroundImage = "",
    primaryCta = null,
    secondaryCta = null,
  } = config || {};

  const heroRef = useRef(null);
  const glowRef = useRef(null);

  /*
   * Mouse glow
   */
  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;

    if (!hero || !glow) return;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.background = `radial-gradient(
        circle 350px at ${x}px ${y}px,
        ${theme.palette.effects.mouseGlow},
        transparent 80%
      )`;
    };

    hero.addEventListener("mousemove", onMove);

    return () => {
      hero.removeEventListener("mousemove", onMove);
    };
  }, [theme]);

  /*
   * Smooth scroll
   */
  const handleSmoothScroll = (e, targetId) => {
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();

      const element = document.querySelector(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <>
      <style>{revealStyles}</style>

      <RevealSection delay={0}>
        <Box
          ref={heroRef}
          sx={{
            position: "relative",

            /*
             * إذا في backgroundImage نستخدمها،
             * وإذا ما في، بيرجع للـ background العادي.
             */
            bgcolor: colors.bg,

            pt: { xs: 7, md: 10 },
            pb: { xs: 9, md: 12 },

            textAlign: "center",
            overflow: "hidden",

            minHeight: {
              xs: 560,
              md: 650,
            },

            display: "flex",
            alignItems: "center",

            "@keyframes fadeInUp": {
              "0%": {
                opacity: 0,
                transform: "translateY(25px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },

            "@keyframes pulseGlow": {
              "0%, 100%": {
                opacity: 1,
                transform: "scale(1)",
              },
              "50%": {
                opacity: 0.4,
                transform: "scale(0.8)",
              },
            },
          }}
        >
          {/* =========================================
              Background Image
          ========================================= */}

          {backgroundImage && (
            <Box
              sx={{
                position: "absolute",
                inset: 0,

                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                zIndex: 0,

                transform: "scale(1.02)",
              }}
            />
          )}

          {/* =========================================
              Background Overlay
          ========================================= */}

          {backgroundImage && (
            <Box
              sx={{
                position: "absolute",
                inset: 0,

                /*
                 * Overlay خفيف حتى الصورة تبقى ظاهرة
                 * والنص يظل مقروء.
                 */
                background: `
                  linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.42) 0%,
                    rgba(0, 0, 0, 0.52) 55%,
                    rgba(0, 0, 0, 0.68) 100%
                  )
                `,

                zIndex: 1,
              }}
            />
          )}

          {/* =========================================
              Mouse Glow
          ========================================= */}

          <Box
            ref={glowRef}
            sx={{
              position: "absolute",
              inset: 0,

              pointerEvents: "none",

              transition: "background 0.05s linear",

              zIndex: 2,
            }}
          />

          {/* =========================================
              Content
          ========================================= */}

          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              zIndex: 3,
              width: "100%",
            }}
          >
            {/* Badge */}

            {badgeText && (
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,

                  border: `1px solid ${
                    backgroundImage
                      ? "rgba(255,255,255,0.25)"
                      : colors.border
                  }`,

                  bgcolor: backgroundImage
                    ? "rgba(0,0,0,0.22)"
                    : theme.palette.effects.surfaceTranslucent,

                  backdropFilter: "blur(10px)",

                  borderRadius: 1.5,

                  px: 2.5,
                  py: 0.8,

                  mb: 3,

                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    bgcolor: colors.accent,

                    boxShadow: `0 0 10px ${colors.accent}`,

                    animation: "pulseGlow 2s infinite ease-in-out",
                  }}
                />

                <Typography
                  sx={{
                    color: colors.accent,
                    fontSize: "0.7rem",
                    letterSpacing: isRtl ? "normal" : "0.12em",
                    fontFamily: fontMono,
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  {badgeText}
                </Typography>
              </Box>
            )}

            {/* Headline */}

            <Typography
              sx={{
                color: colors.text,

                fontWeight: 700,
                lineHeight: 1.15,

                fontSize: {
                  xs: "1.8rem",
                  sm: "2.5rem",
                  md: "3.2rem",
                },

                letterSpacing: isRtl ? "normal" : "0.02em",

                textTransform: isRtl ? "none" : "uppercase",

                mb: 2.5,

                maxWidth: 900,
                mx: "auto",

                animation: "fadeInUp 0.8s ease-out 0.2s forwards",

                opacity: 0,

                /*
                 * إذا Hero فيه صورة نخلي النص
                 * أوضح شوي.
                 */
                textShadow: backgroundImage
                  ? "0 3px 18px rgba(0,0,0,0.45)"
                  : "none",
              }}
            >
              {headlineStart}{" "}

              <Box
                component="span"
                sx={{
                  color: colors.accent,

                  display: "block",

                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.5rem",
                    md: "3.2rem",
                  },

                  fontWeight: 800,

                  textShadow: backgroundImage
                    ? `
                      0 0 25px ${theme.palette.effects.accentGlowStrong},
                      0 3px 18px rgba(0,0,0,0.45)
                    `
                    : `0 0 25px ${theme.palette.effects.accentGlowStrong}`,

                  mt: 0.5,
                }}
              >
                {headlineHighlight}
              </Box>
            </Typography>

            {/* Subtitle */}

            {subtitle && (
              <Typography
                sx={{
                  color: backgroundImage
                    ? "rgba(255,255,255,0.86)"
                    : colors.muted,

                  fontSize: {
                    xs: "0.85rem",
                    md: "0.95rem",
                  },

                  lineHeight: 1.7,

                  maxWidth: 720,
                  mx: "auto",

                  mb: 5,

                  animation: "fadeInUp 0.8s ease-out 0.4s forwards",

                  opacity: 0,

                  textShadow: backgroundImage
                    ? "0 2px 12px rgba(0,0,0,0.45)"
                    : "none",
                }}
              >
                {subtitle}
              </Typography>
            )}

            {/* Action Buttons */}

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2.5}
              justifyContent="center"
              alignItems="center"
              sx={{
                direction: "ltr",

                animation:
                  "fadeInUp 0.8s ease-out 0.6s forwards",

                opacity: 0,
              }}
            >
              {/* Primary CTA */}

              {primaryCta && (
                <Box
                  sx={{
                    position: "relative",
                    width: {
                      xs: "100%",
                      sm: "auto",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: -4,

                      bgcolor: colors.accent,

                      opacity: 0.35,

                      filter: "blur(12px)",

                      borderRadius: 1,

                      pointerEvents: "none",
                    }}
                  />

                  <Button
                    component="a"
                    href={
                      primaryCta.href ||
                      "#architecture-section"
                    }
                    onClick={(e) =>
                      handleSmoothScroll(
                        e,
                        primaryCta.href ||
                          "#architecture-section"
                      )
                    }
                    variant="contained"
                    endIcon={
                      isRtl ? (
                        <ArrowBackIcon />
                      ) : (
                        <ArrowForwardIcon />
                      )
                    }
                    sx={{
                      position: "relative",

                      direction: "ltr",

                      bgcolor: colors.accent,

                      color: colors.bg,

                      fontWeight: 800,

                      fontSize: "0.85rem",

                      letterSpacing: isRtl
                        ? "normal"
                        : "0.05em",

                      borderRadius: 1,

                      px: 4,
                      py: 1.5,

                      width: {
                        xs: "100%",
                        sm: "auto",
                      },

                      textTransform: isRtl
                        ? "none"
                        : "uppercase",

                      boxShadow: `
                        0 0 20px
                        ${theme.palette.effects.accentButtonGlow}
                      `,

                      "&:hover": {
                        bgcolor: colors.accent,

                        boxShadow: `
                          0 0 30px
                          ${theme.palette.effects.accentButtonGlowHover}
                        `,

                        transform: "translateY(-2px)",
                      },

                      transition: "all 0.3s ease",
                    }}
                  >
                    {primaryCta.label}
                  </Button>
                </Box>
              )}

              {/* Secondary CTA */}

              {secondaryCta && (
                <Button
                  component="a"
                  href={secondaryCta.href || "#demo"}
                  onClick={(e) =>
                    handleSmoothScroll(
                      e,
                      secondaryCta.href || "#demo"
                    )
                  }
                  variant="outlined"
                  startIcon={<LanguageIcon />}
                  sx={{
                    direction: "ltr",

                    borderColor: backgroundImage
                      ? "rgba(255,255,255,0.35)"
                      : colors.border,

                    color: backgroundImage
                      ? "#FFFFFF"
                      : colors.text,

                    fontWeight: 700,

                    fontSize: "0.85rem",

                    letterSpacing: isRtl
                      ? "normal"
                      : "0.05em",

                    borderRadius: 1,

                    px: 3.5,
                    py: 1.5,

                    width: {
                      xs: "100%",
                      sm: "auto",
                    },

                    bgcolor: backgroundImage
                      ? "rgba(0,0,0,0.20)"
                      : theme.palette.effects.surfaceGlass,

                    backdropFilter: "blur(8px)",

                    "&:hover": {
                      borderColor: colors.accent,

                      bgcolor:
                        theme.palette.effects.accentHover,

                      boxShadow: `
                        0 0 15px
                        ${theme.palette.effects.accentShadow}
                      `,

                      transform: "translateY(-2px)",
                    },

                    transition: "all 0.3s ease",
                  }}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </Stack>
          </Container>
        </Box>
      </RevealSection>
    </>
  );
}