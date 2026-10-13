import { ExpertiseRolesLayout } from "../expertise-roles-layout";
import { marketingCreativeFaqs, marketingCreativeFunction } from "../data/marketing-creative";
import type { ExpertisePageConfig } from "../data/types";

const page: ExpertisePageConfig = {
  group: marketingCreativeFunction,
  hero: {
    eyebrow: "Marketing & Creative Support",
    headline: ["Marketing & Creative"],
    highlightedHeadline: "That Keeps You Moving.",
    description:
      "Consistent content, active channels, and campaigns that go out—without the coordination overhead.",
    rolesLinkLabel: "View All Marketing Roles",
  },
  rolesSection: {
    eyebrow: "Marketing & Creative roles",
    heading: "Creative support that keeps your brand moving.",
  },
  showClientOnboardingStory: false,
  faq: {
    eyebrow: "Marketing & Creative support",
    heading: "Marketing & Creative FAQs",
    description: "Answers about marketing roles, brand workflows, approvals, and campaign support.",
    items: marketingCreativeFaqs,
  },
};

export function MarketingCreativePage() {
  return <ExpertiseRolesLayout config={page} />;
}
