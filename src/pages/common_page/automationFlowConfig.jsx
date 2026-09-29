// src/pages/common_page/automationFlowConfig.js
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import SyncIcon from "@mui/icons-material/Sync";

const automationFlowConfig = {
  eyebrow: "AUTONOMOUS OPERATIONS GRAPH",
  title: "From Raw Client Activity to Automated Outcome.",
  subtitle:
    "Design multi-condition logic that reacts in milliseconds to client actions, inactivity periods, and engagement thresholds.",

  steps: [
    {
      variant: "default",
      icon: <QrCodeScannerIcon fontSize="small" />,
      label: "TRIGGER EVENT",
      title: "Client Accesses Service",
      description: "Access profile resolved in < 10ms",
    },
    {
      variant: "default",
      icon: <ReceiptLongIcon fontSize="small" />,
      label: "DATA INGESTION",
      title: "Activity Logged",
      description: "Interaction value recorded: 620",
    },
    {
      variant: "decision",
      icon: <AccessTimeIcon fontSize="small" />,
      label: "DECISION GATE",
      title: "30 Days Without Activity?",
      description: "",
      pill: "CONDITION MET",
    },
    {
      variant: "action",
      icon: <SendIcon fontSize="small" />,
      label: "AUTOMATED ACTION",
      title: "Re-engagement Offer",
      description: "Direct automated invitation",
    },
    {
      variant: "outcome",
      icon: <SyncIcon fontSize="small" />,
      label: "COMMERCIAL OUTCOME",
      title: "Client Re-engaged",
      description: "Value re-captured: 850",
    },
  ],

  footer: {
    pipelineId: "PIPE_AUTO_0001X",
    stats: [
      { label: "SUCCESSFUL RUNS", value: "12,400 EXECUTIONS" },
      { label: "CONVERSION RATE", value: "38.0%" },
    ],
  },
};

export default automationFlowConfig;