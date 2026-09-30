import { useRef, useEffect, useState } from "react";
import { Box, Container, Typography, Grid, Stack, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";


 

function NodeCard({ node, isActive, onClick, isRtl }) {



  const theme = useTheme();

  const fontMono = theme.typography.mono;

  const colors = {
    border: theme.palette.border.main,
    accent: theme.palette.accent.main,
    text: theme.palette.text.primary,
    muted: theme.palette.text.secondary,
  };


  return (
    <Box
      onClick={onClick}
      sx={{
        border: `1px solid ${isActive ? colors.accent : colors.border}`,
        borderRadius: 1,
        px: 2.5,
        py: 2,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
bgcolor: theme.palette.effects.gridCardBg,        height: "100%",
        cursor: "pointer",
        backdropFilter: "blur(6px)",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
boxShadow: isActive
  ? `0 0 20px ${theme.palette.effects.gridCardShadow}`
  : "none",        transform: isActive ? `translateX(${isRtl ? "12px" : "-12px"})` : "none",
        "&:hover": {
          borderColor: colors.accent,
bgcolor: theme.palette.effects.gridCardBgHover,        },
      }}
    >
      {node.icon && <Box sx={{ color: colors.accent, display: "flex" }}>{node.icon}</Box>}
      <Box sx={{ textAlign: isRtl ? "right" : "left" }}>
        <Typography sx={{ color: colors.accent, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.02em" }}>
          {node.title}
        </Typography>
        <Typography sx={{ color: colors.muted, fontFamily: fontMono, fontSize: "0.62rem", letterSpacing: "0.04em", mt: 0.3 }}>
          {node.subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default function GridSection({ config }) {


 const theme = useTheme();

  const fontMono = theme.typography.mono;

  const colors = {
    bg: theme.palette.background.default,
    border: theme.palette.border.main,
    accent: theme.palette.accent.main,
    accentStrong: theme.palette.accent.strong,
    text: theme.palette.text.primary,
    muted: theme.palette.text.secondary,
    teal: theme.palette.teal.main,
  };






  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const { header = null, centerNode = null, topNodes = [], bottomNodes = [], stats = [] } = config || {};

  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
  const section = sectionRef.current;
  const glow = glowRef.current;

  if (!section || !glow) return;

  const onMove = (e) => {
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.background = `radial-gradient(
      circle 280px at ${x}px ${y}px,
      ${theme.palette.effects.gridGlow},
      transparent 70%
    )`;
  };

  section.addEventListener("mousemove", onMove);

  return () => {
    section.removeEventListener("mousemove", onMove);
  };
}, [theme]);

  return (
    <Box ref={sectionRef} sx={{ position: "relative", bgcolor: colors.bg, py: { xs: 6, md: 8 }, overflow: "hidden" }}>
      <Box ref={glowRef} sx={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            position: "relative",
            border: `1px solid ${colors.border}`,
            borderRadius: 1.5,
            p: { xs: 3, md: 5 },
bgcolor: theme.palette.effects.gridPanelBg,            overflow: "hidden",
            mb: 4,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
              backgroundSize: "44px 44px",
              opacity: 0.2,
              pointerEvents: "none",
            }}
          />

          <Box
            component="svg"
            sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}
          >
            <circle cx="50%" cy="54%" r="170" stroke={colors.border} strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.6" />
            <circle cx="50%" cy="54%" r="240" stroke={colors.border} strokeWidth="1" fill="none" opacity="0.25" />
            <line x1="50%" y1="54%" x2="16%" y2="30%" stroke={colors.border} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <line x1="50%" y1="54%" x2="50%" y2="30%" stroke={colors.border} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <line x1="50%" y1="54%" x2="84%" y2="30%" stroke={colors.border} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <line x1="50%" y1="54%" x2="16%" y2="78%" stroke={colors.border} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <line x1="50%" y1="54%" x2="50%" y2="78%" stroke={colors.border} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <line x1="50%" y1="54%" x2="84%" y2="78%" stroke={colors.border} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
          </Box>

          {/* ⬇⬇ direction: "ltr" هون على كل البوكس الداخلي — هيك ترتيب العناصر (Metrics, Nodes) بيضل ثابت بكل اللغات */}
          <Box sx={{ position: "relative", zIndex: 2, direction: "ltr" }}>
            {header && (
              <Box sx={{ mb: 5 }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                  <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: colors.teal }} />
                  <Typography sx={{ color: colors.accent, fontFamily: fontMono, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.06em" }}>
                    {header.label}
                  </Typography>
                </Stack>
                {header.description && (
                  <Typography sx={{ color: colors.muted, fontSize: "0.8rem", mb: 2, textAlign: isRtl ? "right" : "left" }}>
                    {header.description}
                  </Typography>
                )}
                {header.metrics?.length > 0 && (
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 4 }}>
                    {header.metrics.map((m, i) => (
                      <Typography key={i} sx={{ color: colors.muted, fontSize: "0.72rem", fontFamily: fontMono }}>
                        {m.label}:{" "}
                        <Box component="span" sx={{ color: colors.text, fontWeight: 700 }}>
                          {m.value}
                        </Box>
                      </Typography>
                    ))}
                  </Stack>
                )}
              </Box>
            )}

            {topNodes.length > 0 && (
              <Grid container spacing={3.5} sx={{ mb: 5 }}>
                {topNodes.map((node, i) => (
                  <Grid item xs={12} sm={4} key={`top-${i}`}>
                    <NodeCard
                      node={node}
                      isActive={activeCard === `top-${i}`}
                      onClick={() => setActiveCard(`top-${i}`)}
                      isRtl={isRtl}
                    />
                  </Grid>
                ))}
              </Grid>
            )}

            {centerNode && (
              <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
                <Box
                  onClick={() => setActiveCard("center")}
                  sx={{
border: `1.5px solid ${
  activeCard === "center" ? colors.accent : colors.accentStrong
}`,                   boxShadow: `0 0 30px ${theme.palette.effects.gridCenterShadow}`,
                    borderRadius: 1.5,
                    px: 6,
                    py: 3,
                    textAlign: "center",
bgcolor: theme.palette.effects.gridCenterBg,                    backdropFilter: "blur(8px)",
                    cursor: "pointer",
                    transition: "all 0.35s ease",
                    transform: activeCard === "center" ? `translateX(${isRtl ? "12px" : "-12px"})` : "none",
                    "&:hover": { boxShadow: `0 0 40px${theme.palette.effects.gridCenterShadowHover}`,
                      
                      transform: "scale(1.02)" },
                  }}
                >
                  <Typography sx={{ color: colors.text, fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.05em" }}>
                    {centerNode.title}
                  </Typography>
                  <Typography sx={{ color: colors.accent, fontFamily: fontMono, fontSize: "0.62rem", letterSpacing: "0.08em", mt: 0.5 }}>
                    {centerNode.subtitle}
                  </Typography>
                  {centerNode.idLabel && (
                    <Box sx={{ mt: 2, display: "inline-block", border: `1px solid ${colors.border}`, borderRadius: 1, px: 1.5, py: 0.3, bgcolor: theme.palette.effects.gridIdBg }}>
                      <Typography sx={{ color: colors.muted, fontFamily: fontMono, fontSize: "0.62rem" }}>
                        {centerNode.idLabel}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            )}

            {bottomNodes.length > 0 && (
              <Grid container spacing={3.5} sx={{ mt: 5 }}>
                {bottomNodes.map((node, i) => (
                  <Grid item xs={12} sm={4} key={`bottom-${i}`}>
                    <NodeCard
                      node={node}
                      isActive={activeCard === `bottom-${i}`}
                      onClick={() => setActiveCard(`bottom-${i}`)}
                      isRtl={isRtl}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>

        {/* Stats Row — نفس منطق direction:"ltr" حتى الترتيب ما ينعكس */}
        {stats.length > 0 && (
          <Grid container spacing={3} sx={{ px: 1, direction: "ltr" }}>
            {stats.map((stat, i) => (
              <Grid item xs={6} md={3} key={i} sx={{ textAlign: isRtl ? "right" : "left" }}>
                <Typography sx={{ color: colors.muted, fontSize: "0.65rem", fontFamily: fontMono, textTransform: "uppercase", letterSpacing: "0.03em", mb: 0.5 }}>
                  {stat.label}
                </Typography>
                <Typography
                  sx={{
                    color: String(stat.value).includes("+") ? colors.accent : colors.text,
                    fontWeight: 800,
                    fontSize: "1.6rem",
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                {stat.note && (
                  <Typography sx={{ color: colors.muted, fontSize: "0.7rem" }}>{stat.note}</Typography>
                )}
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}