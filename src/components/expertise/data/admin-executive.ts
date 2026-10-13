import { ClipboardList } from "lucide-react";

import type { FunctionGroup } from "./types";

export const adminExecutiveFunction: FunctionGroup = {
  label: "Admin & Executive",
  href: "/expertise/admin-executive",
  icon: ClipboardList,
  intro:
    "Find dependable day-to-day and executive support to keep your schedule, communication, and operations on track.",
  roles: [
    {
      title: "General Virtual Assistant",
      description: "Handles your inbox, calendar, research, and recurring daily tasks.",
    },
    {
      title: "Administrative Assistant",
      description: "Owns your admin workflows, scheduling, documentation, and coordination.",
    },
    {
      title: "Personal Assistant",
      description: "Manages your schedule, travel, and logistics across work and life.",
    },
    {
      title: "Executive Assistant",
      description: "Provides senior-level support for calendars, communications, and coordination.",
    },
    {
      title: "Corporate Travel Coordinator",
      description: "Books and manages business travel so trips stay organized and confirmed.",
    },
    {
      title: "Data Entry Assistant",
      description: "Keeps your records accurate, current, and consistently clean.",
    },
    {
      title: "Project Manager",
      description: "Tracks timelines, coordinates teams, and keeps projects moving forward.",
    },
    {
      title: "Event Coordinator",
      description: "Manages vendors, logistics, and guest communication for seamless events.",
    },
  ],
};

export const adminExecutiveFaqs = [
  [
    "What can an Admin & Executive professional help with?",
    "Depending on the role, support can include inbox and calendar management, scheduling, research, documentation, travel coordination, data entry, project follow-up, or event logistics. We define responsibilities with you before work begins.",
  ],
  [
    "How do you match a professional to my needs?",
    "We start by mapping the role, required experience, tools, working hours, and communication needs. Candidates are sourced and screened against the requirements you agree on, then suitable profiles are shared for your review.",
  ],
  [
    "Can my assistant work in my time zone?",
    "We can plan coverage around your business hours, including international time zones, subject to role requirements, candidate availability, and the schedule agreed for your engagement.",
  ],
  [
    "How are onboarding and role-specific training handled?",
    "Onboarding can cover your workflows, tools, documentation, communication preferences, and performance expectations. The exact training plan and each party’s responsibilities are agreed during engagement planning.",
  ],
  [
    "Can I direct the assistant’s daily work?",
    "Yes. In a staffing arrangement, your business assigns and manages the professional’s day-to-day work. If you prefer a managed service, responsibilities and oversight are defined in the agreed scope.",
  ],
  [
    "How do you handle access to calendars, inboxes, and company data?",
    "Access and confidentiality expectations should be agreed before work begins. We recommend using role-based accounts and granting only the permissions needed for the work; specific data-handling commitments should be confirmed in your agreement.",
  ],
  [
    "Can I start with one role and add support later?",
    "Yes. You can start with the role and coverage you need now, then discuss adding capacity as your requirements change. Any changes to scope, schedule, or fees should be agreed before they take effect.",
  ],
] as const;
