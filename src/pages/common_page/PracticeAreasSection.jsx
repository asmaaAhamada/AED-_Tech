// src/pages/common_page/PracticeAreasSection.jsx
import { useRef, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
// استيراد الأيقونات المطابقة لقطاعات الأعمال
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import PoolIcon from "@mui/icons-material/Pool";
import StorefrontIcon from "@mui/icons-material/Storefront";

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
      <Typography
        sx={{
          fontSize: "0.7rem",
          fontFamily: fontMono,
          color: highlighted ? palette.accent : palette.muted,
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

function PracticeCard({ practice, index }) {
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
          "opacity 0.5s ease var(--delay), transform 0.5s ease var(--delay), border-color 0.25s ease, box-shadow 0.25s ease",
        "&.is-visible": { opacity: 1, transform: "translateY(0)" },
        border: `1px solid ${palette.border}`,
        borderRadius: 2,
        p: 3.5,
        height: "100%",
        bgcolor: palette.surface,
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: palette.accent,
          boxShadow: "0 16px 30px rgba(0,0,0,0.35)",
        },
      }}
    >
      {/* إظهار بوكس الأيقونة أعلا البطاقة إذا كان متوفراً */}
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

      <Typography sx={{ color: palette.accent, fontFamily: fontMono, fontSize: "0.68rem", letterSpacing: "0.06em", mb: 1.5 }}>
        {practice.eyebrow}
      </Typography>
      <Typography sx={{ color: palette.text, fontWeight: 700, fontSize: "1.15rem", mb: 1.5, lineHeight: 1.3 }}>
        {practice.title}
      </Typography>
      <Typography sx={{ color: palette.muted, fontSize: "0.85rem", lineHeight: 1.7, mb: 3 }}>
        {practice.description}
      </Typography>
      <Box>
        {practice.tags?.map((tag, i) => (
          <Tag key={i} label={tag} highlighted={i === practice.tags.length - 1} />
        ))}
      </Box>
    </Box>
  );
}

// قائمة الممارسات المبدئية المعززة بالأيقونات المطابقة للصور
const defaultPractices = [
  {
    eyebrow: "MOD_01",
    title: "Fine Dining & Lounges",
    description: "Sommelier wine pairing notes, VIP table tags, bespoke course pacing, and discrete contactless settling without check delays.",
    tags: ["RESULT: +34% AVERAGE TICKET"],
    icon: <LocalBarIcon fontSize="small" />,
  },
  {
    eyebrow: "MOD_02",
    title: "Specialty Cafés & QSR",
    description: "High-throughput counter pickups, micro-rewards for daily visits, automated queue updates, and sub-30 second ordering flows.",
    tags: ["RESULT: +52% QUEUE THROUGHPUT"],
    icon: <LocalCafeIcon fontSize="small" />,
  },
  {
    eyebrow: "MOD_03",
    title: "Luxury Resorts & Pools",
    description: "Cabana-side ordering, room charging integration, multi-outlet guest billing, and personalized VIP butler summon triggers.",
    tags: ["RESULT: 98% GUEST SATISFACTION"],
    icon: <PoolIcon fontSize="small" />,
  },
  {
    eyebrow: "MOD_04",
    title: "Commercial & Pop-Ups",
    description: "Fast deployment at luxury retail pop-ups, exhibitions, and brand activations with live lead capture and instant digital vouchers.",
    tags: ["RESULT: 6.8X DATA CAPTURE LIFT"],
    icon: <StorefrontIcon fontSize="small" />,
  },
];

export default function PracticeAreasSection({ config }) {
  const { eyebrow = "", title = "", description = "", practices = defaultPractices } = config || {};

  return (
    <Box sx={{ bgcolor: palette.bg, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-end" sx={{ mb: 6 }}>
          <Grid item xs={12} md={7}>
            <Typography sx={{ color: palette.accent, fontFamily: fontMono, fontSize: "0.75rem", letterSpacing: "0.08em", mb: 1.5 }}>
              {eyebrow}
            </Typography>
            <Typography sx={{ color: palette.text, fontWeight: 800, fontSize: { xs: "1.6rem", md: "2.1rem" }, lineHeight: 1.3 }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography sx={{ color: palette.muted, fontSize: "0.9rem", lineHeight: 1.7 }}>
              {description}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2.5}>
          {practices.map((practice, i) => (
            <Grid item xs={12} md={4} key={i}>
              <PracticeCard practice={practice} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}