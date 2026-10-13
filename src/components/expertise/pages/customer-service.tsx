import { ExpertiseRolesLayout } from "../expertise-roles-layout";
import { customerServiceFaqs, customerServiceFunction } from "../data/customer-service";
import type { ExpertisePageConfig } from "../data/types";

const page: ExpertisePageConfig = {
  group: customerServiceFunction,
  hero: {
    eyebrow: "Customer Service Support",
    headline: ["Customer Service"],
    highlightedHeadline: "Support That Shows Up.",
    description:
      "Every inquiry handled, every ticket resolved. Professional customer-facing support that reflects well on your business.",
    rolesLinkLabel: "View All Customer Service Roles",
  },
  rolesSection: {
    eyebrow: "Customer Service roles",
    heading: "Customer support that reflects well on your business.",
  },
  showClientOnboardingStory: false,
  faq: {
    eyebrow: "Customer Service support",
    heading: "Customer Service FAQs",
    description:
      "Answers about support channels, service tools, customer experience, and coverage.",
    items: customerServiceFaqs,
  },
};

export function CustomerServicePage() {
  return <ExpertiseRolesLayout config={page} />;
}
