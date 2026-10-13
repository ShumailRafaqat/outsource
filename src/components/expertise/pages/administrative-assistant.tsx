import {
  ArrowRight,
  Bell,
  CalendarCheck,
  CalendarDays,
  CheckCheck,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileText,
  FolderOpen,
  ListChecks,
  UsersRound,
  Workflow,
} from "lucide-react";

import { InteractiveAssistantPage, type AssistantPageContent } from "./general-virtual-assistant";

const administrativeAssistantContent: AssistantPageContent = {
  eyebrow: "ADMINISTRATIVE ASSISTANT",
  headline: ["Stop drowning in admin.", "Let someone own", "the workflows."],
  description:
    "Scheduling, documentation, coordination, and day-to-day operations—all handled so your team stays focused and nothing slips.",
  primaryCta: "Get admin support",
  socialHeadline: "Admin work, already moving.",
  socialDescription: "Less chasing. More room for the work only you can do.",
  demoLabel: "YOUR OPERATIONS, IN ORDER",
  assistantGreeting: "Your operations are already in motion.",
  assistantIntro: "Here's what I handled this morning.",
  demoSummaryTitle: "Team, kept in sync",
  demoSummaryFooter: "5 workflows moving before 9am",
  floatingNotes: ["Approvals organized", "Team aligned"],
  chooserEyebrow: "PICK WHAT NEEDS AN OWNER",
  chooserHeading: "Where is admin slowing you down?",
  ownerLine: "Your operations need an owner, not another reminder.",
  problemEyebrow: "DAILY ADMIN, MADE LIGHTER",
  problemHeading: ["Choose the admin chaos", "you want off your plate."],
  problemDescription:
    "Choose a workflow that keeps getting pushed back. See how an Administrative Assistant turns it into a process that keeps moving.",
  withoutLabel: "WITHOUT ADMIN SUPPORT",
  withoutStatus: "Still waiting on someone",
  withLabel: "WITH YOUR ASSISTANT",
  withStatus: "Workflow moving",
  problemFootnote: "Start with one workflow. Add more as your operations grow.",
  timelineId: "day-in-your-operations",
  timelineEyebrow: "SAME DAY. A MUCH BETTER FLOW.",
  timelineHeading: ["From scattered to streamlined.", "A day in your operations."],
  timelineDescription:
    "The same people and priorities—with a dedicated assistant keeping the details in motion.",
  timelineWithoutLabel: "WITHOUT ADMIN SUPPORT",
  timelineWithLabel: "WITH YOUR ADMINISTRATIVE ASSISTANT",
  serviceEyebrow: "YOUR DAY-TO-DAY, TAKEN CARE OF",
  serviceHeading: ["Your Administrative Assistant handles", "the work that keeps work moving."],
  serviceDescription:
    "A dedicated person learns your processes, owns the repeatable admin, and keeps your team informed.",
  serviceLink: "Get administrative support",
  proofLabel: "LESS CHASING. SMOOTHER OPERATIONS.",
  testimonialHeading: ["Admin under control.", "Teams moving forward."],
  testimonialIndexLabel: "ADMIN RELIEF, IN PRACTICE",
  ctaEyebrow: "LET YOUR TEAM GET BACK TO WORK",
  ctaHeading: ["Let admin run", "without you", "chasing it."],
  ctaDescription:
    "One dedicated Administrative Assistant owns the workflows end to end. Your team gets to focus on the work that matters.",
  primaryFinalCta: "Get admin support",
  signoffHeadline: "Your workflows, in good hands.",
  signoffDescription: "Start with one process. Build from there.",
  floatingCta: "Start with one workflow",
  scenarios: [
    {
      id: "scheduling",
      label: "Scheduling conflicts",
      shortLabel: "Scheduling",
      icon: CalendarDays,
      without:
        "Meetings overlap, plans shift at the last minute, and everyone is chasing each other to find a time.",
      with: "Your assistant manages calendars, proposes workable times, confirms attendees, and keeps everyone updated.",
      outcome: "Meetings happen on time. You stop playing calendar referee.",
      detail: "Availability coordinated · Attendees confirmed",
      signal: "3 clashes → one confirmed schedule",
    },
    {
      id: "documentation",
      label: "Documentation backlog",
      shortLabel: "Documents",
      icon: FileText,
      without:
        "Reports, meeting notes, and shared files are scattered. Finding the current version takes longer than the work.",
      with: "Your assistant prepares and organizes documents, records decisions, and keeps shared files current.",
      outcome: "Everything is ready when you need it. No more searching.",
      detail: "Minutes filed · Shared records updated",
      signal: "12 loose files → one organized workspace",
    },
    {
      id: "coordination",
      label: "Vendor & team coordination",
      shortLabel: "Coordination",
      icon: UsersRound,
      without:
        "Emails bounce between teams and vendors. Updates get lost, and you keep stepping in to move things along.",
      with: "Your assistant owns the follow-ups, tracks responses, shares updates, and closes the loop with everyone involved.",
      outcome: "Work moves forward without constant chasing.",
      detail: "Responses tracked · Next steps shared",
      signal: "6 open threads → everyone aligned",
    },
    {
      id: "approvals",
      label: "Approval delays",
      shortLabel: "Approvals",
      icon: ClipboardCheck,
      without:
        "Requests wait in inboxes. Nobody is sure who needs to approve next, and deadlines creep closer.",
      with: "Your assistant routes requests to the right people, checks status, and flags the decisions that need you.",
      outcome: "Approvals keep moving. You only step in when needed.",
      detail: "Requests routed · Decisions surfaced",
      signal: "4 pending approvals → status made clear",
    },
    {
      id: "task-tracking",
      label: "Task tracking mess",
      shortLabel: "Task tracking",
      icon: ListChecks,
      without:
        "Action items live in meeting notes, chats, and half-updated lists. Nobody has the full picture.",
      with: "Your assistant keeps task lists current, confirms owners and due dates, and sends useful progress updates.",
      outcome: "Nothing falls through. Progress is visible.",
      detail: "Owners assigned · Deadlines kept current",
      signal: "9 scattered tasks → one clear action list",
    },
  ],
  timeline: [
    {
      time: "Morning",
      title: "A confirmed schedule",
      without: "Calendar clashes and reminders still waiting to be sent.",
      with: "Meetings confirmed, conflicts resolved, and reminders on their way.",
      icon: CalendarCheck,
    },
    {
      time: "Mid-morning",
      title: "A clear record",
      without: "Documents scattered and approval statuses unclear.",
      with: "Files organized, approvals tracked, and status updates shared.",
      icon: FileCheck2,
    },
    {
      time: "Afternoon",
      title: "Coordination closed",
      without: "Vendor replies and team follow-ups still outstanding.",
      with: "Responses followed through and next steps ready for everyone.",
      icon: UsersRound,
    },
    {
      time: "Late afternoon",
      title: "A list you can trust",
      without: "An incomplete task list and tomorrow still unplanned.",
      with: "Daily summary delivered and tomorrow's priorities prepared.",
      icon: ListChecks,
    },
    {
      time: "End of day",
      title: "Operations in motion",
      without: "Still catching up on admin instead of making decisions.",
      with: "Workflows moving while you focus on the decisions that need you.",
      icon: Clock3,
    },
  ],
  services: [
    {
      title: "Scheduling & calendar management",
      description: "Own meetings, resolve conflicts, and send confirmations and reminders.",
      outcome: "A clean calendar. Conflicts handled before they reach you.",
      icon: CalendarDays,
    },
    {
      title: "Documentation & records",
      description: "Prepare reports and minutes, maintain records, and organize shared files.",
      outcome: "Clean, current documents ready whenever needed.",
      icon: FolderOpen,
    },
    {
      title: "Coordination & follow-ups",
      description: "Coordinate internal teams and external vendors and keep responses moving.",
      outcome: "Loops get closed. You step in only when a decision is required.",
      icon: UsersRound,
    },
    {
      title: "Task tracking & workflows",
      description: "Keep action lists updated, owners clear, and routine processes on track.",
      outcome: "Nothing falls through. Progress is visible.",
      icon: Workflow,
    },
    {
      title: "Daily operations support",
      description: "Handle routine admin requests and keep everyday work moving.",
      outcome: "Smooth operations let the team focus on its core work.",
      icon: Bell,
    },
  ],
  stories: [
    {
      quote:
        "The scheduling back-and-forth stopped eating into the day. Meetings are confirmed and the team knows what's next.",
      attribution: "An operations lead, growing team",
      label: "The calendar reset",
    },
    {
      quote:
        "Meeting notes and shared records are finally easy to find. We spend less time searching and more time following through.",
      attribution: "A team manager, professional services",
      label: "The documentation reset",
    },
    {
      quote:
        "Vendor updates and action items no longer depend on someone remembering to chase them. The work keeps moving.",
      attribution: "A business owner, small business",
      label: "The coordination reset",
    },
  ],
};

export function AdministrativeAssistantPage() {
  return <InteractiveAssistantPage content={administrativeAssistantContent} />;
}
