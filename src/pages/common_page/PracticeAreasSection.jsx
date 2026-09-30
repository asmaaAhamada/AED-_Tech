import { useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function Tag({ label, highlighted }) {
  const theme = useTheme();
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const colors = {
    border: theme.palette.border.main,
    accent: theme.palette.accent.main,
    muted: theme.palette.text.secondary,
  };

  const fontMono = theme.typography.mono;
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
      sx={{
        display: "inline-flex",
        alignItems: "center",
        border: `1px solid ${
          highlighted ? colors.accent : colors.border
        }`,
        borderRadius: 1,
        px: 1.4,
        py: 0.5,
        mr: 1,
        mb: 1,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.7rem",
          fontFamily: fontMono,
          color: highlighted ? colors.accent : colors.muted,
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

function PracticeCard({ practice, index, isRtl }) {
  const theme = useTheme();

  const fontMono = theme.typography.mono;

  const colors = {
    surface: theme.palette.surface.main,
    border: theme.palette.border.main,
    accent: theme.palette.accent.main,
    text: theme.palette.text.primary,
    muted: theme.palette.text.secondary,
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
        "--delay": `${(index % 3) * 100}ms`,

        opacity: 0,
        transform: "translateY(24px)",

        transition:
          "opacity 0.5s ease var(--delay), " +
          "transform 0.5s ease var(--delay), " +
          "border-color 0.25s ease, " +
          "box-shadow 0.25s ease",

        "&.is-visible": {
          opacity: 1,
          transform: "translateY(0)",
        },

        border: `1px solid ${colors.border}`,
        borderRadius: 2,
        p: 3.5,
        height: "100%",
        bgcolor: colors.surface,

        textAlign: isRtl ? "right" : "left",

        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: colors.accent,
          boxShadow: `0 16px 30px ${theme.palette.effects.practiceCardShadow}`,
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

            border: `1px solid ${colors.border}`,
            bgcolor: theme.palette.effects.practiceIconBg,

            borderRadius: 1.5,
            color: colors.accent,
            mb: 2,
          }}
        >
          {practice.icon}
        </Box>
      )}

      <Typography
        sx={{
          color: colors.accent,
          fontFamily: fontMono,
          fontSize: "0.68rem",
          letterSpacing: "0.06em",
          mb: 1.5,

          // نخلي الأكواد/المصطلحات القصيرة ثابتة LTR
          direction: "ltr",
          textAlign: isRtl ? "right" : "left",
        }}
      >
        {practice.eyebrow}
      </Typography>

      <Typography
        sx={{
          color: colors.text,
          fontWeight: 700,
          fontSize: "1.15rem",
          mb: 1.5,
          lineHeight: 1.3,
        }}
      >
        {practice.title}
      </Typography>

      <Typography
        sx={{
          color: colors.muted,
          fontSize: "0.85rem",
          lineHeight: 1.7,
          mb: 3,
        }}
      >
        {practice.description}
      </Typography>

      {/* صف الـ Tags ثابت LTR حتى ترتيب البادجات لا ينعكس مع العربية */}
      <Box sx={{ direction: "ltr" }}>
        {practice.tags?.map((tag, i) => (
          <Tag
            key={i}
            label={tag}
            highlighted={i === practice.tags.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function PracticeAreasSection({ config }) {
  const theme = useTheme();
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
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
    description = "",
    practices = [],
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
    overflow: "hidden",
  }}
>
  <Box
  ref={glowRef}
  sx={{
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    transition: "background 0.05s linear",
    zIndex: 0,
  }}
/>
<Container
  maxWidth="lg"
  sx={{
    position: "relative",
    zIndex: 1,
  }}
>        {/* direction LTR يحافظ على ترتيب العمودين */}
        <Grid
          container
          spacing={4}
          alignItems="flex-end"
          sx={{
            mb: 6,
            direction: "ltr",
          }}
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              textAlign: isRtl ? "right" : "left",
            }}
          >
            <Typography
              sx={{
                color: colors.accent,
                fontFamily: fontMono,
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                mb: 1.5,
              }}
            >
              {eyebrow}
            </Typography>

            <Typography
              sx={{
                color: colors.text,
                fontWeight: 800,
                fontSize: {
                  xs: "1.6rem",
                  md: "2.1rem",
                },
                lineHeight: 1.3,
              }}
            >
              {title}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              textAlign: isRtl ? "right" : "left",
            }}
          >
            <Typography
              sx={{
                color: colors.muted,
                fontSize: "0.9rem",
                lineHeight: 1.7,
              }}
            >
              {description}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2.5}>
          {practices.map((practice, i) => (
            <Grid item xs={12} md={4} key={i}>
              <PracticeCard
                practice={practice}
                index={i}
                isRtl={isRtl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}