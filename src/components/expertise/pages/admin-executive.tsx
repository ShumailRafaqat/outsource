import { ExpertiseRolesLayout } from "../expertise-roles-layout";
import { adminExecutiveFaqs, adminExecutiveFunction } from "../data/admin-executive";
import type { ExpertisePageConfig } from "../data/types";

const page: ExpertisePageConfig = {
  group: adminExecutiveFunction,
  hero: {
    eyebrow: "Admin & Executive Support",
    headline: ["Executive Support"],
    highlightedHeadline: "That Runs Your Day.",
    description:
      "From inbox zero to executive-level coordination — dedicated professionals who keep your operations moving without you managing every detail.",
    rolesLinkLabel: "View All Admin Roles",
  },
  rolesSection: {
    eyebrow: "Find the right fit",
    heading: "Roles built around the way you work.",
  },
  showClientOnboardingStory: true,
  faq: {
    eyebrow: "Admin & Executive support",
    heading: "Frequently asked questions",
    description:
      "Helpful details about choosing, onboarding, and working with your admin support professional.",
    items: adminExecutiveFaqs,
  },
};

export function AdminExecutivePage() {
  return <ExpertiseRolesLayout config={page} />;
}
