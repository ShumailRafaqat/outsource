export type SoftwareRoleVisualKind =
  | "mobile-screen"
  | "integration-flow"
  | "crm-pipeline"
  | "test-report"
  | "automation-suite"
  | "release-pipeline"
  | "support-ticket"
  | "issue-investigation"
  | "model-connection"
  | "supervised-workflow"
  | "conversation"
  | "agent-tools"
  | "analytics-brief"
  | "data-pipeline"
  | "database-operations"
  | "maintenance-cycle"
  | "web-application";

export type SoftwareRoleVisual = {
  kind: SoftwareRoleVisualKind;
  eyebrow: string;
  title: string;
  summary: string;
  steps: readonly [string, string, string];
  footer: string;
};

export const softwareRoleVisuals: Record<string, SoftwareRoleVisual> = {
  "Mobile App Developer": {
    kind: "mobile-screen",
    eyebrow: "APP FEATURE / PREVIEW",
    title: "Saved payment methods",
    summary: "Account · Payments",
    steps: ["Choose a method", "Confirm the details", "Review the saved state"],
    footer: "Example screen states for an agreed mobile feature.",
  },
  "API Integration Developer": {
    kind: "integration-flow",
    eyebrow: "SYSTEM CONNECTION / MAP",
    title: "CRM → Scheduling",
    summary: "Field mapping · Auth · Retry path",
    steps: ["Validate the event", "Map approved fields", "Record or route the error"],
    footer: "Connection points and failure behavior are agreed with system owners.",
  },
  "CRM Developer": {
    kind: "crm-pipeline",
    eyebrow: "CRM CONFIGURATION / EXAMPLE",
    title: "Renewal workflow",
    summary: "Stages and ownership follow your process.",
    steps: ["Upcoming", "Owner review", "Next action"],
    footer: "Pipeline labels shown as an illustrative configuration.",
  },
  "QA / Software Tester": {
    kind: "test-report",
    eyebrow: "TEST SESSION / SUMMARY",
    title: "Checkout regression",
    summary: "Scenario · Expected behavior · Evidence",
    steps: ["Promotion applied", "Payment declined", "Cart restored"],
    footer: "Test results report evidence; your release owner decides readiness.",
  },
  "Automation QA Engineer": {
    kind: "automation-suite",
    eyebrow: "AUTOMATED CHECK / CI",
    title: "Account access suite",
    summary: "Commit → checks → reviewable output",
    steps: ["Run focused suite", "Capture failure details", "Report to the pipeline"],
    footer: "CI gates and test scope are set by your engineering team.",
  },
  "DevOps & Cloud Engineer": {
    kind: "release-pipeline",
    eyebrow: "DEPLOYMENT / CHANGE PATH",
    title: "Service release",
    summary: "Configuration is reviewed before promotion.",
    steps: ["Build and verify", "Owner approval", "Deploy or roll back"],
    footer: "Production permission and go-live approval stay with your owners.",
  },
  "IT Support Specialist": {
    kind: "support-ticket",
    eyebrow: "SERVICE DESK / REQUEST",
    title: "New starter setup",
    summary: "Account and device checklist",
    steps: ["Confirm approved request", "Prepare assigned device", "Escalate access needs"],
    footer: "Account permissions require your authorized administrator.",
  },
  "Technical Support Engineer": {
    kind: "issue-investigation",
    eyebrow: "PRODUCT SUPPORT / INVESTIGATION",
    title: "Export job stalls",
    summary: "Version · Reproduction · Permitted logs",
    steps: ["Collect job context", "Reproduce in test", "Write an engineering handoff"],
    footer: "Example investigation structure; findings depend on available evidence.",
  },
  "AI Integration Developer": {
    kind: "model-connection",
    eyebrow: "MODEL INTEGRATION / BOUNDARY",
    title: "Product request → model API",
    summary: "Input checks · Response handling · Evaluation",
    steps: ["Validate approved input", "Call configured provider", "Check response and fallback"],
    footer: "Provider, data use, and acceptance criteria are approved by your team.",
  },
  "AI Automation Engineer": {
    kind: "supervised-workflow",
    eyebrow: "AI-ASSISTED PROCESS / REVIEW",
    title: "Request triage",
    summary: "An approval checkpoint stays in the workflow.",
    steps: ["Prepare a suggested category", "Route for staff confirmation", "Log exception or decision"],
    footer: "Illustrative supervised workflow; actions require owner approval.",
  },
  "AI Chatbot Developer": {
    kind: "conversation",
    eyebrow: "CHAT EXPERIENCE / SAMPLE FLOW",
    title: "Find a service answer",
    summary: "Approved content with a clear handoff.",
    steps: ["Ask a supported question", "Show a sourced response", "Connect to a person if unsure"],
    footer: "Customer-facing content and escalation rules need your review.",
  },
  "AI Agent Developer": {
    kind: "agent-tools",
    eyebrow: "BOUNDED AGENT / TOOL REVIEW",
    title: "Order status assistant",
    summary: "Read-only lookup · Draft only · Human approval",
    steps: ["Read permitted order context", "Prepare a response draft", "Wait for staff approval"],
    footer: "Tool access is limited to permissions approved for the use case.",
  },
  "Data Analyst": {
    kind: "analytics-brief",
    eyebrow: "REPORTING / KPI DEFINITION",
    title: "Open case review",
    summary: "Question → definition → source → interpretation",
    steps: ["Agree what counts as open", "Validate the reporting source", "Explain filters and gaps"],
    footer: "No sample performance figures; metric meaning is defined with your owner.",
  },
  "Data Engineer": {
    kind: "data-pipeline",
    eyebrow: "DATA PIPELINE / QUALITY CHECKS",
    title: "Source file → reporting table",
    summary: "Ingest · Transform · Validate · Document",
    steps: ["Check required fields", "Transform agreed columns", "Route quality exceptions"],
    footer: "Source access and data rules come from your data owner.",
  },
  "Database Administrator": {
    kind: "database-operations",
    eyebrow: "DATABASE / OPERATIONS VIEW",
    title: "Routine database checks",
    summary: "Maintenance · Backup review · Access requests",
    steps: ["Review job records", "Document query findings", "Route changes for approval"],
    footer: "Production changes and recovery decisions stay owner-controlled.",
  },
  "Software Maintenance Specialist": {
    kind: "maintenance-cycle",
    eyebrow: "MAINTENANCE / CHANGE RECORD",
    title: "Scoped bug fix",
    summary: "Reproduce · Patch · Verify · Hand off",
    steps: ["Confirm expected behavior", "Add a focused regression test", "Prepare release notes"],
    footer: "Code review and release timing follow your existing process.",
  },
  "Web Application Developer": {
    kind: "web-application",
    eyebrow: "WEB PRODUCT / FEATURE PREVIEW",
    title: "Activity view",
    summary: "Search · Filter · Detail · Empty and error states",
    steps: ["Use the approved API contract", "Build an accessible interface", "Test responsive behavior"],
    footer: "An illustrative interface concept—not a client product screenshot.",
  },
};

export function getSoftwareRoleVisual(title: string) {
  return softwareRoleVisuals[title];
}
