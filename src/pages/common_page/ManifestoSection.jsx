import { Box, Container, Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const palette = {
  bg: "#0B1626",
  border: "#1E2D42",
  accent: "#E3B156",
  text: "#F5F7FA",
  muted: "#9AA5B1",
};

const fontMono = "'IBM Plex Mono', 'Courier New', monospace";

export default function ManifestoSection({ config }) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const { logo = "", badgeLabel = "", eyebrow = "", tagline = "", quote = "", pillars = [] } = config || {};

  return (
    <Box sx={{ bgcolor: palette.bg, py: { xs: 8, md: 12 }, textAlign: "center" }}>
      <Container maxWidth="md">
        {logo && (
          <Box component="img" src={logo} alt="Logo" sx={{ maxHeight: { xs: 48, md: 64 }, maxWidth: "100%", objectFit: "contain", mx: "auto", mb: 3 }} />
        )}

        {badgeLabel && (
          <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: `1px solid ${palette.border}`, borderRadius: 1.5, px: 2, py: 1, mb: 4 }}>
            <Typography sx={{ color: palette.text, fontSize: "0.75rem", fontWeight: 700 }}>{badgeLabel}</Typography>
          </Box>
        )}

        {eyebrow && (
          <Typography sx={{ color: palette.accent, fontFamily: fontMono, fontSize: "0.75rem", letterSpacing: "0.08em", mb: 2 }}>
            {eyebrow}
          </Typography>
        )}

        {tagline && (
          <Typography sx={{ color: palette.text, fontWeight: 800, fontSize: { xs: "1.9rem", md: "2.6rem" }, mb: 4 }}>
            {tagline}
          </Typography>
        )}

        {quote && (
          <Typography sx={{ color: palette.text, fontSize: { xs: "1.05rem", md: "1.3rem" }, lineHeight: 1.7, fontStyle: isRtl ? "normal" : "italic", maxWidth: 780, mx: "auto", mb: 5 }}>
            “{quote}”
          </Typography>
        )}

        {pillars.length > 0 && (
          // direction:"ltr" حتى ترتيب الـ Pillars الثلاثة يضل ثابت بكل اللغات
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2 }}
            divider={<Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", color: palette.muted }}>•</Box>}
            justifyContent="center"
            sx={{ direction: "ltr" }}
          >
            {pillars.map((p, i) => (
              <Typography key={i} sx={{ color: palette.muted, fontFamily: fontMono, fontSize: "0.72rem", letterSpacing: "0.06em" }}>
                {p}
              </Typography>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
}