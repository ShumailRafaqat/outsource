import { Code2 } from "lucide-react";

import type { FunctionGroup } from "./types";

export const softwareDevelopmentFunction: FunctionGroup = {
  label: "Software & Development",
  href: "/expertise/software-dev",
  icon: Code2,
  intro:
    "Add role-matched software and data specialists to your existing team for product work, technical operations, and ongoing maintenance.",
  roles: [
    {
      title: "Mobile App Developer",
      description: "Builds and tests iOS or Android app features, with release-ready handoffs.",
    },
    {
      title: "API Integration Developer",
      description: "Connects systems with documented APIs, data mapping, and error handling.",
    },
    {
      title: "CRM Developer",
      description: "Configures CRM objects, pipelines, permissions, integrations, and handoffs.",
    },
    {
      title: "QA / Software Tester",
      description:
        "Checks product behavior with test cases, defect reports, and regression coverage.",
    },
    {
      title: "Automation QA Engineer",
      description: "Builds and maintains automated tests that fit your release and CI workflow.",
    },
    {
      title: "DevOps & Cloud Engineer",
      description: "Supports deployment pipelines, cloud configuration, monitoring, and runbooks.",
    },
    {
      title: "IT Support Specialist",
      description: "Handles user troubleshooting, device and account setup, and ticket follow-up.",
    },
    {
      title: "Technical Support Engineer",
      description:
        "Investigates complex product issues using logs, reproduction steps, and escalation notes.",
    },
    {
      title: "AI Integration Developer",
      description:
        "Connects AI models to applications with agreed guardrails, evaluations, and tests.",
    },
    {
      title: "AI Automation Engineer",
      description:
        "Builds supervised AI-assisted workflows with approvals, monitoring, and exception paths.",
    },
    {
      title: "AI Chatbot Developer",
      description:
        "Creates tested conversation flows, knowledge retrieval, and human handoff paths.",
    },
    {
      title: "AI Agent Developer",
      description:
        "Develops bounded tool-using agent workflows with permissions, oversight, and evaluation.",
    },
    {
      title: "Data Analyst",
      description:
        "Turns agreed business questions into KPI definitions, dashboards, and reporting.",
    },
    {
      title: "Data Engineer",
      description: "Builds documented data pipelines, transformations, and quality checks.",
    },
    {
      title: "Database Administrator",
      description:
        "Supports database operations, backup checks, performance reviews, and access administration.",
    },
    {
      title: "Software Maintenance Specialist",
      description:
        "Handles scoped bug fixes, dependency upgrades, monitoring, and release support.",
    },
    {
      title: "Web Application Developer",
      description:
        "Builds web application features across accessible interfaces and connected backend services.",
    },
  ],
};

export const softwareDevelopmentFaqs = [
  [
    "What Software & Development roles can I hire?",
    "Roles include full-stack and frontend/backend developers, PHP, Laravel, WordPress and e-commerce specialists, mobile developers, AI/ML engineers, data specialists, technical operations, and technical writers.",
  ],
  [
    "Can developers work with our existing stack and tools?",
    "Yes. Share your languages, frameworks, repositories, cloud environment, development workflow, and collaboration tools during role planning so relevant experience can be considered.",
  ],
  [
    "Can I hire for a specific project or ongoing product work?",
    "Support can be scoped for ongoing product development or defined project needs. Responsibilities, deliverables, collaboration expectations, and timelines should be agreed before work begins.",
  ],
  [
    "How do you handle access to source code and technical systems?",
    "Access and confidentiality requirements should be agreed before work begins. We recommend individual accounts, least-privilege permissions, and your standard review and deployment controls.",
  ],
  [
    "Can I start with one developer and expand the team later?",
    "Yes. You can start with a defined role and add skills or capacity as the roadmap evolves. Changes to scope, schedule, and fees should be agreed in advance.",
  ],
] as const;
