import React from "react";
import { Box, Container, Typography, Grid, Stack, Divider, useTheme  } from "@mui/material";
import { useTranslation } from "react-i18next";



export default function FooterSection({ config }) {








const theme = useTheme();


const fontMono = theme.typography.mono;


const colors = {
  bg: theme.palette.background.default,
  border: theme.palette.border.main,
  accent: theme.palette.accent.main,
  text: theme.palette.text.primary,
  muted: theme.palette.text.secondary,
};





  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const { logoText, subLogoText, brandDescription, copyright, linksColumns } = config || {};

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box component="footer" sx={{ bgcolor: colors.bg, borderTop: `1px solid ${colors.border}`, pt: { xs: 8, md: 10 }, pb: 4, color: colors.text }}>
      <Container maxWidth="lg">
        {/* direction:"ltr" على البنية العامة (عمود البراند + أعمدة الروابط)، وtextAlign لكل جزء حسب اللغة */}
        <Grid container spacing={4} sx={{ mb: 6, direction: "ltr" }}>
          <Grid item xs={12} md={5} sx={{ textAlign: isRtl ? "right" : "left" }}>
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "0.05em", color: colors.text, cursor: "pointer" }} onClick={scrollToTop}>
                {logoText}
              </Typography>
              <Typography sx={{ color: colors.accent, fontFamily: fontMono, fontSize: "0.62rem", letterSpacing: "0.1em" }}>
                {subLogoText}
              </Typography>
            </Box>
            <Typography sx={{ color: colors.muted, fontSize: "0.82rem", lineHeight: 1.7, maxWidth: 380, mx: isRtl ? 0 : "unset", ml: isRtl ? "auto" : 0 }}>
              {brandDescription}
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {linksColumns?.map((col, idx) => (
                <Grid item xs={12} sm={4} key={idx} sx={{ textAlign: isRtl ? "right" : "left" }}>
                  <Typography sx={{ color: colors.accent, fontFamily: fontMono, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", mb: 2, textTransform: isRtl ? "none" : "uppercase" }}>
                    {col.title}
                  </Typography>
                  <Stack spacing={1.3}>
                    {col.links?.map((link, lIdx) => (
                      <Typography
                        key={lIdx}
                        component="a"
                        href="#"
                        onClick={scrollToTop}
                        sx={{
                          color: colors.muted,
                          fontSize: "0.82rem",
                          textDecoration: "none",
                          cursor: "pointer",
                          transition: "color 0.2s ease, transform 0.2s ease",
                          display: "inline-block",
                          "&:hover": { color: colors.accent, transform: "translateY(-1px)" },
                        }}
                      >
                        {link.label}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: colors.border, my: 3 }} />

        <Typography sx={{ color: colors.muted, fontFamily: fontMono, fontSize: "0.68rem", letterSpacing: "0.06em", textAlign: isRtl ? "right" : "left" }}>
          {copyright}
        </Typography>
      </Container>
    </Box>
  );
}