// src/config/gridConfig.js
const gridConfig = {
  header: {
    label: "AED Tech_GRAPH_ROUTER // NODE_NETWORK_v1.0",
    description: "Real-Time Event Topology: Client Interaction to Cloud Platform",
    metrics: [
      { label: "CONNECTIONS", value: "100% OPERATIONAL" },
      { label: "TELEMETRY LATENCY", value: "< 8ms" },
      { label: "THROUGHPUT", value: "12,000 TX/SEC" },
    ],
  },

  centerNode: {
    title: "CLIENT",
    subtitle: "CORE RECORD",
    idLabel: "ID: 0xA1B2...9F3",
  },

  topNodes: [
    { title: "CLIENT ACCESS", subtitle: "SECURE ENTRY POINT" },
    { title: "SERVICE CATALOG", subtitle: "REAL-TIME OFFERINGS" },
    { title: "RETENTION ENGINE", subtitle: "LOYALTY & REWARDS" },
  ],

  bottomNodes: [
    { title: "WORKFLOW AUTOMATION", subtitle: "PROCESS & SCHEDULING" },
    { title: "RELATIONSHIP ENGINE", subtitle: "RETENTION & FOLLOW-UP" },
    { title: "BUSINESS INTELLIGENCE", subtitle: "REPORTING & INSIGHTS" },
  ],

  stats: [
    { label: "AVERAGE EFFICIENCY GAIN", value: "+42.0%", note: "Automated workflows" },
    { label: "DATA CAPTURE RATE", value: "80.0%", note: "Zero friction onboarding" },
    { label: "AVERAGE VALUE INCREASE", value: "+18.0%", note: "Smarter recommendations" },
    { label: "DEPLOYMENT SPEED", value: "< 72 HRS", note: "Fast turnkey setup" },
  ],
};

export default gridConfig;