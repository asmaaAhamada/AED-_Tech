// src/pages/sectors/beautyCenter/LamsaAutomationFlowSection.jsx
import { useRef, useEffect } from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

function StepVisual({ icon, image, style }) {
  const boxRef = useRef(null);

  const onMouseMove = (e) => {
    const el = boxRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translateY(-6px) perspective(300px) rotateX(${py * -12}deg) rotateY(${px * 12}deg)`;
  };

  const onMouseLeave = () => {
    const el = boxRef.current;
    if (!el) return;
    el.style.transform = "translateY(0) perspective(300px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <Box
      ref={boxRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      sx={{
        width: 72,
        height: 72,
        borderRadius: "50%", // دائري بدل مربع — إحساس أنعم وأقرب لقطاع التجميل
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `2px solid ${style.border}`,
        bgcolor: style.bg,
        color: style.iconColor,
        overflow: "hidden",
        transition: "transform 0.15s ease-out, box-shadow 0.25s ease",
        willChange: "transform",
        boxShadow: `0 0 0 4px ${style.ring}`,
      }}
    >
      {image ? (
        <Box
          component="img"
          src={image}
          alt=""
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        icon
      )}
    </Box>
  );
}

function Connector({ color }) {
  return (
    <Box sx={{ flexShrink: 0, width: { xs: 20, sm: 36, md: 52 }, display: "flex", alignItems: "center", mt: "36px" }}>
      <Box sx={{ flex: 1, height: 0, borderTop: `1.5px dashed ${color}` }} />
      <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: color, mx: 0.5, flexShrink: 0 }} />
      <Box sx={{ flex: 1, height: 0, borderTop: `1.5px dashed ${color}` }} />
    </Box>
  );
}

function FlowStep({ step, variantStyles, index }) {
  const theme = useTheme();
  const fontMono = theme.typography.mono;
  const colors = {
    accent: theme.palette.accent.main,
    text: theme.palette.text.primary,
    muted: theme.palette.text.secondary,
    teal: theme.palette.teal.main,
  };

  const variant = step.variant || "default";
  const style = variantStyles[variant] || variantStyles.default;
  const labelColor = variant === "decision" ? colors.accent : colors.muted;

  // أنيميشن دخول لكل خطوة لحالها، بتأخير متصاعد حسب ترتيبها
  const stepRef = useRef(null);
  useEffect(() => {
    const el = stepRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("lamsa-step-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={stepRef}
      className="lamsa-step"
      sx={{
        "--step-delay": `${index * 120}ms`,
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        px: 1,
        opacity: 0,
        transform: "translateY(20px) scale(0.92)",
        transition: "opacity 0.55s ease var(--step-delay), transform 0.55s cubic-bezier(0.22,1,0.36,1) var(--step-delay)",
        "&.lamsa-step-visible": { opacity: 1, transform: "translateY(0) scale(1)" },
      }}
    >
      <StepVisual icon={step.icon} image={step.image} style={style} />

      <Typography sx={{ color: labelColor, fontFamily: fontMono, fontSize: "0.65rem", letterSpacing: "0.06em", mt: 2, mb: 0.8 }}>
        {step.label}
      </Typography>
      <Typography sx={{ color: colors.text, fontWeight: 700, fontSize: "0.88rem", mb: 0.6, lineHeight: 1.3 }}>
        {step.title}
      </Typography>
      <Typography sx={{ color: colors.muted, fontSize: "0.72rem", lineHeight: 1.5 }}>
        {step.description}
      </Typography>

      {step.pill && (
        <Box
          sx={{
            mt: 1, px: 1.2, py: 0.3, borderRadius: 0.5,
            bgcolor: theme.palette.effects.flowPillBg,
            color: colors.teal, fontFamily: fontMono, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.04em",
          }}
        >
          {step.pill}
        </Box>
      )}
    </Box>
  );
}

export default function LamsaAutomationFlowSection({ config }) {
  const theme = useTheme();
  const fontMono = theme.typography.mono;
  const colors = {
    bg: theme.palette.background.default,
    border: theme.palette.border.main,
    accent: theme.palette.accent.main,
    text: theme.palette.text.primary,
    muted: theme.palette.text.secondary,
    teal: theme.palette.teal.main,
  };

  const variantStyles = {
    default: { border: colors.border, iconColor: colors.accent, bg: theme.palette.effects.flowDefaultBg, ring: "transparent" },
    decision: { border: colors.accent, iconColor: colors.accent, bg: theme.palette.effects.flowDecisionBg, ring: theme.palette.effects.accentGlow },
    action: { border: colors.accent, iconColor: colors.bg, bg: colors.accent, ring: theme.palette.effects.accentGlowStrong },
    outcome: { border: colors.teal, iconColor: colors.teal, bg: theme.palette.effects.flowOutcomeBg, ring: theme.palette.effects.tealGlow },
  };

  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const { eyebrow = "", title = "", subtitle = "", steps = [], footer = null } = config || {};

  return (
    <Box sx={{ bgcolor: colors.bg, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {eyebrow && (
          <Typography sx={{ color: colors.accent, fontFamily: fontMono, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", mb: 2 }}>
            {eyebrow}
          </Typography>
        )}
        {title && (
          <Typography sx={{ color: colors.text, fontWeight: 800, fontSize: { xs: "1.8rem", md: "2.4rem" }, mb: 2.5, lineHeight: 1.25 }}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography sx={{ color: colors.muted, fontSize: "0.95rem", maxWidth: 680, mx: "auto", mb: 6, lineHeight: 1.7 }}>
            {subtitle}
          </Typography>
        )}

        <Box sx={{ border: `1px solid ${colors.border}`, borderRadius: 3, px: { xs: 2, md: 5 }, py: { xs: 4, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center", direction: "ltr" }}>
            {steps.map((step, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
                <FlowStep step={step} variantStyles={variantStyles} index={i} />
                {i < steps.length - 1 && <Connector color={i % 2 === 0 ? colors.accent : colors.teal} />}
              </Box>
            ))}
          </Box>

          {footer && (
            <Box
              sx={{
                display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" }, gap: 1, mt: 5, pt: 3,
                borderTop: `1px solid ${colors.border}`, direction: "ltr", textAlign: "left",
              }}
            >
              {footer.pipelineId && (
                <Typography sx={{ color: colors.muted, fontFamily: fontMono, fontSize: "0.7rem" }}>
                  {footer.pipelineLabel}{" "}
                  <Box component="span" sx={{ color: colors.accent }}>{footer.pipelineId}</Box>
                </Typography>
              )}
              {footer.stats?.length > 0 && (
                <Typography sx={{ color: colors.muted, fontFamily: fontMono, fontSize: "0.7rem" }}>
                  {footer.stats.map((s, i) => (
                    <span key={i}>
                      {i > 0 && " • "}
                      {s.label}: <Box component="span" sx={{ color: colors.teal, fontWeight: 700 }}>{s.value}</Box>
                    </span>
                  ))}
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}