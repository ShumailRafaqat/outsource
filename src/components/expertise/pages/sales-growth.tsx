import { ExpertiseRolesLayout } from "../expertise-roles-layout";
import { salesGrowthFaqs, salesGrowthFunction } from "../data/sales-growth";
import type { ExpertisePageConfig } from "../data/types";

const page: ExpertisePageConfig = {
  group: salesGrowthFunction,
  hero: {
    eyebrow: "Sales & Growth Virtual Assistants",
    headline: ["Pipeline Full.", "Follow-Ups Done."],
    highlightedHeadline: "Deals Moving.",
    description:
      "Prospect research, lead qualification, CRM updates, and consistent follow-ups—so your team can focus on closing.",
    rolesLinkLabel: "View All Sales Roles",
  },
  rolesSection: {
    eyebrow: "Find the right fit",
    heading: "Roles built around the way you work.",
  },
  showClientOnboardingStory: false,
  faq: {
    eyebrow: "Sales & Growth support",
    heading: "Sales & Growth FAQs",
    description:
      "Answers about sales support roles, CRM tools, working hours, and growing your pipeline.",
    items: salesGrowthFaqs,
  },
};

export function SalesGrowthPage() {
  return <ExpertiseRolesLayout config={page} />;
}
