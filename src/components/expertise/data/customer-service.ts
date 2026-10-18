import { Headset } from "lucide-react";

import type { FunctionGroup } from "./types";

export const customerServiceFunction: FunctionGroup = {
  label: "Customer Services & Support",
  href: "/expertise/customer-service",
  icon: Headset,
  intro:
    "Every inquiry handled, every ticket resolved. Professional customer-facing support that reflects well on your business.",
  roles: [
    {
      title: "Customer Support Representative",
      description: "Handles inquiries, tickets, and support emails so customers get responses.",
    },
    {
      title: "Live Chat Support Agent",
      description:
        "Handles live website or in-app chats with approved guidance, clear handoffs, and useful case notes.",
    },
    {
      title: "Dedicated Receptionist",
      description: "Answers calls, schedules appointments, and manages inbound comms.",
    },
    {
      title: "IT Helpdesk Assistant",
      description: "Resolves user tickets, troubleshoots issues, and routes escalations.",
    },
    {
      title: "Content Moderator",
      description: "Reviews user content, enforces guidelines, and keeps communities safe.",
    },
    {
      title: "Community & Membership Assistant",
      description: "Onboards members, tracks renewals, and keeps communities running.",
    },
    {
      title: "Audience & Community Manager",
      description: "Moderates channels, manages replies, and keeps audiences engaged.",
    },
    {
      title: "Hotel & Accommodation Operations Assistant",
      description: "Manages reservations, guest communication, and booking platforms.",
    },
  ],
};

export const customerServiceFaqs = [
  [
    "What Customer Service roles can I hire?",
    "Options include customer support representatives, dedicated receptionists, IT helpdesk assistants, content moderators, community assistants and managers, and accommodation operations assistants.",
  ],
  [
    "Which channels can customer support cover?",
    "Coverage can be planned for the channels you use, such as phone, email, tickets, chat, or community platforms, according to agreed role responsibilities and hours.",
  ],
  [
    "Can the team use our helpdesk and customer service tools?",
    "Yes. Share your platforms, escalation paths, response standards, and workflows during planning so onboarding can reflect your support environment.",
  ],
  [
    "How do you maintain a consistent customer experience?",
    "You provide your tone of voice, service guidelines, and escalation rules. The team follows those agreed processes, with responsibilities and reporting defined for the engagement.",
  ],
  [
    "Can support be scheduled for evenings or weekends?",
    "Coverage can be planned around your customers’ needs, subject to role requirements, staffing availability, and the schedule agreed for your engagement.",
  ],
] as const;
