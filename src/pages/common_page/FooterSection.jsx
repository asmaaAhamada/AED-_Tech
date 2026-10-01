import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
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

 const {
  logoText,
  subLogoText,
  brandDescription,
  copyright,
  linksColumns,
  social = {},
} = config || {};

const instagram = social.instagram || null;
const whatsapp = social.whatsapp || null;

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
        bgcolor: colors.bg,
        borderTop: `1px solid ${colors.border}`,
        pt: { xs: 8, md: 10 },
        pb: 4,
        color: colors.text,
      }}
    >
      <Container maxWidth="lg">
        {/* Main footer grid */}
        <Grid
          container
          spacing={4}
          sx={{
            mb: 6,
            direction: "ltr",
          }}
        >
          {/* =========================
              AED TECH BRAND COLUMN
          ========================== */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              textAlign: isRtl ? "right" : "left",
            }}
          >
            {/* Logo */}
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  letterSpacing: "0.05em",
                  color: colors.text,
                  cursor: "pointer",
                }}
                onClick={scrollToTop}
              >
                {logoText}
              </Typography>

              <Typography
                sx={{
                  color: colors.accent,
                  fontFamily: fontMono,
                  fontSize: "0.62rem",
                  letterSpacing: "0.1em",
                }}
              >
                {subLogoText}
              </Typography>
            </Box>

            {/* Brand description */}
            <Typography
              sx={{
                color: colors.muted,
                fontSize: "0.82rem",
                lineHeight: 1.7,
                maxWidth: 380,
                mx: isRtl ? 0 : "unset",
                ml: isRtl ? "auto" : 0,
              }}
            >
              {brandDescription}
            </Typography>

            {/* =========================
                WHATSAPP BUTTON
            ========================== */}
           {/* =========================
    SOCIAL ACTIONS
========================== */}
{(instagram || whatsapp) && (
  <Stack
    direction={isRtl ? "row-reverse" : "row"}
    spacing={1.5}
    sx={{
      mt: 4,
      flexWrap: "wrap",
      rowGap: 1.5,
    }}
  >
    {/* Instagram */}
    {instagram?.url && (
      <Box
        component="a"
        href={instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,

          minHeight: 46,
          px: 2,

          border: `1px solid ${colors.border}`,
          borderRadius: 1,

          color: colors.text,
          textDecoration: "none",

          fontFamily: fontMono,
          fontSize: "0.75rem",
          fontWeight: 700,

          transition:
            "all 0.25s ease",

          "&:hover": {
            color: colors.accent,
            borderColor: colors.accent,
            transform: "translateY(-2px)",
            boxShadow: `0 8px 20px ${theme.palette.effects.accentGlow}`,
          },

          "&:active": {
            transform: "translateY(0)",
          },
        }}
      >
        <InstagramIcon sx={{ fontSize: 21 }} />

        <Typography
          component="span"
          sx={{
            color: "inherit",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
          }}
        >
          {instagram.label}
        </Typography>
      </Box>
    )}

    {/* WhatsApp */}
    {whatsapp?.number && (
      <Box
        component="a"
        href={`https://wa.me/${whatsapp.number.replace(
          /\D/g,
          ""
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,

          minHeight: 46,
          px: 2,

          border: "1px solid #25D366",
          borderRadius: 1,

          color: "#25D366",
          textDecoration: "none",

          fontFamily: fontMono,
          fontSize: "0.75rem",
          fontWeight: 800,

          transition:
            "all 0.25s ease",

          "&:hover": {
            bgcolor:
              "rgba(37, 211, 102, 0.08)",
            borderColor: "#25D366",
            transform: "translateY(-2px)",
            boxShadow:
              "0 8px 20px rgba(37, 211, 102, 0.18)",
          },

          "&:active": {
            transform: "translateY(0)",
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 22 }} />

        <Typography
          component="span"
          sx={{
            color: "inherit",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
          }}
        >
          {whatsapp.label}
        </Typography>
      </Box>
    )}
  </Stack>
)}
          </Grid>

          {/* =========================
              FOOTER LINKS
          ========================== */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {linksColumns?.map((col, idx) => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  key={idx}
                  sx={{
                    textAlign: isRtl
                      ? "right"
                      : "left",
                  }}
                >
                  {/* Column title */}
                  <Typography
                    sx={{
                      color: colors.accent,
                      fontFamily: fontMono,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      mb: 2,
                      textTransform: isRtl
                        ? "none"
                        : "uppercase",
                    }}
                  >
                    {col.title}
                  </Typography>

                  {/* Column links */}
                  <Stack spacing={1.3}>
                    {col.links?.map(
                      (link, lIdx) => (
                        <Typography
                          key={lIdx}
                          component="a"
                          href="#"
                          onClick={scrollToTop}
                          sx={{
                            color: colors.muted,
                            fontSize: "0.82rem",
                            textDecoration:
                              "none",
                            cursor: "pointer",
                            transition:
                              "color 0.2s ease, transform 0.2s ease",
                            display:
                              "inline-block",

                            "&:hover": {
                              color:
                                colors.accent,
                              transform:
                                "translateY(-1px)",
                            },
                          }}
                        >
                          {link.label}
                        </Typography>
                      )
                    )}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider
          sx={{
            borderColor: colors.border,
            my: 3,
          }}
        />

        {/* Copyright */}
        <Typography
          sx={{
            color: colors.muted,
            fontFamily: fontMono,
            fontSize: "0.68rem",
            letterSpacing: "0.06em",
            textAlign: isRtl
              ? "right"
              : "left",
          }}
        >
          {copyright}
        </Typography>
      </Container>
    </Box>
  );
}