import type { LucideIcon } from "lucide-react";

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

export type ExpertisePageConfig = {
  group: FunctionGroup;
  hero: {
    eyebrow: string;
    headline: string[];
    highlightedHeadline: string;
    description: string;
    rolesLinkLabel: string;
  };
  rolesSection: {
    eyebrow: string;
    heading: string;
  };
  showClientOnboardingStory: boolean;
  faq: {
    eyebrow: string;
    heading: string;
    description: string;
    items: readonly (readonly [string, string])[];
  };
};
