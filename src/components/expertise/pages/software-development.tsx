import { ExpertiseRolesLayout } from "../expertise-roles-layout";
import { softwareDevelopmentFaqs, softwareDevelopmentFunction } from "../data/software-development";
import type { ExpertisePageConfig } from "../data/types";

const page: ExpertisePageConfig = {
  group: softwareDevelopmentFunction,
  hero: {
    eyebrow: "Software & Development",
    headline: ["Software & Development"],
    highlightedHeadline: "Built for What’s Next.",
    description:
      "Skilled developers and technical operators who embed into your stack and keep systems, products, and pipelines moving.",
    rolesLinkLabel: "View All Development Roles",
  },
  rolesSection: {
    eyebrow: "Software & Development roles",
    heading: "Technical expertise for your next build.",
  },
  showClientOnboardingStory: false,
  faq: {
    eyebrow: "Software & Development support",
    heading: "Software & Development FAQs",
    description:
      "Answers about technical roles, development stacks, project support, and access to systems.",
    items: softwareDevelopmentFaqs,
  },
};

export function SoftwareDevelopmentPage() {
  return <ExpertiseRolesLayout config={page} />;
}
