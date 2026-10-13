import {
  BriefcaseBusiness,
  Building2,
  Code2,
  HeartPulse,
  House,
  Plane,
  ShoppingBag,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type IndustryPageConfig = {
  slug: string;
  name: string;
  directoryDescription: string;
  icon: LucideIcon;
  headline: string;
  intro: string;
  outcome: string;
  workflow: {
    title: string;
    detail: string;
  }[];
  expertise: {
    title: string;
    detail: string;
    href: string;
  }[];
};

export const industryPages: IndustryPageConfig[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    directoryDescription: "Patient coordination, scheduling & admin support",
    icon: HeartPulse,
    headline: "More time for care. Less time lost to admin.",
    intro:
      "Give care teams dependable non-clinical support for the coordination behind every patient interaction—while clinical decisions stay with your qualified professionals.",
    outcome: "A calmer, more organized operation around the people delivering care.",
    workflow: [
      { title: "Coordinate", detail: "Keep schedules, inboxes, and requests organized." },
      { title: "Communicate", detail: "Route non-clinical questions to the right team." },
      { title: "Document", detail: "Maintain accurate records and clear follow-through." },
    ],
    expertise: [
      {
        title: "Patient-facing service",
        detail: "Responsive, thoughtful support for routine questions and requests.",
        href: "/expertise/customer-service",
      },
      {
        title: "Scheduling & administration",
        detail: "Appointment coordination, inbox triage, and day-to-day admin.",
        href: "/expertise/admin-executive",
      },
      {
        title: "People operations",
        detail: "Recruiting coordination and organized team documentation.",
        href: "/expertise/hr-people-operations",
      },
      {
        title: "Billing & records support",
        detail: "Structured back-office workflows and accurate documentation.",
        href: "/expertise/finance-accounting",
      },
    ],
  },
  {
    slug: "logistics-fleet",
    name: "Logistics & Fleet",
    directoryDescription: "Dispatch, shipment updates & driver communication",
    icon: Truck,
    headline: "Keep every moving part moving.",
    intro:
      "When schedules change and updates matter, give dispatch and operations teams consistent coordination that keeps people informed and details accounted for.",
    outcome: "Clearer handoffs, current records, and fewer details left waiting.",
    workflow: [
      { title: "Coordinate", detail: "Track requests, schedules, and operational handoffs." },
      { title: "Update", detail: "Keep drivers, customers, and teams in the loop." },
      { title: "Close the loop", detail: "Log outcomes and follow open items through." },
    ],
    expertise: [
      {
        title: "Operations administration",
        detail: "Scheduling, inbox handling, and dependable daily coordination.",
        href: "/expertise/admin-executive",
      },
      {
        title: "Customer communication",
        detail: "Timely responses and proactive updates across service journeys.",
        href: "/expertise/customer-service",
      },
      {
        title: "Sales & account support",
        detail: "Keep prospect and customer follow-ups moving consistently.",
        href: "/expertise/sales-development",
      },
      {
        title: "People coordination",
        detail: "Support hiring administration and organized team records.",
        href: "/expertise/hr-people-operations",
      },
    ],
  },
  {
    slug: "home-services",
    name: "Home Services",
    directoryDescription: "Service bookings, customer calls & follow-through",
    icon: House,
    headline: "A smoother day, from first call to finished job.",
    intro:
      "Keep customer requests, service appointments, and follow-ups organized so your office team can support the field without being pulled in every direction.",
    outcome: "Customers know what happens next. Your field team can focus on the work.",
    workflow: [
      { title: "Capture", detail: "Respond to new inquiries and organize job details." },
      { title: "Schedule", detail: "Coordinate appointments and confirm service visits." },
      { title: "Follow through", detail: "Share updates and track work through completion." },
    ],
    expertise: [
      {
        title: "Customer service",
        detail: "Handle calls, messages, service questions, and customer updates.",
        href: "/expertise/customer-service",
      },
      {
        title: "Scheduling & administration",
        detail: "Coordinate calendars, bookings, inboxes, and everyday requests.",
        href: "/expertise/admin-executive",
      },
      {
        title: "Lead follow-up",
        detail: "Keep new inquiries warm with timely, organized outreach.",
        href: "/expertise/sales-development",
      },
      {
        title: "Books & back office",
        detail: "Keep invoices, expense records, and routine finance tasks in order.",
        href: "/expertise/finance-accounting",
      },
    ],
  },
  {
    slug: "property-management",
    name: "Property Management",
    directoryDescription: "Tenant requests, vendor coordination & records",
    icon: Building2,
    headline: "Property operations, with fewer loose ends.",
    intro:
      "Support tenants, owners, and vendors with organized communication and maintenance coordination—without letting important requests disappear into the inbox.",
    outcome: "A more responsive property operation and a clearer view of what needs attention.",
    workflow: [
      { title: "Receive", detail: "Capture tenant requests and route them clearly." },
      { title: "Coordinate", detail: "Arrange vendors, access, updates, and next steps." },
      { title: "Record", detail: "Keep property records and open issues current." },
    ],
    expertise: [
      {
        title: "Tenant support",
        detail: "Manage routine inquiries and keep residents informed.",
        href: "/expertise/customer-service",
      },
      {
        title: "Property administration",
        detail: "Coordinate calendars, documents, records, and daily operations.",
        href: "/expertise/admin-executive",
      },
      {
        title: "Finance administration",
        detail: "Organize invoices, payment records, and recurring finance workflows.",
        href: "/expertise/finance-accounting",
      },
      {
        title: "Listings & communications",
        detail: "Keep property information and marketing tasks up to date.",
        href: "/expertise/marketing-creative",
      },
    ],
  },
  {
    slug: "e-commerce",
    name: "E-commerce",
    directoryDescription: "Customer orders, product details & store operations",
    icon: ShoppingBag,
    headline: "Every order deserves a thoughtful follow-through.",
    intro:
      "Give your store reliable support across customer questions, order updates, and product operations—especially when demand gets busy.",
    outcome: "A more consistent customer experience from the first question to delivery.",
    workflow: [
      { title: "Respond", detail: "Answer product and order questions with care." },
      { title: "Resolve", detail: "Coordinate order updates, returns, and next steps." },
      { title: "Improve", detail: "Keep product details and support records up to date." },
    ],
    expertise: [
      {
        title: "Customer experience",
        detail: "Support customers across everyday order and product questions.",
        href: "/expertise/customer-service",
      },
      {
        title: "Store & campaign support",
        detail: "Coordinate product content, promotions, and marketing tasks.",
        href: "/expertise/marketing-creative",
      },
      {
        title: "Order & finance administration",
        detail: "Organize invoices, refunds, and recurring back-office work.",
        href: "/expertise/finance-accounting",
      },
      {
        title: "Digital operations",
        detail: "Support website updates, QA workflows, and product operations.",
        href: "/expertise/software-dev",
      },
    ],
  },
  {
    slug: "technology-saas",
    name: "Technology & SaaS",
    directoryDescription: "Customer success, product support & QA workflows",
    icon: Code2,
    headline: "Give your product team room to build.",
    intro:
      "Add capable support around your product and customers—from helpdesk workflows to QA coordination—so your core team can stay focused on building.",
    outcome: "Customer needs get handled. Product work keeps moving.",
    workflow: [
      { title: "Support users", detail: "Triage questions and route technical issues." },
      { title: "Coordinate", detail: "Keep customer, product, and internal handoffs clear." },
      { title: "Keep improving", detail: "Track feedback, QA tasks, and recurring issues." },
    ],
    expertise: [
      {
        title: "Technical customer support",
        detail: "Help users get clear answers and keep issues moving.",
        href: "/expertise/customer-service",
      },
      {
        title: "Software & product operations",
        detail: "Support development, QA, documentation, and release workflows.",
        href: "/expertise/software-dev",
      },
      {
        title: "Sales development",
        detail: "Research accounts and maintain a steady, qualified pipeline.",
        href: "/expertise/sales-development",
      },
      {
        title: "Marketing & creative",
        detail: "Coordinate content and campaigns that explain your product.",
        href: "/expertise/marketing-creative",
      },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    directoryDescription: "Client coordination, research & document workflows",
    icon: BriefcaseBusiness,
    headline: "Protect more time for the work clients value.",
    intro:
      "Free consultants and client-facing teams from repeatable coordination, research, and documentation so their attention stays on client outcomes.",
    outcome: "A better-prepared team, with more time for high-value client work.",
    workflow: [
      { title: "Prepare", detail: "Organize research, documents, and meeting materials." },
      { title: "Coordinate", detail: "Keep schedules, client requests, and owners aligned." },
      { title: "Follow through", detail: "Track deliverables and keep records easy to find." },
    ],
    expertise: [
      {
        title: "Executive & admin support",
        detail: "Manage calendars, communications, and recurring team workflows.",
        href: "/expertise/admin-executive",
      },
      {
        title: "Finance & accounting",
        detail: "Keep recurring finance administration and records organized.",
        href: "/expertise/finance-accounting",
      },
      {
        title: "Marketing & creative",
        detail: "Coordinate content and campaign work around your expertise.",
        href: "/expertise/marketing-creative",
      },
      {
        title: "People operations",
        detail: "Support hiring coordination and employee lifecycle administration.",
        href: "/expertise/hr-people-operations",
      },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    directoryDescription: "Guest communication, reservations & daily operations",
    icon: Plane,
    headline: "Make every guest interaction feel considered.",
    intro:
      "Help hospitality teams stay responsive across reservations, guest questions, and changing plans with thoughtful operational support behind the scenes.",
    outcome: "Guests feel looked after, while your team stays ahead of the details.",
    workflow: [
      { title: "Welcome", detail: "Respond to reservation and pre-arrival questions." },
      { title: "Coordinate", detail: "Keep bookings, requests, and updates aligned." },
      { title: "Follow up", detail: "Close the loop and capture useful guest feedback." },
    ],
    expertise: [
      {
        title: "Guest services",
        detail: "Handle routine questions and help resolve guest requests.",
        href: "/expertise/customer-service",
      },
      {
        title: "Reservations administration",
        detail: "Coordinate calendars, confirmations, and operational details.",
        href: "/expertise/admin-executive",
      },
      {
        title: "Marketing & communications",
        detail: "Support guest communications and consistent brand content.",
        href: "/expertise/marketing-creative",
      },
      {
        title: "Finance administration",
        detail: "Help organize invoices, reconciliations, and recurring records.",
        href: "/expertise/finance-accounting",
      },
    ],
  },
];

export const getIndustryPage = (slug: string) =>
  industryPages.find((industry) => industry.slug === slug);
