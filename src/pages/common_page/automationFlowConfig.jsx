// src/pages/common_page/automationFlowConfig.js
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import SyncIcon from "@mui/icons-material/Sync";

// الأيقونات مربوطة بمفتاح ثابت (key) مش بترتيب index، حتى ما تنكسر لو تغيّر ترتيب الخطوات بالترجمة
const icons = {
  trigger: <QrCodeScannerIcon fontSize="small" />,
  ingestion: <ReceiptLongIcon fontSize="small" />,
  decision: <AccessTimeIcon fontSize="small" />,
  action: <SendIcon fontSize="small" />,
  outcome: <SyncIcon fontSize="small" />,
};

export const getAutomationFlowConfig = (t) => {
  const steps = t("automation.steps", { returnObjects: true });
  const footerStats = t("automation.footer.stats", { returnObjects: true });

  return {
    eyebrow: t("automation.eyebrow"),
    title: t("automation.title"),
    subtitle: t("automation.subtitle"),
    steps: steps.map((step) => ({
      variant: step.variant,
      icon: icons[step.key],
      label: step.label,
      title: step.title,
      description: step.description,
      pill: step.pill || null,
    })),
    footer: {
      pipelineId: t("automation.footer.pipelineId"),
      stats: footerStats,
    },
  };
};

export default getAutomationFlowConfig;