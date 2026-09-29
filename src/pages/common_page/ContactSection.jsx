// src/pages/common_page/ContactSection.jsx
import { useState } from "react";
import { Box, Container, Typography, Button, TextField, MenuItem, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BoltIcon from "@mui/icons-material/Bolt";
import LockIcon from "@mui/icons-material/Lock";

const palette = {
  bg: "#0E1B2E",
  surface: "#0B1626",
  border: "#1E2D42",
  accent: "#E3B156",
  text: "#F5F7FA",
  muted: "#9AA5B1",
  teal: "#4FD1A5",
};

const fontMono = "'IBM Plex Mono', 'Courier New', monospace";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "rgba(255,255,255,0.02)",
    borderRadius: 1,
    color: palette.text,
    "& fieldset": { borderColor: palette.border },
    "&:hover fieldset": { borderColor: palette.accent },
    "&.Mui-focused fieldset": { borderColor: palette.accent },
  },
  "& .MuiInputBase-input::placeholder": { color: palette.muted, opacity: 1 },
};

/**
 * ContactSection — قسم التواصل الأخير. كل النصوص والحقول من config،
 * بدون Backend فعلي (Front-end demo فقط) — onSubmit بيتحطلها لاحقاً.
 */
export default function ContactSection({ config }) {
  const {
    badgeLabel = "",
    title = "",
    description = "",
    primaryCta = null,
    secondaryCta = null,
    trustNotes = [],
    formTitle = "",
    formSubtitle = "",
    fields = {},
    submitLabel = "",
    formTrustBadges = [],
  } = config || {};

  const [values, setValues] = useState({ name: "", email: "", businessType: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end demo only — no backend wired up yet.
    console.log("Demo submit:", values);
  };

  return (
    <Box sx={{ bgcolor: palette.bg, py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            border: `1px solid ${palette.border}`,
            borderRadius: 3,
            p: { xs: 3, md: 5 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left: pitch */}
          <Box>
            {badgeLabel && (
              <Box sx={{ display: "inline-block", border: `1px solid ${palette.border}`, borderRadius: 1, px: 1.5, py: 0.6, mb: 3 }}>
                <Typography sx={{ color: palette.muted, fontFamily: fontMono, fontSize: "0.68rem", letterSpacing: "0.04em" }}>
                  {badgeLabel}
                </Typography>
              </Box>
            )}
            <Typography sx={{ color: palette.text, fontWeight: 800, fontSize: { xs: "1.6rem", md: "2.1rem" }, mb: 2.5, lineHeight: 1.3 }}>
              {title}
            </Typography>
            <Typography sx={{ color: palette.muted, fontSize: "0.9rem", lineHeight: 1.75, mb: 4 }}>
              {description}
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
              {primaryCta && (
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ bgcolor: palette.accent, color: palette.bg, fontWeight: 700, borderRadius: 0, px: 3, py: 1.3, "&:hover": { bgcolor: palette.accent, opacity: 0.9 } }}
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="outlined"
                  sx={{ borderColor: palette.border, color: palette.text, borderRadius: 0, px: 3, py: 1.3, "&:hover": { borderColor: palette.accent } }}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </Stack>

            {trustNotes.length > 0 && (
              <Stack direction="row" spacing={3} flexWrap="wrap">
                {trustNotes.map((note, i) => (
                  <Stack key={i} direction="row" spacing={0.7} alignItems="center">
                    {i === 0 ? <BoltIcon sx={{ fontSize: 15, color: palette.teal }} /> : <LockIcon sx={{ fontSize: 15, color: palette.teal }} />}
                    <Typography sx={{ color: palette.muted, fontSize: "0.75rem" }}>{note}</Typography>
                  </Stack>
                ))}
              </Stack>
            )}
          </Box>

          {/* Right: form card */}
          <Box sx={{ bgcolor: palette.surface, border: `1px solid ${palette.border}`, borderRadius: 2, p: { xs: 3, md: 4 } }}>
            {formTitle && (
              <Typography sx={{ color: palette.text, fontWeight: 700, fontSize: "1.05rem", mb: 0.5 }}>
                {formTitle}
              </Typography>
            )}
            {formSubtitle && (
              <Typography sx={{ color: palette.muted, fontSize: "0.8rem", mb: 3 }}>
                {formSubtitle}
              </Typography>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2.5}>
                {fields.name && (
                  <Box>
                    <Typography sx={{ color: palette.muted, fontSize: "0.68rem", letterSpacing: "0.04em", mb: 0.8 }}>
                      {fields.name.label}
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder={fields.name.placeholder}
                      value={values.name}
                      onChange={(e) => setValues({ ...values, name: e.target.value })}
                      sx={fieldSx}
                    />
                  </Box>
                )}
                {fields.email && (
                  <Box>
                    <Typography sx={{ color: palette.muted, fontSize: "0.68rem", letterSpacing: "0.04em", mb: 0.8 }}>
                      {fields.email.label}
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      placeholder={fields.email.placeholder}
                      value={values.email}
                      onChange={(e) => setValues({ ...values, email: e.target.value })}
                      sx={fieldSx}
                    />
                  </Box>
                )}
                {fields.businessType && (
                  <Box>
                    <Typography sx={{ color: palette.muted, fontSize: "0.68rem", letterSpacing: "0.04em", mb: 0.8 }}>
                      {fields.businessType.label}
                    </Typography>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      value={values.businessType}
                      onChange={(e) => setValues({ ...values, businessType: e.target.value })}
                      sx={fieldSx}
                    >
                      {fields.businessType.options.map((opt) => (
                        <MenuItem key={opt} value={opt}>
                          {opt}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                )}

                <Button
                  type="submit"
                  fullWidth
                  sx={{ bgcolor: palette.accent, color: palette.bg, fontWeight: 700, borderRadius: 0, py: 1.3, "&:hover": { bgcolor: palette.accent, opacity: 0.9 } }}
                >
                  {submitLabel}
                </Button>
              </Stack>
            </Box>

            {formTrustBadges.length > 0 && (
              <Stack direction="row" spacing={2} sx={{ mt: 3, pt: 2, borderTop: `1px solid ${palette.border}` }}>
                {formTrustBadges.map((b, i) => (
                  <Typography key={i} sx={{ color: palette.muted, fontFamily: fontMono, fontSize: "0.65rem" }}>
                    {b}
                  </Typography>
                ))}
              </Stack>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}