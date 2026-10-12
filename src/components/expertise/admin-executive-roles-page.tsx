"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Bug,
  CalendarCheck,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  Code2,
  CircleDollarSign,
  Contact,
  CreditCard,
  Database,
  FileCode2,
  FileSpreadsheet,
  GraduationCap,
  Handshake,
  HandCoins,
  Headset,
  LifeBuoy,
  ListChecks,
  Mail,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  Smartphone,
  Palette,
  PenLine,
  Plane,
  Search,
  Server,
  Share2,
  ScanSearch,
  ShieldCheck,
  Target,
  UserPlus,
  UserRound,
  UserSearch,
  Wrench,
  Rocket,
  Workflow,
  UsersRound,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
export type Role = {
  title: string;
  description: string;
};
export type FunctionGroup = {
  label: string;
  href: string;
  icon: LucideIcon;
  intro: string;
  roles: Role[];
};
export const expertiseFunctions: FunctionGroup[] = [
  {
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
        description:
          "Provides senior-level support for calendars, communications, and coordination.",
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
  },
  {
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
  },
  {
    label: "Marketing & Creative",
    href: "/expertise/marketing-creative",
    icon: Megaphone,
    intro:
      "Consistent content, active channels, and campaigns that go out—without the coordination overhead.",
    roles: [
      {
        title: "Digital Marketing Assistant",
        description: "Coordinates campaigns, tracks analytics, and keeps marketing current.",
      },
      {
        title: "SEO Specialist",
        description: "Handles keyword research, on-page optimization, and search tracking.",
      },
      {
        title: "Email Marketing Assistant",
        description: "Manages campaigns, newsletters, and subscriber lists for outreach.",
      },
      {
        title: "Social Media Assistant",
        description: "Schedules content, moderates comments, and keeps your channels active.",
      },
      {
        title: "Content Writer",
        description: "Produces blogs, web copy, and written content across channels.",
      },
      {
        title: "Graphic Designer",
        description: "Creates visual assets, brand materials, and digital graphics.",
      },
      {
        title: "Video Editor",
        description: "Cuts, sequences, and delivers polished video content ready to publish.",
      },
      {
        title: "Influencer Marketing Manager",
        description: "Sources creators, tracks deliverables, and keeps campaigns on schedule.",
      },
      {
        title: "Podcast Operations Assistant",
        description: "Handles guest booking, scheduling, show notes, and episode publishing.",
      },
      {
        title: "Personal Brand Manager",
        description: "Manages your content, presence, and positioning across channels.",
      },
      {
        title: "Creative Asset Management Assistant",
        description: "Organizes, tags, and maintains your creative asset library.",
      },
      {
        title: "Creative Studio Project Coordinator",
        description: "Tracks briefs, timelines, and deliverables so projects stay on schedule.",
      },
      {
        title: "Production & Crew Coordination Assistant",
        description: "Coordinates crew scheduling, call sheets, and shoot day logistics.",
      },
    ],
  },
  {
    label: "Finance & Accounting",
    href: "/expertise/finance-accounting",
    icon: CircleDollarSign,
    intro:
      "Books that stay current, invoices that get chased, and financial admin that doesn’t pile up between your priorities.",
    roles: [
      {
        title: "Bookkeeping Assistant",
        description: "Maintains financial records, reconciliations, and expense tracking.",
      },
      {
        title: "Accounts Payable Assistant",
        description: "Processes vendor invoices, tracks payments, and keeps AP current.",
      },
      {
        title: "Collections / AR Specialist",
        description: "Follows up on invoices and keeps receivables from falling behind.",
      },
      {
        title: "Payroll Processing Assistant",
        description: "Collects timesheets, updates payroll platforms, and keeps cycles running.",
      },
      {
        title: "Virtual Assistant for Accountants",
        description: "Supports accounting firms with documents, invoices, and coordination.",
      },
      {
        title: "Procurement Assistant",
        description: "Tracks purchase orders, vendor coordination, and supply follow-ups.",
      },
    ],
  },
  {
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
  },
  {
    label: "Customer Service",
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
  },
  {
    label: "Software & Development",
    href: "/expertise/software-dev",
    icon: Code2,
    intro:
      "Skilled developers and technical operators who embed into your stack and keep systems, products, and pipelines moving.",
    roles: [
      {
        title: "N8N / Full Stack Developer",
        description: "Handles API integrations, backend logic, and workflow automation builds.",
      },
      {
        title: "PHP Developer",
        description: "Develops and maintains PHP applications, scripts, and legacy code.",
      },
      {
        title: "AI Developer",
        description: "Trains, fine-tunes, and integrates machine learning models into your stack.",
      },
      {
        title: "WordPress Developer",
        description:
          "Builds, customizes, and maintains WordPress themes, plugins, and integrations.",
      },
      {
        title: "Web & Frontend Developer",
        description: "Implements responsive UI, components, and performance improvements.",
      },
      {
        title: "Framer Developer",
        description: "Builds responsive Framer pages with CMS setup and animations.",
      },
      {
        title: "Data Scientist",
        description: "Develops models, dashboards, and data analysis to support decisions.",
      },
      {
        title: "Technical Ops Specialist",
        description: "Documents systems, monitors workflows, and coordinates issue resolution.",
      },
      {
        title: "Laravel Developer",
        description: "Builds and maintains Laravel applications, APIs, and database migrations.",
      },
      {
        title: "MERN Front End Developer",
        description: "Builds React components, layouts, and state management for MERN apps.",
      },
      {
        title: "MERN Back End Developer",
        description: "Builds Node and Express APIs, schemas, and backend logic for MERN apps.",
      },
      {
        title: "Full-Stack MERN Developer",
        description: "Builds and maintains both frontend and backend for MERN applications.",
      },
      {
        title: "MERN E-Commerce Developer",
        description: "Builds MERN storefronts, catalogs, search, and checkout functionality.",
      },
      {
        title: "Full-Stack Developer",
        description: "Builds and maintains full-stack features across frontend and backend.",
      },
      {
        title: "WooCommerce Developer",
        description: "Builds and maintains WooCommerce stores, catalogs, and checkout flows.",
      },
      {
        title: "iOS App Developer",
        description:
          "Builds and maintains native iOS features, releases, and App Store submissions.",
      },
      {
        title: "Android App Developer",
        description:
          "Builds and maintains native Android features, releases, and Play Store submissions.",
      },
      {
        title: "React Native/Ionic Developer",
        description: "Builds cross-platform apps in React Native and Ionic, from state to release.",
      },
      {
        title: "ML Engineer",
        description:
          "Deploys and maintains machine learning models, pipelines, and infrastructure.",
      },
      {
        title: "Data Collection Specialist",
        description: "Sources, records, and organizes datasets from web, APIs, and raw inputs.",
      },
      {
        title: "Data Annotation Specialist",
        description: "Labels and classifies images, text, and data for machine learning models.",
      },
      {
        title: "Data Validation Specialist",
        description: "Reviews, cleans, and validates datasets for accuracy and consistency.",
      },
      {
        title: "Technical Writer",
        description: "Writes documentation, guides, and content for products and developers.",
      },
    ],
  },
];

export function toRoleSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const recruitmentSteps: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Requirement Mapping",
    description: "We define the role, tools, time zone, and experience your team needs.",
    icon: ClipboardList,
  },
  {
    title: "Experienced Talent Sourcing",
    description: "We find and pre-vet candidates with relevant experience.",
    icon: UsersRound,
  },
  {
    title: "Multi-Stage Screening",
    description: "Candidates complete resume reviews, skills tests, and professional interviews.",
    icon: BadgeCheck,
  },
  {
    title: "Role-Specific Training",
    description:
      "We prepare shortlisted talent for your tools, processes, and remote-work standards.",
    icon: GraduationCap,
  },
  {
    title: "Background & Reference Checks",
    description: "We verify identity, work history, and professional references.",
    icon: ShieldCheck,
  },
  {
    title: "Client Matching + Paid Trial",
    description: "Meet your best-matched candidates and validate the fit with a paid trial.",
    icon: Handshake,
  },
  {
    title: "Onboarding & Ongoing Support",
    description: "We support a smooth start and stay involved as your team grows.",
    icon: Rocket,
  },
];

const adminExecutiveFaqs = [
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

const salesGrowthFaqs = [
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

const marketingCreativeFaqs = [
  [
    "What marketing and creative roles can I hire?",
    "Options include digital marketing assistants, SEO specialists, email and social media assistants, content writers, graphic designers, video editors, influencer and personal brand managers, podcast operations, and creative project coordination.",
  ],
  [
    "Can a marketing assistant work with our existing tools and brand guidelines?",
    "Yes. Share your platforms, workflows, brand guidelines, and approval process during role planning so onboarding can be tailored to the way your team works.",
  ],
  [
    "Can you support both ongoing marketing and one-off campaigns?",
    "Support can be scoped around recurring channel operations or defined campaign and production needs. The responsibilities, timelines, and deliverables should be agreed before work begins.",
  ],
  [
    "How do you handle content reviews and creative approvals?",
    "You define the review process, brand standards, and approval owners. The professional can coordinate drafts and deliverables through your agreed workflow; final approval remains with your team.",
  ],
  [
    "Can I start with one creative role and expand later?",
    "Yes. You can begin with the role or skills you need first and discuss adding capacity as your marketing priorities evolve. Changes to scope, schedule, or fees should be agreed in advance.",
  ],
] as const;

const financeAccountingFaqs = [
  [
    "What Finance & Accounting roles can I hire?",
    "Support can include bookkeeping, accounts payable, collections and receivables, payroll processing, accounting firm administration, and procurement coordination.",
  ],
  [
    "Can the assistant work with our accounting or payroll software?",
    "Share your platforms, workflows, and access requirements during planning so the role and onboarding can be matched to your systems.",
  ],
  [
    "How do you protect financial records and account access?",
    "Access, confidentiality, and data-handling requirements should be agreed before work begins. We recommend role-based accounts and only the permissions needed for assigned tasks.",
  ],
  [
    "Can support be scheduled around month-end or payroll cycles?",
    "Coverage can be planned around recurring deadlines and agreed responsibilities, subject to the role requirements and schedule in your engagement.",
  ],
  [
    "Can I start with one finance role and add support later?",
    "Yes. You can begin with a defined set of responsibilities and discuss expanding support as your needs change. Scope, schedule, and fees should be agreed in advance.",
  ],
] as const;

const hrPeopleFaqs = [
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

const customerServiceFaqs = [
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

const softwareDevelopmentFaqs = [
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

function getRoleIcon(title: string): LucideIcon {
  const roleTitle = title.toLowerCase();
  if (roleTitle.includes("travel")) return Plane;
  if (roleTitle.includes("data entry")) return Database;
  if (roleTitle.includes("data scientist")) return ScanSearch;
  if (roleTitle.includes("data collection")) return Database;
  if (roleTitle.includes("data annotation")) return Palette;
  if (roleTitle.includes("data validation")) return BadgeCheck;
  if (roleTitle.includes("technical writer")) return FileCode2;
  if (roleTitle.includes("technical ops")) return Workflow;
  if (roleTitle.includes("n8n")) return Workflow;
  if (roleTitle.includes("php")) return FileCode2;
  if (roleTitle.includes("ai developer") || roleTitle.includes("ml engineer")) return Code2;
  if (roleTitle.includes("wordpress") || roleTitle.includes("woocommerce")) return Code2;
  if (roleTitle.includes("framer")) return Palette;
  if (roleTitle.includes("laravel")) return Code2;
  if (roleTitle.includes("mern")) return Code2;
  if (roleTitle.includes("full-stack")) return Code2;
  if (roleTitle.includes("ios") || roleTitle.includes("android")) return Smartphone;
  if (roleTitle.includes("react native") || roleTitle.includes("ionic")) return Smartphone;
  if (roleTitle.includes("project manager")) return ListChecks;
  if (roleTitle.includes("event coordinator")) return CalendarCheck;
  if (roleTitle.includes("executive assistant")) return CalendarDays;
  if (roleTitle.includes("personal assistant")) return UserRound;
  if (roleTitle.includes("virtual assistant")) return Mail;
  if (roleTitle.includes("administrative assistant")) return Briefcase;
  if (roleTitle.includes("lead research")) return Search;
  if (roleTitle.includes("development representative")) return Target;
  if (roleTitle.includes("crm")) return Database;
  if (roleTitle.includes("appointment setter")) return CalendarDays;
  if (roleTitle.includes("social media")) return Share2;
  if (roleTitle.includes("content writer")) return PenLine;
  if (roleTitle.includes("graphic design")) return Palette;
  if (roleTitle.includes("marketing")) return Megaphone;
  if (roleTitle.includes("bookkeeping")) return FileSpreadsheet;
  if (roleTitle.includes("payable")) return CreditCard;
  if (roleTitle.includes("receivable")) return HandCoins;
  if (roleTitle.includes("finance")) return CircleDollarSign;
  if (roleTitle.includes("recruitment")) return UserSearch;
  if (roleTitle.includes("onboarding")) return UserPlus;
  if (roleTitle.includes("people operations")) return BadgeCheck;
  if (roleTitle === "hr assistant") return UsersRound;
  if (roleTitle.includes("live chat")) return MessagesSquare;
  if (roleTitle.includes("customer support")) return MessageCircle;
  if (roleTitle.includes("customer experience")) return Contact;
  if (roleTitle.includes("helpdesk")) return LifeBuoy;
  if (roleTitle.includes("frontend")) return Code2;
  if (roleTitle.includes("backend")) return Server;
  if (roleTitle.includes("quality assurance")) return Bug;
  if (roleTitle.includes("software support")) return Wrench;
  return ClipboardList;
}
const heroPhotos = [
  {
    src: "/images/img3.jpg",
    alt: "Team members collaborating around a meeting table",
  },
  {
    src: "/images/image2.jpg",
    alt: "Colleagues working together in a bright office",
  },
  {
    src: "/images/imag%204.jpg",
    alt: "Professionals reviewing work together",
  },
];
export function AdminExecutiveRolesPage({
  initialFunctionIndex = 0,
}: {
  initialFunctionIndex?: number;
}) {
  const isSalesGrowth = initialFunctionIndex === 1;
  const isMarketingCreative = initialFunctionIndex === 2;
  const isFinanceAccounting = initialFunctionIndex === 3;
  const isHrPeople = initialFunctionIndex === 4;
  const isCustomerService = initialFunctionIndex === 5;
  const isSoftwareDevelopment = initialFunctionIndex === 6;
  const isTextCardLayout =
    isMarketingCreative ||
    isFinanceAccounting ||
    isHrPeople ||
    isCustomerService ||
    isSoftwareDevelopment;
  const categoryLabel = isFinanceAccounting
    ? "Finance & Accounting"
    : isHrPeople
      ? "HR & People Operations"
      : isCustomerService
        ? "Customer Service"
        : isSoftwareDevelopment
          ? "Software & Development"
          : isMarketingCreative
            ? "Marketing & Creative"
            : isSalesGrowth
              ? "Sales & Growth"
              : "Admin & Executive";
  const activeFunction = initialFunctionIndex;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const selectedFunction = expertiseFunctions[activeFunction];
  const primaryPhoto = heroPhotos[0];
  const supportPhoto = heroPhotos[1];
  const teamPhoto = heroPhotos[2];
  if (!selectedFunction || !primaryPhoto || !supportPhoto || !teamPhoto) {
    return null;
  }
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-background px-6 py-8 sm:py-10 lg:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-32 -z-10 h-80 w-80 rounded-full border border-accent/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-20 -z-10 h-56 w-56 rounded-full border border-primary/10"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div className="relative z-10 py-4">
              <p className="eyebrow mb-5">
                {isSalesGrowth
                  ? "Sales & Growth Virtual Assistants"
                  : isMarketingCreative
                    ? "Marketing & Creative Support"
                    : isSoftwareDevelopment
                      ? "Software & Development"
                      : isFinanceAccounting || isHrPeople || isCustomerService
                        ? `${categoryLabel} Support`
                        : "Admin & Executive Support"}
              </p>
              <h1 className="max-w-3xl font-display text-4xl leading-[1.03] text-foreground sm:text-5xl md:text-6xl">
                {isSalesGrowth ? (
                  <>
                    Pipeline Full.
                    <br />
                    Follow-Ups Done.
                    <br />
                    <span className="text-primary">Deals Moving.</span>
                  </>
                ) : isMarketingCreative ||
                  isSoftwareDevelopment ||
                  isFinanceAccounting ||
                  isHrPeople ||
                  isCustomerService ? (
                  <>
                    {categoryLabel}
                    <br />
                    <span className="text-primary">
                      {isMarketingCreative
                        ? "That Keeps You Moving."
                        : isSoftwareDevelopment
                          ? "Built for What’s Next."
                          : isFinanceAccounting
                            ? "Support You Can Count On."
                            : isHrPeople
                              ? "People Operations, Made Easier."
                              : "Support That Shows Up."}
                    </span>
                  </>
                ) : (
                  <>
                    Executive Support
                    <br />
                    <span className="text-primary">That Runs Your Day.</span>
                  </>
                )}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {isSalesGrowth
                  ? "Prospect research, lead qualification, CRM updates, and consistent follow-ups—so your team can focus on closing."
                  : isMarketingCreative
                    ? "Consistent content, active channels, and campaigns that go out—without the coordination overhead."
                    : isSoftwareDevelopment
                      ? "Skilled developers and technical operators who embed into your stack and keep systems, products, and pipelines moving."
                      : isFinanceAccounting
                        ? "Books that stay current, invoices that get chased, and financial admin that doesn’t pile up between your priorities."
                        : isHrPeople
                          ? "Hiring pipelines that don’t stall and people processes that stay organized, without adding headcount to manage them."
                          : isCustomerService
                            ? "Every inquiry handled, every ticket resolved. Professional customer-facing support that reflects well on your business."
                            : "From inbox zero to executive-level coordination — dedicated professionals who keep your operations moving without you managing every detail."}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact#inquiry"
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Book a Free Consultation
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href="#roles"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {isSalesGrowth
                    ? "View All Sales Roles"
                    : isMarketingCreative
                      ? "View All Marketing Roles"
                      : isSoftwareDevelopment
                        ? "View All Development Roles"
                        : isFinanceAccounting
                          ? "View All Finance Roles"
                          : isHrPeople
                            ? "View All HR Roles"
                            : isCustomerService
                              ? "View All Customer Service Roles"
                              : "View All Admin Roles"}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative mx-auto h-[18rem] w-full max-w-2xl sm:h-[21rem] lg:h-[24rem]">
              <div
                className="absolute inset-0 overflow-hidden bg-primary shadow-2xl shadow-primary/20"
                style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
              >
                <img
                  src={primaryPhoto.src}
                  alt={primaryPhoto.alt}
                  className="h-full w-full object-cover object-center"
                  fetchPriority="high"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-primary/45 via-primary/10 to-ink/65 mix-blend-multiply"
                />
              </div>
              <div className="absolute bottom-5 left-1 z-10 h-28 w-36 overflow-hidden border-4 border-background shadow-xl sm:bottom-8 sm:left-4 sm:h-36 sm:w-48">
                <img
                  src={supportPhoto.src}
                  alt={supportPhoto.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-5 right-1 z-10 h-24 w-28 overflow-hidden border-4 border-background shadow-xl sm:bottom-8 sm:right-4 sm:h-32 sm:w-40">
                <img
                  src={teamPhoto.src}
                  alt={teamPhoto.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute right-3 top-5 z-10 max-w-44 border border-white/20 bg-ink/85 px-4 py-3 shadow-lg backdrop-blur sm:right-6 sm:top-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                  Support that fits
                </p>
                <p className="mt-1 font-display text-lg leading-tight text-ink-foreground">
                  Your way of working
                </p>
              </div>
            </div>
          </div>
        </section>
        {!isSalesGrowth && !isTextCardLayout && <ClientOnboardingStory />}
        <section id="roles" className="scroll-mt-24 bg-secondary/60 px-6 py-9 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="eyebrow mb-3">
                {isTextCardLayout ? `${categoryLabel} roles` : "Find the right fit"}
              </p>
              <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
                {isTextCardLayout
                  ? isMarketingCreative
                    ? "Creative support that keeps your brand moving."
                    : isSoftwareDevelopment
                      ? "Technical expertise for your next build."
                      : isFinanceAccounting
                        ? "Financial admin that stays on track."
                        : isHrPeople
                          ? "People operations support that keeps hiring moving."
                          : "Customer support that reflects well on your business."
                  : "Roles built around the way you work."}
              </h2>
            </div>
            <div className="grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
              <aside className="min-w-0 lg:sticky lg:top-28">
                <h3 className="mb-3 hidden text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground lg:block">
                  Hire by Function
                </h3>
                <nav
                  aria-label="Hire by function"
                  className="-mx-6 flex snap-x gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:block lg:space-y-1 lg:overflow-visible lg:px-0 lg:pb-0"
                >
                  {expertiseFunctions.map(({ label, href, icon: Icon }, index) => {
                    const selected = index === activeFunction;
                    return (
                      <a
                        key={label}
                        href={href}
                        aria-current={selected ? "page" : undefined}
                        className={`flex min-h-11 shrink-0 snap-start items-center gap-2.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:w-full lg:rounded-lg lg:px-3 ${
                          selected
                            ? "border-accent/40 bg-accent/10 text-foreground"
                            : "border-border bg-card text-muted-foreground hover:border-accent/35 hover:text-foreground"
                        }`}
                      >
                        <Icon
                          aria-hidden="true"
                          className={`h-4 w-4 ${selected ? "text-accent" : ""}`}
                        />
                        {label}
                      </a>
                    );
                  })}
                </nav>
              </aside>
              <div aria-live="polite" className="min-w-0">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                      Available roles
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
                      {selectedFunction.label}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {selectedFunction.intro}
                    </p>
                  </div>
                  <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                    {String(selectedFunction.roles.length).padStart(2, "0")} roles
                  </span>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedFunction.roles.map((role) => {
                    const Icon = getRoleIcon(role.title);
                    const roleHref = `${selectedFunction.href}/${toRoleSlug(role.title)}`;
                    return (
                      <article
                        key={`${selectedFunction.label}-${role.title}`}
                        className="group relative flex min-h-64 flex-col items-center rounded-xl border border-border bg-card px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg sm:px-5 sm:py-7"
                      >
                        <a
                          href={roleHref}
                          aria-label={`View ${role.title} details`}
                          className="absolute inset-0 z-10 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                        />
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/5 text-primary transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent sm:h-16 sm:w-16">
                          <Icon aria-hidden="true" className="h-7 w-7" />
                        </span>
                        <div className="flex min-w-0 flex-1 flex-col items-center">
                          <h4 className="mt-4 font-sans text-base font-extrabold leading-snug text-foreground sm:text-lg">
                            {role.title}
                          </h4>
                          <span
                            aria-hidden="true"
                            className="mt-3 block h-0.5 w-8 rounded-full bg-accent"
                          />
                          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                            {role.description}
                          </p>
                          <a
                            href={roleHref}
                            aria-label={`View ${role.title} details`}
                            title="Ask about this role"
                            className="relative z-20 mt-auto inline-flex min-h-8 items-center gap-1.5 pt-4 text-xs font-bold text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                          >
                            Ask about this role
                            <ArrowUpRight
                              aria-hidden="true"
                              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="process"
          className="scroll-mt-24 bg-background px-6 py-12 sm:py-16 lg:py-20"
          aria-labelledby="process-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
              <p className="eyebrow mb-3">A clear path to the right hire</p>
              <h2
                id="process-heading"
                className="font-display text-3xl leading-tight text-foreground sm:text-4xl"
              >
                Our Recruitment Methodology
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Thoughtful steps from defining your needs to supporting your new team member.
              </p>
            </div>
            <div className="mx-auto max-w-6xl">
              <div className="relative z-10 mx-auto flex w-fit flex-col items-center rounded-2xl border border-primary/15 bg-card px-6 py-4 text-center shadow-lg shadow-primary/10 sm:px-9 sm:py-5">
                <span className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-primary/5 sm:h-16 sm:w-16">
                  <Workflow aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>
                <span className="font-display text-lg font-semibold text-foreground sm:text-xl">
                  Quorisx Hiring Process
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  From role definition to ongoing support
                </span>
              </div>

              <div aria-hidden="true" className="relative mx-auto h-14 max-w-5xl sm:h-16">
                <svg
                  className="absolute inset-0 hidden h-full w-full md:block"
                  viewBox="0 0 1000 64"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M500 0V30H166V64M500 30V64M500 30H833V64"
                    fill="none"
                    stroke="var(--color-border)"
                    strokeWidth="2"
                    strokeDasharray="5 6"
                  />
                  <circle cx="166" cy="64" r="4" fill="var(--color-accent)" />
                  <circle cx="500" cy="64" r="4" fill="var(--color-accent)" />
                  <circle cx="833" cy="64" r="4" fill="var(--color-accent)" />
                </svg>
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-border to-accent/50 md:hidden" />
              </div>

              <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                {recruitmentSteps.map(({ title, description, icon: Icon }, index) => (
                  <li
                    key={title}
                    className={`group relative flex min-h-48 flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-lg sm:p-6 ${
                      index === recruitmentSteps.length - 1
                        ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:col-start-2 lg:w-full"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/5 text-primary transition-colors group-hover:border-accent/35 group-hover:bg-accent/10 group-hover:text-accent">
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      </span>
                      <span className="font-display text-2xl text-primary/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-sans text-base font-extrabold leading-snug text-foreground sm:text-lg">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <section
          id="admin-executive-faqs"
          className="scroll-mt-24 bg-secondary/50 px-6 py-12 sm:py-16"
          aria-labelledby="admin-executive-faqs-heading"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">
                {isSalesGrowth
                  ? "Sales & Growth support"
                  : isMarketingCreative
                    ? "Marketing & Creative support"
                    : isSoftwareDevelopment
                      ? "Software & Development support"
                      : isFinanceAccounting || isHrPeople || isCustomerService
                        ? `${categoryLabel} support`
                        : "Admin & Executive support"}
              </p>
              <h2
                id="admin-executive-faqs-heading"
                className="font-display text-3xl leading-tight text-foreground sm:text-4xl"
              >
                {isSalesGrowth
                  ? "Sales & Growth FAQs"
                  : isMarketingCreative
                    ? "Marketing & Creative FAQs"
                    : isSoftwareDevelopment
                      ? "Software & Development FAQs"
                      : isFinanceAccounting || isHrPeople || isCustomerService
                        ? `${categoryLabel} FAQs`
                        : "Frequently asked questions"}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {isSalesGrowth
                  ? "Answers about sales support roles, CRM tools, working hours, and growing your pipeline."
                  : isMarketingCreative
                    ? "Answers about marketing roles, brand workflows, approvals, and campaign support."
                    : isSoftwareDevelopment
                      ? "Answers about technical roles, development stacks, project support, and access to systems."
                      : isFinanceAccounting
                        ? "Answers about finance roles, accounting tools, payroll cycles, and financial data access."
                        : isHrPeople
                          ? "Answers about HR roles, recruiting systems, candidate information, and hiring capacity."
                          : isCustomerService
                            ? "Answers about support channels, service tools, customer experience, and coverage."
                            : "Helpful details about choosing, onboarding, and working with your admin support professional."}
              </p>
              <a
                href="/contact#inquiry"
                className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Ask us a question
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-3">
              {(isSalesGrowth
                ? salesGrowthFaqs
                : isMarketingCreative
                  ? marketingCreativeFaqs
                  : isSoftwareDevelopment
                    ? softwareDevelopmentFaqs
                    : isFinanceAccounting
                      ? financeAccountingFaqs
                      : isHrPeople
                        ? hrPeopleFaqs
                        : isCustomerService
                          ? customerServiceFaqs
                          : adminExecutiveFaqs
              ).map(([question, answer], index) => {
                const isOpen = openFaq === index;
                const answerId = `admin-executive-faq-answer-${index}`;
                return (
                  <article
                    key={question}
                    className={`overflow-hidden rounded-xl border bg-card transition-all duration-200 ${
                      isOpen
                        ? "border-accent/60 shadow-md shadow-primary/5"
                        : "hover:border-primary/25 hover:shadow-sm"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex min-h-16 w-full items-center gap-4 px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:px-5"
                      >
                        <span
                          aria-hidden="true"
                          className={`hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold sm:flex ${
                            isOpen
                              ? "bg-accent text-accent-foreground"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex-1 text-sm font-semibold leading-relaxed transition-colors sm:text-base ${
                            isOpen ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {question}
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </h3>
                    {isOpen && (
                      <div
                        id={answerId}
                        className="border-t border-border px-4 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground sm:px-5"
                      >
                        {answer}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-ink px-6 py-12 sm:py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow mb-2">Ready to get started?</p>
              <h2 className="font-display text-2xl text-ink-foreground sm:text-3xl">
                Let’s find the right support for your day.
              </h2>
            </div>
            <a
              href="/contact#inquiry"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Book a Free Consultation
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export function SalesGrowthRolesPage() {
  return <AdminExecutiveRolesPage initialFunctionIndex={1} />;
}

export function MarketingCreativeRolesPage() {
  return <AdminExecutiveRolesPage initialFunctionIndex={2} />;
}

export function FinanceAccountingRolesPage() {
  return <AdminExecutiveRolesPage initialFunctionIndex={3} />;
}

export function HrPeopleOperationsRolesPage() {
  return <AdminExecutiveRolesPage initialFunctionIndex={4} />;
}

export function CustomerServiceRolesPage() {
  return <AdminExecutiveRolesPage initialFunctionIndex={5} />;
}

export function SoftwareDevelopmentRolesPage() {
  return <AdminExecutiveRolesPage initialFunctionIndex={6} />;
}

const onboardingStoryStyles =
  '\n.quorisx-color-story{font-family:Arial,sans-serif;color:#18364d;background:#f8f5ef;border:1px solid #e6e5df;border-radius:20px;overflow:hidden}.quorisx-color-story *{box-sizing:border-box}.quorisx-color-story .q-top{display:flex;align-items:center;justify-content:space-between;padding:22px 26px}.quorisx-color-story .q-brand{font:25px Georgia,serif}.quorisx-color-story .q-tag{font-size:11px;letter-spacing:1.4px}.quorisx-color-story .q-paper{position:relative;background:radial-gradient(ellipse at 22% 28%,#e1effc 0%,transparent 55%),radial-gradient(ellipse at 85% 70%,#d9eee7 0%,transparent 55%),#f4f5f0;padding:10px 0}.quorisx-color-story svg{display:block;width:100%;height:auto}.quorisx-color-story .q-copy{padding:22px 26px 12px;min-height:118px}.quorisx-color-story h3{font:28px/1.15 Georgia,serif;margin:0 0 9px}.quorisx-color-story p{font-size:14px;line-height:1.5;color:#496378;margin:0}.quorisx-color-story .q-nav{padding:12px 26px 24px;display:flex;gap:10px;align-items:center}.quorisx-color-story button{border:1px solid #d8d8ce;border-radius:50%;background:#e6eef3;color:#18364d;width:44px;height:44px;font-size:18px}.quorisx-color-story button:focus-visible{outline:3px solid #a48d34;outline-offset:3px}.quorisx-color-story .q-bars{flex:1;display:flex;gap:5px}.quorisx-color-story .q-bar{height:4px;background:#dbe5e9;flex:1;border-radius:3px;overflow:hidden}.quorisx-color-story .q-bar span{display:block;background:#da7845;height:100%;width:0}.quorisx-color-story .line{stroke:#244359;stroke-width:2.3;stroke-linecap:round;stroke-linejoin:round;fill:none}.quorisx-color-story .ink{fill:#244359}.quorisx-color-story .paper{fill:#ffffff}.quorisx-color-story .yellow{fill:#ffc67a}.quorisx-color-story .mint{fill:#a9dfd1}.quorisx-color-story svg text{font-family:Arial,sans-serif;fill:#244359}.quorisx-color-story .q-scene{opacity:0;transition:opacity .4s}.quorisx-color-story .q-scene.on{opacity:1}.quorisx-color-story .float{animation:qBob 3s ease-in-out infinite}.quorisx-color-story .path{stroke-dasharray:7 8;animation:qMarch 2s linear infinite}.quorisx-color-story .q-small{font-size:11px;color:#73766c;white-space:nowrap}@keyframes qBob{50%{transform:translateY(-5px)}}@keyframes qMarch{to{stroke-dashoffset:-30}}@media(prefers-reduced-motion:reduce){.quorisx-color-story *{animation:none!important;transition:none!important}}@media(max-width:500px){.quorisx-color-story .q-top{padding:18px}.quorisx-color-story .q-tag{font-size:9px}.quorisx-color-story .q-copy{padding:18px;min-height:130px}.quorisx-color-story h3{font-size:24px}.quorisx-color-story .q-nav{padding:10px 18px 20px}.quorisx-color-story .q-small{display:none}}\n\n.quorisx-color-story .q-paper{border-top:1px solid #dfE8e9;border-bottom:1px solid #dfe8e9}\n.quorisx-color-story .q-scene.on{animation:qEnter .55s ease both}\n.quorisx-color-story .q-top{background:#18364d;color:#fff8ef}\n.quorisx-color-story .q-tag{color:#a9dbd4}\n.quorisx-color-story .q-copy{background:#fffdfa}\n.quorisx-color-story .q-nav{background:#fffdfa}\n.quorisx-color-story .q-play{background:#da7845;color:#fff;border-color:#da7845}\n.quorisx-color-story .q-scene[data-scene="1"] .yellow,.quorisx-color-story .q-scene[data-scene="2"] .yellow{fill:#ffd0ba}\n.quorisx-color-story .q-scene[data-scene="4"] .line.path,.quorisx-color-story .q-scene[data-scene="5"] .line.path{stroke:#208675}\n@keyframes qEnter{from{transform:translateY(8px)}to{transform:translateY(0)}}\n@media(max-width:500px){.quorisx-color-story .q-tag{max-width:120px;text-align:right;line-height:1.5}.quorisx-color-story .q-copy p{font-size:15px}}\n\n.quorisx-color-story button{cursor:pointer}.quorisx-color-story .q-copy{min-height:142px}.quorisx-color-story .q-stage-count{font-size:12px;color:#496378}.quorisx-color-story .q-scene{visibility:hidden}.quorisx-color-story .q-scene.on{visibility:visible}.quorisx-color-story .q-bars button{height:16px;min-width:12px;flex:1;width:auto;padding:6px 0;border:0;background:transparent;border-radius:0}.quorisx-color-story .q-bars button>span{display:block;height:4px;background:#dbe5e9;border-radius:3px;overflow:hidden}.quorisx-color-story .q-bars i{height:100%;display:block;background:#da7845;transition:width .1s linear}.quorisx-color-story .q-heading{margin:0 0 26px}.quorisx-color-story .q-heading p{max-width:620px}.quorisx-color-story .q-paper svg{overflow:visible}\n\n.quorisx-color-story{border-radius:16px!important}\n.quorisx-color-story .q-top{padding:12px 20px!important;background:#142637!important}\n.quorisx-color-story .q-brand{font-size:23px!important}\n.quorisx-color-story .q-tag{color:#e5bd9b!important;font-size:10px!important}\n.quorisx-color-story .q-paper{padding:4px 0!important;background:#f5f1e9!important;min-width:0}\n.quorisx-color-story .q-paper svg{height:300px!important;max-width:100%;width:100%!important;overflow:hidden!important}\n.quorisx-color-story .q-copy{padding:24px!important;min-height:0!important;display:flex;flex-direction:column;justify-content:center;background:#fffaf2!important}\n.quorisx-color-story .q-copy h3{font-size:27px!important;line-height:1.16!important;margin:0 0 14px!important;color:#142637}\n.quorisx-color-story .q-copy p{font-size:15px!important;line-height:1.6!important}\n.quorisx-color-story .q-content{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr)}\n.quorisx-color-story .q-nav{padding:10px 18px!important;background:#fffaf2!important;border-top:1px solid #e5dfd3}\n.quorisx-color-story .q-scene,.quorisx-color-story .float,.quorisx-color-story .path{animation:none!important}\n.quorisx-color-story .mint{fill:#c6ded0!important}\n.quorisx-color-story .yellow{fill:#efba87!important}\n.quorisx-color-story .q-play{background:#c7743b!important;border-color:#c7743b!important}\n.quorisx-color-story .q-tabs{display:flex;gap:6px;padding:10px 18px;background:#fffaf2}\n.quorisx-color-story .q-tabs button{width:auto!important;height:auto!important;min-height:36px;border-radius:7px;padding:7px 12px;font-size:12px!important;background:transparent;border:1px solid #d7cdbf}\n.quorisx-color-story .q-tabs button[aria-pressed=true]{background:#142637;color:#fff;border-color:#142637}\n@media(max-width:640px){.quorisx-color-story .q-content{display:block}.quorisx-color-story .q-paper svg{height:230px!important}.quorisx-color-story .q-copy{padding:15px 18px!important;min-height:128px!important}.quorisx-color-story .q-copy h3{font-size:22px!important;margin-bottom:8px!important}.quorisx-color-story .q-copy p{font-size:14px!important}.quorisx-color-story .q-tabs{padding:8px 12px}.quorisx-color-story .q-nav{padding:8px 12px!important}}\n@media(min-width:641px) and (max-height:760px){.quorisx-color-story .q-paper svg{height:250px!important}}\n';
const onboardingStoryIllustration =
  '<svg viewBox="70 0 560 410" role="img" aria-label="Illustrated client onboarding story">\n<defs>\n<g id="q-person"><path d="M-44 10Q-55-35-25-53Q14-77 38-40Q54-15 37 14" class="ink"/><path d="M-29-25Q-31 22 0 28Q31 22 31-23Q4-12-9-36Q-16-22-29-25Z" class="line" style="fill:#e9b18c"/><path d="M-14 3l4 1M11 3l4-1M-5 15Q1 19 7 14" class="line"/><path d="M-14 26v13M13 26v13" class="line"/><path d="M-16 34L-48 44L-64 91L-42 100L-31 74L-34 133H35L31 74L42 100L64 91L48 44L15 34Q0 47-16 34" class="yellow"/><path d="M-48 48L-62 94L-46 110M48 48L62 94L46 110M-31 62v23M31 62v23" class="line"/><path d="M-62 95Q-75 118-26 137M62 95Q75 118 26 137" class="line"/><rect x="-43" y="90" width="86" height="58" rx="6" class="line" style="fill:#c2dced"/><circle cy="119" r="7" fill="#ffffff" stroke="#6f9cb8" stroke-width="2"/><path d="M-51 149H51" class="line"/></g>\n<g id="q-doc"><path d="M0 0H60L75 17V88H0Z" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><path d="M60 0v18h15M13 34h46M13 45h36M13 56h42M13 69h25" class="line"/></g>\n<g id="q-calendar"><rect width="108" height="86" rx="7" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><path d="M0 25H108M25-7v17M80-7v17M18 41h12M49 41h12M80 41h12M18 61h12M49 61h12M80 61h12" class="line"/></g>\n</defs>\n<g class="q-scene" data-scene="0">\n<g transform="translate(350 246)"><use href="#q-person"/></g>\n<g class="float"><path d="M170 34Q164 30 162 44V130Q164 140 176 138H309L335 158L331 136H529Q540 136 539 123V44Q538 32 525 34Z" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><rect x="181" y="49" width="88" height="23" rx="3" class="yellow"/><text x="191" y="66" font-size="15">CLIENT</text><text x="190" y="97" font-size="23">\u201cWe\'re ready to start.\u201d</text><text x="190" y="119" font-size="15">Please send the next steps.</text></g>\n<path d="M160 213q-27 30 17 51M160 253l17 11 1-19M525 206q25 32-14 61M510 248l1 19 17-6" class="line"/><path d="M242 340h-65M470 340h59" class="line"/>\n</g>\n<g class="q-scene" data-scene="1">\n<g transform="translate(350 246)"><use href="#q-person"/></g>\n<g transform="translate(109 43) rotate(-7 38 44)"><use href="#q-doc"/><rect x="-15" y="75" width="109" height="28" class="yellow"/><text x="-7" y="95" font-size="16">NOT SENT</text></g>\n<g transform="translate(471 46) rotate(5 54 43)"><use href="#q-calendar"/><rect x="-6" y="74" width="126" height="28" class="yellow"/><text x="2" y="94" font-size="15">UNCONFIRMED</text></g>\n<g class="float"><path d="M240 45H417V106H285l-19 17v-17h-26Z" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><text x="253" y="71" font-size="16">TEAM MESSAGE</text><text x="253" y="94" font-size="18">\u201cMissing details...\u201d</text></g>\n<path d="M193 155q-45 52 51 77M234 215l10 17-21 1M473 153q47 59-23 83M454 218l-4 18 20-5" class="line"/><path d="M296 185l-9-15M399 181l9-14" class="line"/>\n</g>\n<g class="q-scene" data-scene="2">\n<g transform="translate(350 246)"><use href="#q-person"/></g>\n<path d="M175 36H526V125H375l-25 22v-22H175Z" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><rect x="190" y="49" width="106" height="22" class="yellow"/><text x="198" y="65" font-size="15">FOLLOW-UP</text><text x="194" y="102" font-size="25">\u201cAny update on the kickoff?\u201d</text>\n<g transform="translate(110 184)"><circle cx="28" cy="29" r="28" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><path d="M28 10v21l13 9" class="line"/><text x="-8" y="83" font-size="15">Client waiting</text></g>\n<g transform="translate(503 184)"><rect width="71" height="53" rx="4" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><path d="M25 18v20M45 18v20M35 54v12M13 67h44" class="line"/><text x="-9" y="90" font-size="15">Team on hold</text></g>\n</g>\n<g class="q-scene" data-scene="3">\n<g transform="translate(245 246)"><use href="#q-person"/></g><g transform="translate(460 246)"><use href="#q-person"/><path d="M-16 34L-48 44L-62 87L-39 94L-31 74v16h62V74L40 94L62 87L48 44L15 34Q0 47-16 34" class="mint"/></g>\n<path d="M186 41H533V128H489l-18 22v-22H186Z" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><rect x="199" y="54" width="166" height="23" class="mint"/><text x="208" y="71" font-size="15">YOUR ASSISTANT</text><text x="205" y="101" font-size="21">\u201cI\'ll coordinate the next steps.\u201d</text><text x="205" y="123" font-size="15">You stay in control of approvals.</text><path d="M312 259Q350 235 396 260M383 245l13 15-19 2" class="line path"/>\n</g>\n<g class="q-scene" data-scene="4">\n<g transform="translate(350 246)"><use href="#q-person"/></g>\n<path d="M168 163Q349 199 524 163" class="line path"/>\n<g transform="translate(116 47)"><use href="#q-doc"/><circle cx="76" cy="11" r="18" class="mint"/><path d="M67 11l6 6 12-14" class="line"/><text x="-9" y="116" font-size="15">Documents sent</text></g>\n<g transform="translate(298 52)"><use href="#q-calendar"/><circle cx="103" cy="5" r="18" class="mint"/><path d="M95 5l6 6 12-14" class="line"/><text x="-8" y="111" font-size="15">Kickoff confirmed</text></g>\n<g transform="translate(500 48)"><use href="#q-doc"/><circle cx="74" cy="11" r="18" class="mint"/><path d="M66 11l6 6 12-14" class="line"/><text x="-20" y="115" font-size="15">Handover ready</text></g>\n</g>\n<g class="q-scene" data-scene="5">\n<path d="M185 42Q349 17 517 42L509 98Q347 74 193 98Z" class="yellow"/><text x="350" y="73" text-anchor="middle" font-size="28">Let the work begin.</text>\n<g transform="translate(222 242) scale(.86)"><use href="#q-person"/></g><g transform="translate(477 242) scale(.86)"><use href="#q-person"/></g>\n<path d="M289 289Q350 251 410 289M400 273l10 16-18 3" class="line path"/><circle cx="350" cy="184" r="35" class="mint"/><path d="M331 184l13 13 27-30" class="line"/><text x="222" y="399" text-anchor="middle" font-size="16">Client informed</text><text x="477" y="399" text-anchor="middle" font-size="16">Team ready</text>\n</g>\n</svg>';
const onboardingStoryScenes = [
  [
    "Small gaps. A delayed start.",
    "Unsent documents and an unconfirmed kickoff leave your client waiting\u2014and your team unable to begin.",
  ],
  [
    "One person coordinates the next steps.",
    "Your Quorisx assistant prepares the paperwork, confirms the meeting and organizes the handover\u2014with your approvals.",
  ],
  [
    "Your client is informed. Your team is ready.",
    "The documents are sent, the kickoff is confirmed, and everyone knows what happens next.",
  ],
] as const;

function ClientOnboardingStory() {
  const rootRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const elapsedRef = useRef(0);
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const instanceId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const artwork = onboardingStoryIllustration.replace(
    /q-person|q-doc|q-calendar/g,
    (name) => `${instanceId}-${name}`,
  );
  const sceneIndex = Math.min(2, Math.floor(elapsed / 6));
  const scene = onboardingStoryScenes[sceneIndex]!;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Start on a clear, static problem scene. Playback is optional.
    const preferenceChanged = () => {
      if (media.matches) setPlaying(false);
    };
    media.addEventListener("change", preferenceChanged);
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.15 },
    );
    if (rootRef.current) observer.observe(rootRef.current);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", preferenceChanged);
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    let previous = performance.now();
    const timer = window.setInterval(() => {
      const now = performance.now();
      const delta = Math.min((now - previous) / 1000, 0.25);
      previous = now;
      if (!visibleRef.current || document.hidden) return;
      elapsedRef.current = (elapsedRef.current + delta) % 18;
      setElapsed(elapsedRef.current);
    }, 100);
    return () => window.clearInterval(timer);
  }, [playing]);

  useEffect(() => {
    rootRef.current?.querySelectorAll<SVGGElement>(".q-scene").forEach((node, index) => {
      const active = index === [1, 3, 5][sceneIndex];
      node.classList.toggle("on", active);
      node.setAttribute("aria-hidden", String(!active));
    });
  }, [sceneIndex, artwork]);

  const jumpTo = (index: number) => {
    elapsedRef.current = ((index + 3) % 3) * 6;
    setElapsed(elapsedRef.current);
  };

  return (
    <section
      id="client-onboarding-story"
      className="scroll-mt-28 bg-background px-0 py-7 sm:px-6 sm:py-9"
      aria-labelledby={`${instanceId}-heading`}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5 max-w-2xl px-4 sm:px-0">
          <p className="eyebrow mb-3">When the next steps get stuck</p>
          <h2
            id={`${instanceId}-heading`}
            className="font-display text-3xl leading-tight text-foreground sm:text-4xl"
          >
            Don’t let the details delay the work.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            From a waiting client to a team ready to begin.
          </p>
        </div>
        <div
          ref={rootRef}
          id={`${instanceId}-story`}
          className="quorisx-color-story"
          role="region"
          aria-label="Illustrated client onboarding story"
        >
          <style>{onboardingStoryStyles}</style>
          <style>{`#${instanceId}-story .float,#${instanceId}-story .path{animation-play-state:${playing ? "running" : "paused"}}`}</style>
          <style>{`#${instanceId}-story{width:100%;max-width:100%}@media(max-width:640px){#${instanceId}-story .q-content{display:block}#${instanceId}-story .q-paper{width:100%;overflow:hidden}#${instanceId}-story .q-paper svg{display:block;height:auto!important;width:100%!important;max-width:100%;aspect-ratio:560/410;object-fit:contain}#${instanceId}-story .q-top{justify-content:center}}`}</style>
          <div className="q-top">
            <span className="q-tag">FROM WAITING TO WORKING</span>
          </div>
          <div className="q-tabs" role="group" aria-label="Story stages">
            {["The problem", "Our support", "The result"].map((label, index) => (
              <button
                type="button"
                key={label}
                aria-pressed={sceneIndex === index}
                onClick={() => {
                  setPlaying(false);
                  jumpTo(index);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="q-content">
            <div className="q-paper" dangerouslySetInnerHTML={{ __html: artwork }} />
            <div className="q-copy" aria-live={playing ? "off" : "polite"} aria-atomic="true">
              <h3>{scene[0]}</h3>
              <p>{scene[1]}</p>
            </div>
          </div>
          <div className="q-nav">
            <button
              type="button"
              onClick={() => jumpTo(sceneIndex - 1)}
              aria-label="Previous scene"
            >
              ‹
            </button>
            <button
              type="button"
              className="q-play"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pause story" : "Play story"}
            >
              {playing ? "Ⅱ" : "▷"}
            </button>
            <button type="button" onClick={() => jumpTo(sceneIndex + 1)} aria-label="Next scene">
              ›
            </button>
            <div className="q-bars" role="group" aria-label="Choose a scene">
              {onboardingStoryScenes.map(([title], index) => (
                <button
                  type="button"
                  key={title}
                  onClick={() => jumpTo(index)}
                  aria-label={`Scene ${index + 1}: ${title}`}
                  aria-pressed={index === sceneIndex}
                >
                  <span>
                    <i
                      style={{
                        width: `${index < sceneIndex ? 100 : index === sceneIndex ? ((elapsed % 6) / 6) * 100 : 0}%`,
                      }}
                    />
                  </span>
                </button>
              ))}
            </div>
            <span className="q-small">Illustrative story</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 px-4 sm:px-0">
          <p className="text-sm text-muted-foreground">
            Clear responsibilities. Your approvals. Consistent follow-through.
          </p>
          <a
            href="/contact#inquiry"
            className="inline-flex min-h-12 items-center gap-2 bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Discuss Your Support Needs
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
