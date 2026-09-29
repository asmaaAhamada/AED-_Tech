// src/pages/common_page/FooterSection.jsx
import React from "react";
import { Box, Container, Typography, Grid, Stack, Divider } from "@mui/material";

const palette = {
  bg: "#070E17",
  border: "#1E2D42",
  accent: "#E3B156",
  text: "#F5F7FA",
  muted: "#8896A6",
};

const fontMono = "'IBM Plex Mono', 'Courier New', monospace";

export default function FooterSection({ config }) {
  const { logoText, subLogoText, brandDescription, copyright, linksColumns } = config || {};

  // دالة الصعود السريع والسلس لأعلى الصفحة
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: palette.bg,
        borderTop: `1px solid ${palette.border}`,
        pt: { xs: 8, md: 10 },
        pb: 4,
        color: palette.text,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand Info Column */}
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  letterSpacing: "0.05em",
                  color: palette.text,
                  cursor: "pointer",
                }}
                onClick={scrollToTop}
              >
                {logoText}
              </Typography>
              <Typography
                sx={{
                  color: palette.accent,
                  fontFamily: fontMono,
                  fontSize: "0.62rem",
                  letterSpacing: "0.1em",
                }}
              >
                {subLogoText}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: palette.muted,
                fontSize: "0.82rem",
                lineHeight: 1.7,
                maxWidth: 380,
              }}
            >
              {brandDescription}
            </Typography>
          </Grid>

          {/* Links Columns */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {linksColumns?.map((col, idx) => (
                <Grid item xs={12} sm={4} key={idx}>
                  <Typography
                    sx={{
                      color: palette.accent,
                      fontFamily: fontMono,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      mb: 2,
                      textTransform: "uppercase",
                    }}
                  >
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
                          color: palette.muted,
                          fontSize: "0.82rem",
                          textDecoration: "none",
                          cursor: "pointer",
                          transition: "color 0.2s ease, transform 0.2s ease",
                          display: "inline-block",
                          "&:hover": {
                            color: palette.accent,
                            transform: "translateY(-1px)",
                          },
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

        <Divider sx={{ borderColor: palette.border, my: 3 }} />

        {/* Copyright Footer Line */}
        <Typography
          sx={{
            color: palette.muted,
            fontFamily: fontMono,
            fontSize: "0.68rem",
            letterSpacing: "0.06em",
          }}
        >
          {copyright}
        </Typography>
      </Container>
    </Box>
  );
}