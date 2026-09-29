// src/pages/common_page/AutomationFlowSection.jsx
import { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
// استيراد الأيقونات المناسبة لخطوات التدفق الأوتوماتيكي
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const palette = {
  bg: "#0E1B2E",
  border: "#1E2D42",
  accent: "#E3B156",
  text: "#F5F7FA",
  muted: "#9AA5B1",
  teal: "#4FD1A5",
};

const fontMono = "'IBM Plex Mono', 'Courier New', monospace";

const variantStyles = {
  default: { border: palette.border, iconColor: palette.accent, bg: "rgba(255,255,255,0.02)" },
  decision: { border: palette.accent, iconColor: palette.accent, bg: "rgba(227,177,86,0.06)" },
  action: { border: palette.accent, iconColor: palette.bg, bg: palette.accent },
  outcome: { border: palette.teal, iconColor: palette.teal, bg: "rgba(79,209,165,0.06)" },
};

function IconBox({ icon, variant = "default" }) {
  const boxRef = useRef(null);
  const style = variantStyles[variant] || variantStyles.default;

  const onMouseMove = (e) => {
    const el = boxRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translateY(-6px) perspective(300px) rotateX(${py * -14}deg) rotateY(${px * 14}deg)`;
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
        width: 56,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${style.border}`,
        bgcolor: style.bg,
        borderRadius: 1.5,
        color: style.iconColor,
        transition: "transform 0.15s ease-out",
        willChange: "transform",
      }}
    >
      {icon}
    </Box>
  );
}

function Connector({ color }) {
  return (
    <Box sx={{ flexShrink: 0, width: { xs: 20, sm: 36, md: 52 }, display: "flex", alignItems: "center", mt: "28px" }}>
      <Box sx={{ flex: 1, height: 0, borderTop: `1.5px dashed ${color}` }} />
      <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: color, mx: 0.5, flexShrink: 0 }} />
      <Box sx={{ flex: 1, height: 0, borderTop: `1.5px dashed ${color}` }} />
    </Box>
  );
}

function FlowStep({ step }) {
  const variant = step.variant || "default";
  const labelColor = variant === "decision" ? palette.accent : palette.muted;

  return (
    <Box sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", px: 1 }}>
      <IconBox icon={step.icon} variant={variant} />

      <Typography sx={{ color: labelColor, fontFamily: fontMono, fontSize: "0.65rem", letterSpacing: "0.06em", mt: 2, mb: 0.8 }}>
        {step.label}
      </Typography>
      <Typography sx={{ color: palette.text, fontWeight: 700, fontSize: "0.88rem", mb: 0.6, lineHeight: 1.3 }}>
        {step.title}
      </Typography>
      <Typography sx={{ color: palette.muted, fontSize: "0.72rem", lineHeight: 1.5 }}>
        {step.description}
      </Typography>

      {step.pill && (
        <Box
          sx={{
            mt: 1,
            px: 1.2,
            py: 0.3,
            borderRadius: 0.5,
            bgcolor: "rgba(79,209,165,0.15)",
            color: palette.teal,
            fontFamily: fontMono,
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          {step.pill}
        </Box>
      )}
    </Box>
  );
}

// أيقونات افتراضية لكل خطوة في حال عدم تمريرها عبر الـ config
const defaultSteps = [
  {
    label: "TRIGGER EVENT",
    title: "Customer Scans Table QR",
    description: "Consent profile resolved in <10ms",
    icon: <QrCodeScannerIcon fontSize="medium" />,
  },
  {
    label: "POS INGESTION",
    title: "Order Settlement",
    description: "Basket value logged: AED 620",
    icon: <ReceiptLongIcon fontSize="medium" />,
  },
  {
    variant: "decision",
    label: "DECISION GATE",
    title: "30 Days Without Visit?",
    description: "",
    pill: "CONDITION MET",
    icon: <AccessTimeIcon fontSize="medium" />,
  },
  {
    variant: "action",
    label: "AUTONOMOUS ACTION",
    title: "VIP Recapture Perk",
    description: "Direct WhatsApp VIP Invitation",
    icon: <SendIcon fontSize="medium" />,
  },
  {
    variant: "outcome",
    label: "COMMERCIAL OUTCOME",
    title: "Table Re-Booked",
    description: "AED 850 Re-captured",
    icon: <AttachMoneyIcon fontSize="medium" />,
  },
];

export default function AutomationFlowSection({ config }) {
  const {
    eyebrow = "",
    title = "",
    subtitle = "",
    steps = defaultSteps,
    footer = null,
  } = config || {};

  return (
    <Box sx={{ bgcolor: palette.bg, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {eyebrow && (
          <Typography sx={{ color: palette.accent, fontFamily: fontMono, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", mb: 2 }}>
            {eyebrow}
          </Typography>
        )}
        {title && (
          <Typography sx={{ color: palette.text, fontWeight: 800, fontSize: { xs: "1.8rem", md: "2.4rem" }, mb: 2.5, lineHeight: 1.25 }}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography sx={{ color: palette.muted, fontSize: "0.95rem", maxWidth: 680, mx: "auto", mb: 6, lineHeight: 1.7 }}>
            {subtitle}
          </Typography>
        )}

        <Box
          sx={{
            border: `1px solid ${palette.border}`,
            borderRadius: 3,
            px: { xs: 2, md: 5 },
            py: { xs: 4, md: 5 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
            {steps.map((step, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
                <FlowStep step={step} />
                {i < steps.length - 1 && <Connector color={i % 2 === 0 ? palette.accent : palette.teal} />}
              </Box>
            ))}
          </Box>

          {footer && (
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                gap: 1,
                mt: 5,
                pt: 3,
                borderTop: `1px solid ${palette.border}`,
                textAlign: "left",
              }}
            >
              {footer.pipelineId && (
                <Typography sx={{ color: palette.muted, fontFamily: fontMono, fontSize: "0.7rem" }}>
                  PIPELINE EXECUTION ID:{" "}
                  <Box component="span" sx={{ color: palette.accent }}>{footer.pipelineId}</Box>
                </Typography>
              )}
              {footer.stats?.length > 0 && (
                <Typography sx={{ color: palette.muted, fontFamily: fontMono, fontSize: "0.7rem" }}>
                  {footer.stats.map((s, i) => (
                    <span key={i}>
                      {i > 0 && " • "}
                      {s.label}: <Box component="span" sx={{ color: palette.teal, fontWeight: 700 }}>{s.value}</Box>
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