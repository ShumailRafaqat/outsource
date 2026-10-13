import { TrendingUp } from "lucide-react";

import type { FunctionGroup } from "./types";

export const salesGrowthFunction: FunctionGroup = {
  label: "Sales & Growth",
  href: "/expertise/sales-development",
  icon: TrendingUp,
  intro:
    "Build a more consistent pipeline with research, outreach, and sales coordination support.",
  roles: [
    {
      title: "Sales Development Representative",
      description: "Prospects, qualifies leads, and books meetings to fill your pipeline.",
    },
    {
      title: "IT SDR",
      description: "Prospects, qualifies leads, and books meetings for your tech sales team.",
    },
    {
      title: "Outbound Calling Agent",
      description: "Handles outbound calls, lead qualification, and appointment setting.",
    },
    {
      title: "Lead Generation Assistant",
      description: "Researches prospects and builds targeted lists for your sales team.",
    },
    {
      title: "CRM Data Entry Assistant",
      description: "Keeps your CRM data clean, accurate, and ready for your sales team.",
    },
    {
      title: "Appointment Setter",
      description: "Qualifies prospects and books confirmed meetings into your calendar.",
    },
    {
      title: "Account Executive",
      description: "Supports late-stage deals with follow-ups, proposals, and coordination.",
    },
    {
      title: "Account Manager",
      description: "Manages renewals, onboarding follow-through, and client coordination.",
    },
    {
      title: "Business Development Manager",
      description: "Tracks partnerships, referrals, and co-selling activity to drive growth.",
    },
    {
      title: "CRM & Automation Specialist",
      description: "Builds workflows, automates follow-ups, and keeps your pipeline moving.",
    },
  ],
};

export const salesGrowthFaqs = [
  [
    "What sales and growth roles can I hire?",
    "Roles include sales development representatives, IT SDRs, outbound calling agents, lead generation assistants, CRM support, appointment setters, account executives, account managers, and business development managers.",
  ],
  [
    "Can the team work with our CRM and sales tools?",
    "Yes. Share your CRM, prospecting tools, and workflow requirements during role planning so the experience and onboarding can be matched to your setup.",
  ],
  [
    "Can sales coverage match my business hours?",
    "Coverage can be planned around your target market and working hours, subject to role needs, candidate availability, and the schedule agreed for your engagement.",
  ],
  [
    "How do you measure sales support performance?",
    "We agree on role responsibilities and reporting with you. Measures should reflect the work—for example, data quality, timely follow-up, qualified meetings, or agreed pipeline activities—not unsupported guarantees of sales outcomes.",
  ],
  [
    "Can I start with one sales role and scale the team later?",
    "Yes. You can begin with a specific role and discuss adding capacity as your needs grow. Any changes to responsibilities, coverage, or fees should be agreed before they take effect.",
  ],
] as const;
