// src/pages/sectors/beautyCenter/lamsaAutomationFlowConfig.js
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import SpaIcon from "@mui/icons-material/Spa";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import result from '../../../../assets/image_Beautey_center/photo_2026-10-01_18-05-18.jpg'
import care from '../../../../assets/image_Beautey_center/photo_2026-10-01_18-05-15.jpg'
import sessions from '../../../../assets/image_Beautey_center/photo_2026-10-01_18-05-16.jpg'
import plan from '../../../../assets/image_Beautey_center/photo_2026-10-01_18-05-18 (2).jpg'
import assessment from '../../../../assets/image_Beautey_center/photo_2026-10-01_18-05-15 (2).jpg'

const safeArray = (value) => (Array.isArray(value) ? value : []);

// Fallback icons لحد ما تجهزي الصور — بمجرد ما تضيفي image لأي خطوة بالأسفل، بتحجب الأيقونة تلقائياً
const icons = {
  assessment: <FaceRetouchingNaturalIcon fontSize="medium" />,
  plan: <AssignmentIcon fontSize="medium" />,
  sessions: <EventRepeatIcon fontSize="medium" />,
  care: <SpaIcon fontSize="medium" />,
  result: <AutoAwesomeIcon fontSize="medium" />,
};

// لما تجهزي الصور، حطيها هون بنفس الترتيب (أو null لو بدك تضلي عالأيقونة الافتراضية)
const images = {
  assessment,
  plan,
  sessions,
  care,
  result,
};

export const getLamsaAutomationFlowConfig = (t) => {
  const steps = safeArray(t("lamsaAutomation.steps", { returnObjects: true }));
  const footerStats = safeArray(t("lamsaAutomation.footer.stats", { returnObjects: true }));

  return {
    eyebrow: t("lamsaAutomation.eyebrow"),
    title: t("lamsaAutomation.title"),
    subtitle: t("lamsaAutomation.subtitle"),
    steps: steps.map((step) => ({
      variant: step.variant,
      icon: icons[step.key],
      image: images[step.key],
      label: step.label,
      title: step.title,
      description: step.description,
      pill: step.pill || null,
    })),
    footer: {
      pipelineLabel: t("lamsaAutomation.footer.pipelineLabel"),
      pipelineId: t("lamsaAutomation.footer.pipelineId"),
      stats: footerStats,
    },
  };
};

export default getLamsaAutomationFlowConfig;