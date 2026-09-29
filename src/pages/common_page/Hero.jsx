import { useRef, useEffect } from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";

const palette = {
  bg: "#0B1626",
  border: "#1E2D42",
  accent: "#E3B156",
  text: "#F5F7FA",
  muted: "#9AA5B1",
  glow: "rgba(227, 177, 86, 0.25)",
};

const fontMono = "'IBM Plex Mono', 'Courier New', monospace";

export default function Hero({ config }) {
  const {
    badgeText = "",
    headlineStart = "",
    headlineHighlight = "",
    subtitle = "",
    primaryCta = null,
    secondaryCta = null,
  } = config || {};

  const heroRef = useRef(null);
  const glowRef = useRef(null);

  // بقعة الضوء التفاعلية لـ Hero section
  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.background = `radial-gradient(circle 350px at ${x}px ${y}px, rgba(227,177,86,0.14), transparent 80%)`;
    };

    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  // دالة التمرير السلس عند الضغط على الزر
  const handleSmoothScroll = (e, targetId) => {
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <Box
      ref={heroRef}
      sx={{
        position: "relative",
        bgcolor: palette.bg,
        pt: { xs: 4, md: 6 }, // تقليل البادينغ العلوي لرفع السيكشن وإلغاء المسافة مع الناف بار
        pb: { xs: 8, md: 10 },
        textAlign: "center",
        overflow: "hidden",
        // CSS Keyframes Animation للدخول
        "@keyframes fadeInUp": {
          "0%": { opacity: 0, transform: "translateY(25px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "@keyframes pulseGlow": {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.4, transform: "scale(0.8)" },
        },
      }}
    >
      {/* بقعة الضوء التفاعلية */}
      <Box
        ref={glowRef}
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          transition: "background 0.05s linear",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Badge with Pulsing Dot */}
        {badgeText && (
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.2,
              border: `1px solid ${palette.border}`,
              bgcolor: "rgba(11,22,38,0.6)",
              borderRadius: 1,
              px: 2.5,
              py: 0.8,
              mb: 3,
              animation: "fadeInUp 0.8s ease-out forwards",
            }}
          >
            {/* النقطة المضيئة */}
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                bgcolor: palette.accent,
                boxShadow: `0 0 10px ${palette.accent}`,
                animation: "pulseGlow 2s infinite ease-in-out",
              }}
            />
            {/* جعل النص أصفر وتصغير حجمه قليلاً */}
            <Typography
              sx={{
                color: palette.accent, // تغيير لون الروابط/النص العلوي للأصفر
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                fontFamily: fontMono,
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              {badgeText}
            </Typography>
          </Box>
        )}

        {/* Headline — تم تصغير الخط لتنسيق واستعراض متناسق */}
        <Typography
          sx={{
            color: palette.text,
            fontWeight: 700,
            lineHeight: 1.15,
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.2rem" }, // تصغير الحجم قليلاً
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            mb: 2.5,
            maxWidth: 900,
            mx: "auto",
            animation: "fadeInUp 0.8s ease-out 0.2s forwards",
            opacity: 0,
          }}
        >
          {headlineStart}{" "}
          <Box
            component="span"
            sx={{
              color: palette.accent,
              display: "block",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.2rem" }, // مطابقة حجم العنوان الرئيسي
              fontWeight: 800,
              textShadow: "0 0 25px rgba(227,177,86,0.3)",
              mt: 0.5,
            }}
          >
            {headlineHighlight}
          </Box>
        </Typography>

        {/* Subtitle */}
        {subtitle && (
          <Typography
            sx={{
              color: palette.muted,
              fontSize: { xs: "0.85rem", md: "0.95rem" }, // تصغير حجم النص الفرعي
              lineHeight: 1.7,
              maxWidth: 720,
              mx: "auto",
              mb: 5,
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
              opacity: 0,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {/* Action Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2.5}
          justifyContent="center"
          alignItems="center"
          sx={{
            animation: "fadeInUp 0.8s ease-out 0.6s forwards",
            opacity: 0,
          }}
        >
          {primaryCta && (
            <Box sx={{ position: "relative", width: { xs: "100%", sm: "auto" } }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: -4,
                  bgcolor: palette.accent,
                  opacity: 0.35,
                  blur: "12px",
                  filter: "blur(12px)",
                  borderRadius: 1,
                  pointerEvents: "none",
                }}
              />
              <Button
                component="a"
                href={primaryCta.href || "#architecture-section"}
                onClick={(e) => handleSmoothScroll(e, primaryCta.href || "#architecture-section")}
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  position: "relative",
                  bgcolor: palette.accent,
                  color: "#0B1626",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  borderRadius: 1,
                  px: 4,
                  py: 1.5,
                  width: { xs: "100%", sm: "auto" },
                  textTransform: "uppercase",
                  boxShadow: "0 0 20px rgba(227,177,86,0.4)",
                  "&:hover": {
                    bgcolor: palette.accent,
                    boxShadow: "0 0 30px rgba(227,177,86,0.7)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {primaryCta.label}
              </Button>
            </Box>
          )}

          {secondaryCta && (
            <Button
              component="a"
              href={secondaryCta.href || "#demo"}
              onClick={(e) => handleSmoothScroll(e, secondaryCta.href || "#demo")}
              variant="outlined"
              startIcon={<LanguageIcon />}
              sx={{
                borderColor: palette.border,
                color: palette.text,
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                borderRadius: 1,
                px: 3.5,
                py: 1.5,
                width: { xs: "100%", sm: "auto" },
                bgcolor: "rgba(15, 27, 46, 0.5)",
                backdropFilter: "blur(4px)",
                "&:hover": {
                  borderColor: palette.accent,
                  bgcolor: "rgba(227, 177, 86, 0.08)",
                  boxShadow: "0 0 15px rgba(227,177,86,0.2)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {secondaryCta.label}
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
}