import { UsersRound } from "lucide-react";

import type { FunctionGroup } from "./types";

export const hrPeopleOperationsFunction: FunctionGroup = {
  label: "HR & People Operations",
  href: "/expertise/hr-people-operations",
  icon: UsersRound,
  intro:
    "Hiring pipelines that don’t stall and people processes that stay organized, without adding headcount to manage them.",
  roles: [
    {
      title: "HR Virtual Assistant",
      description: "Supports onboarding, employee records, payroll admin, and HR docs.",
    },
    {
      title: "HR Recruiter",
      description: "Posts roles, screens candidates, and keeps your hiring pipeline moving.",
    },
    {
      title: "Compliance & Credentialing Assistant",
      description: "Tracks credentials, verifies documents, and keeps compliance current.",
    },
    {
      title: "Staffing Client Account Assistant",
      description: "Coordinates job orders, placement tracking, and client account activity.",
    },
    {
      title: "IT Recruiter",
      description: "Manages the full tech hiring cycle from posting to candidate selection.",
    },
    {
      title: "Technical Sourcer",
      description: "Finds and engages passive candidates to keep hiring pipelines full.",
    },
  ],
};

export const hrPeopleFaqs = [
  [
    "What HR & People Operations roles can I hire?",
    "Roles include HR virtual assistants, HR recruiters, compliance and credentialing assistants, staffing account assistants, IT recruiters, and technical sourcers.",
  ],
  [
    "Can your team support our existing HR or applicant tracking system?",
    "Yes. Share the systems, hiring workflows, and documentation requirements during planning so relevant experience and onboarding can be considered.",
  ],
  [
    "Can you help with confidential employee and candidate information?",
    "Confidentiality, access permissions, and data-handling expectations should be agreed before work begins. Access should be limited to what the role requires.",
  ],
  [
    "Can recruiting support scale up when we have more open roles?",
    "Coverage and recruiting capacity can be planned around your hiring needs, subject to role requirements, availability, and the agreed engagement scope.",
  ],
  [
    "Can I start with one HR or recruiting role?",
    "Yes. You can start with a single role and discuss adding support as hiring or people operations needs evolve. Any changes to scope, schedule, or fees should be agreed.",
  ],
] as const;
