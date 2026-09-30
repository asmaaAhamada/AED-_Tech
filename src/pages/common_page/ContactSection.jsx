import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  MenuItem,
  Stack,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BoltIcon from "@mui/icons-material/Bolt";
import LockIcon from "@mui/icons-material/Lock";
import { useTranslation } from "react-i18next";



export default function ContactSection({ config }) {



  const theme = useTheme();

const colors = {
  bg: theme.palette.background.default,
  surface: theme.palette.surface.main,
  border: theme.palette.border.main,
  accent: theme.palette.accent.main,
  text: theme.palette.text.primary,
  muted: theme.palette.text.secondary,
  teal: theme.palette.teal.main,
};

const fontMono = theme.typography.mono;

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: theme.palette.effects.surfaceOverlay,
    borderRadius: 1,
    color: colors.text,

    "& fieldset": {
      borderColor: colors.border,
    },

    "&:hover fieldset": {
      borderColor: colors.accent,
    },

    "&.Mui-focused fieldset": {
      borderColor: colors.accent,
    },
  },

  "& .MuiInputBase-input": {
    textAlign: "inherit",
  },

  "& .MuiInputBase-input::placeholder": {
    color: colors.muted,
    opacity: 1,
  },

  "& .MuiSelect-select": {
    textAlign: "inherit",
  },
};
  const { i18n } = useTranslation();

  const isRtl = i18n.language?.startsWith("ar");

  const direction = isRtl ? "rtl" : "ltr";
  const textAlign = isRtl ? "right" : "left";

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

  const [values, setValues] = useState({
    name: "",
    email: "",
    businessType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Front-end demo only — no backend wired up yet.
    console.log("Demo submit:", values);
  };

  return (
    <Box
      dir={direction}
      sx={{
        bgcolor: colors.bg,
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            border: `1px solid ${colors.border}`,
            borderRadius: 3,
            p: { xs: 3, md: 5 },

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: isRtl ? "0.9fr 1.1fr" : "1.1fr 0.9fr",
            },

            gap: { xs: 4, md: 6 },

            textAlign,
          }}
        >
          {/* LEFT / RIGHT — INTRO */}
          <Box
            sx={{
              direction,
              display: "flex",
              flexDirection: "column",
              alignItems: {
                xs: "stretch",
                md: isRtl ? "flex-start" : "flex-start",
              },
            }}
          >
            {badgeLabel && (
              <Box
                sx={{
                  display: "inline-block",
                  alignSelf: "flex-start",

                  border: `1px solid ${colors.border}`,
                  borderRadius: 1,

                  px: 1.5,
                  py: 0.6,
                  mb: 3,
                }}
              >
                <Typography
                  sx={{
                    color: colors.muted,
                    fontFamily: fontMono,
                    fontSize: "0.68rem",
                    letterSpacing: isRtl ? 0 : "0.04em",
                    direction,
                    textAlign,
                  }}
                >
                  {badgeLabel}
                </Typography>
              </Box>
            )}

            <Typography
              sx={{
                color: colors.text,
                fontWeight: 800,
                fontSize: {
                  xs: "1.6rem",
                  md: "2.1rem",
                },
                mb: 2.5,
                lineHeight: 1.3,
                direction,
                textAlign,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: colors.muted,
                fontSize: "0.9rem",
                lineHeight: 1.75,
                mb: 4,
                direction,
                textAlign,
              }}
            >
              {description}
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: isRtl ? "row-reverse" : "row",
              }}
              spacing={2}
              sx={{
                mb: 3,
                alignItems: {
                  xs: "stretch",
                  sm: "center",
                },
              }}
            >
              {primaryCta && (
                <Button
                  variant="contained"
                  endIcon={
                    <ArrowForwardIcon
                      sx={{
                        transform: isRtl ? "rotate(180deg)" : "none",
                      }}
                    />
                  }
                  sx={{
                    bgcolor: colors.accent,
                    color: colors.bg,
                    fontWeight: 700,
                    borderRadius: 0,
                    px: 3,
                    py: 1.3,

                    "&:hover": {
                      bgcolor: colors.accent,
                      opacity: 0.9,
                    },

                    "& .MuiButton-endIcon": {
                      marginLeft: isRtl ? 0 : undefined,
                      marginRight: isRtl ? "8px" : undefined,
                    },
                  }}
                >
                  {primaryCta.label}
                </Button>
              )}

              {secondaryCta && (
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: colors.border,
                    color: colors.text,
                    borderRadius: 0,
                    px: 3,
                    py: 1.3,

                    "&:hover": {
                      borderColor: colors.accent,
                    },
                  }}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </Stack>

            {trustNotes.length > 0 && (
              <Stack
                direction={isRtl ? "row-reverse" : "row"}
                spacing={3}
                flexWrap="wrap"
                useFlexGap
                sx={{
                  justifyContent: {
                    xs: "flex-start",
                    md: isRtl ? "flex-start" : "flex-start",
                  },
                }}
              >
                {trustNotes.map((note, i) => (
                  <Stack
                    key={i}
                    direction={isRtl ? "row-reverse" : "row"}
                    spacing={0.7}
                    alignItems="center"
                  >
                    {i === 0 ? (
                      <BoltIcon
                        sx={{
                          fontSize: 15,
                          color: colors.teal,
                        }}
                      />
                    ) : (
                      <LockIcon
                        sx={{
                          fontSize: 15,
                          color: colors.teal,
                        }}
                      />
                    )}

                    <Typography
                      sx={{
                        color: colors.muted,
                        fontSize: "0.75rem",
                        direction,
                        textAlign,
                      }}
                    >
                      {note}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            )}
          </Box>

          {/* FORM */}
          <Box
            sx={{
              bgcolor: colors.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: 2,
              p: { xs: 3, md: 4 },

              direction,
              textAlign,
            }}
          >
            {formTitle && (
              <Typography
                sx={{
                  color: colors.text,
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  mb: 0.5,
                  direction,
                  textAlign,
                }}
              >
                {formTitle}
              </Typography>
            )}

            {formSubtitle && (
              <Typography
                sx={{
                  color: colors.muted,
                  fontSize: "0.8rem",
                  mb: 3,
                  direction,
                  textAlign,
                }}
              >
                {formSubtitle}
              </Typography>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit}
              dir={direction}
            >
              <Stack spacing={2.5}>
                {fields.name && (
                  <Box>
                    <Typography
                      sx={{
                        color: colors.muted,
                        fontSize: "0.68rem",
                        letterSpacing: isRtl ? 0 : "0.04em",
                        mb: 0.8,
                        direction,
                        textAlign,
                      }}
                    >
                      {fields.name.label}
                    </Typography>

                    <TextField
                      fullWidth
                      size="small"
                      placeholder={fields.name.placeholder}
                      value={values.name}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          name: e.target.value,
                        })
                      }
                      sx={fieldSx}
                      inputProps={{
                        dir: direction,
                      }}
                    />
                  </Box>
                )}

                {fields.email && (
                  <Box>
                    <Typography
                      sx={{
                        color: colors.muted,
                        fontSize: "0.68rem",
                        letterSpacing: isRtl ? 0 : "0.04em",
                        mb: 0.8,
                        direction,
                        textAlign,
                      }}
                    >
                      {fields.email.label}
                    </Typography>

                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      placeholder={fields.email.placeholder}
                      value={values.email}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          email: e.target.value,
                        })
                      }
                      sx={fieldSx}
                      inputProps={{
                        dir: "ltr",
                        style: {
                          textAlign: "left",
                        },
                      }}
                    />
                  </Box>
                )}

                {fields.businessType && (
                  <Box>
                    <Typography
                      sx={{
                        color: colors.muted,
                        fontSize: "0.68rem",
                        letterSpacing: isRtl ? 0 : "0.04em",
                        mb: 0.8,
                        direction,
                        textAlign,
                      }}
                    >
                      {fields.businessType.label}
                    </Typography>

                    <TextField
                      select
                      fullWidth
                      size="small"
                      value={values.businessType}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          businessType: e.target.value,
                        })
                      }
                      sx={fieldSx}
                      SelectProps={{
                        MenuProps: {
                          PaperProps: {
                            dir: direction,
                          },
                        },
                      }}
                    >
                      {fields.businessType.options.map((opt) => (
                        <MenuItem
                          key={opt}
                          value={opt}
                          sx={{
                            direction,
                            textAlign,
                            justifyContent: isRtl
                              ? "flex-end"
                              : "flex-start",
                          }}
                        >
                          {opt}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                )}

                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    bgcolor: colors.accent,
                    color: colors.bg,
                    fontWeight: 700,
                    borderRadius: 0,
                    py: 1.3,

                    "&:hover": {
                      bgcolor: colors.accent,
                      opacity: 0.9,
                    },
                  }}
                >
                  {submitLabel}
                </Button>
              </Stack>
            </Box>

            {formTrustBadges.length > 0 && (
              <Stack
                direction={isRtl ? "row-reverse" : "row"}
                spacing={2}
                sx={{
                  mt: 3,
                  pt: 2,
                  borderTop: `1px solid ${colors.border}`,
                  flexWrap: "wrap",
                  rowGap: 1,
                }}
              >
                {formTrustBadges.map((b, i) => (
                  <Typography
                    key={i}
                    sx={{
                      color: colors.muted,
                      fontFamily: fontMono,
                      fontSize: "0.65rem",
                      direction: "ltr",
                      textAlign: "left",
                    }}
                  >
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