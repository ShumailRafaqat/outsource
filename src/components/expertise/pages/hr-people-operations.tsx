import { ExpertiseRolesLayout } from "../expertise-roles-layout";
import { hrPeopleOperationsFunction, hrPeopleFaqs } from "../data/hr-people-operations";
import type { ExpertisePageConfig } from "../data/types";

const page: ExpertisePageConfig = {
  group: hrPeopleOperationsFunction,
  hero: {
    eyebrow: "HR & People Operations Support",
    headline: ["HR & People Operations"],
    highlightedHeadline: "People Operations, Made Easier.",
    description:
      "Hiring pipelines that don’t stall and people processes that stay organized, without adding headcount to manage them.",
    rolesLinkLabel: "View All HR Roles",
  },
  rolesSection: {
    eyebrow: "HR & People Operations roles",
    heading: "People operations support that keeps hiring moving.",
  },
  showClientOnboardingStory: false,
  faq: {
    eyebrow: "HR & People Operations support",
    heading: "HR & People Operations FAQs",
    description:
      "Answers about HR roles, recruiting systems, candidate information, and hiring capacity.",
    items: hrPeopleFaqs,
  },
};

export function HrPeopleOperationsPage() {
  return <ExpertiseRolesLayout config={page} />;
}
